import { GetServerSidePropsContext, PreviewData } from 'next'

import { getWhois } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { IHomePageDto } from '@/core/interface/Homepage'
import { IPopularProduct } from '@/core/interface/Product'
import { initialProductState } from '@/core/store/product.store'
import { covertInitDto, initialSessionState } from '@/core/store/session.store'

export interface IResolver {
  PRELOADED_STATE: any
  popularData?: IPopularProduct[]
  homepageData?: IHomePageDto
  productData?: any
}

export const DomainResolver = async (context: GetServerSidePropsContext<any, PreviewData>) => {
  console.log('onBeforeRender', context.resolvedUrl)
  // const cookieStore = cookies()

  // const accessToken = cookieStore.get('access_token')

  // let parsedSiteHost = pageContext.urlParsed.origin?.replace('https://', '') || 'donatfun.ru'
  // if (parsedSiteHost?.includes('localhost')) {
  //   parsedSiteHost = 'nobody.su'
  // }
  const parsedSiteHost = 'nobody.su'

  const {
    data: { id: shopId },
  } = await getWhois({
    site: parsedSiteHost,
  })

  return { shopId, parsedSiteHost }
}

export const Resolver = async (shopId: string, promisesToBeFetched: IPromiseFactory[]) => {
  let productData
  let popularData: IPopularProduct[] = []
  let homepageData: IHomePageDto | null = null

  const PRELOADED_STATE = {
    sessionState: {
      ...initialSessionState,
      id: shopId,
    },
    productState: {
      ...initialProductState,
    },
  }

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

      // console.log(name, { result })
      if (result.status === 'rejected') errHandler()
      if (result.status === 'fulfilled' && result.value) {
        const { data, error } = result.value

        if (error) {
          errHandler(error)
          return
        }

        switch (name) {
          case 'init':
            PRELOADED_STATE.sessionState = {
              ...covertInitDto(initialSessionState, data),
              id: shopId,
            }
            break
          case 'homepage':
            homepageData = data
            break
          case 'popular':
            popularData = data
            break
          case 'product':
            productData = data || false
            break
          case 'orders':
            PRELOADED_STATE.sessionState = {
              ...PRELOADED_STATE.sessionState,
              // lastPurchases: data,
            }
            break
          case 'products':
            PRELOADED_STATE.productState = {
              ...PRELOADED_STATE.productState,
              items: data,
            }
            break
          case 'reviews':
            PRELOADED_STATE.productState = {
              ...PRELOADED_STATE.productState,
              reviews: data,
            }
            break
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

  if (productData) {
    returnatble['productData'] = productData
  }

  if (homepageData) {
    returnatble['homepageData'] = homepageData
  }

  return returnatble
}
