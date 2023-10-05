import cns from 'classnames'

import { IPopularProduct, IProductItem } from '@/core/interface/Product'
import { formatPrice } from '@/core/utils'

import { Star16Icon, StarButtonIcon } from '../Ui'

interface IProductCard extends IProductItem {}

export const ProductCardLarge: React.FC<IProductCard> = ({ id, icon, price, name }) => {
  const isFavourited = false

  return (
    <div className="products-2-el">
      <img className="products-2-el__img" src={icon} alt="" />
      <div className="products-2-el__content">
        <div className="products-2-el__title title-def title-def_sec2">
          {/* Подписка: Отряд Fortnite */}
          {name}
        </div>
        <div className="products-2-el__text text-cat">{id}</div>
        <div className="products-2-el__bottom">
          <div className="products-2-el__cost pr-cost pr-cost_big">
            <div className="pr-cost__val">{formatPrice(price.price)}</div>
          </div>
          <div className="products-2-el__acts">
            <button className="btn-def btn-def_br btn-def_small products-el__acts-el">
              <span>В корзину</span>
            </button>
            <button className="action-btn action-btn_red products-el__acts-el">
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
