import cns from 'classnames'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { ITempForm } from '@/core/interface/Temp'
import { formatPrice } from '@/core/utils'

import { HintIcon, SecurePasswordIcon } from '../Ui'

interface IOrderForm extends ITempForm {}

export const OrderForm: React.FC<IOrderForm> = ({
  title,
  description,
  passwordNote = true,
  fields,
}) => {
  const [inputFields, setInputFields] = useState(fields.map((f) => ({ id: f, value: '' })))

  const mainFields = useMemo(() => {
    return fields.filter((x) => x !== 'recoverCodes')
  }, [fields])

  const hasRecoverFields = useMemo(() => {
    return fields.some((x) => x === 'recoverCodes')
  }, [fields])

  return (
    <div className="sec-order__block block-border block-info">
      <div className="block-info__title title-def title-def_sec2">{title}</div>
      {description && (
        <div className="block-info__block">
          <div className="block-info__text text-cat">{description}</div>
        </div>
      )}

      {passwordNote && (
        <div className="block-info__block">
          <div className="wrap-info">
            <div className="wrap-info__el info-message">
              <div className="info-message__content">
                <div className="info-message__icon">
                  <SecurePasswordIcon />
                </div>
                <div className="info-message__body">
                  <div className="info-message__title title-def title-def_small">
                    Ваши данные надёжно защищены
                  </div>
                  <div className="info-message__text text-cat">
                    Мы не передаём ваши данные третьим лицам и не сохраняем их. Наш менеджер зайдёт
                    в ваш аккаунт один раз чтобы совершить покупку.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="block-info__block">
        <div className="wrap-form">
          {mainFields.map((f, idx) => {
            return (
              <div className="wrap-form__el" key={idx}>
                {f === 'login' && (
                  <div className="form-el">
                    <div className="form-el__title">Логин</div>
                    <input
                      className="form-el__inp inp-def"
                      type="text"
                      value={inputFields.find((x) => x.id === 'login')?.value}
                    />
                  </div>
                )}
                {f === 'password' && (
                  <div className="form-el">
                    <div className="form-el__title">Пароль</div>
                    <input
                      className="form-el__inp inp-def"
                      type="password"
                      value={inputFields.find((x) => x.id === 'password')?.value}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {hasRecoverFields && (
        <div className="block-info__block">
          <div className="form-el form-el_m">
            <div className="form-el__title">
              Коды восстановления <span>(минимум 2, через пробел)</span>
            </div>
            <input
              className="form-el__inp inp-def"
              type="text"
              value={inputFields.find((x) => x.id === 'recoverCodes')?.value}
            />
          </div>
          <div className="hint">
            <div className="hint__icon">
              <HintIcon />
            </div>
            <div className="hint__text">Где найти коды восстановления?</div>
          </div>
        </div>
      )}
    </div>
  )
}
