import { atom } from 'recoil'

const _ = atom({
  key: 'mainStorage',
  default: {
    faq: null,
    id: null,
    items: null,
    reviews: null,
    footer: null,
    lastPurchases: null,
    name: null,
    settings: {},
    slider: null,
    user: null,
    is_main: false,
  },
})

export default _
