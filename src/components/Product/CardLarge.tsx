import cns from 'classnames'

import { useProduct } from '@/core/hooks'
import { IProductCategory, IProductItem } from '@/core/interface/Product'
import { formatPrice } from '@/core/utils'

import { Star16Icon, StarButtonIcon } from '../Ui'

interface IProductCard extends IProductItem {
  category: IProductCategory
}

export const ProductCardLarge: React.FC<IProductCard> = ({
  id,
  icon,
  price,
  name,
  description,
  favourite,
  category,
}) => {
  const { isFavourted, navigateToProduct, handleFavourite } = useProduct({ favourite })

  return (
    <div className="products-2-el" onClick={() => navigateToProduct(id, category.id)}>
      <img className="products-2-el__img" loading="lazy" src={icon} alt="" />
      <div className="products-2-el__content">
        <div className="products-2-el__title title-def title-def_sec2">{name}</div>
        <div className="products-2-el__text text-cat">{description}</div>
        <div className="products-2-el__bottom">
          <div className="products-2-el__cost pr-cost pr-cost_big">
            <div className="pr-cost__val">{formatPrice(price.price)}</div>
          </div>
          <div className="products-2-el__acts" onClick={(e) => e.stopPropagation()}>
            <button
              className="btn-def btn-def_br btn-def_small products-el__acts-el"
              onClick={() => navigateToProduct(id, category.id)}
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
