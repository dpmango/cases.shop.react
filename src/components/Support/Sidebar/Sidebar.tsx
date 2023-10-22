import cns from 'classnames'
import dayjs from 'dayjs'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { ChatDialog } from '@/components/Support'
import { UiLoader } from '@/components/Ui'
import { PlusIcon2 } from '@/components/Ui/Icons'
import { createTicket } from '@/core/api'
import { useClickOutside } from '@/core/hooks'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { resetDialog, setCreateMode } from '@/core/store/chat.store'

export const ChatSidebar: React.FC = () => {
  const { loading, chatList, createMode, activeDialog } = useAppSelector((store) => store.chatStore)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const dispatch = useAppDispatch()
  const handleSidebarToggle = useCallback(() => {
    sidebarRef.current?.classList.toggle('active')
    setSidebarOpened(!sidebarOpened)
  }, [sidebarOpened])

  const closeSidebar = () => {
    sidebarRef.current?.classList.remove('active')
    setSidebarOpened(false)
  }

  useClickOutside(sidebarRef, closeSidebar)

  const handleTicketCreate = () => {
    dispatch(setCreateMode(true))
    dispatch(resetDialog())
  }

  const createModeData = useMemo(() => {
    if (!createMode) return null

    return {
      id: '000',
      isPinned: false,
      created: dayjs().toDate(),
      modified: dayjs().toDate(),
      status: 0,
      title: 'Новое обращение в поддержку',
      lastMessage: '',
      unreadMessages: 0,
    }
  }, [createMode])

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
      {createMode && createModeData && (
        <ChatDialog {...createModeData} selected={true} disabled={true} />
      )}
      {chatList.map((x, idx) => (
        <ChatDialog key={idx} {...x} selected={x.id === activeDialog?.id} />
      ))}

      <UiLoader active={!!loading} theme="page" />
    </div>
  )
}
