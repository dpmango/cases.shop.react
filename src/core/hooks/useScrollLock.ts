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

//   function getScrollBarWidth() {
//     var e = document.createElement('p')
//     ;(e.style.width = '100%'), (e.style.height = '200px')
//     var t = document.createElement('div')
//     ;(t.style.position = 'absolute'),
//       (t.style.top = '0px'),
//       (t.style.left = '0px'),
//       (t.style.visibility = 'hidden'),
//       (t.style.width = '200px'),
//       (t.style.height = '150px'),
//       (t.style.overflow = 'hidden'),
//       t.appendChild(e),
//       document.body.appendChild(t)
//     var l = e.offsetWidth
//     t.style.overflow = 'scroll'
//     e = e.offsetWidth
//     return l == e && (e = t.clientWidth), document.body.removeChild(t), l - e
//   }
