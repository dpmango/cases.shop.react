import cns from 'classnames'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { AuthBackButton, AuthErrorMessage } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { SuccessIcon } from '@/components/Ui'
import { authConfirmEmail, IAuthConfirmEmail } from '@/core/api'
import { useAuthHelpers } from '@/core/hooks'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { getProfileThunk } from '@/core/store/session.store'

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
  const params = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const { onAuthSuccess } = useAuthHelpers()

  const handleConfirm = useCallback(async (payload: IAuthConfirmEmail) => {
    const { data, error } = await authConfirmEmail(payload)

    if (error) {
      if (error.message === 'invalid-token') {
        setError('Ссылка подтверждения email устарела. Попробуйте снова')
      } else {
        setError(error.message)
      }
    }
    if (data) {
      deleteCookie('authSignupStep')
      deleteCookie('loginEmail')
      onAuthSuccess(data, false)

      setSuccess(true)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    const token = params.get('token')
    const email = params.get('email')

    if (token && email) {
      handleConfirm({
        token,
        email,
      })
    }
  }, [])

  return (
    <LayoutGeneral>
      <Head>
        <title>Подтверждение</title>
      </Head>

      <div className="padding-top"></div>
      <section className="sec-auth">
        <div className="container-def">
          <div className="sec-auth__wrap">
            <div className="sec-auth__content">
              <div className="block-form">
                <div className="block-form__title title-def title-def_sec">Регистрация</div>

                {loading && <p className="form-el__title">Подождите...</p>}

                {success && (
                  <div className="form-info block-form__info">
                    <SuccessIcon />
                    <div className="form-info__body">
                      <div className="form-info__text text-cat">
                        Вы успешно подтвердили свою электронную почту. Теперь можете совершать
                        покупки и пополнять баланс.
                      </div>
                    </div>
                  </div>
                )}

                {error && <AuthErrorMessage title="Ошибка" message={error} />}

                {!loading && <AuthBackButton />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
