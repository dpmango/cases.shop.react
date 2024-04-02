import cns from 'classnames'
import { useCallback, useEffect, useState } from 'react'

import { IOrderInstruction, IOrderPlatform } from '@/core/interface/Order'
import { formatPrice } from '@/core/utils'

import { WarningIcon } from '../Ui'

export const OrderInstruction: React.FC<IOrderInstruction> = ({
  title,
  texts,
  caution,
  warning,
}) => {
  return (
    <div className="sec-order__block block-border block-info">
      <div className="block-info__title title-def title-def_sec2">{title}</div>
      {texts?.length && (
        <div className="block-info__block">
          {texts.map((t, idx) => (
            <div
              className="block-info__text text-cat"
              dangerouslySetInnerHTML={{ __html: t }}
              key={idx}
            />
          ))}
        </div>
      )}

      {caution?.length &&
        caution.map((g, idx) => (
          <div className="block-info__block" key={idx}>
            <div className="block-info__block-title title-def title-def_sec3">{g.title}</div>
            <ul className="ul-warning text-cat">
              {g.list.map((text, idxx) => (
                <li className="ul-warning__el" key={idxx}>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ))}

      {warning?.length &&
        warning.map((g, idx) => (
          <div className="block-info__block" key={idx}>
            <div className="block-info__block-title title-def title-def_sec3">{g.title}</div>
            <div className="wrap-info">
              {g.list.map((x, idxx) => (
                <div className="wrap-info__el red-info" key={idxx}>
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
        ))}
    </div>
  )
}
