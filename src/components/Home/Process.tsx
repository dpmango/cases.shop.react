import { ITutorial } from '@/core/interface/Homepage'

import { CarretRightIcon } from '../Ui'

export const HomeProcess: React.FC<{ tutorial: ITutorial }> = ({ tutorial }) => {
  return (
    <section className="sec-header padding-top">
      <div className="container-def">
        <div className="sec-header__wrap">
          <h1 className="title-def title-def_main sec-header__title">{tutorial.title}</h1>
          <div className="sec-header__content">
            <div className="descrp">
              {tutorial.items.map((x, idx) => (
                <div className="descrp__el" key={idx}>
                  <div className="descrp-el">
                    <div className="descrp-el__top">
                      <div className="descrp-el__icon">
                        <img src={x[0]} alt="icon" />
                      </div>
                      <CarretRightIcon />
                    </div>
                    <p className="descrp-el__text text-info">{x[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
