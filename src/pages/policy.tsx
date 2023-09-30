import type { GetServerSideProps } from 'next'

import { initializeApp } from '@/core/api'
import { IPromiseFactory } from '@/core/interface/Api'
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
  ] as IPromiseFactory[]

  const { PRELOADED_STATE } = await Resolver(shopId, promisesToBeFetched)

  return {
    props: {
      PRELOADED_STATE,
    },
  }
}) satisfies GetServerSideProps<IResolver>

export default function Policy() {
  return (
    <>
      <div className="padding-top"></div>
      <section className="sec-page sec-offer">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-offer__title title-def title-def_page">Договор оферты</div>
            <p className="sec-offer__text text-info text-info_big">
              Онлайн-сервис приема электронных платежей ruplay.shop, именуемое в дальнейшем Агент,
              настоящей публичной офертой предлагает заключить агентский договор об оказании услуг.
              Акцептовав настоящую Оферту, Вы, далее Принципал, заключаете договор на условиях,
              в порядке и объеме, определенных настоящей Офертой.
            </p>
            <p className="sec-offer__text text-info text-info_big">
              Далее, по тексту настоящей Оферты, Агент и Принципал именуются вместе Стороны,
              а по отдельности Сторона
            </p>
            <div className="sec-offer__content">
              <div className="sec-offer__block block-border">
                <div className="sec-offer__count">1</div>
                <div className="title-def title-def_sec sec-offer__block-title">
                  Определение терминов
                </div>
                <div className="sec-offer__block-text text-info text-info_big">
                  Для целей настоящей Оферты нижеприведенные термины и определения толкуются
                  следующим образом:
                </div>
                <div className="sec-offer__block-descrp descrp-offer">
                  <div className="descrp-offer__block">
                    <div className="descrp-offer__block-title title-def title-def_med">Оферта</div>
                    <div className="descrp-offer__block-text text-info">
                      Настоящий документ договор оферты, размещенная по адресу ruplay.shop.
                    </div>
                  </div>
                  <div className="descrp-offer__block">
                    <div className="descrp-offer__block-title title-def title-def_med">
                      Личный кабинет
                    </div>
                    <div className="descrp-offer__block-text text-info">
                      Специализированный раздел Сервиса, защищенный специальными средствами защиты,
                      содержащий информацию о Принципале (и иную), в том числе историю
                      осуществленных Платежей, предоставляющий Принципалу возможность совершать
                      действия, предусмотренные в Оферте.
                    </div>
                  </div>
                  <div className="descrp-offer__block">
                    <div className="descrp-offer__block-title title-def title-def_med">Платеж</div>
                    <div className="descrp-offer__block-text text-info">
                      Перевод определенной суммы со счета платежной системы.
                    </div>
                  </div>
                  <div className="descrp-offer__block">
                    <div className="descrp-offer__block-title title-def title-def_med">
                      Обработка платежа
                    </div>
                    <div className="descrp-offer__block-text text-info">
                      Получение на Счет Сервиса платежа со Счета Покупателя.
                    </div>
                  </div>
                  <div className="descrp-offer__block">
                    <div className="descrp-offer__block-title title-def title-def_med">
                      Внутренний счет
                    </div>
                    <div className="descrp-offer__block-text text-info">
                      Учетная запись в базе данных Сервиса, содержащая сведения о количестве
                      перечисленных средств на текущий момент.
                    </div>
                  </div>
                  <div className="descrp-offer__block">
                    <div className="descrp-offer__block-title title-def title-def_med">
                      Покупатель
                    </div>
                    <div className="descrp-offer__block-text text-info">
                      физическое или юридическое лицо, использующее Сервис с целью покупки
                      товаров/услуг у Принципала.
                    </div>
                  </div>
                  <div className="descrp-offer__block">
                    <div className="descrp-offer__block-title title-def title-def_med">Сервис</div>
                    <div className="descrp-offer__block-text text-info">
                      Программно-аппаратный комплекс, функционирующий в соответствии с условиями
                      Оферты, интерфейс которого размещен по адресу ruplay.shорпредназначенный для
                      приема платежей Покупателей.
                    </div>
                  </div>
                  <div className="descrp-offer__block">
                    <div className="descrp-offer__block-title title-def title-def_med">
                      Устройство
                    </div>
                    <div className="descrp-offer__block-text text-info">
                      Любое техническое устройство, используемое Принципалом (компьютер, мобильный
                      телефон и пр.), обеспечивающее доступ Принципала в сеть Интернет.
                    </div>
                  </div>
                </div>
                <div className="sec-offer__block-bottom">
                  <p className="sec-offer__block-text text-info text-info_big">
                    В настоящей Оферте могут быть использованы термины, не определенные в п. 1.1
                    Оферты. В этом случае толкование такого термина производится в соответствии с
                    текстом Оферты. В случае отсутствия однозначного толкования термина в тексте
                    Оферты следует руководствоваться толкованием термина, определенным: в первую
                    очередь – законодательством, во вторую очередь - на ruplay.shop
                  </p>
                </div>
              </div>
              <div className="sec-offer__block block-border">
                <div className="sec-offer__count">2</div>
                <div className="title-def title-def_sec sec-offer__block-title">
                  Общие положения
                </div>
                <div className="sec-offer__block-offer">
                  <p className="text-info text-info_big offer-text">
                    <span>2.1.</span>Размещение Покупателем Заказа Товара, предлагаемого к продаже
                    в игре и на сайте ruplay.shop означает, что Покупатель согласен со всеми
                    условиями настоящей Оферты и производит акцепт Оферты.
                  </p>
                  <p className="text-info text-info_big offer-text">
                    <span>2.2.</span>Продавец оставляет за собой право в одностороннем порядке
                    вносить изменения в условия настоящей Оферты и приложений к ней при условии
                    предварительного опубликования на сайте ruplay.shop изменений в текст Оферты
                    и приложений к ней не позднее 10 (десяти) календарных дней до вступления
                    изменений в силу. Настоящая Оферта действует до момента ее отзыва Продавцом.
                  </p>
                  <p className="text-info text-info_big offer-text">
                    <span>2.3.</span>Срок действия Оферты не ограничен, если иное не указано
                    на сайте ruplay.shop.
                  </p>
                  <p className="text-info text-info_big offer-text">
                    <span>2.4.</span>Продавец предоставляет Покупателю полную и достоверную
                    информацию о Товаре, его количестве и стоимости.
                  </p>
                  <p className="text-info text-info_big offer-text">
                    <span>2.5.</span>Принятие Покупателем условий настоящей Оферты осуществляется
                    посредством внесения Покупателем соответствующих данных в регистрационную форму
                    на сайте Nobody Утвердив Заказ выбранного Товара, Покупатель предоставляет
                    Оператору необходимую информацию в соответствии с порядком, указанном в п. 4.2.
                    настоящей Оферты.
                  </p>
                  <p className="text-info text-info_big offer-text">
                    <span>2.6.</span>Продавец не несет ответственности за содержание и достоверность
                    информации, предоставленной Покупателем при оформлении Заказа.
                  </p>
                  <p className="text-info text-info_big offer-text">
                    <span>2.7.</span>Покупатель несет ответственность за достоверность
                    предоставленной информации при оформлении Заказа.
                  </p>
                  <p className="text-info text-info_big offer-text">
                    <span>2.8.</span>Договор купли-продажи дистанционным способом между Продавцом
                    и Покупателем считается заключенным с момента размещения Заказа.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
