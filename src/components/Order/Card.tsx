import cns from 'classnames'
import { useCallback, useEffect, useState } from 'react'

import { useScrollLock } from '@/core/hooks'

import { Close3Icon, DislikeIcon, LikeIcon, OrderCardDecorSvg } from '../Ui'

interface IOrderCard {
  status: 1 | 2 | 3 | 4 | 5
  background: string
  supportID?: string
  supportUnread?: boolean
}

export const OrderCard: React.FC<IOrderCard> = ({
  background,
  status,
  supportID,
  supportUnread,
}) => {
  const [isFixed, setIsFixed] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()

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
    <div className={cns('orders-el', isFixed && 'fixed')} onClick={handleCardClick}>
      <img className="orders-el__bg" src={background} alt="" />
      <div className="orders-el__body">
        <div className="orders-el__mob" onClick={(e) => e.stopPropagation()}>
          <div className="orders-el__mob-prev close-btn" onClick={() => setIsFixed(false)}>
            <Close3Icon />
          </div>
          <div className="orders-el__mob-title">Информция о заказе</div>
        </div>

        {status === 1 && (
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
        )}

        {supportID ? (
          <div
            className={cns('orders-el__support support-card', supportUnread && 'support-card_red')}
          >
            <div className="support-card__bg">
              <OrderCardDecorSvg />
              <div className="support-card__count">1</div>
            </div>
            <div className="support-card__title title-small">Служба поддержки</div>
            <div className="support-card__title2 title-def title-def_med">
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
            <button className="info-card__btn btn-def btn-def_full btn-def_small btn-def_gray">
              <span>Написать в поддержку</span>
            </button>
          </div>
        )}

        <div className="orders-el__content">
          <div className="orders-el__cat cat-info cat-info_big">
            <img className="cat-info__icon" src="../img/cat/Heartstone.svg" alt="" />
            <div className="cat-info__body">
              <div className="cat-info__title">Heartstone</div>
            </div>
          </div>
          <div className="orders-el__title title-def title-def_sec2">1 500 рунических камней</div>
          <div className="orders-el__date">Заказ от 25 августа 2023 в 19:11:43</div>
          <div className="orders-el__cost text-info text-info_small">1 424 ₽</div>
        </div>
      </div>
    </div>
  )
}
