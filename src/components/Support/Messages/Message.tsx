import dayjs from 'dayjs'

import { IChatMessage, ITicketDto } from '@/core/interface/Chat'

interface IChatMessageProps extends IChatMessage {}
// import 'react-photo-view/dist/react-photo-view.css'

import cns from 'classnames'

// import { PhotoView } from 'react-photo-view'
// import { ClientOnly } from '@/components/Ui'

export const ChatMessage: React.FC<IChatMessageProps> = ({
  id,
  text,
  created,
  attachments,
  isOut,
  isSeen,
}) => {
  const normalizeAttributes = ({
    maxWidth,
    maxHeight,
    type,
  }: {
    maxHeight: number
    maxWidth: number
    type: string
  }) => {
    const ar = maxHeight / maxWidth

    const minmax = (limit = 300) => ({
      maxWidth: maxWidth > limit ? limit : maxWidth,
      maxHeight: maxHeight > limit ? limit * ar : maxHeight * ar,
    })

    if (type === 'video') return minmax(420)
    return minmax(300)
  }

  return (
    <div className={cns('chat__line', isOut && 'chat__line chat__line_2')} data-id={id}>
      {/* <ClientOnly> */}
      {attachments.length > 0 &&
        attachments.map((att, idx) => (
          <div
            className="block-chat__img"
            style={normalizeAttributes({
              maxWidth: att.width,
              maxHeight: att.height,
              type: att.type,
            })}
            key={idx}
          >
            {att.type === 'photo' && (
              <div
                className="block-chat__img-wrap"
                style={{
                  paddingBottom: `${(att.height / att.width) * 100}%`,
                  // height: `${att.height}px`,
                }}
              >
                <img
                  className="block-chat__img-img"
                  src={`https://shopcore.ru/${att.src.replace('..', '')}`}
                  alt=""
                />
              </div>
            )}

            {att.type === 'video' && (
              <div
                className="block-chat__img-wrap"
                style={{
                  paddingBottom: `${(att.height / att.width) * 100}%`,
                  // height: `${att.height}px`,
                }}
              >
                <video className="block-chat__img-img _video" controls playsInline>
                  <source src={`https://shopcore.ru/${att.src.replace('..', '')}`} />
                </video>
              </div>
            )}
          </div>
        ))}
      {/* </ClientOnly> */}

      {text && (
        <div
          className={cns(
            'chat__message',
            isOut && 'chat__message_bg',
            isOut && !isSeen && 'chat__message_red',
          )}
        >
          <span className="" dangerouslySetInnerHTML={{ __html: text.replaceAll('\n', '<br/>') }} />
        </div>
      )}

      <div className="chat__date">{dayjs(created).format('DD MMM YYYY в HH:mm')}</div>
    </div>
  )
}
