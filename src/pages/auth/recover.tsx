import cns from 'classnames'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { Formik, FormikHelpers } from 'formik'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { AuthBackButton, AuthErrorMessage } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { InputWarningIcon, SuccessIcon } from '@/components/Ui'
import { authRecover, authResetConfirm, IAuthResetConfirm } from '@/core/api'
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
  const [stage, setStage] = useState(1)
  const router = useRouter()
  const params = useSearchParams()

  const initialValues = { password: '' }

  const { onAuthSuccess } = useAuthHelpers()

  const handleValidate = useCallback((values: IForm) => {
    const errors = {} as { [key: string]: string }
    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (values.password.trim().length < 10) {
      errors.password = `Ваш пароль должен содержать минимум 10 символов. Сейчас вы используете только ${values.password.length}.`
    }
    return errors
  }, [])

  const handleSubmit = useCallback(
    async (values: IForm, { setSubmitting, setFieldError }: FormikHelpers<IForm>) => {
      const paramToken = params.get('token')
      const paramEmail = params.get('email')

      if (!paramToken || !paramEmail) {
        router.replace('/auth')
        setSubmitting(false)
        return
      }

      const { data, error } = await authResetConfirm({
        token: paramToken,
        email: paramEmail,
        password: values.password,
      })

      if (error) {
        if (['invalid-password', 'bad-password'].includes(error.message)) {
          setFieldError('password', 'Неправильный пароль')
        } else if (['invalid-token'].includes(error.message)) {
          setFieldError('password', 'Ссылка восстановления пароля устарела')
        } else {
          setFieldError('password', error.message)
        }
      }

      if (data) {
        setStage(2)
        onAuthSuccess(data, false)
      }

      setSubmitting(false)
    },
    [params],
  )

  useEffect(() => {
    const paramToken = params.get('token')
    const paramEmail = params.get('email')

    if (!paramToken || !paramEmail) {
      router.replace('/auth')
    }
  }, [])

  return (
    <LayoutGeneral>
      <Head>
        <title>Восстановление</title>
      </Head>

      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              {stage === 1 && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">
                    Восстановление пароля
                  </div>
                  <Formik
                    initialValues={initialValues}
                    validate={handleValidate}
                    onSubmit={handleSubmit}
                    validateOnBlur={false}
                    validateOnChange={false}
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
                        {errors.password && (
                          <AuthErrorMessage title="Ошибка" message={errors.password}>
                            <>
                              {errors.password === 'Ссылка восстановления пароля устарела' && (
                                <Link href="/auth">
                                  <button
                                    type="reset"
                                    className="message-form__btn btn-def btn-def_small btn-def_full btn-def_black"
                                  >
                                    <span>Войти заново</span>
                                  </button>
                                </Link>
                              )}
                            </>
                          </AuthErrorMessage>
                        )}
                        <div className="form-el__textbottom text-cat text-cat_small">
                          Минимум 10 символов
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

              {stage === 2 && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">
                    Восстановление пароля
                  </div>

                  <div className="form-info block-form__info">
                    <SuccessIcon />
                    <div className="form-info__body">
                      <div className="form-info__text text-cat">
                        Вы успешно изменили пароль для своего аккаунта. Теперь можете продолжить
                        совершать покупки.
                      </div>
                    </div>
                  </div>

                  <AuthBackButton />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
