import cns from 'classnames'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { BackIcon, NotificationIcon, StarButtonIcon } from '@/components/Ui'
import { useProduct } from '@/core/hooks'
import { IProductCategory } from '@/core/interface/Product'
import { formatPrice } from '@/core/utils'

interface IProductCard {
  coinsCategory?: IProductCategory
}

export const ProductCoinCard: React.FC<IProductCard> = ({ coinsCategory }) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const [deliveryType, setDeliveryType] = useState<string | null>(null)

  const allTags = useMemo(() => {
    if (!coinsCategory) return []

    return coinsCategory.items.map((x) => {
      const haveSale = x.price.price !== x.price.salePrice

      return {
        haveSale,
        ...x.tags,
      } as {
        haveSale: boolean
        amount: number
        type: string
      }
    })
  }, [coinsCategory])

  const valuesAvailable = useMemo(() => {
    const values = allTags.map((x) => x['amount']).filter((x) => x)
    return [...new Set(values)] as number[]
  }, [allTags])

  const deliveryAvailable = useMemo(() => {
    if (!selectedValue) return []

    const filteredByAmount = allTags.filter((x) => x['amount'] === selectedValue)
    const haveSaleInGroup = filteredByAmount.some((x) => x.haveSale)

    const values = filteredByAmount
      .map((x) => ({
        value: x.type,
        sale: x.haveSale,
      }))
      .filter((x) => x)

    return [...new Set(values)] as {
      value: string
      sale: boolean
    }[]
  }, [allTags, selectedValue])

  const currentProduct = useMemo(() => {
    if (!coinsCategory || !selectedValue || !deliveryType) return null

    return coinsCategory.items.find(
      (x) => x.tags['amount'] === selectedValue && x.tags['type'] === deliveryType,
    )
  }, [coinsCategory, selectedValue, deliveryType])

  const { navigateToProduct, handleFavourite } = useProduct({
    favourite: currentProduct?.favourite,
  })

  const handleSelectValue = useCallback(
    (v: number) => {
      setSelectedValue(v)

      if (v) {
        const matchedTag = allTags.filter((x) => x['amount'] === v)[0]
        const firstDelivery = matchedTag['type'] as string

        firstDelivery && setDeliveryType(firstDelivery)
      }
    },
    [allTags],
  )

  const mapTypeKey = (x: string) => {
    switch (x) {
      case 'microsoft_epic_account':
        return 'Аккаунт Microsoft связанный с Epic Games'
      case 'epic_key':
        return 'Ключ Epic Games'
      case 'nintendo_key':
        return 'Ключ Nintendo'
      default:
        return 'Ключ'
    }
  }

  const descriptionWithLink = useMemo(() => {
    if (!coinsCategory?.description) return ''

    return coinsCategory?.description.replaceAll(/\[(.*?)\]\((.*?)\)/gi, '<a href="$2">$1</a>')
  }, [coinsCategory?.description])

  useEffect(() => {
    let firstVal = 0

    if (!selectedValue && valuesAvailable.length) {
      firstVal = valuesAvailable[0]
      setSelectedValue(firstVal)
    }

    if (!deliveryType && firstVal) {
      const matchedTag = allTags.filter((x) => x['amount'] === firstVal)[0]
      const firstDelivery = matchedTag['type'] as string

      firstDelivery && setDeliveryType(firstDelivery)
    }
  }, [allTags, valuesAvailable, selectedValue, deliveryType])

  if (!coinsCategory) return

  return (
    <div className="sec-cat__top product-el-big">
      {coinsCategory.backgrounds && (
        <img
          className="product-el-big__img"
          loading="lazy"
          src={coinsCategory.backgrounds}
          alt={coinsCategory.name}
        />
      )}
      <div className="product-el-big__content">
        <div className="product-el-big__title title-def title-def_sec">
          Валюта: {coinsCategory.name}
        </div>
        <div
          className="product-el-big__text text-info"
          dangerouslySetInnerHTML={{ __html: descriptionWithLink }}
        />
        <div className="product-el-big__tags">
          <div className="title-small title-small_m">Количество В-баксов</div>
          <div className="tags tags_2">
            {valuesAvailable.map((v, idx) => (
              <button
                className={cns('tags__el', v === selectedValue && 'active')}
                key={idx}
                onClick={() => handleSelectValue(v)}
              >
                {/* <div className="tags__point"></div> */}
                <span>{formatPrice(v, 0, false)}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="product-el-big__choose">
          <div className="title-small title-small_m">Способ получения</div>
          <div className="choose">
            {deliveryAvailable.map((x, idx) => (
              <div className="choose__el" key={x.value}>
                <div
                  className={cns('choose-el', deliveryType === x.value && 'active')}
                  onClick={() => setDeliveryType(x.value)}
                >
                  <div className="choose-el__top">
                    <div className="choose-el__title title-small">{mapTypeKey(x.value)}</div>
                    {x.sale && <div className="choose-el__icon">%</div>}
                  </div>
                  <div className="choose-el__text text-cat text-cat_small">
                    Мы купим товар зайдя в ваш аккаунт
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentProduct && (
          <div className="product-el-big__bottom">
            <div className="product-el-big__cost pr-cost pr-cost_big">
              <div className="pr-cost__new">{formatPrice(currentProduct.price.salePrice)}</div>
              {currentProduct.price.price !== currentProduct.price.salePrice && (
                <div className="pr-cost__old">{formatPrice(currentProduct.price.price)}</div>
              )}
            </div>
            <div className="product-el-big__acts">
              <button
                className="btn-def btn-def_br btn-def_small products-el__acts-el"
                onClick={() => navigateToProduct(currentProduct.id, coinsCategory.id)}
              >
                <span>Купить</span>
              </button>
              <button
                className="action-btn products-el__acts-el"
                onClick={() => handleFavourite({ id: currentProduct.id })}
              >
                <div className="action-btn__content">
                  <div className="action-btn__icon">
                    <StarButtonIcon />
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
