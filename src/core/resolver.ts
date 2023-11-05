import { setCookie } from 'cookies-next'
import { GetServerSidePropsContext, PreviewData } from 'next'

import { getMainPage, getProfile, getWhois } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { IHomePageDto } from '@/core/interface/Homepage'
import { IProductCategory, IProductDto } from '@/core/interface/Product'
import { initialProductState } from '@/core/store/product.store'
import { initialSessionState } from '@/core/store/session.store'

import { setShopID } from './api/api'
import { IWhoisDto } from './interface/Initialization'
import { IOrderDto, IUserOrderDto } from './interface/Order'
import { useAppSelector } from './store'

export interface IResolver {
  PRELOADED_STATE: any
  popularData: IProductDto[] | null
  homepageData: IHomePageDto | null
  categoryData: IProductCategory | null
  pageData: any | null
  orderData: IOrderDto | null
  userOrdersData: IUserOrderDto[] | null
  userFavourites: IProductDto[] | null
}

export const DomainResolver = async (context: GetServerSidePropsContext<any, PreviewData>) => {
  const hostIndex = context.req.rawHeaders.findIndex((x) => x === 'Host') + 1
  let parsedSiteHost = context.req.rawHeaders[hostIndex]
  if (parsedSiteHost?.includes('localhost')) {
    parsedSiteHost = 'ruplay.shop'
  }

  // Если есть куки с id магазина, не повторять запросы
  const shopCookie = context.req.cookies['SHOP-ID']

  let dataReturnable = {
    id: shopCookie || '',
  } as IWhoisDto

  // повторить запрос 3 раза в случаи ошибки
  let counter = 1
  const whoisFetcher = async () => {
    const { data } = await getWhois({
      site: parsedSiteHost,
    })

    if (data) {
      dataReturnable = data
      setShopID(data.id)
    } else if (counter < 3) {
      counter++
      await whoisFetcher()
    }
  }

  if (!dataReturnable.id) {
    await whoisFetcher()
  } else {
    setShopID(dataReturnable.id)
  }

  return { shopId: dataReturnable.id, parsedSiteHost }
}

// Резолвер запросов выполняющихся в SSR контексте
export const Resolver = async (
  promisesToBeFetched: IPromiseFactory[],
  context: GetServerSidePropsContext<any, PreviewData>,
) => {
  const PRELOADED_STATE = {
    sessionState: {
      ...initialSessionState,
    },
    productState: {
      ...initialProductState,
    },
  }

  const accessToken = context.req.cookies['access_token']

  promisesToBeFetched = [
    ...promisesToBeFetched,
    {
      name: 'homepage',
      resolver: getMainPage(),
    },
  ]

  if (accessToken) {
    promisesToBeFetched.push({
      name: 'profile',
      resolver: getProfile(accessToken),
    })
  }

  let returnable = {
    PRELOADED_STATE,
    popularData: null,
    homepageData: null,
    categoryData: null,
    pageData: null,
    orderData: null,
    userOrdersData: null,
    userFavourites: null,
  } as IResolver

  // Выполнение запросов в SSR контексте
  if (promisesToBeFetched.length) {
    const allSettled = (await Promise.allSettled(
      promisesToBeFetched.map((x) => x.resolver),
    )) as PromiseSettledResult<any>[]

    allSettled.forEach((result, idx) => {
      const { name, errorRouter } = promisesToBeFetched[idx]

      const errHandler = (error?: any) => {
        // if (name === 'product') {
        //   productData = false
        // }
      }

      if (result.status === 'rejected') errHandler()
      if (result.status === 'fulfilled' && result.value) {
        const { data, error } = result.value

        if (error) {
          errHandler(error)
          return
        }

        switch (name) {
          case 'homepage':
            returnable.homepageData = data
            returnable.PRELOADED_STATE.sessionState = {
              ...PRELOADED_STATE.sessionState,
              paymentsMethods: data.paymentMethods || [],
              customPages: data.pages || [],
              auth_bot: data.telegram_bot?.id || '',
            }
            returnable.PRELOADED_STATE.productState = {
              ...PRELOADED_STATE.productState,
              categories: data.categories,
            }
            break
          case 'profile':
            returnable.PRELOADED_STATE.sessionState = {
              ...PRELOADED_STATE.sessionState,
              user: data,
            }
            break
          case 'popular':
            returnable.popularData = data
            break

          case 'category':
            returnable.categoryData = data || null
            break
          case 'page':
            returnable.pageData = data || null
            break
          case 'reviews':
            returnable.PRELOADED_STATE.productState = {
              ...PRELOADED_STATE.productState,
              reviews: data,
            }
            break
          case 'order':
            returnable.orderData = data || null
            break
          case 'orders':
            returnable.userOrdersData = data || null
            break
          case 'favourites':
            returnable.userFavourites = data || null
            break
          default:
            break
        }
      }
    })
  }

  return returnable
}
