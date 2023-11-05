import Link from 'next/link'
import { useMemo, useState } from 'react'

import { IProductCategory } from '@/core/interface/Product'

export const HomeNavigation: React.FC<{ categories: IProductCategory[] }> = ({ categories }) => {
  const [pagination, setPagination] = useState(8)

  const displayCategories = categories.slice(0, pagination)
  const paginationVisible = categories.length > pagination

  return (
    <section className="sec-def" id="games">
      <div className="container-def">
        <div className="sec-def__wrap">
          <h2 className="title-def title-def_sec sec-def__title">Игры, предметы и подписки</h2>
          <div className="sec-def__content">
            <div className="cat cat_limit">
              {displayCategories.map((cat, idx) => (
                <div className="cat__el" key={idx}>
                  <Link className="cat-el content-bg" href={`/${cat.id}`}>
                    <div className="cat-el__content">
                      {cat.icon && <img className="cat-el__icon" src={cat.icon} alt="" />}
                      <div className="cat-el__body">
                        <div className="cat-el__title title-cat">{cat.name}</div>
                        <div className="cat-el__text text-cat">
                          {cat.categories.map((y) => y.name).join(', ')}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {paginationVisible && (
              <button
                className="sec-def__btn btn-show"
                onClick={() => setPagination(pagination + 8)}
              >
                Показать еще
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
