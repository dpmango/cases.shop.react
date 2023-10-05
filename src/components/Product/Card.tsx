import cns from 'classnames'

import { IPopularProduct } from '@/core/interface/Product'
import { formatPrice } from '@/core/utils'

import { CardIcon, Star16Icon } from '../Ui'

interface IProductCard extends IPopularProduct {}

export const ProductCard: React.FC<IProductCard> = ({ category, item }) => {
  const isFavourited = false

  return (
    <div className="products-el">
      {/* <img className="products-el__img" src="/img/pr_bg.jpg" alt="" /> */}
      <div className="products-el__content">
        <div className="products-el__cat cat-info">
          <img className="cat-info__icon" src="/img/cat/heartstone.svg" alt="" />
          <div className="cat-info__body">
            <div className="cat-info__title">{category.name}</div>
          </div>
        </div>
        <div className="products-el__title title-def title-def_med">{item.name}</div>
        <div className="products-el__bottom">
          <div className="products-el__cost pr-cost">
            <div className="pr-cost__new">{formatPrice(item.price.salePrice)}</div>
            <div className="pr-cost__old">{formatPrice(item.price.price)}</div>
          </div>
          <div className="products-el__acts">
            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
              <div className="action-btn__content">
                <div className="action-btn__icon">
                  <CardIcon />
                </div>
              </div>
            </button>
            <button
              className={cns(
                'action-btn action-btn_small products-el__acts-el',
                isFavourited && 'action-btn_red',
              )}
            >
              <div className="action-btn__content">
                <div className="action-btn__icon">
                  <Star16Icon />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
