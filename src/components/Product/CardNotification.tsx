import cns from 'classnames'

import { useProduct } from '@/core/hooks'
import { INotificationDto } from '@/core/interface/Notification'
import { formatPrice } from '@/core/utils'

import { Star16Icon, StarButtonIcon } from '../Ui'

interface IProductCard extends INotificationDto {}

export const ProductCardNotification: React.FC<IProductCard> = ({
  id,
  banner,
  seen,
  created,
  item,
  category,
}) => {
  const { isFavourted, navigateToProduct, handleFavourite } = useProduct({
    favourite: item.favourite,
  })

  return (
    <div
      data-notification-id={id}
      className="products-2-el products-2-el_2 products-2-el_m"
      onClick={() => navigateToProduct(item.id, category?.id)}
    >
      <img className="products-2-el__img" loading="lazy" src={item.icon} alt="" />

      <div className="products-2-el__content">
        <div className="products-2-el__top">
          <div className="products-2-el__tag tag">{banner}</div>
          {category && (
            <div className="products-2-el__cat cat-info cat-info_big">
              {category.icon && <img className="cat-info__icon" src={category.icon} alt="" />}
              <div className="cat-info__body">
                <div className="cat-info__title">{category.name}</div>
              </div>
            </div>
          )}
        </div>
        <div className="products-2-el__title title-def title-def_sec2">{item.name}</div>
        <div className="products-2-el__text text-cat">{item.description}</div>
        <div className="products-2-el__bottom">
          <div className="products-2-el__cost pr-cost pr-cost_big">
            <div className="pr-cost__val">{formatPrice(item.price.salePrice)}</div>
            {item.price.price !== item.price.salePrice && (
              <div className="pr-cost__old">{formatPrice(item.price.price)}</div>
            )}
          </div>

          <div className="products-2-el__acts" onClick={(e) => e.stopPropagation()}>
            <button
              className="btn-def btn-def_br btn-def_small products-el__acts-el"
              onClick={() => navigateToProduct(id, category?.id)}
            >
              <span>Купить</span>
            </button>
            <button
              className={cns('action-btn products-el__acts-el', isFavourted && 'action-btn_red')}
              onClick={() => handleFavourite({ id: id })}
            >
              <div className="action-btn__content">
                <div className="action-btn__icon">
                  <StarButtonIcon />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
