import cns from 'classnames'
import Link from 'next/link'

import { useAppSelector } from '@/core/store'

import { UiModal } from '../Ui'

export const GamesModal: React.FC<{}> = ({}) => {
  const { categories } = useAppSelector((store) => store.productState)

  return (
    <UiModal className="modal-mob" name="games">
      <div className="modal-mob__content">
        <div className="modal-mob__title title-mob">
          Игры, предметы
          <br />и подписки
        </div>
        <div className="cat">
          {categories?.map((cat, idx) => (
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
      </div>
    </UiModal>
  )
}
