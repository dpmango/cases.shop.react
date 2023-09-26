import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import { UiModal } from '@/components/Ui'

const LoginModal = () => {
  const { id: shopId, auth_bot, user } = useAppSelector((state) => state.sessionState)
  const { modal } = useAppSelector((state) => state.uiState)

  const dispatch = useAppDispatch()

  const { onAuthSuccess } = useTelegramAuth({ shopId })

  useEffect(() => {
    if (user) {
      dispatch(closeModals())
    }
  }, [user])

  return (
    <UiModal name="auth" title="АВТОРИЗАЦИЯ" titleIcon="user-verified">
      <p className="modal__text p-main">
        Авторизируйся, чтобы не потеряться <br />
        при совершении заказа
      </p>

      <div className="modal__tg-auth">
        {modal === 'auth' ? (
          <div className="header__telegram">
            <TLoginButton
              botName={auth_bot}
              buttonSize={TLoginButtonSize.Large}
              lang="ru"
              usePic={false}
              cornerRadius={6}
              onAuthCallback={onAuthSuccess}
              requestAccess={'write'}
            />{' '}
          </div>
        ) : (
          <></>
        )}
      </div>
    </UiModal>
  )
}

export default LoginModal
