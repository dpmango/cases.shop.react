import './_home.scss'

import { ProductCard } from '@/components/Product'
import { IProductDto } from '@/core/interface/Product'

const Categories: React.FC = () => {
  const { settings } = useAppSelector((state) => state.sessionState)
  const { items } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  return (
    <div className="home__products">
      {items?.length &&
        items.map((category, idx) => {
          return (
            <div className="home__category" key={idx}>
              {category.categoryColor && (
                <div
                  className="home__category-decor"
                  style={{
                    background: `radial-gradient(100% 100% at 50% 0%, rgba(${hexToRgb(
                      category.categoryColor,
                    )}, 0.44) 0%, rgba(${hexToRgb(settings.background_site_color)}, 0.44) 67.9%)`,
                  }}
                />
              )}

              <h2 className="h4-title home__category-title">
                <span>{category.categoryName}</span>
              </h2>

              <div className="home__category-grid">
                {category.items?.length &&
                  category.items.map((card: IProductDto, idx) => (
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
