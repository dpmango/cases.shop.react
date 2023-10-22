import 'yet-another-react-lightbox/styles.css'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Video from 'yet-another-react-lightbox/plugins/video'

import { ChatMessage } from '@/components/Support'
import { IAttachment } from '@/core/interface/Chat'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { getChatMessagesService } from '@/core/store/chat.store'

export const ChatMessages = () => {
  const { activeDialog, dialogMessages } = useAppSelector((store) => store.chatStore)
  const dispatch = useAppDispatch()

  const timer: { current: NodeJS.Timeout | null } = useRef(null)

  const [galleryOpened, setGalleryOpened] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

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

  const lightboxSlides = useMemo(() => {
    const attachements = dialogMessages.reduce((acc, x) => {
      if (x.attachments.length) {
        x.attachments.forEach((attachment) => {
          if (attachment.src && attachment.width && attachment.height) {
            acc.push(attachment)
          }
        })
      }

      return acc
    }, [] as IAttachment[])

    return attachements.map((x) => {
      const { type, src, ...rest } = x
      const source = `https://shopcore.ru${src.replace('..', '')}`

      if (type === 'video') {
        let sourceSplit = source.split('.')
        const videoType = sourceSplit[sourceSplit.length - 1]

        return {
          ...rest,
          type,
          sources: [
            {
              src: source,
              type: `video/${videoType}`,
            },
          ],
          autoPlay: true,
        }
      } else {
        return {
          ...rest,
          src: source,
        }
      }
    })
  }, [dialogMessages])

  const handleGalleryOpen = useCallback(
    (attachment: IAttachment) => {
      const sourceToFind = `https://shopcore.ru${attachment.src.replace('..', '')}`

      const targetIndex = lightboxSlides.findIndex(
        // @ts-expect-error
        (x) => (x.src || x.sources[0].src) === sourceToFind,
      )

      setGalleryIndex(targetIndex)
      setGalleryOpened(true)
    },
    [lightboxSlides],
  )

  return (
    <>
      {messageRenderer.history.map((msg, idx) => (
        <ChatMessage key={idx} {...msg} openGallery={handleGalleryOpen} />
      ))}

      {messageRenderer.unreed.length > 0 && (
        <div className="center">
          <div className="chat__new">Новые сообщения</div>
        </div>
      )}

      {messageRenderer.unreed.map((msg, idx) => (
        <ChatMessage key={idx} {...msg} openGallery={handleGalleryOpen} />
      ))}

      <Lightbox
        open={galleryOpened}
        index={galleryIndex}
        on={{ view: ({ index: currentIndex }) => setGalleryIndex(currentIndex) }}
        close={() => setGalleryOpened(false)}
        plugins={[Video]}
        slides={lightboxSlides}
      />
    </>
  )
}
