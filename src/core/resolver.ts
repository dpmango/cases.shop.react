import { setCookie } from 'cookies-next'
import { GetServerSidePropsContext, PreviewData } from 'next'

import { getMainPage, getProfile, getWhois } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { IHomePageDto } from '@/core/interface/Homepage'
import { IPopularProduct, IProductCategory } from '@/core/interface/Product'
import { initialProductState } from '@/core/store/product.store'
import { initialSessionState } from '@/core/store/session.store'

import { setShopID } from './api/api'
import { IOrderDto, IUserOrderDto } from './interface/Order'

export interface IResolver {
  PRELOADED_STATE: any
  popularData?: IPopularProduct[]
  homepageData?: IHomePageDto
  categoryData?: IProductCategory
  pageData?: any
  orderData?: IOrderDto
  userOrdersData?: IUserOrderDto[]
}

export const DomainResolver = async (context: GetServerSidePropsContext<any, PreviewData>) => {
  // const cookieStore = cookies()
  const hostIndex = context.req.rawHeaders.findIndex((x) => x === 'Host') + 1
  let parsedSiteHost = context.req.rawHeaders[hostIndex]
  if (parsedSiteHost?.includes('localhost')) {
    parsedSiteHost = 'nobody.su'
  }

  const {
    data: { id },
  } = await getWhois({
    site: parsedSiteHost,
  })

  setShopID(id)
  return { shopId: id, parsedSiteHost }
}

export const Resolver = async (
  promisesToBeFetched: IPromiseFactory[],
  context: GetServerSidePropsContext<any, PreviewData>,
) => {
  let productData
  let popularData: IPopularProduct[] = []
  let homepageData: IHomePageDto | null = null
  let categoryData: IProductCategory | null = null
  let pageData: any | null = null
  let orderData: IOrderDto | null = null
  let userOrdersData: IUserOrderDto[] | null = null

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
    {
      name: 'profile',
      resolver: getProfile(accessToken),
    },
  ]

  // Выполнение запросов в SSR контексте
  if (promisesToBeFetched.length) {
    const allSettled = (await Promise.allSettled(
      promisesToBeFetched.map((x) => x.resolver),
    )) as PromiseSettledResult<any>[]

    allSettled.forEach((result, idx) => {
      const { name, errorRouter } = promisesToBeFetched[idx]

      const errHandler = (error?: any) => {
        if (name === 'product') {
          productData = false
        }
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
            homepageData = data
            PRELOADED_STATE.sessionState = {
              ...PRELOADED_STATE.sessionState,
              paymentsMethods: data.paymentMethods || [],
              customPages: data.pages || [],
              auth_bot: data.telegram_bot?.id || '',
            }
            break
          case 'profile':
            PRELOADED_STATE.sessionState = {
              ...PRELOADED_STATE.sessionState,
              user: data,
            }
            break
          case 'popular':
            popularData = data
            break

          case 'category':
            categoryData = data || null
            break
          case 'page':
            pageData = data || null
            break
          case 'reviews':
            PRELOADED_STATE.productState = {
              ...PRELOADED_STATE.productState,
              reviews: data,
            }
            break
          case 'order':
            orderData = data || null
            break
          case 'orders':
            userOrdersData = data || null
          default:
            break
        }
      }
    })
  }

  let returnatble = { PRELOADED_STATE } as IResolver

  if (popularData) {
    returnatble['popularData'] = popularData
  }

  if (categoryData) {
    returnatble['categoryData'] = categoryData
  }

  if (homepageData) {
    returnatble['homepageData'] = homepageData
  }

  if (pageData) {
    returnatble['pageData'] = pageData
  }

  if (orderData) {
    returnatble['orderData'] = orderData
  }

  if (userOrdersData) {
    returnatble['userOrdersData'] = userOrdersData
  }

  return returnatble
}
