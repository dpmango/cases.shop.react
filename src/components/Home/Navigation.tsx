import { IProductCategory } from '@/core/interface/Product'

export const HomeNavigation: React.FC<{ categories: IProductCategory[] }> = ({ categories }) => {
  return (
    <section className="sec-def">
      <div className="container-def">
        <div className="sec-def__wrap">
          <h2 className="title-def title-def_sec sec-def__title">Игры, предметы и подписки</h2>
          <div className="sec-def__content">
            <div className="cat cat_limit">
              {categories.map((cat, idx) => (
                <div className="cat__el" key={idx}>
                  <a className="cat-el content-bg" href="#">
                    <div className="cat-el__content">
                      {cat.icon && <img className="cat-el__icon" src={cat.icon} alt="" />}
                      <div className="cat-el__body">
                        <div className="cat-el__title title-cat">{cat.name}</div>
                        <div className="cat-el__text text-cat">
                          {cat.categories.map((y) => y.name).join(', ')}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <button className="sec-def__btn btn-show">Показать меньше</button>
          </div>
        </div>
      </div>
    </section>
  )
}
