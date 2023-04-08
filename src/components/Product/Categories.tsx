import './_home.scss'

import { ProductCard } from '@c/Product'

import { IProductDto } from '@/core/interface/Product'

const Categories: React.FC = () => {
  const { productsFetching, items } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  return (
    <div className="home__products">
      {!productsFetching &&
        items &&
        Object.keys(items).map((category: string, idx) => {
          return (
            <div className="home__category" key={idx}>
              {idx === 1 && <img src="img/decor/blue.png" alt="" className="home__category-bg" />}

              <h2 className="home__category-title">{category}</h2>
              <div className="home__category-box">
                {items[category]?.length &&
                  items[category].map((card: IProductDto, idx) => (
                    <ProductCard key={card.id} {...card} />
                  ))}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Categories
