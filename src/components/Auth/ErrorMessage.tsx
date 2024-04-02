import cns from 'classnames'

import { InputWarningIcon } from '@/components/Ui'

interface IAuthErrorMessage {
  success?: boolean
  title?: string
  message?: string
  children?: ReactSlot
}

export const AuthErrorMessage: React.FC<IAuthErrorMessage> = ({
  success = false,
  title = 'Ошибка',
  message,
  children,
}) => {
  return (
    <div
      className={cns(
        'form-el__message message-form',
        success ? 'message-form_success' : 'message-form_error',
      )}
    >
      <div className="message-form__top">
        <div className="message-form__title title-def title-def_small">{title}</div>
        <div className="message-form__icon">
          {/* {success && <InputWarningIcon />} */}
          {!success && <InputWarningIcon />}
        </div>
      </div>
      {message && <div className="message-form__text text-cat">{message}</div>}

      {children}
    </div>
  )
}
