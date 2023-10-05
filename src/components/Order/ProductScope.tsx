import cns from 'classnames'
import { useCallback, useEffect, useState } from 'react'

import { useScrollLock } from '@/core/hooks'
import { IProductPrice } from '@/core/interface/Product'
import { formatPrice } from '@/core/utils'

import { Close3Icon, DislikeIcon, LikeIcon, OrderCardDecorSvg } from '../Ui'

interface IOrderProductScope {
  category: {
    icon: string
    name: string
  }
  name: string
  price: IProductPrice
  icon: string
  description?: string
  features?: {
    title: string
    list: string[]
  }
  note?: string
}

export const OrderProductScope: React.FC<IOrderProductScope> = ({
  category,
  name,
  description,
  icon,
  features,
  note,
  price,
}) => {
  return (
    <div className="products-2-el products-2-el_3">
      <img className="products-2-el__img" src={icon} alt="" />
      <div className="products-2-el__content">
        <div className="products-2-el__top">
          <div className="products-2-el__cat cat-info">
            <img className="cat-info__icon" src={category.icon} alt="" />
            <div className="cat-info__body">
              <div className="cat-info__title">{category.name}</div>
            </div>
          </div>
        </div>
        <div className="products-2-el__title title-def title-def_sec2">{name}</div>
        <div className="products-2-el__text text-cat">{description}</div>
        {features && (
          <div className="products-2-el__descrp">
            <div className="title-def title-def_small products-2-el__descrp-title">
              {features.title}
            </div>
            <ul className="ul-check">
              {features.list.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>
          </div>
        )}

        {note && <div className="text-cat text-cat_small">{note}</div>}
        <div className="products-2-el__bottom">
          <div className="products-2-el__cost pr-cost pr-cost_big">
            <div className="pr-cost__val">{formatPrice(price.salePrice)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
