import { useNavigate } from 'react-router'

import { DepositModal, DepositSuccessModal } from '@/components/Order'
import { AuthModal } from '@/components/Profile'

const SharedModals = () => {
  // const { modal, modalParams } = useAppSelector((state) => state.uiState)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <>
      <AuthModal />
      <DepositModal />
      <DepositSuccessModal />

      {/* <div className="dev-btns">
        <button onClick={() => dispatch(setModal({ name: 'auth' }))}>auth</button>
        <button onClick={() => dispatch(setModal({ name: 'deposit' }))}>deposit</button>
        <button onClick={() => dispatch(setModal({ name: 'deposit-success' }))}>dep OK</button>
        <button
          onClick={() => {
            navigate('/product/9MTZ55RP99K2')
            dispatch(setModal({ name: 'order' }))
          }}
        >
          order
        </button>
      </div> */}
    </>
  )
}

export default SharedModals
