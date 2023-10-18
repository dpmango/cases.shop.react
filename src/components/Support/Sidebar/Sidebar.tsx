import cns from 'classnames'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { ChatDialog } from '@/components/Support'
import { UiLoader } from '@/components/Ui'
import { PlusIcon2 } from '@/components/Ui/Icons'
import { createTicket } from '@/core/api'
import { useClickOutside } from '@/core/hooks'
import { useAppSelector } from '@/core/store'

export const ChatSidebar: React.FC = () => {
  const { loading, chatList, activeDialog } = useAppSelector((store) => store.chatStore)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [sidebarOpened, setSidebarOpened] = useState(false)

  console.log({ chatList })

  const handleSidebarToggle = useCallback(() => {
    sidebarRef.current?.classList.toggle('active')
    setSidebarOpened(!sidebarOpened)
  }, [sidebarOpened])

  const closeSidebar = () => {
    sidebarRef.current?.classList.remove('active')
    setSidebarOpened(false)
  }

  useClickOutside(sidebarRef, closeSidebar)

  const handleTicketCreate = useCallback(() => {
    createTicket({
      name: 'Тестовое название',
    })
  }, [])

  return (
    <div className="chat__sidebar" ref={sidebarRef}>
      <div className="chat__top">
        <div className="chat__title title-def title-def_sec">Диалоги с поддержкой</div>
        <div className="chat__title-mob title-def title-def_sec">Поддержка</div>
        <div className="chat__btn action-btn">
          <div className="action-btn__content" onClick={handleTicketCreate}>
            <div className="action-btn__icon">
              <PlusIcon2 />
            </div>
          </div>
        </div>
      </div>
      {chatList.map((x, idx) => (
        <ChatDialog key={idx} {...x} selected={x.id === activeDialog?.id} />
      ))}

      <UiLoader active={!!loading} theme="page" />
    </div>
  )
}
