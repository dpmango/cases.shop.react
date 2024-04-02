import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { getPopularProducts } from '@/core/api'
import { IProductDto } from '@/core/interface/Product'

import { ProductCard } from '../Product'

export const HomePopular: React.FC<{ products: IProductDto[]; total: number }> = ({
  products,
  total,
}) => {
  const paginatePer = 8

  const [pagination, setPagination] = useState(paginatePer)
  const [productsData, setProductsData] = useState(products)
  const [paginationVisible, setPaginationVisible] = useState(total > products.length)

  const displayProducts = productsData.slice(0, pagination)

  const paginationRequest = async () => {
    const { data, error } = await getPopularProducts({ limit: paginatePer, offset: pagination })
    if (data && data.list) {
      setProductsData((prev) => [...prev, ...data.list])
      setPaginationVisible(total > pagination + paginatePer)
      setPagination(pagination + paginatePer)
    } else {
      toast.error('Ошибка, попробуйте снова')
    }
  }

  return (
    <section className="sec-def">
      <div className="container-def">
        <div className="sec-def__wrap">
          <h2 className="title-def title-def_sec sec-def__title">Популярные товары</h2>
          <div className="sec-def__content">
            <div className="products products_limit">
              {displayProducts.map((x, idx) => (
                <div className="products__el" key={idx}>
                  <ProductCard {...x} />
                </div>
              ))}
            </div>
            {paginationVisible && (
              <button className="sec-def__btn btn-show" onClick={paginationRequest}>
                Показать ещё
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
