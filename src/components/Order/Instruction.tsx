import cns from 'classnames'
import { useCallback, useEffect, useState } from 'react'

import { ITempInstructions, ITempPlatform } from '@/core/interface/Temp'
import { formatPrice } from '@/core/utils'

import { WarningIcon } from '../Ui'

interface IOrderInstruction extends ITempInstructions {}

export const OrderInstruction: React.FC<IOrderInstruction> = ({ title, text, list, warning }) => {
  return (
    <div className="sec-order__block block-border block-info">
      <div className="block-info__title title-def title-def_sec2">{title}</div>
      {text?.length && (
        <div className="block-info__block">
          {text.map((t, idx) => (
            <div
              className="block-info__text text-cat"
              dangerouslySetInnerHTML={{ __html: t }}
              key={idx}
            />
          ))}
        </div>
      )}

      {list && (
        <div className="block-info__block">
          <div className="block-info__block-title title-def title-def_sec3">{list.title}</div>
          <ul className="ul-warning text-cat">
            {list.list.map((x, idx) => (
              <li className="ul-warning__el" key={idx}>
                {x}
              </li>
            ))}
          </ul>
        </div>
      )}

      {warning && (
        <div className="block-info__block">
          <div className="block-info__block-title title-def title-def_sec3">{warning.title}</div>
          <div className="wrap-info">
            {warning.list.map((x, idx) => (
              <div className="wrap-info__el red-info" key={idx}>
                <div className="red-info__icon">
                  <WarningIcon />
                </div>
                <div className="text-cat red-info__text">{x.text}</div>
                {x.link && (
                  <a
                    className="text-cat red-info__text red-info__text_red"
                    href={x.link.href}
                    target="_blank"
                  >
                    {x.link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
