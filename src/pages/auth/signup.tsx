import cns from 'classnames'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { Formik, FormikHelpers } from 'formik'
import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { AuthErrorMessage } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { InputWarningIcon, SuccessIcon } from '@/components/Ui'
import {
  authConfirmEmail,
  authLogin,
  authRequestConfirm,
  authSignup,
  getMainPage,
  initializeApp,
} from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppDispatch, useAppSelector } from '@/core/store'

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

export interface IForm {
  password: string
}

export default function Page() {
  const { id: shopId, settings, user, auth_bot } = useAppSelector((state) => state.sessionState)

  const [stage, setStage] = useState(1)

  const router = useRouter()

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

  const handleSubmit = useCallback(
    async (values: IForm, { setSubmitting, setFieldError }: FormikHelpers<IForm>) => {
      const cookieEmail = getCookie('loginEmail')

      if (!cookieEmail) {
        router.push('/auth')
        setSubmitting(false)
        return
      }

      const { data, error } = await authSignup({
        shopId,
        email: cookieEmail,
        password: values.password,
      })

      if (error) {
        setFieldError('password', error.message)
      }

      if (data) {
        await authRequestConfirm({ shopId, email: cookieEmail })
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
    router.push('/auth')
  }, [])

  useEffect(() => {
    const stepCookie = getCookie('authSignupStep')
    if (stepCookie) {
      setStage(+stepCookie)
    }
  }, [])

  return (
    <LayoutGeneral>
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
                        {errors.password && touched.password && (
                          <AuthErrorMessage title="Ошибка" message={errors.password}>
                            <Link href="/auth/recover">
                              {/* <button className="message-form__btn btn-def btn-def_small btn-def_full btn-def_black">
                              <span>Восстановить пароль</span>
                            </button> */}
                            </Link>
                          </AuthErrorMessage>
                        )}
                        <div className="form-el__textbottom text-cat text-cat_small">
                          Минимум 5 символов
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
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">Подтверждение</div>
                  <div className="block-form__text text-cat">
                    На вашу электронную почту отправлено письмо со ссылкой для подтверждения
                    регистрации. Перейдите по ней чтобы завершить процесс регистрации.
                  </div>
                  <div className="title-def title-def_m title-def_small">
                    Письмо так и не пришло?
                  </div>
                  <div className="countdown mb-2">
                    <span>
                      Отправить ещё раз через <span className="countdown__time"> 5:43</span>
                    </span>
                  </div>
                  <button className="btn-def btn-def_full btn-def_min mb-2">
                    <span>Написать в поддержку</span>
                  </button>
                  <button className="btn-def btn-def_full btn-def_min" onClick={resetEmail}>
                    <span>Указать другую почту</span>
                  </button>
                </div>
              )}

              {/* success */}
              {stage === 3 && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">Регистрация</div>
                  <div className="form-info block-form__info">
                    <SuccessIcon />
                    <div className="form-info__body">
                      <div className="form-info__text text-cat">
                        Вы успешно подтвердили свою электронную почту. Теперь можете совершать
                        покупки и пополнять баланс.
                      </div>
                    </div>
                  </div>
                  <Link className="block-form__btn btn-def btn-def_full btn-def_min" href="/">
                    <span>На главную</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
