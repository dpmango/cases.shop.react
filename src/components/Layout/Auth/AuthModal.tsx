import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import { UiModal } from '@/components/Ui'

const LoginModal = () => {
  const { id: shopId } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  const { onAuthSuccess } = useTelegramAuth({ shopId, cb: (data) => dispatch(setUser(data)) })

  return (
    <UiModal name="auth" title="АВТОРИЗАЦИЯ" titleIcon="user-verified">
      <p className="modal__text">
        Авторизируйся, чтобы не потеряться <br />
        при совершении заказа
      </p>
      <TLoginButton
        botName="zartoga_best_dev_bot"
        buttonSize={TLoginButtonSize.Large}
        lang="ru"
        usePic={false}
        cornerRadius={20}
        onAuthCallback={onAuthSuccess}
        requestAccess={'write'}
      />
    </UiModal>
  )
}

export default LoginModal
