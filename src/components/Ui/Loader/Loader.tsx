import './_loader.scss'

import cns from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'

interface ILoaderProps {
  theme?: 'inline' | 'page' | 'overlay'
  active?: boolean
  threshold?: number
}

const LoaderComponent: FC<ILoaderProps> = ({ theme = 'inline', active, threshold = 300 }) => {
  const [loadingState, setLoadingState] = useState<boolean>(true)

  const timeLoading: { current: NodeJS.Timeout | null } = useRef(null)
  useEffect(() => {
    if (active) {
      timeLoading.current = setTimeout(() => {
        setLoadingState(true)
      }, threshold)
    } else {
      setLoadingState(false)
    }

    return () => {
      clearInterval(timeLoading.current as NodeJS.Timeout)
    }
  }, [active])

  return (
    <div className={cns('loading-block', 'loader', theme && `_${theme}`, loadingState && 'active')}>
      <div className="loading-block__pic">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {theme === 'page' && (
        <>
          <div className="loading-block__title">Загрузка</div>
          Пожалуйста ожидайте
        </>
      )}
    </div>
  )
}

export default LoaderComponent
