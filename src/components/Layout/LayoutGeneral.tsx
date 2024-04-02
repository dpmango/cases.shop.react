import { useEffect } from 'react'

import { LayoutFooter, LayoutHeader, SharedModals } from '@/components/Layout'
import { useTelegramAuth } from '@/core/hooks'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { refreshWatcher } = useTelegramAuth()

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
