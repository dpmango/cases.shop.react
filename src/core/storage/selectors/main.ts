import { selector } from 'recoil'

import _ from '@/core/storage/atoms/main'

export const getShopId = selector({
  key: 'getShopId',
  get: ({ get }) => get(_).id,
})

export const getItems = selector({
  key: 'getItems',
  get: ({ get }) => get(_).items,
  set: ({ set }, newValue) => set(_, (prev) => ({ ...prev, items: newValue })),
})

export const getShopName = selector({
  key: 'getShopName',
  get: ({ get }) => get(_).name,
})

export const getShopSettings = selector({
  key: 'getShopSettings',
  get: ({ get }) => get(_).settings || {},
})

export const getShopInternalName = selector({
  key: 'getShopInternalName',
  get: ({ get }) => get(_).internal_name,
})

export const getIsMain = selector({
  key: 'getIsMain',
  get: ({ get }) => get(_).is_main,
  set: ({ set }, newValue) => set(_, (prev) => ({ ...prev, is_main: newValue })),
})

export const getShopSlider = selector({
  key: 'getShopSlider',
  get: ({ get }) => get(_).slider,
})

export const getShopFaq = selector({
  key: 'getShopFaq',
  get: ({ get }) => get(_).faq,
})

export const getShopReviews = selector({
  key: 'getShopReviews',
  get: ({ get }) => get(_).reviews,
  set: ({ set }, newValue) => set(_, (prev) => ({ ...prev, reviews: newValue })),
})

export const getShopFooter = selector({
  key: 'getShopFooter',
  get: ({ get }) => get(_).footer,
  set: ({ set }, newValue) => set(_, (prev) => ({ ...prev, footer: newValue })),
})

export const getLastPurchases = selector({
  key: 'getLastPurchases',
  get: ({ get }) => get(_).lastPurchases,
  set: ({ set }, newValue) => set(_, (prev) => ({ ...prev, lastPurchases: newValue })),
})

export const getUser = selector({
  key: 'getUser',
  get: ({ get }) => get(_).user,
  set: ({ set }, newValue) => set(_, (prev) => ({ ...prev, user: newValue })),
})
