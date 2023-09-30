import cns from 'classnames'

import { InputWarningIcon } from '@/components/Ui'

interface IAuthErrorMessage {
  title?: string
  message?: string
  children?: ReactSlot
}

export const AuthErrorMessage: React.FC<IAuthErrorMessage> = ({
  title = 'Ошибка',
  message,
  children,
}) => {
  return (
    <div className="form-el__message message-form message-form_error">
      <div className="message-form__top">
        <div className="message-form__title title-def title-def_small">{title}</div>
        <div className="message-form__icon">
          <InputWarningIcon />
        </div>
      </div>
      {message && <div className="message-form__text text-cat">{message}</div>}

      {children}
    </div>
  )
}
