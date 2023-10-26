import cns from 'classnames'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { IOrderForm } from '@/core/interface/Order'
import { formatPrice } from '@/core/utils'

import { HintIcon, SecurePasswordIcon } from '../Ui'

type fieldsType = 'login' | 'password' | 'recoverCodes' | 'steam_login'
export interface IOrderFormField {
  id: fieldsType
  value: string
}

interface IOrderFormProps extends IOrderForm {
  syncForm: (fields: IOrderFormField[]) => void
}

export const OrderForm: React.FC<IOrderFormProps> = ({
  title,
  description,
  passwordNote = true,
  fields,
  syncForm,
}) => {
  const [inputFields, setInputFields] = useState(fields.map((f) => ({ id: f, value: '' })))

  const handleInputChange = (id: fieldsType, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setInputFields((prev) =>
      prev.map((f, idx) => {
        if (f.id === id) {
          return {
            id,
            value,
          }
        }
        return f
      }),
    )
  }

  const mainFields = useMemo(() => {
    return fields.filter((x) => x !== 'recoverCodes')
  }, [fields])

  const hasRecoverFields = useMemo(() => {
    return fields.some((x) => x === 'recoverCodes')
  }, [fields])

  useEffect(() => {
    syncForm(inputFields)
  }, inputFields)

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
                {f === 'steam_login' && (
                  <div className="form-el">
                    <div className="form-el__title">Логин Steam</div>
                    <input
                      className="form-el__inp inp-def"
                      type="text"
                      value={inputFields.find((x) => x.id === 'steam_login')?.value}
                      onChange={(e) => handleInputChange('steam_login', e)}
                    />
                  </div>
                )}
                {f === 'login' && (
                  <div className="form-el">
                    <div className="form-el__title">Логин</div>
                    <input
                      className="form-el__inp inp-def"
                      type="text"
                      value={inputFields.find((x) => x.id === 'login')?.value}
                      onChange={(e) => handleInputChange('login', e)}
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
                      onChange={(e) => handleInputChange('password', e)}
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
              onChange={(e) => handleInputChange('recoverCodes', e)}
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
