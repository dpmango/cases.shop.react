import cns from 'classnames'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { Formik, FormikHelpers } from 'formik'
import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { AuthErrorMessage } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { InputWarningIcon, SuccessIcon } from '@/components/Ui'
import {
  authRecover,
  authResetConfirm,
  getMainPage,
  IAuthResetConfirm,
  initializeApp,
} from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { getProfileThunk } from '@/core/store/session.store'
import { setModal } from '@/core/store/ui.store'
import { secondsToStamp } from '@/core/utils'

export interface IForm {
  password: string
}

export const getServerSideProps = (async (context) => {
  const { shopId, parsedSiteHost } = await DomainResolver(context)

  // Управление запросами страниц
  const promisesToBeFetched = [
    {
      name: 'init',
      resolver: initializeApp({ shopId, site: parsedSiteHost }),
      errorRouter: {
        fatal: true,
      },
    },
    {
      name: 'homepage',
      resolver: getMainPage({ shopId }),
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE } = await Resolver(shopId, promisesToBeFetched)

  return {
    props: {
      PRELOADED_STATE,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export default function Page() {
  const { id: shopId, settings, user, auth_bot } = useAppSelector((state) => state.sessionState)

  const [stage, setStage] = useState(1)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const params = useSearchParams()

  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const initialValues = { password: '' }

  const handleValidate = useCallback((values: IForm) => {
    const errors = {} as { [key: string]: string }
    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (values.password.length < 5) {
      errors.password = `Ваш пароль должен содержать минимум 5 символов. Сейчас вы используете только ${values.password.length}.`
    }
    return errors
  }, [])

  const resendEmail = useCallback(async () => {
    const cookieEmail = getCookie('loginEmail')

    if (!cookieEmail) {
      router.push('/auth')
      return
    }

    const { data, error } = await authRecover({
      shopId,
      email: cookieEmail,
    })

    if (data) {
      setRepeatTime(60)
    }
  }, [shopId])

  const handleSubmit = useCallback(
    async (values: IForm, { setSubmitting, setFieldError }: FormikHelpers<IForm>) => {
      const cookieEmail = getCookie('loginEmail')

      if (!cookieEmail) {
        router.push('/auth')
        setSubmitting(false)
        return
      }

      console.log('recover send', { cookieEmail })

      const { data, error } = await authRecover({
        shopId,
        email: cookieEmail,
      })

      if (error) {
        setFieldError('password', error.message)
      }

      if (data) {
        setRepeatTime(60)
        setCookie('resetPassword', values.password)
        setCookie('authRecoverStep', 2)
        setStage(2)
      }

      setSubmitting(false)
    },
    [shopId],
  )

  useEffect(() => {
    const stepCookie = getCookie('authRecoverStep')
    if (stepCookie) {
      setStage(+stepCookie)
    }
  }, [])

  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  const [repeatTime, setRepeatTime] = useState(60)

  useEffect(() => {
    if (stage !== 2) {
      setRepeatTime(60)
      return
    }

    const updateTime = () => {
      setRepeatTime((prev) => {
        let next = prev - 1
        if (next <= 0) next = 0
        return next
      })
    }

    updateTime()
    timer.current = setInterval(updateTime, 1000)

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [stage])

  const handleConfirm = useCallback(async (payload: IAuthResetConfirm) => {
    const { data, error } = await authResetConfirm(payload)

    if (error) setError(error.message)
    if (data) {
      deleteCookie('authRecoverStep')
      deleteCookie('loginEmail')

      setCookie('access_token', data.access_token)
      setCookie('refresh_token', data.refresh_token)

      const { payload } = await dispatch(getProfileThunk())
      if (!payload) throw new Error()

      setStage(3)

      setSuccess(true)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    const token = params.get('token')
    const email = params.get('email')
    const cookiePassword = getCookie('resetPassword')

    if (token && email) {
      if (!cookiePassword) {
        setStage(1)
        return
      }

      handleConfirm({
        shopId,
        token,
        email,
        password: cookiePassword,
      })
    }
  }, [params])

  const hasTokens = params.get('token') && params.get('email')

  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              {!hasTokens && stage === 1 && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">
                    Восстановление пароля
                  </div>
                  <Formik
                    initialValues={initialValues}
                    validate={handleValidate}
                    onSubmit={handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div
                          className={cns(
                            'block-form__el form-el',
                            errors.password && touched.password && 'error',
                          )}
                        >
                          <div className="form-el__title">Придумайте новый пароль</div>
                          <input
                            className="form-el__inp inp-def"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                        </div>
                        {errors.password && touched.password && (
                          <AuthErrorMessage title="Ошибка" message={errors.password} />
                        )}
                        <div className="form-el__textbottom text-cat text-cat_small">
                          Минимум 5 символов
                        </div>

                        <button
                          type="submit"
                          className="block-form__btn btn-def btn-def_full btn-def_min"
                          disabled={isSubmitting}
                        >
                          <span>Восстановить</span>
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              )}

              {/* confrm */}
              {!hasTokens && stage === 2 && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">Подтверждение</div>
                  <div className="block-form__text text-cat">
                    На вашу электронную почту отправлено письмо со ссылкой для восстановления
                    пароля. Перейдите по ней чтобы продолжить процесс восстановления.
                  </div>
                  <div className="title-def title-def_m title-def_small">
                    Письмо так и не пришло?
                  </div>
                  {repeatTime > 0 ? (
                    <div className="countdown mb-2">
                      <span>
                        Отправить ещё раз через{' '}
                        <span className="countdown__time">{secondsToStamp(repeatTime)}</span>
                      </span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="btn-def btn-def_full btn-def_min mb-2"
                      onClick={resendEmail}
                    >
                      <span>Отправить новое письмо</span>
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn-def btn-def_full btn-def_min"
                    onClick={() => {
                      dispatch(setModal({ name: 'support' }))
                    }}
                  >
                    <span>Написать в поддержку</span>
                  </button>
                </div>
              )}

              {hasTokens && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">
                    Восстановление пароля
                  </div>

                  {loading && <p className="form-el__title">Подождите...</p>}

                  {success && (
                    <div className="form-info block-form__info">
                      <SuccessIcon />
                      <div className="form-info__body">
                        <div className="form-info__text text-cat">
                          Вы успешно изменили пароль для своего аккаунта. Теперь можете продолжить
                          совершать покупки.
                        </div>
                      </div>
                    </div>
                  )}

                  {error && <AuthErrorMessage title="Ошибка" message={error} />}

                  {!loading && (
                    <Link className="block-form__btn btn-def btn-def_full btn-def_min" href="/">
                      <span>На главную</span>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
