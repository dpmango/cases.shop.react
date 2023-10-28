import cns from 'classnames'
import debounce from 'lodash/debounce'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { checkSteamLogin } from '@/core/api'
import { useDebounce } from '@/core/hooks'
import { IOrderForm } from '@/core/interface/Order'
import { formatPrice } from '@/core/utils'

import { AuthErrorMessage } from '../Auth'
import { HintIcon, InputWarningIcon, SecurePasswordIcon } from '../Ui'

type fieldsType = 'login' | 'password' | 'recoverCodes' | 'steam-login' | 'steam-amount'
export interface IOrderFormField {
  id: string
  value: string
}

interface IOrderFormProps extends IOrderForm {
  steamLoginValid: boolean | null
  setSteamLoginValid: React.Dispatch<React.SetStateAction<boolean | null>>
  syncForm: (fields: IOrderFormField[]) => void
}

export const OrderForm: React.FC<IOrderFormProps> = ({
  title,
  description,
  passwordNote = true,
  fields,
  syncForm,
  steamLoginValid,
  setSteamLoginValid,
}) => {
  const [inputFields, setInputFields] = useState(fields.map((f) => ({ id: f, value: '' })))
  const [steamLogin, setSteamLogin] = useState('')
  const steamLoginDebounced = useDebounce(steamLogin)

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

    const steamLogin = inputFields.find((x) => x.id === 'steam-login')?.value
    if (steamLogin) {
      setSteamLogin(steamLogin)
    }
  }, inputFields)

  useEffect(() => {
    const checkLogin = async () => {
      setSteamLoginValid(null)
      const { data, error } = await checkSteamLogin({ login: steamLoginDebounced })
      setSteamLoginValid(!!data)
    }

    steamLoginDebounced && checkLogin()
  }, [steamLoginDebounced])

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
                {f === 'steam-login' && (
                  <>
                    <div className="form-el">
                      <div className="form-el__title">Логин Steam</div>
                      <input
                        className="form-el__inp inp-def"
                        type="text"
                        value={inputFields.find((x) => x.id === 'steam-login')?.value}
                        onChange={(e) => handleInputChange('steam-login', e)}
                      />
                    </div>

                    {steamLoginValid === false && (
                      <AuthErrorMessage message="Неверный логин Steam" />
                    )}

                    {steamLoginValid === true && (
                      <AuthErrorMessage
                        success={true}
                        title="Логин найден"
                        message="Выберите сумму пополнения"
                      />
                    )}
                  </>
                )}
                {f === 'login' && (
                  <>
                    <div className="form-el">
                      <div className="form-el__title">Логин</div>
                      <input
                        className="form-el__inp inp-def"
                        type="text"
                        value={inputFields.find((x) => x.id === 'login')?.value}
                        onChange={(e) => handleInputChange('login', e)}
                      />
                    </div>
                  </>
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
