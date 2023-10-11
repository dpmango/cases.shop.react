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
      const paramToken = params.get('token')
      const paramEmail = params.get('email')

      if (!paramToken || !paramEmail) {
        router.push('/auth')
        setSubmitting(false)
        return
      }

      const { data, error } = await authResetConfirm({
        shopId,
        token: paramToken,
        email: paramEmail,
        password: values.password,
      })

      if (error) {
        setFieldError('password', error.message)
      }

      if (data) {
        setStage(2)

        setCookie('access_token', data.access_token)
        setCookie('refresh_token', data.refresh_token)

        const { payload } = await dispatch(getProfileThunk())
        if (!payload) throw new Error()
      }

      setSubmitting(false)
    },
    [shopId, params],
  )

  useEffect(() => {
    const paramToken = params.get('token')
    const paramEmail = params.get('email')

    if (!paramToken || !paramEmail) {
      router.push('/auth')
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
