import React from 'react'

import LoginModal from './login'
import OrderModal from './order'
import TopupModal from './topup'
import TopupSuccessModal from './topup-success'

const Modals = () => {
  return (
    <>
      <LoginModal />
      <TopupModal />
      <TopupSuccessModal />
      <OrderModal />
    </>
  )
}

export default Modals
