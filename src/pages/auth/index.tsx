import cns from 'classnames'
import { deleteCookie, setCookie } from 'cookies-next'
import { Formik, FormikHelpers } from 'formik'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import { AuthErrorMessage } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { authCheckUser, getMainPage } from '@/core/api'
import { useTelegramAuth } from '@/core/hooks'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppDispatch, useAppSelector } from '@/core/store'

export const getServerSideProps = (async (context) => {
  const { shopId } = await DomainResolver(context)

  // Управление запросами страниц
  const promisesToBeFetched = [
    {
      name: 'homepage',
      resolver: getMainPage(),
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE } = await Resolver(promisesToBeFetched, context)

  return {
    props: {
      PRELOADED_STATE,
      shopId,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export interface IForm {
  email: string
}

export default function Page() {
  const { user, auth_bot } = useAppSelector((state) => state.sessionState)

  const { onAuthSuccess } = useTelegramAuth()
  const router = useRouter()

  const initialValues = { email: '' }

  const handleValidate = useCallback((values: IForm) => {
    const errors = {} as { [key: string]: string }
    if (!values.email) {
      errors.email = 'Введите email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Невалидный email'
    }
    return errors
  }, [])

  const handleSubmit = useCallback(
    async (values: IForm, { setSubmitting }: FormikHelpers<IForm>) => {
      const { status, error } = await authCheckUser({
        email: values.email,
      })

      setCookie('loginEmail', values.email)
      setCookie('authSignupStep', 1)
      setSubmitting(false)

      if (error) {
        router.push('/auth/signup')
      } else {
        router.push('/auth/login')
      }
    },
    [],
  )

  return (
    <LayoutGeneral>
      <Head>
        <title>Авторизация</title>
      </Head>

      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              <div className="block-form">
                <div className="block-form__title title-def title-def_sec">
                  Вход или регистрация
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
                          errors.email && touched.email && 'error',
                        )}
                      >
                        <div className="form-el__title">Электронная почта</div>
                        <input
                          className="form-el__inp inp-def"
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      {errors.email && touched.email && <AuthErrorMessage message={errors.email} />}

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

                <div className="block-form__line">
                  <span>Или</span>
                </div>
                <button className="block-form__social btn-telegram">
                  <TLoginButton
                    botName={auth_bot}
                    buttonSize={TLoginButtonSize.Large}
                    lang="ru"
                    usePic={false}
                    cornerRadius={6}
                    onAuthCallback={onAuthSuccess}
                    requestAccess={'write'}
                  />
                  {/* 
                  <div className="btn-telegram__icon">
                    <TelegramIcon />
                  </div>
                  <span>Войти через Телеграм</span> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
