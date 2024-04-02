import cns from 'classnames'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import dayjs from 'dayjs'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { getSteamRates } from '@/core/api'
import { ISteamRatesDto } from '@/core/interface/Order'
import { useAppDispatch, useAppSelector } from '@/core/store'
import { formatPrice, openExternalLink } from '@/core/utils'

interface IOrderSteamDeposit {
  syncForm: (sum: number) => void
}

export const OrderSteamDeposit: React.FC<IOrderSteamDeposit> = ({ syncForm }) => {
  const { paymentsMethods, user } = useAppSelector((state) => state.sessionState)

  const [sum, setSum] = useState(1000)
  const [rates, setRates] = useState<ISteamRatesDto | null>(null)

  const minMax = useMemo(() => {
    return [100, 5000]
  }, [])

  const sumOptions = useMemo(() => {
    return [100, 200, 500, 1000, 2500, 5000].filter((s) => s >= minMax[0] && s <= minMax[1])
  }, [minMax])

  const handleSumInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value)

    // if (!isFinite(value) || value < minMax[0]) {
    //   value = minMax[0]
    // }

    setSum(value)
  }

  const sumDisplay = useMemo(() => {
    let deposit = 0
    let commision = 0
    let bank = 0
    let total = 0

    let isValueValue = isFinite(sum) || sum >= minMax[0]

    if (isValueValue && rates) {
      deposit = sum
      bank = sum * rates.bank
      const matchingCommision = rates.comissions.find((x) => sum <= x.amount)
      commision = sum * (matchingCommision?.service || 0.1)
      total = sum + bank + commision
    }

    return {
      deposit: formatPrice(deposit),
      commision: formatPrice(commision),
      bank: formatPrice(bank),
      total: formatPrice(total),
    }
  }, [rates, sum, minMax])

  useEffect(() => {
    syncForm(sum)
  }, [sum])

  useEffect(() => {
    const getRates = async () => {
      const { data } = await getSteamRates()
      if (data) {
        setRates(data)
      }
    }

    getRates()
  }, [])

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
            onChange={handleSumInputChange}
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
            <div className="descp-info-el__val">{sumDisplay.deposit}</div>
          </div>
          <div className="descp-info__el descp-info-el">
            <div className="descp-info-el__text">Комиссия сервиса</div>
            <div className="descp-info-el__dec"></div>
            <div className="descp-info-el__val">{sumDisplay.commision}</div>
          </div>
          <div className="descp-info__el descp-info-el">
            <div className="descp-info-el__text">Банковские издержки</div>
            <div className="descp-info-el__dec"></div>
            <div className="descp-info-el__val">{sumDisplay.bank}</div>
          </div>
          <div className="descp-info__el descp-info-el">
            <div className="descp-info-el__text">Итого к оплате</div>
            <div className="descp-info-el__dec"></div>
            <div className="descp-info-el__cost">{sumDisplay.total}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
