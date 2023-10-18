import { useAppSelector } from '@/core/store'

import { DepositModal } from '../Order'
import { SupportModal } from '../Support'
import { GamesModal } from './GamesModal'

const SharedModals = () => {
  const { user } = useAppSelector((state) => state.sessionState)

  return (
    <>
      <GamesModal />
      {user && (
        <>
          <SupportModal />
          <DepositModal />
        </>
      )}
    </>
  )
}

export default SharedModals
