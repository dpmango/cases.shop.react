import cns from 'classnames'
import { useRouter } from 'next/router'

import { useProduct } from '@/core/hooks'
import { IPopularProduct } from '@/core/interface/Product'
import { useAppSelector } from '@/core/store'
import { formatPrice } from '@/core/utils'

import { CartIcon, Star16Icon } from '../Ui'

interface IProductCard extends IPopularProduct {}

export const ProductCard: React.FC<IProductCard> = ({ category, item }) => {
  const isFavourited = false

  const { navigateToProduct } = useProduct()

  return (
    <div className="products-el" onClick={() => navigateToProduct(item.id)}>
      <img className="products-el__img" loading="lazy" src={item.icon} alt="" />
      <div className="products-el__content">
        {category && (
          <div className="products-el__cat cat-info">
            {category.icon && (
              <img className="cat-info__icon" loading="lazy" src={category.icon} alt="" />
            )}
            <div className="cat-info__body">
              <div className="cat-info__title">{category.name}</div>
            </div>
          </div>
        )}

        <div className="products-el__title title-def title-def_med">{item.name}</div>
        <div className="products-el__bottom">
          <div className="products-el__cost pr-cost">
            <div className="pr-cost__new">{formatPrice(item.price.salePrice)}</div>
            {item.price.salePrice !== item.price.price && (
              <div className="pr-cost__old">{formatPrice(item.price.price)}</div>
            )}
          </div>
          <div className="products-el__acts" onClick={(e) => e.stopPropagation()}>
            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
              <div className="action-btn__content" onClick={() => navigateToProduct(item.id)}>
                <div className="action-btn__icon">
                  <CartIcon />
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
