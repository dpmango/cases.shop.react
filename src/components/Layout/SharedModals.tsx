import { DepositModal } from '../Order'
import { SupportModal } from '../Support'
import { GamesModal } from './GamesModal'

const SharedModals = () => {
  return (
    <>
      <GamesModal />
      <SupportModal />
      <DepositModal />
    </>
  )
}

export default SharedModals
