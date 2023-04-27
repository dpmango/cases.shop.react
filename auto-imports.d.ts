/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-auto-import
export {}
declare global {
  const APP_VERSION: typeof import('./src/core/utils/dev')['APP_VERSION']
  const LOG: typeof import('./src/core/utils/dev')['LOG']
  const PerformanceLog: typeof import('./src/core/utils/dev')['PerformanceLog']
  const Plurize: typeof import('./src/core/utils/numbers')['Plurize']
  const api: typeof import('./src/core/api')['api']
  const buildParams: typeof import('./src/core/utils/api')['buildParams']
  const closeModals: typeof import('./src/core/store/ui.store')['closeModals']
  const covertInitDto: typeof import('./src/core/store/session.store')['covertInitDto']
  const createRef: typeof import('react')['createRef']
  const fetchAuth: typeof import('./src/core/api/session.api')['fetchAuth']
  const formatPrice: typeof import('./src/core/utils/numbers')['formatPrice']
  const forwardRef: typeof import('react')['forwardRef']
  const getOrders: typeof import('./src/core/api/session.api')['getOrders']
  const getOrdersThunk: typeof import('./src/core/store/session.store')['getOrdersThunk']
  const getPayment: typeof import('./src/core/api/payment.api')['getPayment']
  const getProduct: typeof import('./src/core/api/product.api')['getProduct']
  const getProducts: typeof import('./src/core/api/product.api')['getProducts']
  const getProductsThunk: typeof import('./src/core/store/product.store')['getProductsThunk']
  const getProfile: typeof import('./src/core/api/session.api')['getProfile']
  const getProfileThunk: typeof import('./src/core/store/session.store')['getProfileThunk']
  const getReviews: typeof import('./src/core/api/review.api')['getReviews']
  const getReviewsThunk: typeof import('./src/core/store/product.store')['getReviewsThunk']
  const getStaticPage: typeof import('./src/core/api/page.api')['getStaticPage']
  const getStore: typeof import('./src/core/store')['getStore']
  const getWhois: typeof import('./src/core/api/session.api')['getWhois']
  const hexToRgb: typeof import('./src/core/utils/color')['hexToRgb']
  const initialProductState: typeof import('./src/core/store/product.store')['initialProductState']
  const initialSessionState: typeof import('./src/core/store/session.store')['initialSessionState']
  const initializeApp: typeof import('./src/core/api/session.api')['initializeApp']
  const lazy: typeof import('react')['lazy']
  const memo: typeof import('react')['memo']
  const productState: typeof import('./src/core/store/product.store')['productState']
  const productStore: typeof import('./src/core/store/product.store')['default']
  const resetState: typeof import('./src/core/store/session.store')['resetState']
  const saveProductToBot: typeof import('./src/core/api/payment.api')['saveProductToBot']
  const scrollPageToTop: typeof import('./src/core/utils/scroll')['scrollPageToTop']
  const scrollToElement: typeof import('./src/core/utils/scroll')['scrollToElement']
  const scrollWithSpeed: typeof import('./src/core/utils/scroll')['scrollWithSpeed']
  const sessionState: typeof import('./src/core/store/session.store')['sessionState']
  const sessionStore: typeof import('./src/core/store/session.store')['default']
  const setHydrated: typeof import('./src/core/store/ui.store')['setHydrated']
  const setModal: typeof import('./src/core/store/ui.store')['setModal']
  const setSettings: typeof import('./src/core/store/ui.store')['setSettings']
  const startAppThunk: typeof import('./src/core/store/session.store')['startAppThunk']
  const startTransition: typeof import('react')['startTransition']
  const uiState: typeof import('./src/core/store/ui.store')['uiState']
  const uiStore: typeof import('./src/core/store/ui.store')['default']
  const updateAnyState: typeof import('./src/core/store/session.store')['updateAnyState']
  const updateReviews: typeof import('./src/core/store/product.store')['updateReviews']
  const useAppDispatch: typeof import('./src/core/store')['useAppDispatch']
  const useAppSelector: typeof import('./src/core/store')['useAppSelector']
  const useCallback: typeof import('react')['useCallback']
  const useClickOutside: typeof import('./src/core/hooks/useClickOutside')['useClickOutside']
  const useContext: typeof import('react')['useContext']
  const useDebounce: typeof import('./src/core/hooks/useDebounce')['useDebounce']
  const useDebugValue: typeof import('react')['useDebugValue']
  const useDeferredValue: typeof import('react')['useDeferredValue']
  const useEffect: typeof import('react')['useEffect']
  const useEventListener: typeof import('./src/core/hooks/useEventListener')['useEventListener']
  const useId: typeof import('react')['useId']
  const useImperativeHandle: typeof import('react')['useImperativeHandle']
  const useInsertionEffect: typeof import('react')['useInsertionEffect']
  const useLayoutEffect: typeof import('react')['useLayoutEffect']
  const useMemo: typeof import('react')['useMemo']
  const useReducer: typeof import('react')['useReducer']
  const useRef: typeof import('react')['useRef']
  const useScrollLock: typeof import('./src/core/hooks/useScrollLock')['useScrollLock']
  const useState: typeof import('react')['useState']
  const useSyncExternalStore: typeof import('react')['useSyncExternalStore']
  const useTelegramAuth: typeof import('./src/core/hooks/useTelegramAuth')['useTelegramAuth']
  const useTransition: typeof import('react')['useTransition']
  const userAuthRefresh: typeof import('./src/core/api/session.api')['userAuthRefresh']
}
