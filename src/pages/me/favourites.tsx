import { LayoutGeneral } from '@/components/Layout'
import { ProductCard } from '@/components/Product'

export default function Page() {
  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-page">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__title title-def title-def_page">Избранное</div>
            <div className="tags tags_scroll">
              <button className="tags__el active">
                <span>Все</span>
              </button>
              <button className="tags__el">
                <span>Heartstone</span>
              </button>
            </div>
            <div className="sec-page__content2">
              <div className="products">
                <div className="products__el">{/* <ProductCard /> */}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
