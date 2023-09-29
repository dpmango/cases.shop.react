import cns from 'classnames'

import {
  Close2Icon,
  Close3Icon,
  DislikeIcon,
  LikeIcon,
  MinusIcon,
  OrderCardDecorSvg,
  PayAnypayIcon,
  PayLavaIcon,
  PayPaypalIcon,
  PlusIcon,
} from '../Ui'

export const DepositModal: React.FC<{}> = ({}) => {
  const isFavourited = false

  return (
    <div className="modal-def" id="modal-balance">
      <div className="modal-def__wrap">
        <div className="modal-def__content modal-content">
          <div className="modal-content__mob">
            <div className="modal-content__prev close-btn modal-def__close">
              <Close3Icon />
            </div>
            <div className="modal-content__mob-title">Баланс</div>
          </div>
          <div className="modal-content__close modal-def__close close-btn">
            <Close2Icon />
          </div>
          <div className="modal-content__balance">
            <div className="modal-content__title title-def title-def_sec">Пополнить баланс</div>
            <div className="modal-content__block">
              <div className="title-small title-small_m">Сумма пополнения, ₽</div>
              <div className="balance-add">
                <div className="balance-add__in">
                  <button className="balance-add__btn">
                    <MinusIcon />
                  </button>
                  <div className="balance-add__inpWrap">
                    <input className="balance-add__inp" type="text" value="22 600" />
                  </div>
                  <button className="balance-add__btn">
                    <PlusIcon />
                  </button>
                </div>
                <div className="balance-add__tags tags">
                  <button className="tags__el">100</button>
                  <button className="tags__el">200</button>
                  <button className="tags__el">500</button>
                  <button className="tags__el">1 000</button>
                  <button className="tags__el">5 000</button>
                  <button className="tags__el">10 000</button>
                </div>
              </div>
            </div>
            <div className="modal-content__block">
              <div className="title-small title-small_m">Способ оплаты</div>
              <div className="payment-choose">
                <div className="payment-choose__el">
                  <div className="payment-choose-el active">
                    <div className="payment-choose-el__top">
                      <div className="payment-choose-el__title">Пайпалыч</div>
                      <PayPaypalIcon />
                    </div>
                    <div className="payment-choose-el__dropdown" style={{ display: 'block' }}>
                      <div className="payment-choose-el__text text-cat">
                        Выбирая данную платёжную систему, вы соглашаетесь с её политикой{' '}
                        <a href="#">обработки персональных данных</a>.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="payment-choose__el">
                  <div className="payment-choose-el">
                    <div className="payment-choose-el__top">
                      <div className="payment-choose-el__title">Энипэй</div>
                      <PayAnypayIcon />
                    </div>
                    <div className="payment-choose-el__dropdown">
                      <div className="payment-choose-el__text text-cat">
                        Выбирая данную платёжную систему, вы соглашаетесь с её политикой{' '}
                        <a href="#">обработки персональных данных</a>.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="payment-choose__el">
                  <div className="payment-choose-el">
                    <div className="payment-choose-el__top">
                      <div className="payment-choose-el__title">Лава</div>
                      <PayLavaIcon />
                    </div>
                    <div className="payment-choose-el__dropdown">
                      <div className="payment-choose-el__text text-cat">
                        Выбирая данную платёжную систему, вы соглашаетесь с её политикой{' '}
                        <a href="#">обработки персональных данных</a>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn-def btn-def_full modal-content__btn">
                <span>Оплатить</span>
              </button>
            </div>
          </div>
        </div>
        <div className="modal-def__overlay overlay"></div>
      </div>
    </div>
  )
}
