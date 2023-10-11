import cns from 'classnames'
import { getCookie, setCookie } from 'cookies-next'
import { Formik, FormikHelpers } from 'formik'
import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { AuthErrorMessage } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { InputWarningIcon } from '@/components/Ui'
import { authLogin, authRecover, authRequestConfirm, getMainPage, initializeApp } from '@/core/api'
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

  const router = useRouter()
  const dispatch = useAppDispatch()

  const initialValues = { password: '' }

  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  const [repeatTime, setRepeatTime] = useState(60)
  const [stage, setStage] = useState(1)

  const handleValidate = useCallback((values: IForm) => {
    const errors = {} as { [key: string]: string }
    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (values.password.length < 5) {
      errors.password = `Ваш пароль должен содержать минимум 5 символов. Сейчас вы используете только ${values.password.length}.`
    }
    return errors
  }, [])

  const handleRecover = useCallback(async () => {
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
      setStage(2)
      setRepeatTime(60)
    }
  }, [])

  const handleSubmit = useCallback(
    async (values: IForm, { setSubmitting, setFieldError }: FormikHelpers<IForm>) => {
      const cookieEmail = getCookie('loginEmail')

      if (!cookieEmail) {
        router.push('/auth')
        setSubmitting(false)
        return
      }

      const { data, error } = await authLogin({
        shopId,
        email: cookieEmail,
        password: values.password,
      })

      if (error) {
        if (error.message === 'request-confirm') {
          setCookie('authSignupStep', 2)
          authRequestConfirm({ shopId, email: cookieEmail })
          router.push('/auth/signup')
        } else if (error.message === 'invalid-password') {
          setFieldError('password', 'Неправильный пароль')
        } else {
          setFieldError('password', error.message)
        }
      }

      if (data) {
        setCookie('access_token', data.access_token)
        setCookie('refresh_token', data.refresh_token)

        const { payload } = await dispatch(getProfileThunk())
        if (!payload) throw new Error()

        router.push('/')
      }

      setSubmitting(false)
    },
    [],
  )

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

  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              {stage === 1 && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">Вход с паролем</div>

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
                          <div className="form-el__title">Пароль</div>
                          <input
                            className="form-el__inp inp-def"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                        </div>
                        {errors.password && (
                          <AuthErrorMessage title="Ошибка" message={errors.password}>
                            <>
                              {errors.password === 'Неправильный пароль' && (
                                <a href="#" onClick={handleRecover}>
                                  <button className="message-form__btn btn-def btn-def_small btn-def_full btn-def_black">
                                    <span>Восстановить пароль</span>
                                  </button>
                                </a>
                              )}
                            </>
                          </AuthErrorMessage>
                        )}

                        <button
                          type="submit"
                          className="block-form__btn btn-def btn-def_full btn-def_min"
                          disabled={isSubmitting}
                        >
                          <span>Войти</span>
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              )}

              {/* confrm */}
              {stage === 2 && (
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
                      onClick={handleRecover}
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
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
