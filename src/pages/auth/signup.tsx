import cns from 'classnames'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { Formik, FormikHelpers } from 'formik'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { AuthErrorMessage, AuthResendCountdown } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { authRequestConfirm, authSignup } from '@/core/api'
import { useAuthHelpers } from '@/core/hooks'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppDispatch, useAppSelector } from '@/core/store'

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

export interface IForm {
  password: string
}

export default function Page() {
  const { user, auth_bot } = useAppSelector((state) => state.sessionState)

  const [stage, setStage] = useState(1)
  const router = useRouter()

  const initialValues = { password: '' }

  const { checkLoginCookie, onAuthSuccess } = useAuthHelpers()

  const handleValidate = useCallback((values: IForm) => {
    const errors = {} as { [key: string]: string }
    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (values.password.trim().length < 10) {
      errors.password = `Ваш пароль должен содержать минимум 10 символов. Сейчас вы используете только ${values.password.length}.`
    }
    return errors
  }, [])

  const resendEmail = useCallback(async () => {
    const cookieEmail = checkLoginCookie()
    if (!cookieEmail) return

    const { data, error } = await authRequestConfirm({ email: cookieEmail })
  }, [])

  const handleSubmit = useCallback(
    async (values: IForm, { setSubmitting, setFieldError }: FormikHelpers<IForm>) => {
      const cookieEmail = checkLoginCookie()

      if (!cookieEmail) {
        setSubmitting(false)
        return
      }

      const { data, error } = await authSignup({
        email: cookieEmail,
        password: values.password,
      })

      if (error) {
        setFieldError('password', error.message)
      }

      if (data) {
        await resendEmail()

        setCookie('authSignupStep', 2)
        setStage(2)
      }

      setSubmitting(false)
    },
    [],
  )

  const resetEmail = useCallback(() => {
    deleteCookie('authSignupStep')
    deleteCookie('loginEmail')
    router.replace('/auth')
  }, [])

  useEffect(() => {
    const stepCookie = getCookie('authSignupStep')
    if (stepCookie) {
      setStage(+stepCookie)
    }
  }, [])

  useEffect(() => {
    checkLoginCookie()
  }, [])

  return (
    <LayoutGeneral>
      <Head>
        <title>Регистрация</title>
      </Head>

      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              {stage === 1 && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">Регистрация</div>
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
                          <div className="form-el__title">Придумайте пароль</div>
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
                          <AuthErrorMessage title="Ошибка" message={errors.password} />
                        )}
                        <div className="form-el__textbottom text-cat text-cat_small">
                          Минимум 10 символов
                        </div>

                        <button
                          type="submit"
                          className="block-form__btn btn-def btn-def_full btn-def_min"
                          disabled={isSubmitting}
                        >
                          <span>Продолжить</span>
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              )}

              {/* confrm */}
              {stage === 2 && (
                <AuthResendCountdown
                  title="Подтверждение"
                  message={
                    'На вашу электронную почту отправлено письмо со ссылкой для подтверждения регистрации. Перейдите по ней чтобы завершить процесс регистрации.'
                  }
                  onResendClick={resendEmail}
                  onResetClick={resetEmail}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
