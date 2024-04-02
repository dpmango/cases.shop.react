import cns from 'classnames'
import { useEffect, useRef, useState } from 'react'

interface ILoaderProps {
  theme: 'inline' | 'page'
  active: boolean
}

export const Loader: React.FC<ILoaderProps> = ({ active = true, theme = 'inline' }) => {
  const [showLoader, setShowLoader] = useState(false)

  const timer: { current: NodeJS.Timeout | null } = useRef(null)
  useEffect(() => {
    if (active) {
      timer.current = setTimeout(() => {
        setShowLoader(true)
      }, 600)
    } else {
      setShowLoader(false)
      clearTimeout(timer.current as NodeJS.Timeout)
    }
  }, [active])

  return (
    <div className={cns('loader', theme, showLoader && '_active')}>
      <div className="loader__wrapper">
        <span className="loader-animation"></span>
      </div>
    </div>
  )
}
