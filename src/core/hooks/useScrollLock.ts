import { useCallback, useEffect, useState } from 'react'

export const useScrollLock = () => {
  const [mounted, setMouted] = useState(false)

  const lockScroll = useCallback(() => {
    document.body.dataset.scrollLock = 'true'
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = 'var(--scrollbar-compensation)'
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''

    delete document.body.dataset.scrollLock
  }, [])

  useEffect(() => {
    if (document) {
      const scrollBarCompensation = window.innerWidth - document.body.offsetWidth
      document.body.style.setProperty('--scrollbar-compensation', `${scrollBarCompensation}px`)
    }
    setMouted(true)
  }, [mounted])

  return {
    lockScroll,
    unlockScroll,
  }
}
