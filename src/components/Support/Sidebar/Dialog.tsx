import 'dayjs/locale/ru'

// import { useWindowSize } from '@uidotdev/usehooks'
import cns from 'classnames'
import dayjs from 'dayjs'
import { toast } from 'react-toastify'

import { OrderCardDecorSvg } from '@/components/Ui/Icons'

dayjs.locale('ru')

import { pinTicket } from '@/core/api'
import type { ITicketDto } from '@/core/interface/Chat'
import { useAppDispatch } from '@/core/store'
import { setActiveDialog, setPinToggle } from '@/core/store/chat.store'

interface IChatDialog extends ITicketDto {
  selected?: boolean
  disabled?: boolean
}

export const ChatDialog: React.FC<IChatDialog> = ({
  id,
  title,
  modified,
  created,
  selected,
  unreadMessages,
  lastMessage,
  theme,
  status,
  isPinned,
  ...props
}) => {
  // const size = useWindowSize()
  const dispatch = useAppDispatch()

  const handleDialogClick = () => {
    dispatch(
      setActiveDialog({
        id,
        title,
        lastMessage,
        modified,
        created,
        unreadMessages,
        theme,
        status,
        isPinned,
        ...props,
      }),
    )
  }

  // const handlePin = async (e: any) => {
  //   e.stopPropagation()

  //   const { data } = (await pinTicket(id)) as any

  //   if (data.status === true) {
  //     dispatch(setPinToggle(id))
  //   } else {
  //     toast.error(data.message)
  //   }
  // }

  return (
    <div
      className={cns(
        'chat__el chat-el',
        status === 1 && '_lock',
        selected && 'active',
        isPinned && '_pined',
      )}
      onClick={handleDialogClick}
    >
      {unreadMessages > 0 && (
        <div className="chat-el__bg">
          <OrderCardDecorSvg />
          <div className="chat-el__count">{unreadMessages}</div>
        </div>
      )}

      <div className="chat-el__content">
        <div className="chat-el__title">{title}</div>
        <div className="chat-el__date">{dayjs(modified).format('DD MMM YYYY в HH:mm')}</div>
      </div>
      {/* <div className="chat-el_pin" onClick={handlePin}>
          <PinSvg />
        </div> */}
    </div>
  )
}
