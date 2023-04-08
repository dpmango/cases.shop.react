import { AuthModal } from '@/components/Layout'
import { DepositModal, DepositSuccessModal } from '@/components/Order'

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
