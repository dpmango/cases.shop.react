import cns from 'classnames'
import { useCallback, useEffect, useState } from 'react'

import { IOrderPlatform } from '@/core/interface/Order'
import { formatPrice } from '@/core/utils'

import { RadioCheckIcon } from '../Ui'

interface IPlatformSelect {
  platforms: IOrderPlatform[]
  currentPlatform: string | null
  onPlatformSelect: (p: string) => void
}

export const OrderPlatformSelect: React.FC<IPlatformSelect> = ({
  platforms,
  currentPlatform,
  onPlatformSelect,
}) => {
  return (
    <div className="sec-order__block block-border block-info">
      <div className="block-info__title title-def title-def_sec2">
        На какой платформе вы играете?
      </div>
      <div className="choose-radio">
        {platforms.map((x, idx) => (
          <div className="choose-radio__el" key={idx}>
            <label className="choose-radio-el">
              <input
                className="choose-radio-el__inp"
                type="radio"
                name="choose"
                checked={currentPlatform === x.id}
                onChange={(e) => onPlatformSelect(x.id)}
              />
              <div className="choose-radio-el__content">
                <div className="text-cat choose-radio-el__title">{x.name}</div>
                <div className="choose-radio-el__check">
                  <RadioCheckIcon />
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
