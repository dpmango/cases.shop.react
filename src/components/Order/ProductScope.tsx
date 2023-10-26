import cns from 'classnames'
import { useCallback, useEffect, useState } from 'react'

import { IProductCategory, IProductItem, IProductPrice } from '@/core/interface/Product'
import { formatPrice } from '@/core/utils'

import { Close3Icon, DislikeIcon, LikeIcon, OrderCardDecorSvg } from '../Ui'

interface IOrderProductScope {
  product: IProductItem
  category: IProductCategory
}

export const OrderProductScope: React.FC<IOrderProductScope> = ({ category, product }) => {
  return (
    <div className="products-2-el products-2-el_3">
      <img className="products-2-el__img" src={product.icon} alt="" />
      <div className="products-2-el__content">
        <div className="products-2-el__top">
          <div className="products-2-el__cat cat-info">
            {category.icon && <img className="cat-info__icon" src={category.icon} alt="" />}
            <div className="cat-info__body">
              <div className="cat-info__title">{category.name}</div>
            </div>
          </div>
        </div>
        <div className="products-2-el__title title-def title-def_sec2">{product.name}</div>
        {product.description && (
          <div className="products-2-el__text text-cat">{product.description}</div>
        )}
        {product.features && (
          <div className="products-2-el__descrp">
            <div className="title-def title-def_small products-2-el__descrp-title">
              {product.features.title}
            </div>
            <ul className="ul-check">
              {product.features.list.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>
          </div>
        )}

        {product.note && <div className="text-cat text-cat_small">{product.note}</div>}
        <div className="products-2-el__bottom">
          <div className="products-2-el__cost pr-cost pr-cost_big">
            <div className="pr-cost__val">{formatPrice(product.price.salePrice)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
