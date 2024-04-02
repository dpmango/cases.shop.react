import cns from 'classnames'
import { useEffect, useMemo } from 'react'

import { useScrollLock } from '@/core/hooks'
import { useAppSelector } from '@/core/store'

interface IModal {
  className?: string
  name: string
  children: ReactSlot
}

export const Modal: React.FC<IModal> = ({ className, name, children }) => {
  const { modal } = useAppSelector((store) => store.uiState)
  const { activeDialog, createMode } = useAppSelector((store) => store.chatStore)
  const { lockScroll, unlockScroll } = useScrollLock()

  const isModalActive = useMemo(() => {
    return modal === name
  }, [name, modal])

  useEffect(() => {
    if (!name) return

    if (isModalActive) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [isModalActive])

  return (
    <div
      className={cns(className, (activeDialog || createMode) && 'open')}
      id={`modal-${name}`}
      style={{ display: isModalActive ? 'block' : 'none' }}
    >
      {children}
    </div>
  )
}
