import cns from 'classnames'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { rateOrder } from '@/core/api'
import { useScrollLock } from '@/core/hooks'
import { IUserOrderDto } from '@/core/interface/Order'
import { useAppDispatch } from '@/core/store'
import { setModal } from '@/core/store/ui.store'
import { formatPrice } from '@/core/utils'

import { Close3Icon, DislikeIcon, LikeIcon, OrderCardDecorSvg } from '../Ui'

interface IOrderCard extends IUserOrderDto {}

export const OrderCard: React.FC<IOrderCard> = ({
  id,
  status,
  created,
  category,
  item,
  ticket,
}) => {
  const [isFixed, setIsFixed] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const [rateStatus, setRateStatus] = useState<'like' | 'dislike' | null>(null)
  const [isPendingRate, setIsPendingRate] = useState(false)

  const dispatch = useAppDispatch()

  // оценка заказа
  const handleRate = async (status: 'like' | 'dislike') => {
    if (!ticket?.id || isPendingRate) return

    setIsPendingRate(true)
    const { data, error } = await rateOrder({ action: status, ticketId: ticket?.id })

    if (data) {
      setRateStatus(status)
    } else {
      toast.error('Ошибка, попробуйте снова')
    }

    setIsPendingRate(false)
  }

  // верстка
  const handleCardClick = () => {
    setIsFixed(!isFixed)
  }

  useEffect(() => {
    if (isFixed) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [isFixed])

  return (
    <div className={cns('orders-el', isFixed && 'fixed')} onClick={handleCardClick} data-id={id}>
      {item.background && (
        <img className="orders-el__bg" loading="lazy" src={item.background} alt="" />
      )}
      <div className="orders-el__body">
        <div className="orders-el__mob" onClick={(e) => e.stopPropagation()}>
          <div className="orders-el__mob-prev close-btn" onClick={() => setIsFixed(false)}>
            <Close3Icon />
          </div>
          <div className="orders-el__mob-title">Информция о заказе</div>
        </div>

        <div className="orders-el__info orders-el__info_gray">
          <div className="orders-el__tag tag" style={{ backgroundColor: status.color }}>
            {status.text}
          </div>
          <p className="text-info text-info_small">{status.description}</p>
          {status.like && (
            <div className="rating-btns orders-el__rating">
              {!rateStatus && (
                <>
                  <div
                    className={cns(
                      'rating-btns__btn rating-btns__btn_green',
                      rateStatus === 'like' && '_active',
                    )}
                    onClick={() => handleRate('like')}
                  >
                    <LikeIcon />
                  </div>
                  <div
                    className={cns(
                      'rating-btns__btn rating-btns__btn_red',
                      rateStatus === 'dislike' && '_active',
                    )}
                    onClick={() => handleRate('dislike')}
                  >
                    <DislikeIcon />
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {ticket ? (
          <div className={cns('orders-el__support support-card', 0 && 'support-card_red')}>
            <div className="support-card__bg">
              <OrderCardDecorSvg />
              <div className="support-card__count">1</div>
            </div>
            <div className="support-card__title title-small">Служба поддержки</div>
            <div
              className="support-card__title2 title-def title-def_med"
              onClick={() => {
                dispatch(setModal({ name: 'support', params: { ticketId: ticket.id } }))
              }}
            >
              Вы оставили обращение
            </div>
            <div className="text-cat text-cat_small support-card__text">
              Скоро вам ответит первый освободившейся оператор
            </div>
          </div>
        ) : (
          <div className="orders-el__support info-card">
            <div className="info-card__title title-small">Есть вопросы?</div>
            <div className="text-cat text-cat_small">
              Поддержка поможет в любой ситуации! Просто опишите нам свою проблему.
            </div>
            <button
              className="info-card__btn btn-def btn-def_full btn-def_small btn-def_gray"
              onClick={() => {
                dispatch(setModal({ name: 'support', params: { orderId: id } }))
              }}
            >
              <span>Написать в поддержку</span>
            </button>
          </div>
        )}

        <div className="orders-el__content">
          {category && (
            <div className="orders-el__cat cat-info cat-info_big">
              {category.backgrounds && (
                <img className="cat-info__icon" loading="lazy" src={category.backgrounds} alt="" />
              )}
              <div className="cat-info__body">
                <div className="cat-info__title">{category.name}</div>
              </div>
            </div>
          )}

          <div className="orders-el__title title-def title-def_sec2">{item.name}</div>
          <div className="orders-el__date">
            Заказ от {dayjs.unix(created).format('DD MMMM YYYY в HH:mm')}
          </div>
          <div className="orders-el__cost text-info text-info_small">
            {formatPrice(item.price.salePrice)}
          </div>
        </div>
      </div>
    </div>
  )
}
