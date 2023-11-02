import cns from 'classnames'
import { getCookie, setCookie } from 'cookies-next'
import { Formik, FormikHelpers } from 'formik'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { AuthErrorMessage, AuthResendCountdown } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { InputWarningIcon } from '@/components/Ui'
import { authLogin, authRecover, authRequestConfirm, getMainPage } from '@/core/api'
import { useAuthHelpers } from '@/core/hooks'
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
  const { shopId } = await DomainResolver(context)

  // Управление запросами страниц
  const promisesToBeFetched = [] as IPromiseFactory[]

  const { PRELOADED_STATE } = await Resolver(promisesToBeFetched, context)

  return {
    props: {
      PRELOADED_STATE,
      shopId,
    },
  }
}) satisfies GetServerSideProps<Partial<IResolver>>

export default function Page() {
  const router = useRouter()

  const initialValues = { password: '' }

  const [stage, setStage] = useState(1)

  const { checkLoginCookie, onAuthSuccess } = useAuthHelpers()

  const handleValidate = useCallback((values: IForm) => {
    const errors = {} as { [key: string]: string }
    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (values.password.length < 10) {
      errors.password = `Ваш пароль должен содержать минимум 10 символов. Сейчас вы используете только ${values.password.length}.`
    }
    return errors
  }, [])

  const handleRecover = useCallback(async () => {
    const cookieEmail = checkLoginCookie()
    if (!cookieEmail) return

    const { data, error } = await authRecover({
      email: cookieEmail,
    })

    if (data) {
      setStage(2)
    }
  }, [])

  const handleSubmit = useCallback(
    async (values: IForm, { setSubmitting, setFieldError }: FormikHelpers<IForm>) => {
      const cookieEmail = checkLoginCookie()

      if (!cookieEmail) {
        setSubmitting(false)
        return
      }

      const { data, error } = await authLogin({
        email: cookieEmail,
        password: values.password,
      })

      if (error) {
        if (error.message === 'request-confirm') {
          setCookie('authSignupStep', 2)
          authRequestConfirm({ email: cookieEmail })
          router.push('/auth/signup')
        } else if (['invalid-password', 'bad-password'].includes(error.message)) {
          setFieldError('password', 'Неправильный пароль')
        } else {
          setFieldError('password', error.message)
        }
      }

      if (data) await onAuthSuccess(data)

      setSubmitting(false)
    },
    [],
  )

  useEffect(() => {
    checkLoginCookie()
  }, [])

  return (
    <LayoutGeneral>
      <Head>
        <title>Войти</title>
      </Head>

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
                    validateOnBlur={false}
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
                        <div className={cns('block-form__el form-el', errors.password && 'error')}>
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
                                <button
                                  type="reset"
                                  onClick={handleRecover}
                                  className="message-form__btn btn-def btn-def_small btn-def_full btn-def_black"
                                >
                                  <span>Восстановить пароль</span>
                                </button>
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
                <AuthResendCountdown
                  message={
                    'На вашу электронную почту отправлено письмо со ссылкой для восстановления пароля. Перейдите по ней чтобы продолжить процесс восстановления.'
                  }
                  onResendClick={handleRecover}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
