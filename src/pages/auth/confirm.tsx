import cns from 'classnames'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

import { AuthErrorMessage } from '@/components/Auth'
import { LayoutGeneral } from '@/components/Layout'
import { SuccessIcon } from '@/components/Ui'
import { authConfirmEmail, getMainPage, IAuthConfirmEmail, initializeApp } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { getProfileThunk } from '@/core/store/session.store'

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

  const { PRELOADED_STATE } = await Resolver(shopId, promisesToBeFetched, context)

  return {
    props: {
      PRELOADED_STATE,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export default function Page() {
  const { id: shopId, settings, user, auth_bot } = useAppSelector((state) => state.sessionState)

  const dispatch = useAppDispatch()
  const router = useRouter()
  const params = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleConfirm = useCallback(async (payload: IAuthConfirmEmail) => {
    const { data, error } = await authConfirmEmail(payload)

    if (error) setError(error.message)
    if (data) {
      deleteCookie('authSignupStep')
      deleteCookie('loginEmail')

      setCookie('access_token', data.access_token)
      setCookie('refresh_token', data.refresh_token)

      const { payload } = await dispatch(getProfileThunk())
      if (!payload) throw new Error()

      setSuccess(true)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    const token = params.get('token')
    const email = params.get('email')

    if (token && email) {
      handleConfirm({
        shopId,
        token,
        email,
      })
    }
  }, [])

  return (
    <LayoutGeneral>
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

                {!loading && (
                  <Link className="block-form__btn btn-def btn-def_full btn-def_min" href="/">
                    <span>На главную</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
