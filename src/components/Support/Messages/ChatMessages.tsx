import { useEffect, useMemo, useRef } from 'react'

import { ChatMessage } from '@/components/Support'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { getChatMessagesService } from '@/core/store/chat.store'

export const ChatMessages = () => {
  const { activeDialog, dialogMessages } = useAppSelector((store) => store.chatStore)
  const dispatch = useAppDispatch()

  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  useEffect(() => {
    const fetchData = () => {
      if (!activeDialog?.id) return
      dispatch(getChatMessagesService(activeDialog?.id))
    }

    fetchData()
    timer.current = setInterval(fetchData, 1 * 10 * 1000)

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [activeDialog])

  const messageRenderer = useMemo(() => {
    const lastUnseenIndex = dialogMessages.findIndex((x) => !x.isSeen)

    if (lastUnseenIndex !== -1) {
      return {
        history: dialogMessages.slice(0, lastUnseenIndex),
        unreed: dialogMessages.slice(lastUnseenIndex, dialogMessages.length),
      }
    }

    return {
      history: dialogMessages,
      unreed: [],
    }
  }, [dialogMessages])

  return (
    <>
      {messageRenderer.history.map((msg, idx) => (
        <ChatMessage key={idx} {...msg} />
      ))}

      {messageRenderer.unreed.length > 0 && (
        <div className="center">
          <div className="chat__new">Новые сообщения</div>
        </div>
      )}

      {messageRenderer.unreed.map((msg, idx) => (
        <ChatMessage key={idx} {...msg} />
      ))}
    </>
  )
}
