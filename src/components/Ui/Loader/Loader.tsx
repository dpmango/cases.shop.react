import './_loader.scss'

import cns from 'classnames'
import { FC, useEffect, useRef, useState } from 'react'

interface ILoaderProps {
  theme?: 'inline' | 'page' | 'overlay'
  loading?: boolean
  threshold?: number
}

const LoaderComponent: FC<ILoaderProps> = ({ theme = 'inline', loading, threshold = 300 }) => {
  const [loadingState, setLoadingState] = useState<boolean>(true)

  const timeLoading: { current: NodeJS.Timeout | null } = useRef(null)
  useEffect(() => {
    if (loading) {
      timeLoading.current = setTimeout(() => {
        setLoadingState(true)
      }, threshold)
    } else {
      setLoadingState(false)
    }

    return () => {
      clearInterval(timeLoading.current as NodeJS.Timeout)
    }
  }, [loading])

  return (
    <div
      className={cns('loading-block', 'loader', theme && `_${theme}`, loadingState && '_active')}
    >
      <div className="loading-block__pic">
        <div className="loader-anim">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {theme === 'page' && (
        <>
          <div className="loading-block__title h5-title">Загрузка</div>
          <p className="p-regular">Пожалуйста ожидайте</p>
        </>
      )}
    </div>
  )
}

export default LoaderComponent
