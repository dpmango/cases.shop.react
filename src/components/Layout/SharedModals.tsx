import { AuthModal, DepositModal, DepositSuccessModal, OrderModal } from '@c/Order'
import React from 'react'

const SharedModals = () => {
  return (
    <>
      <AuthModal />
      <OrderModal />
      <DepositModal />
      <DepositSuccessModal />
    </>
  )
}

export default SharedModals
