import { useWindowSize } from '@uidotdev/usehooks'
import cns from 'classnames'
import throttle from 'lodash/throttle'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

import { ChatCreateMessage, ChatMessages, ChatSidebar } from '@/components/Support'
import { getMessagesByDialog } from '@/core/api'
import { useAppDispatch, useAppSelector } from '@/core/store'
import {
  getChatListService,
  getChatMessagesService,
  getThemesService,
  markReadService,
  setActiveDialog,
  setCreateMode,
} from '@/core/store/chat.store'
import { closeModals, setModal } from '@/core/store/ui.store'
import { scrollWithSpeed } from '@/core/utils'

import { Close2Icon, Close3Icon, EmptyState, UiModal } from '../Ui'

export const SupportModal: React.FC<{}> = ({}) => {
  const { activeDialog, createMode, chatList, dialogMessages } = useAppSelector(
    (store) => store.chatStore,
  )
  const { modal } = useAppSelector((store) => store.uiState)

  const [readMessageMiddleware, setReadMessagesMiddleware] = useState<string[]>([])

  const dispatch = useAppDispatch()
  const size = useWindowSize()

  const messagesScrollerRef = useRef<HTMLDivElement | null>(null)

  const activeDialogObj = useMemo(() => {
    return chatList.find((x) => x.id === activeDialog)
  }, [activeDialog, chatList])

  const handlePrevClick = () => {
    dispatch(setActiveDialog(null))
    dispatch(setCreateMode(false))
    // document.querySelector('.block-main-content__info')?.classList.add('hidden')
    // document.querySelector('.block-tabs-el_chat')?.classList.add('active')
  }

  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  useEffect(() => {
    const initialRequests = async () => {
      dispatch(getChatListService())
      dispatch(getThemesService())
    }

    if (chatList.length === 0 || modal === 'support') {
      initialRequests()
    }

    timer.current = setInterval(
      () => {
        if (modal === 'support') {
          dispatch(getChatListService())
        }
      },
      1 * 30 * 1000,
    )

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [modal])

  const scrollToLastMessage = () => {
    if (messagesScrollerRef.current) {
      scrollWithSpeed(messagesScrollerRef.current.scrollHeight, 100, messagesScrollerRef.current)
    }
  }

  const shouldShowDialog = useMemo(() => {
    return !!activeDialog || createMode
    // if (size.width! > 900) {
    //   return activeDialog
    // } else {
    //   return activeDialog
    //   // && ui.mobileTab === 'chat'
    // }
  }, [size.width, activeDialog, createMode])

  const handleScroller = useCallback(
    throttle(() => {
      if (createMode) return
      const unreadIds = dialogMessages.filter((x) => !x.isSeen).map((x) => x.id)

      const domMessages = Array.from(document.querySelectorAll('.chat__line')).filter((el) => {
        const id = el.getAttribute('data-id')
        if (id) return unreadIds.includes(id)
        return false
      })

      domMessages.forEach((el) => {
        const elTop = el.getBoundingClientRect().top
        const id = el.getAttribute('data-id')
        const $sRef = messagesScrollerRef?.current

        let isVisible = elTop > 0
        isVisible = isVisible && elTop <= ($sRef?.clientHeight || 0)

        if ($sRef?.clientHeight === $sRef?.scrollHeight) {
          isVisible = true
        }

        if (activeDialog && isVisible && id && !readMessageMiddleware.includes(id)) {
          setReadMessagesMiddleware((prev) => [...prev, id])
          dispatch(markReadService({ ticketId: activeDialog, msgID: id }))
          dispatch(getChatMessagesService(activeDialog))
        }
      })
    }, 300),
    [dialogMessages, activeDialog, readMessageMiddleware, createMode],
  )

  useLayoutEffect(() => {
    if (activeDialog && messagesScrollerRef?.current && shouldShowDialog) {
      scrollToLastMessage()
      handleScroller()
      setTimeout(scrollToLastMessage, 300)
    }
  }, [activeDialog, shouldShowDialog])

  const mLength = useRef(dialogMessages.length)
  useEffect(() => {
    if (dialogMessages.length === mLength.current) return
    mLength.current = dialogMessages.length

    if (activeDialog && messagesScrollerRef?.current && shouldShowDialog) {
      scrollToLastMessage()
      handleScroller()
    }
  }, [dialogMessages])

  useLayoutEffect(() => {
    if (messagesScrollerRef?.current) {
      handleScroller()
      messagesScrollerRef.current.addEventListener('scroll', handleScroller)
    }

    return () => {
      messagesScrollerRef?.current?.removeEventListener('scroll', handleScroller)
    }
  }, [messagesScrollerRef, shouldShowDialog, dialogMessages])

  return (
    <UiModal className="modal-def" name="support">
      <div className="modal-def__wrap">
        <div className="modal-def__content modal-content modal-chat">
          <div
            className="modal-content__close modal-def__close close-btn"
            onClick={() => {
              dispatch(closeModals())
            }}
          >
            <Close2Icon />
          </div>
          <div className="container-def">
            <div className="chat">
              <div className="chat__content">
                <ChatSidebar />

                <div className={cns('chat__body', (activeDialog || createMode) && '_visible')}>
                  <div className="chat__body-mob">
                    <div className="close-btn chat__prev" onClick={handlePrevClick}>
                      <Close3Icon />
                    </div>
                    <div className="chat__body-mob-title title-small">{activeDialogObj?.title}</div>
                  </div>
                  {shouldShowDialog && (
                    <>
                      <div className="chat__body-content">
                        <div className="chat__body-wrap" ref={messagesScrollerRef}>
                          <ChatMessages />
                        </div>
                      </div>

                      <ChatCreateMessage onSuccessCallback={scrollToLastMessage} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-def__overlay overlay" onClick={() => dispatch(closeModals())}></div>
      </div>
    </UiModal>
  )
}
