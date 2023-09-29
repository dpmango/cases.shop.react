import { LayoutGeneral } from '@/components/Layout'
import { OrderCard } from '@/components/Order'
import { Close3Icon, OrderCardDecorSvg } from '@/components/Ui'

export default function Page() {
  return (
    <LayoutGeneral>
      <div className="padding-top"></div>
      <section className="sec-page sec-orders">
        <div className="container-def">
          <div className="sec-page__wrap">
            <div className="sec-page__title title-def title-def_page">Мои заказы</div>
            <div className="tags tags_scroll">
              <button className="tags__el active">
                <span>Все</span>
              </button>
              <button className="tags__el">
                <span>В очереди</span>
              </button>
              <button className="tags__el">
                <span>Выполняется</span>
              </button>
              <button className="tags__el">
                <span>Решение вопроса</span>
              </button>
              <button className="tags__el">
                <span>Выполнен</span>
              </button>
              <button className="tags__el">
                <span>Отменён</span>
              </button>
            </div>
            <div className="sec-page__content3">
              <div className="orders">
                <div className="orders__el">
                  <OrderCard background="../img/bg/4.jpg" status={1} />
                </div>
                <div className="orders__el">
                  <OrderCard background="../img/bg/5.jpg" status={2} supportID={'111'} />
                </div>

                <div className="orders__el">
                  <OrderCard
                    background="../img/bg/2.jpg"
                    status={3}
                    supportID={'222'}
                    supportUnread={true}
                  />
                </div>
                <div className="orders__el">
                  <OrderCard background="../img/bg/7.jpg" status={4} />
                </div>
                <div className="orders__el">
                  <OrderCard
                    background="../img/bg/2.jpg"
                    status={5}
                    supportID={'333'}
                    supportUnread={true}
                  />
                </div>
              </div>

              <button className="sec-orders__btn btn-show">Показать ещё</button>
              <div className="sec-orders__bottom">
                <div className="sec-orders__bottom-left">
                  <div className="nav-pages">
                    <a className="nav-pages__el active" href="#">
                      1
                    </a>
                    <a className="nav-pages__el" href="#">
                      2
                    </a>
                    <a className="nav-pages__el" href="#">
                      3
                    </a>
                    <a className="nav-pages__el" href="#">
                      4
                    </a>
                    <a className="nav-pages__el" href="#">
                      5
                    </a>
                  </div>
                </div>
                <div className="sec-orders__bottom-right">
                  <div className="sec-orders__bottom-text text-cat">
                    Показаны записи с 1 до 25 из 136
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  )
}
