import cns from 'classnames'
import { Formik, FormikHelpers } from 'formik'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { AuthErrorMessage } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { SuccessIcon } from '@/components/Ui'
import { authChangePassword } from '@/core/api'
import { useAuthHelpers } from '@/core/hooks'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppSelector } from '@/core/store'

export interface IForm {
  oldPassword: string
  newPassword: string
  newPasswordConfirm: string
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
  const { user } = useAppSelector((state) => state.sessionState)

  const [stage, setStage] = useState(1)
  const router = useRouter()

  const initialValues = { oldPassword: '', newPassword: '', newPasswordConfirm: '' }

  const { onAuthSuccess } = useAuthHelpers()

  const handleValidate = useCallback((values: IForm) => {
    const errors = {} as { [key: string]: string }
    if (!values.oldPassword) {
      errors.oldPassword = 'Введите пароль'
    } else if (values.oldPassword.trim().length < 10) {
      errors.oldPassword = `Ваш пароль должен содержать минимум 10 символов. Сейчас вы используете только ${values.oldPassword.length}.`
    } else if (!values.newPassword) {
      errors.newPassword = 'Введите пароль'
    } else if (values.newPassword.trim().length < 10) {
      errors.newPassword = `Ваш пароль должен содержать минимум 10 символов. Сейчас вы используете только ${values.newPassword.length}.`
    } else if (!values.newPasswordConfirm) {
      errors.newPasswordConfirm = 'Введите пароль'
    } else if (values.newPasswordConfirm.trim().length < 10) {
      errors.newPasswordConfirm = `Ваш пароль должен содержать минимум 10 символов. Сейчас вы используете только ${values.newPasswordConfirm.length}.`
    } else if (values.newPassword !== values.newPasswordConfirm) {
      errors.newPasswordConfirm = 'Пароли не совпадают'
    }
    return errors
  }, [])

  const handleSubmit = useCallback(
    async (values: IForm, { setSubmitting, setFieldError }: FormikHelpers<IForm>) => {
      const { data, error } = await authChangePassword({
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      })

      if (error) {
        if (['invalid-password', 'bad-password'].includes(error.message)) {
          setFieldError('newPassword', 'Неправильный пароль')
        } else {
          setFieldError('oldPassword', error.message)
        }
      }

      if (data) {
        setStage(2)
        onAuthSuccess(data, false)
      }

      setSubmitting(false)
    },
    [],
  )

  useEffect(() => {
    if (!user) {
      router.replace('/auth')
    }
  }, [])

  return (
    <LayoutGeneral>
      <Head>
        <title>Сменить пароль</title>
      </Head>

      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              {stage === 1 && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">Сменить пароль</div>
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
                        <div
                          className={cns('block-form__el  form-el', errors.oldPassword && 'error')}
                        >
                          <div className="form-el__title">Текущий пароль</div>
                          <input
                            className="form-el__inp inp-def"
                            type="password"
                            name="oldPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.oldPassword}
                          />
                        </div>
                        {errors.oldPassword && (
                          <AuthErrorMessage title="Ошибка" message={errors.oldPassword} />
                        )}

                        <div
                          className={cns(
                            'block-form__el _second form-el',
                            errors.newPassword && 'error',
                          )}
                        >
                          <div className="form-el__title">Новый пароль</div>
                          <input
                            className="form-el__inp inp-def"
                            type="password"
                            name="newPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.newPassword}
                          />
                        </div>
                        {errors.newPassword && (
                          <AuthErrorMessage title="Ошибка" message={errors.newPassword} />
                        )}

                        <div
                          className={cns(
                            'block-form__el _second form-el',
                            errors.newPasswordConfirm && 'error',
                          )}
                        >
                          <div className="form-el__title">Новый пароль</div>
                          <input
                            className="form-el__inp inp-def"
                            type="password"
                            name="newPasswordConfirm"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.newPasswordConfirm}
                          />
                        </div>
                        {errors.newPasswordConfirm && (
                          <AuthErrorMessage title="Ошибка" message={errors.newPasswordConfirm} />
                        )}

                        <button
                          type="submit"
                          className="block-form__btn btn-def btn-def_full btn-def_min"
                          disabled={isSubmitting}
                        >
                          <span>Сменить пароль</span>
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              )}

              {stage === 2 && (
                <div className="block-form">
                  <div className="block-form__title title-def title-def_sec">Сменить пароль</div>

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
