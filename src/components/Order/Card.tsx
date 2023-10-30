import cns from 'classnames'
import dayjs from 'dayjs'
import { useCallback, useEffect, useState } from 'react'

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

  const dispatch = useAppDispatch()

  const handleCardClick = useCallback(() => {
    setIsFixed(!isFixed)
  }, [isFixed])

  useEffect(() => {
    if (isFixed) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [isFixed])

  return (
    <div className={cns('orders-el', isFixed && 'fixed')} onClick={handleCardClick} data-id={id}>
      <img className="orders-el__bg" loading="lazy" src={item.icon} alt="" />
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
              <div className="rating-btns__btn rating-btns__btn_green">
                <LikeIcon />
              </div>
              <div className="rating-btns__btn rating-btns__btn_red">
                <DislikeIcon />
              </div>
            </div>
          )}
        </div>

        {/* {status === 1 && (
          <div className="orders-el__info orders-el__info_gray">
            <div className="orders-el__tag tag tag_gray">В очереди</div>
            <p className="text-info text-info_small">
              Ваш заказ принят и его возьмет в работу первый освободившейся оператор.
            </p>
          </div>
        )}
        {status === 2 && (
          <div className="orders-el__info orders-el__info_yellow">
            <div className="orders-el__tag tag tag_yellow">Выполняется</div>
            <p className="text-info text-info_small">
              Оператор работает над вашим заказом. Скоро всё будет готово!
            </p>
          </div>
        )}
        {status === 3 && (
          <div className="orders-el__info orders-el__info_pink">
            <div className="orders-el__tag tag tag_pink">Решение вопроса</div>
            <p className="text-info text-info_small">
              У оператора возникли сложности с выполнением вашего заказа. Смотрите сообщение
              от службы поддержки.
            </p>
          </div>
        )}
        {status === 4 && (
          <div className="orders-el__info orders-el__info_green">
            <div className="orders-el__tag tag tag_green">Выполнен</div>
            <p className="text-info text-info_small">
              Ваш заказ готов! По возможности оцените работу оператора:
            </p>
            <div className="rating-btns orders-el__rating">
              <div className="rating-btns__btn rating-btns__btn_green">
                <LikeIcon />
              </div>
              <div className="rating-btns__btn rating-btns__btn_red">
                <DislikeIcon />
              </div>
            </div>
          </div>
        )}
        {status === 5 && (
          <div className="orders-el__info orders-el__info_red">
            <div className="orders-el__tag tag tag_red">Отменён</div>
            <p className="text-info text-info_small">
              Наш оператор не смог выполнить ваш заказ. Подробности смотрите в сообщении от службы
              поддержки.
            </p>
          </div>
        )} */}

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
              {category.icon && (
                <img className="cat-info__icon" loading="lazy" src={category.icon} alt="" />
              )}
              <div className="cat-info__body">
                <div className="cat-info__title">{category.name}</div>
              </div>
            </div>
          )}

          <div className="orders-el__title title-def title-def_sec2">1 500 рунических камней</div>
          <div className="orders-el__date">
            Заказ от {dayjs(created).format('DD MMMM YYYY в HH:mm')}
          </div>
          <div className="orders-el__cost text-info text-info_small">
            {formatPrice(item.price.salePrice)}
          </div>
        </div>
      </div>
    </div>
  )
}
