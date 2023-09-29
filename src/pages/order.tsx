import { LayoutGeneral } from '@/components/Layout'
import { OrderPasswordNote } from '@/components/Order'
import { HintIcon, RadioCheckIcon, WarningIcon } from '@/components/Ui'

export default function Page() {
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
                <div className="products-2-el products-2-el_3">
                  <img className="products-2-el__img" src="../img/bg/3.jpg" alt="" />
                  <div className="products-2-el__content">
                    <div className="products-2-el__top">
                      <div className="products-2-el__cat cat-info">
                        <img className="cat-info__icon" src="../img/cat/fortnite.svg" alt="" />
                        <div className="cat-info__body">
                          <div className="cat-info__title">Fortnite</div>
                        </div>
                      </div>
                    </div>
                    <div className="products-2-el__title title-def title-def_sec2">
                      Набор: Секретная связь
                    </div>
                    <div className="products-2-el__text text-cat">
                      Когда Тиган на связи, она не пропускает ни одного вызова. Поразите всех
                      в самое сердце с набором «Секретная связь».
                    </div>
                    <div className="products-2-el__descrp">
                      <div className="title-def title-def_small products-2-el__descrp-title">
                        В наборе
                      </div>
                      <ul className="ul-check">
                        <li>600 В-баксов</li>
                        <li>Экипировка Тиган</li>
                        <li>Украшение на спину «Шипы любви»</li>
                        <li>Кирка «Сердечный жезл»</li>
                      </ul>
                    </div>
                    <div className="text-cat text-cat_small">
                      В-баксы — игровая валюта Fortnite. За неё можно купить экипировку,
                      дельтапланы, кирки, эмоции, обёртки и боевой пропуск текущего сезона!
                    </div>
                    <div className="products-2-el__bottom">
                      <div className="products-2-el__cost pr-cost pr-cost_big">
                        <div className="pr-cost__val">749 ₽</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-order__body">
                <div className="sec-order__body-content">
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      На какой платформе вы играете?
                    </div>
                    <div className="choose-radio">
                      <div className="choose-radio__el">
                        <label className="choose-radio-el">
                          <input
                            className="choose-radio-el__inp"
                            type="radio"
                            name="choose"
                            checked
                          />
                          <div className="choose-radio-el__content">
                            <div className="text-cat choose-radio-el__title">Компьютер</div>
                            <div className="choose-radio-el__check">
                              <RadioCheckIcon />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="choose-radio__el">
                        <label className="choose-radio-el">
                          <input className="choose-radio-el__inp" type="radio" name="choose" />
                          <div className="choose-radio-el__content">
                            <div className="text-cat choose-radio-el__title">PlayStation</div>
                            <div className="choose-radio-el__check">
                              <RadioCheckIcon />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="choose-radio__el">
                        <label className="choose-radio-el">
                          <input className="choose-radio-el__inp" type="radio" name="choose" />
                          <div className="choose-radio-el__content">
                            <div className="text-cat choose-radio-el__title">Xbox</div>
                            <div className="choose-radio-el__check">
                              <RadioCheckIcon />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="choose-radio__el">
                        <label className="choose-radio-el">
                          <input className="choose-radio-el__inp" type="radio" name="choose" />
                          <div className="choose-radio-el__content">
                            <div className="text-cat choose-radio-el__title">Nintendo</div>
                            <div className="choose-radio-el__check">
                              <RadioCheckIcon />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="choose-radio__el">
                        <label className="choose-radio-el">
                          <input className="choose-radio-el__inp" type="radio" name="choose" />
                          <div className="choose-radio-el__content">
                            <div className="text-cat choose-radio-el__title">Android</div>
                            <div className="choose-radio-el__check">
                              <RadioCheckIcon />
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Как это работает
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__text text-cat">
                        Мы используем способ активации через учетную запись Xbox (Microsoft).
                        Достаточно привязать к вашей основной учётной записи Epic Games — учетную
                        запись Xbox (Microsoft). При этом сама консоль вам НЕ ПОНАДОБИТСЯ.
                      </div>
                      <div className="block-info__text text-cat">
                        Fortnite поддерживает кроссплатформенный прогресс, поэтому любая ваша
                        покупка будет ДОСТУПНА на всех платформах, исключение это{' '}
                        <span>Вбаксы на Nintendo Switch</span>.
                      </div>
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__block-title title-def title-def_sec3">
                        Что обязательно должно быть сделано перед покупкой
                      </div>
                      <div className="wrap-info">
                        <div className="wrap-info__el red-info">
                          <div className="red-info__icon">
                            <WarningIcon />
                          </div>
                          <div className="text-cat red-info__text">
                            К вашей учетной записи Epic Games должна быть привязана учётная запись
                            Xbox (Microsoft). Консоль для этого не требуется.
                          </div>
                          <div className="text-cat red-info__text red-info__text_red">
                            Инструкция от EpicGames
                          </div>
                        </div>
                        <div className="wrap-info__el red-info">
                          <div className="red-info__icon">
                            <WarningIcon />
                          </div>
                          <div className="text-cat red-info__text">
                            Ваш возраст в аккаунте Microsoft должен быть старше 18 лет. Для этого
                            просто установите год рождения на 2000 г.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Логин и пароль от аккаунта Microsoft который привязан к вашей учётной записи с
                      игрой
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__text text-cat">
                        Используя логин и пароль мы сможем войти в вашу учётную запись со страны где
                        донат разрешён и произвести операцию покупки необходимого вам товара.
                        Покупка будет осуществляться в официальном магазине Microsoft.
                      </div>
                    </div>
                    <OrderPasswordNote />
                    <div className="block-info__block">
                      <div className="wrap-form">
                        <div className="wrap-form__el">
                          <div className="form-el">
                            <div className="form-el__title">Логин</div>
                            <input className="form-el__inp inp-def" type="text" value="kuzya990" />
                          </div>
                        </div>
                        <div className="wrap-form__el">
                          <div className="form-el">
                            <div className="form-el__title">Пароль</div>
                            <input
                              className="form-el__inp inp-def"
                              type="password"
                              value="***************"
                            />
                          </div>
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

      <section className="sec-page sec-order">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__top">
              <div className="sec-page__title title-def title-def_page">Оформление заказа</div>
            </div>
            <div className="sec-order__content">
              <div className="sec-order__sidebar">
                <div className="products-2-el products-2-el_3">
                  <img className="products-2-el__img" src="../img/bg/9.jpg" alt="" />
                  <div className="products-2-el__content">
                    <div className="products-2-el__top">
                      <div className="products-2-el__cat cat-info">
                        <img className="cat-info__icon" src="../img/cat/twitch.svg" alt="" />
                        <div className="cat-info__body">
                          <div className="cat-info__title">Twitch</div>
                        </div>
                      </div>
                    </div>
                    <div className="products-2-el__title title-def title-def_sec2">
                      Подписка на 1 месяц
                    </div>
                    <div className="products-2-el__text text-cat">
                      Подписку в подарок можно получить только если у вас нет активной подписки
                      в данный момент.
                    </div>
                    <div className="products-2-el__descrp">
                      <div className="title-def title-def_small products-2-el__descrp-title">
                        Бонусы от подписки
                      </div>
                      <ul className="ul-check">
                        <li>×1,2 баллов канала</li>
                        <li>Просмотр без рекламы</li>
                        <li>Чат только для подписчиков</li>
                        <li>Стримы для подписчиков</li>
                        <li>Эксклюзивные смайлики от стримера</li>
                      </ul>
                    </div>
                    <div className="products-2-el__text text-cat">
                      Идет Бета-тест этого товара. На данный момент у нас есть лимит подписок
                      в день, поэтому возможны задержки в выдаче, однако обычно подписка выдается
                      за 2-3 минуты, если нет большого спроса. Работаем над тем, чтобы расширить
                      суточный лимит.
                    </div>
                    <div className="products-2-el__bottom">
                      <div className="products-2-el__cost pr-cost pr-cost_big">
                        <div className="pr-cost__val">99 ₽</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-order__body">
                <div className="sec-order__body-content">
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">Аккаунт Twitch</div>
                    <div className="block-info__block">
                      <div className="block-info__text text-cat">
                        Используя логин и пароль мы сможем войти в вашу учётную запись со страны где
                        донат разрешён и произвести операцию покупки необходимого вам товара.
                        Покупка будет осуществляться в официальном магазине Microsoft.
                      </div>
                      <OrderPasswordNote />
                    </div>
                    <div className="wrap-form">
                      <div className="wrap-form__el">
                        <div className="form-el">
                          <div className="form-el__title">Логин</div>
                          <input className="form-el__inp inp-def" type="text" value="kuzya990" />
                        </div>
                      </div>
                      <div className="wrap-form__el">
                        <div className="form-el">
                          <div className="form-el__title">Пароль</div>
                          <input
                            className="form-el__inp inp-def"
                            type="password"
                            value="***************"
                          />
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

      <section className="sec-page sec-order">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__top">
              <div className="sec-page__title title-def title-def_page">Оформление заказа</div>
            </div>
            <div className="sec-order__content">
              <div className="sec-order__sidebar">
                <div className="products-2-el products-2-el_3">
                  <img className="products-2-el__img" src="../img/bg/8.jpg" alt="" />
                  <div className="products-2-el__content">
                    <div className="products-2-el__top">
                      <div className="products-2-el__cat cat-info">
                        <img className="cat-info__icon" src="../img/cat/xbox.svg" alt="" />
                        <div className="cat-info__body">
                          <div className="cat-info__title">Xbox</div>
                        </div>
                      </div>
                    </div>
                    <div className="products-2-el__title title-def title-def_sec2">
                      1 месяц ULTIMATE
                    </div>
                    <div className="products-2-el__text text-cat">
                      Доступ к библиотеке с более чем 100 высококачественными играми. Играйте
                      непосредственно на консоли и ПК.
                    </div>
                    <div className="products-2-el__descrp">
                      <div className="title-def title-def_small products-2-el__descrp-title">
                        Вы получите
                      </div>
                      <ul className="ul-check">
                        <li>Членство в EA Play без дополнительной платы</li>
                        <li>Все преимущества Xbox Live Gold</li>
                        <li>Xbox Cloud Gaming (бета-версия)</li>
                        <li>Бесплатные бонусы и эксклюзивные скидки для подписчиков</li>
                        <li>
                          Игровая библиотека постоянно пополняется, в том числе новыми релизами
                          в день их выхода
                        </li>
                        <li>
                          Бесплатные бонусы, включая внутриигровой контент и партнерские предложения
                        </li>
                      </ul>
                    </div>
                    <div className="products-2-el__bottom">
                      <div className="products-2-el__cost pr-cost pr-cost_big">
                        <div className="pr-cost__val">649 ₽</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-order__body">
                <div className="sec-order__body-content">
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Логин и пароль от аккаунта Microsoft (Xbox), привязанного к вашему игровому
                      аккаунту
                    </div>
                    <OrderPasswordNote />
                    <div className="wrap-form">
                      <div className="wrap-form__el">
                        <div className="form-el">
                          <div className="form-el__title">Логин</div>
                          <input className="form-el__inp inp-def" type="text" value="kuzya990" />
                        </div>
                      </div>
                      <div className="wrap-form__el">
                        <div className="form-el">
                          <div className="form-el__title">Пароль</div>
                          <input
                            className="form-el__inp inp-def"
                            type="password"
                            value="***************"
                          />
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

      <section className="sec-page sec-order">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__top">
              <div className="sec-page__title title-def title-def_page">Оформление заказа</div>
            </div>
            <div className="sec-order__content">
              <div className="sec-order__sidebar">
                <div className="products-2-el products-2-el_3">
                  <img className="products-2-el__img" src="../img/bg/steam.jpg" alt="" />
                  <div className="products-2-el__content">
                    <div className="products-2-el__top">
                      <div className="products-2-el__cat cat-info">
                        <img className="cat-info__icon" src="../img/cat/steam.svg" alt="" />
                        <div className="cat-info__body">
                          <div className="cat-info__title">Steam</div>
                        </div>
                      </div>
                    </div>
                    <div className="products-2-el__title title-def title-def_sec2">
                      Смена региона на Казахстан
                    </div>
                    <div className="products-2-el__text text-cat">
                      Чистый казахстанский аккаунт с полным доступом.
                    </div>
                    <div className="products-2-el__bottom">
                      <div className="products-2-el__cost pr-cost pr-cost_big">
                        <div className="pr-cost__val">350 ₽</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-order__body">
                <div className="sec-order__body-content">
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Как это работает
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__text text-cat">
                        После оплаты услуги необходимо предоставить нашему оператору данные для
                        входа в ваш аккаунт. В порядке очереди с вами свяжется наш специалист и
                        выполнит смену региона на вашем аккаунте. В течение 3х дней после смены
                        обязательно следуйте всем инструкциям, чтобы не произошел откат региона
                        обратно.
                      </div>
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__block-title title-def title-def_sec3">
                        Важные правила при смене региона
                      </div>
                      <ul className="ul-warning text-cat">
                        <li className="ul-warning__el">
                          Не производить никаких операций с кошельком Steam после смены региона
                          в течении 3 дней (72 часов с момента выполнения заказа) Например: торговая
                          площадка, пополнения счета, покупка игр.
                        </li>
                        <li className="ul-warning__el">
                          Не менять данные учётной записи (пароль и т. д.) примерно в течении
                          недели.
                        </li>
                        <li className="ul-warning__el">
                          Не возвращайте купленную игру (КОТОРАЯ БЫЛА ПРИОБРЕТЕНА ДЛЯ СМЕНЫ
                          РЕГИОНА).
                        </li>
                        <li className="ul-warning__el">
                          Перед сменой региона не отключайте защиту и не меняйте пароль (ДАЖЕ
                          ДО СМЕНЫ РЕГИОНА).
                        </li>
                        <li className="ul-warning__el">
                          НИ В КОЕМ СЛУЧАЕ НЕ ПЫТАЙТЕСЬ КУПИТЬ ИЛИ ПОПОЛНИТЬ КОШЕЛЕК С РУССКОЙ КАРТЫ
                          ИЛИ ЛЮБОЙ ДРУГОЙ СТРАНЫ (ЧЕРЕЗ ТОРГОВУЮ ПЛОЩАДКУ ТАК ЖЕ НЕ РЕКОМЕНДУЕТСЯ
                          ПОПОЛНЯТЬ) после смены региона.
                        </li>
                        <li className="ul-warning__el">
                          Ни в коем случае не посещайте свой аккаунт Steam в браузере без
                          казахстанского VPN! В обычное приложение Steam на телефоне и компьютере
                          можно входить БЕЗ VPN.
                        </li>
                      </ul>
                      <div className="wrap-info">
                        <div className="wrap-info__el red-info">
                          <div className="red-info__icon">
                            <WarningIcon />
                          </div>
                          <div className="text-cat red-info__text">
                            Если вы вдруг не решитесь соблюсти хот бы 1 пункт из выше перечисленных,
                            то высока вероятность того, что ваш аккаунт откатят к изначальному
                            региону и последуют соответственно проблемы с поддержкой
                          </div>
                        </div>
                        <div className="wrap-info__el red-info">
                          <div className="red-info__icon">
                            <WarningIcon />
                          </div>
                          <div className="text-cat red-info__text">
                            Мы не несём никакой ответственности, если у вас возникнут проблемы
                            с поддержкой в случае несоблюдения наших рекомендаций!!! Вы только
                            можете обратиться к нам, для помощи с решением проблемы.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Логин и пароль от вашего аккаунта Steam
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__text text-cat">
                        Используя логин и пароль мы сможем войти в вашу учётную запись со страны где
                        донат разрешён и произвести операцию покупки необходимого вам товара.
                        Покупка будет осуществляться в официальном магазине Microsoft.
                      </div>
                    </div>
                    <OrderPasswordNote />
                    <div className="block-info__block">
                      <div className="wrap-form">
                        <div className="wrap-form__el">
                          <div className="form-el">
                            <div className="form-el__title">Логин</div>
                            <input className="form-el__inp inp-def" type="text" value="kuzya990" />
                          </div>
                        </div>
                        <div className="wrap-form__el">
                          <div className="form-el">
                            <div className="form-el__title">Пароль</div>
                            <input
                              className="form-el__inp inp-def"
                              type="password"
                              value="***************"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">Steam Guard</div>
                    <div className="text-cat">
                      Когда наш оператор возьмет заказ в работу, он свяжется с вами через Телеграм
                      чтобы вы сообщили код Steam Guard.
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

      <section className="sec-page sec-order">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__top">
              <div className="sec-page__title title-def title-def_page">Оформление заказа</div>
            </div>
            <div className="sec-order__content">
              <div className="sec-order__sidebar">
                <div className="products-2-el products-2-el_3">
                  <img className="products-2-el__img" src="../img/bg/7.jpg" alt="" />
                  <div className="products-2-el__content">
                    <div className="products-2-el__top">
                      <div className="products-2-el__cat cat-info">
                        <img className="cat-info__icon" src="../img/cat/playstation.svg" alt="" />
                        <div className="cat-info__body">
                          <div className="cat-info__title">PlayStation</div>
                        </div>
                      </div>
                    </div>
                    <div className="products-2-el__title title-def title-def_sec2">
                      Апгрейд PS PLUS ESSENTIAL
                      <br />
                      до DELUXE на 1 месяц
                    </div>
                    <div className="products-2-el__bottom">
                      <div className="products-2-el__cost pr-cost pr-cost_big">
                        <div className="pr-cost__val">202 ₽</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-order__body">
                <div className="sec-order__body-content">
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Как это работает
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__text text-cat">
                        После оплаты услуги необходимо предоставить нашему оператору данные для
                        входа в ваш аккаунт. В порядке очереди с вами свяжется наш специалист
                        и выполнит смену региона на вашем аккаунте. В течение 3х дней после смены
                        обязательно следуйте всем инструкциям, чтобы не произошел откат региона
                        обратно.
                      </div>
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__block-title title-def title-def_sec3">
                        Что обязательно нужно сделать перед покупкой
                      </div>
                      <div className="wrap-info">
                        <div className="wrap-info__el red-info">
                          <div className="red-info__icon">
                            <WarningIcon />
                          </div>
                          <div className="text-cat red-info__text">
                            Вам необходимо обязательно установить двухфакторную аутентификацию (2FA)
                            на аккаунт.
                          </div>
                          <div className="text-cat red-info__text red-info__text_red">
                            Вот инструкция как это сделать
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Почта и коды восстановления от вашего турецкого аккаунта PlayStation
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__text text-cat">
                        Используя логин и пароль мы сможем войти в вашу учётную запись со страны где
                        донат разрешён и произвести операцию покупки необходимого вам товара.
                        Покупка будет осуществляться в официальном магазине Microsoft.
                      </div>
                    </div>
                    <OrderPasswordNote />
                    <div className="block-info__block">
                      <div className="wrap-form">
                        <div className="wrap-form__el">
                          <div className="form-el">
                            <div className="form-el__title">Логин</div>
                            <input className="form-el__inp inp-def" type="text" value="kuzya990" />
                          </div>
                        </div>
                        <div className="wrap-form__el">
                          <div className="form-el">
                            <div className="form-el__title">Пароль</div>
                            <input
                              className="form-el__inp inp-def"
                              type="password"
                              value="***************"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="block-info__block">
                      <div className="form-el form-el_m">
                        <div className="form-el__title">
                          Коды восстановления <span>(минимум 2, через пробел)</span>
                        </div>
                        <input
                          className="form-el__inp inp-def"
                          type="text"
                          value="2356345634563 23463462347546"
                        />
                      </div>
                      <div className="hint">
                        <div className="hint__icon">
                          <HintIcon />
                        </div>
                        <div className="hint__text">Где найти коды восстановления?</div>
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

      <section className="sec-page sec-order">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__top">
              <div className="sec-page__title title-def title-def_page">Оформление заказа</div>
            </div>
            <div className="sec-order__content">
              <div className="sec-order__sidebar">
                <div className="products-2-el products-2-el_3">
                  <img className="products-2-el__img" src="../img/bg/6.jpg" alt="" />
                  <div className="products-2-el__content">
                    <div className="products-2-el__top">
                      <div className="products-2-el__cat cat-info">
                        <img className="cat-info__icon" src="../img/cat/steam.svg" alt="" />
                        <div className="cat-info__body">
                          <div className="cat-info__title">Steam</div>
                        </div>
                      </div>
                    </div>
                    <div className="products-2-el__title title-def title-def_sec2">
                      Пополнение баланса
                    </div>
                    <div className="products-2-el__text text-cat">
                      Пополните баланс своего аккаунта в два клика. Комиссия составит всего 2%.
                    </div>
                    <div className="products-2-el__bottom">
                      <div className="products-2-el__cost pr-cost pr-cost_big">
                        <div className="pr-cost__val">От 50 ₽</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-order__body">
                <div className="sec-order__body-content">
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Как это работает
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__text text-cat">
                        После оплаты услуги необходимо предоставить нашему оператору данные для
                        входа в ваш аккаунт. В порядке очереди с вами свяжется наш специалист и
                        выполнит смену региона на вашем аккаунте. В течение 3х дней после смены
                        обязательно следуйте всем инструкциям, чтобы не произошел откат региона
                        обратно.
                      </div>
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__block-title title-def title-def_sec3">
                        Что обязательно нужно знать перед покупкой
                      </div>
                      <div className="wrap-info">
                        <div className="wrap-info__el red-info">
                          <div className="red-info__icon">
                            <WarningIcon />
                          </div>
                          <div className="text-cat red-info__text">
                            Страной вашего аккаунта должна быть Россия (и следовательно, валюта
                            аккаунта — рубли).
                          </div>
                        </div>
                        <div className="wrap-info__el red-info">
                          <div className="red-info__icon">
                            <WarningIcon />
                          </div>
                          <div className="text-cat red-info__text">
                            Мы НЕ можем отправить средства пользователям из следующих регионов:
                            Крым, ЛНР, ДНР и тем пользователям, на аккаунте которых красная
                            табличка.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-order__block block-border block-info">
                    <div className="block-info__title title-def title-def_sec2">
                      Логин вашего аккаунта Steam
                    </div>
                    <div className="block-info__block">
                      <div className="block-info__text text-cat">
                        Используя логин и пароль мы сможем войти в вашу учётную запись со страны где
                        донат разрешён и произвести операцию покупки необходимого вам товара.
                        Покупка будет осуществляться в официальном магазине Microsoft.
                      </div>
                    </div>
                    <OrderPasswordNote />
                    <div className="block-info__block">
                      <div className="wrap-form">
                        <div className="wrap-form__el">
                          <div className="form-el">
                            <div className="form-el__title">Логин</div>
                            <input className="form-el__inp inp-def" type="text" value="kuzya990" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
