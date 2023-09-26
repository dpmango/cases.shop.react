import { DepositModal, DepositSuccessModal } from '@/components/Order'
import { AuthModal } from '@/components/Profile'

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
