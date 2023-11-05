import cns from 'classnames'
import { deleteCookie, getCookie } from 'cookies-next'
import Link from 'next/link'

import { useAppSelector } from '@/core/store'

export const AuthBackButton: React.FC<{}> = () => {
  const lastRouteBeforeAuth = getCookie('lastRoute')

  if (lastRouteBeforeAuth) {
    return (
      <Link className="block-form__btn btn-def btn-def_full btn-def_min" href={lastRouteBeforeAuth}>
        <span>На страницу заказа</span>
      </Link>
    )
  }

  return (
    <Link className="block-form__btn btn-def btn-def_full btn-def_min" href="/">
      <span>На главную</span>
    </Link>
  )
}
