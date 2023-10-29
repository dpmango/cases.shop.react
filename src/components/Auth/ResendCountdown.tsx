import cns from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'

import { InputWarningIcon } from '@/components/Ui'
import { useAppDispatch } from '@/core/store'
import { setModal } from '@/core/store/ui.store'
import { secondsToStamp } from '@/core/utils'

interface IAuthResendCountdown {
  title?: string
  message?: string
  onResendClick: () => void
  onResetClick?: () => void
}

export const AuthResendCountdown: React.FC<IAuthResendCountdown> = ({
  title = 'Подтверждение',
  onResendClick,
  onResetClick,
  message,
}) => {
  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  const [repeatTime, setRepeatTime] = useState(60)

  const dispatch = useAppDispatch()

  const handleResetClick = useCallback(() => {
    setRepeatTime(60)
    onResendClick()
  }, [])

  useEffect(() => {
    // if (!enabled) {
    //   setRepeatTime(60)
    //   return
    // }

    const updateTime = () => {
      setRepeatTime((prev) => {
        let next = prev - 1
        if (next <= 0) next = 0
        return next
      })
    }

    updateTime()
    timer.current = setInterval(updateTime, 1000)

    return () => {
      clearInterval(timer.current as NodeJS.Timeout)
    }
  }, [])

  return (
    <div className="block-form">
      <div className="block-form__title title-def title-def_sec">{title}</div>
      <div className="block-form__text text-cat">{message}</div>
      <div className="title-def title-def_m title-def_small">Письмо так и не пришло?</div>
      {repeatTime > 0 ? (
        <div className="countdown mb-2">
          <span>
            Отправить ещё раз через{' '}
            <span className="countdown__time">{secondsToStamp(repeatTime)}</span>
          </span>
        </div>
      ) : (
        <button
          type="button"
          className="btn-def btn-def_full btn-def_min mb-2"
          onClick={handleResetClick}
        >
          <span>Отправить новое письмо</span>
        </button>
      )}

      <button
        type="button"
        className="btn-def btn-def_full btn-def_min mb-2"
        onClick={() => {
          dispatch(setModal({ name: 'support' }))
        }}
      >
        <span>Написать в поддержку</span>
      </button>
      {onResetClick && (
        <button type="button" className="btn-def btn-def_full btn-def_min" onClick={onResetClick}>
          <span>Указать другую почту</span>
        </button>
      )}
    </div>
  )
}
