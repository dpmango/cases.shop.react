import cns from 'classnames'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from '@/core/store'
import { formatPrice, openExternalLink } from '@/core/utils'

interface IOrderSteamDeposit {
  syncForm: (sum: number) => void
}

export const OrderSteamDeposit: React.FC<IOrderSteamDeposit> = ({ syncForm }) => {
  const { paymentsMethods, user } = useAppSelector((state) => state.sessionState)

  const [sum, setSum] = useState(1000)

  const minMax = useMemo(() => {
    return [100, 5000]
  }, [])

  const sumOptions = useMemo(() => {
    return [100, 200, 500, 1000, 2500, 5000].filter((s) => s >= minMax[0] && s <= minMax[1])
  }, [minMax])

  useEffect(() => {
    syncForm(sum)
  }, [sum])

  return (
    <div className="sec-order__block block-border block-info">
      <div className="block-info__title title-def title-def_sec2">Сумма пополнения</div>
      <div className="balance-block">
        <div className="form-el">
          <div className="form-el__text">₽</div>
          <input
            className="form-el__inp inp-def"
            type="number"
            min={minMax[0]}
            max={minMax[1]}
            value={sum}
            onChange={(e) => setSum(parseInt(e.target.value))}
          />
        </div>
        <div className="tags balance-block__tags">
          {sumOptions.map((s, idx) => (
            <button
              className={cns('tags__el', s === sum && 'active')}
              key={idx}
              onClick={() => setSum(s)}
            >
              {formatPrice(s, 0, false)}
            </button>
          ))}
        </div>
        <div className="descp-info balance-block__descrp">
          <div className="descp-info__el descp-info-el">
            <div className="descp-info-el__text">Получите на баланс Steam</div>
            <div className="descp-info-el__dec"></div>
            <div className="descp-info-el__val">~ {formatPrice(sum)}</div>
          </div>
          <div className="descp-info__el descp-info-el">
            <div className="descp-info-el__text">Комиссия сервиса</div>
            <div className="descp-info-el__dec"></div>
            <div className="descp-info-el__val">{formatPrice(sum * 0.005)}</div>
          </div>
          <div className="descp-info__el descp-info-el">
            <div className="descp-info-el__text">Банковские издержки</div>
            <div className="descp-info-el__dec"></div>
            <div className="descp-info-el__val">{formatPrice(sum * 0.01)}</div>
          </div>
          <div className="descp-info__el descp-info-el">
            <div className="descp-info-el__text">Итого к оплате</div>
            <div className="descp-info-el__dec"></div>
            <div className="descp-info-el__cost">{formatPrice(sum * 1.015)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
