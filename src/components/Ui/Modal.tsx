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
    <div className={className} id={name} style={{ display: isModalActive ? 'block' : 'none' }}>
      {children}
    </div>
  )
}
