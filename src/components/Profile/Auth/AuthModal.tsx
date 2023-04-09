import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import { UiModal } from '@/components/Ui'

const LoginModal = () => {
  const { id: shopId, auth_bot } = useAppSelector((state) => state.sessionState)
  const { modal } = useAppSelector((state) => state.uiState)
  const dispatch = useAppDispatch()

  const { onAuthSuccess } = useTelegramAuth({ shopId, cb: (data) => dispatch(setUser(data)) })

  return (
    <UiModal name="auth" title="АВТОРИЗАЦИЯ" titleIcon="user-verified">
      <p className="modal__text">
        Авторизируйся, чтобы не потеряться <br />
        при совершении заказа
      </p>
      {modal === 'auth' ? (
        <TLoginButton
          botName={auth_bot}
          buttonSize={TLoginButtonSize.Large}
          lang="ru"
          usePic={false}
          cornerRadius={6}
          onAuthCallback={onAuthSuccess}
          requestAccess={'write'}
        />
      ) : (
        <></>
      )}
    </UiModal>
  )
}

export default LoginModal
