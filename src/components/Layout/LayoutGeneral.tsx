import { LayoutFooter, LayoutHeader, SharedModals } from '@/components/Layout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
