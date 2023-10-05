import type { GetServerSideProps } from 'next'
import { useState } from 'react'

import { LayoutGeneral } from '@/components/Layout'
import {
  OrderForm,
  OrderInstruction,
  OrderPlatformSelect,
  OrderProductScope,
} from '@/components/Order'
import { HintIcon, RadioCheckIcon, WarningIcon } from '@/components/Ui'
import { getMainPage, initializeApp } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
import { ITempOrder, ITempPlatform } from '@/core/interface/Temp'
import { DomainResolver, IResolver, Resolver } from '@/core/resolver'

export const getServerSideProps = (async (context) => {
  const { shopId, parsedSiteHost } = await DomainResolver(context)

  // Управление запросами страниц
  const promisesToBeFetched = [
    {
      name: 'init',
      resolver: initializeApp({ shopId, site: parsedSiteHost }),
      errorRouter: {
        fatal: true,
      },
    },
    {
      name: 'homepage',
      resolver: getMainPage({ shopId }),
    },
  ] as IPromiseFactory[]

  const { PRELOADED_STATE } = await Resolver(shopId, promisesToBeFetched)

  return {
    props: {
      PRELOADED_STATE,
    },
  }
}) satisfies GetServerSideProps<IResolver>

const MOCK_ORDER = {
  product: {
    category: {
      icon: '../img/cat/fortnite.svg',
      name: 'Fortnite',
    },
    name: 'Название товара',
    description: 'Описание',
    icon: '../img/bg/3.jpg',
    features: {
      title: 'В наборе',
      list: ['a', 'b', 'c'],
    },
    note: 'Примечание мелким текстом',
    price: {
      salePrice: 850,
      price: 1000,
    },
  },
  platforms: [
    { id: '1vv11', name: 'Компьютер' },
    { id: '2vv2', name: 'PlayStation' },
    { id: '3ss2', name: 'Xbox' },
    { id: '4dsdg2', name: 'Nintendo' },
    { id: '5sdfs', name: 'Android' },
  ],
  instructions: {
    title: 'Как это работает?',
    text: [
      'Мы используем способ активации через учетную запись Xbox (Microsoft). Достаточно привязать к вашей основной учётной записи Epic Games — учетную запись Xbox (Microsoft). При этом сама консоль вам НЕ ПОНАДОБИТСЯ.',
      'Fortnite поддерживает кроссплатформенный прогресс, поэтому любая ваша покупка будет ДОСТУПНА на всех платформах, исключение это <span>Вбаксы на Nintendo Switch</span>',
    ],
    list: {
      title: 'Важные правила при смене региона',
      list: [
        'Не производить никаких операций с кошельком Steam после смены региона в течении 3 дней (72 часов с момента выполнения заказа) Например: торговая площадка, пополнения счета, покупка игр.',
      ],
    },
    warning: {
      title: 'Что обязательно должно быть сделано перед покупкой',
      list: [
        {
          text: 'К вашей учетной записи Epic Games должна быть привязана учётная запись Xbox (Microsoft). Консоль для этого не требуется.',
          link: {
            name: 'Инструкция от EpicGames',
            href: 'https://google.com',
          },
        },
        {
          text: 'Ваш возраст в аккаунте Microsoft должен быть старше 18 лет. Для этого просто установите год рождения на 2000 г.',
        },
      ],
    },
  },
  form: {
    title: 'Логин и пароль от аккаунта Microsoft который привязан к вашей учётной записи с игрой',
    description:
      'Используя логин и пароль мы сможем войти в вашу учётную запись со страны где донат разрешён и произвести операцию покупки необходимого вам товара. Покупка будет осуществляться в официальном магазине Microsoft.',
    fields: ['login', 'password'],
  },
  steamNote: true,
  balanceDeposit: {
    min: 1,
    max: 10000,
    commission: {
      type: 'percent',
      value: 2,
    },
    bankFees: {
      type: 'percent',
      value: 0.5,
    },
  },
} as ITempOrder

export default function Page() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(
    MOCK_ORDER.platforms ? MOCK_ORDER.platforms[0]?.id || null : null,
  )

  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-page sec-order">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__top">
              <div className="sec-page__title title-def title-def_page">Оформление заказа</div>
            </div>
            <div className="sec-order__content">
              <div className="sec-order__sidebar">
                <OrderProductScope {...MOCK_ORDER.product} />
              </div>
              <div className="sec-order__body">
                <div className="sec-order__body-content">
                  {MOCK_ORDER.platforms && (
                    <OrderPlatformSelect
                      platforms={MOCK_ORDER.platforms}
                      currentPlatform={selectedPlatform}
                      onPlatformSelect={(v) => setSelectedPlatform(v)}
                    />
                  )}

                  {MOCK_ORDER.instructions && <OrderInstruction {...MOCK_ORDER.instructions} />}

                  <OrderForm {...MOCK_ORDER.form} />

                  {MOCK_ORDER.steamNote && (
                    <div className="sec-order__block block-border block-info">
                      <div className="block-info__title title-def title-def_sec2">Steam Guard</div>
                      <div className="text-cat">
                        Когда наш оператор возьмет заказ в работу, он свяжется с вами через Телеграм
                        чтобы вы сообщили код Steam Guard.
                      </div>
                    </div>
                  )}

                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Сумма пополнения
                    </div>
                    <div className="balance-block">
                      <div className="form-el">
                        <div className="form-el__text">₽</div>
                        <input className="form-el__inp inp-def" type="text" value="100" />
                      </div>
                      <div className="tags balance-block__tags">
                        <button className="tags__el">100</button>
                        <button className="tags__el">200</button>
                        <button className="tags__el">500</button>
                        <button className="tags__el">1 000</button>
                        <button className="tags__el">2 500</button>
                        <button className="tags__el">5 000</button>
                      </div>
                      <div className="descp-info balance-block__descrp">
                        <div className="descp-info__el descp-info-el">
                          <div className="descp-info-el__text">Получите на баланс Steam</div>
                          <div className="descp-info-el__dec"></div>
                          <div className="descp-info-el__val">~ 100,37 ₽</div>
                        </div>
                        <div className="descp-info__el descp-info-el">
                          <div className="descp-info-el__text">Комиссия сервиса</div>
                          <div className="descp-info-el__dec"></div>
                          <div className="descp-info-el__val">6 ₽</div>
                        </div>
                        <div className="descp-info__el descp-info-el">
                          <div className="descp-info-el__text">Банковские издержки</div>
                          <div className="descp-info-el__dec"></div>
                          <div className="descp-info-el__val">14,17 ₽</div>
                        </div>
                        <div className="descp-info__el descp-info-el">
                          <div className="descp-info-el__text">Итого к оплате</div>
                          <div className="descp-info-el__dec"></div>
                          <div className="descp-info-el__cost">120,54 ₽</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn-def btn-def_full btn-def_min sec-order__btn">
                  <span>Оформить заказ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
