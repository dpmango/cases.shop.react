import './_modal.scss'

import cns from 'classnames'
import { useEffect } from 'react'

import { SvgIcon } from '@/components/Ui'

interface IModalProps {
  name: string
  title?: string
  titleIcon?: string
  children: ReactSlot
}

const Modal: React.FC<IModalProps> = ({ name, title, titleIcon, children }) => {
  const { lockScroll, unlockScroll } = useScrollLock()
  const { modal, modalParams } = useAppSelector((state) => state.uiState)
  const dispatch = useAppDispatch()

  const isModalActive = useMemo(() => {
    return modal.includes(name)
  }, [name, modal])

  const closeModal = () => {
    dispatch(closeModals())
  }

  useEffect(() => {
    if (isModalActive) {
      lockScroll()
    } else {
      unlockScroll()
    }

    return () => {
      unlockScroll()
    }
  }, [isModalActive])

  return (
    <div className={cns('modal', `modal--${name}`, modal.includes(name) && '_active')}>
      <div className="modal__background" onClick={closeModal} />

      <div className="modal__body">
        <div className="modal__close" onClick={closeModal}>
          <SvgIcon name="close" />
        </div>
        <div className="modal__head">
          {title && (
            <>
              {titleIcon && <SvgIcon name={titleIcon} />}
              <div className="modal__title h6-title">
                <p>{title}</p>
              </div>
            </>
          )}
        </div>

        <div className="modal__content">{children}</div>
      </div>
    </div>
  )
}

export default Modal
