import { useEffect } from 'react'

import { LayoutFooter, LayoutHeader, SharedModals } from '@/components/Layout'
import { useTelegramAuth } from '@/core/hooks'
import { useAppSelector } from '@/core/store'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { id: shopId, settings, user, auth_bot } = useAppSelector((state) => state.sessionState)

  const { refreshWatcher } = useTelegramAuth({ shopId })

  useEffect(() => {
    refreshWatcher()
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
