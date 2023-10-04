import cns from 'classnames'
import { Formik, FormikHelpers } from 'formik'
import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { AuthErrorMessage } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { InputWarningIcon } from '@/components/Ui'
import { getMainPage, initializeApp } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppDispatch, useAppSelector } from '@/core/store'

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

  const initialValues = { password: '' }

  const handleValidate = useCallback((values: IForm) => {
    const errors = {} as { [key: string]: string }
    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (values.password.length < 6) {
      errors.password = 'Пароль должен содержать минимум 6 символов'
    }
    return errors
  }, [])

  const handleSubmit = useCallback((values: IForm, { setSubmitting }: FormikHelpers<IForm>) => {
    setTimeout(() => {
      setSubmitting(false)
      router.push('/auth/signup')
    }, 400)
  }, [])

  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
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
                      {errors.password && touched.password && (
                        <AuthErrorMessage
                          title="Неверный пароль"
                          message={
                            'Попробуйте еще раз или воспользуйтесь функцией восстановления пароля.'
                          }
                        >
                          <Link href="/auth/recover">
                            <button className="message-form__btn btn-def btn-def_small btn-def_full btn-def_black">
                              <span>Восстановить пароль</span>
                            </button>
                          </Link>
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
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
