import { getCookie } from 'cookies-next'
import { useEffect } from 'react'

import { LayoutFooter, LayoutHeader, SharedModals } from '@/components/Layout'
import { useTelegramAuth } from '@/core/hooks'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { getProfileThunk } from '@/core/store/session.store'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { id: shopId, settings, user, auth_bot } = useAppSelector((state) => state.sessionState)

  const { refreshWatcher } = useTelegramAuth({ shopId })
  const dispatch = useAppDispatch()

  useEffect(() => {
    const func = async () => {
      const accessToken = getCookie('access_token')
      if (accessToken) await dispatch(getProfileThunk())
      refreshWatcher()
    }

    func()
  }, [])

  return (
    <>
      <div className={'wrapper-def'}>
        <LayoutHeader />
        {children}
        <LayoutFooter />
      </div>
      <SharedModals />
    </>
  )
}
