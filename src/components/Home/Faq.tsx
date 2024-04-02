import cns from 'classnames'
import { useState } from 'react'

import { FaqToggleIcon } from '@/components/Ui'
import { IProductCategory } from '@/core/interface/Product'

export const FaqCard: React.FC<{ data: string[] }> = ({ data }) => {
  const [toggled, setToggled] = useState(false)

  return (
    <div className={cns('faq-el', toggled && 'active')}>
      <div className="faq-el__top" onClick={() => setToggled(!toggled)}>
        <div className="faq-el__arr">
          <FaqToggleIcon />
        </div>
        <div className="faq-el__title title-def title-def_med">{data[0]}</div>
      </div>
      <div className="faq-el__body" style={{ display: toggled ? 'block' : 'none' }}>
        <p className="faq-el__text text-info">{data[1]}</p>
      </div>
    </div>
  )
}

export const HomeFaq: React.FC<{ faq?: Array<string[]> }> = ({ faq }) => {
  if (!faq) return

  return (
    <section className="sec-def sec-def_last" id="faq">
      <div className="container-def">
        <div className="sec-def__wrap">
          <h2 className="title-def title-def_sec sec-def__title">Ответы на вопросы</h2>
          <div className="sec-def__content">
            <div className="faq">
              {faq.map((x, idx) => (
                <div className="faq__el" key={idx}>
                  <FaqCard data={x} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
