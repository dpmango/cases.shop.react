import { AuthModal, DepositModal, DepositSuccessModal, OrderModal } from '@c/Order'

const SharedModals = () => {
  return (
    <>
      <AuthModal />
      <DepositModal />
      <DepositSuccessModal />
    </>
  )
}

export default SharedModals
