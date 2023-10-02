import cns from 'classnames'

import { useAppDispatch } from '@/core/store'
import { closeModals, setModal } from '@/core/store/ui.store'

import { Close2Icon, DislikeIcon, LikeIcon, OrderCardDecorSvg, UiModal } from '../Ui'

export const SupportModal: React.FC<{}> = ({}) => {
  const dispatch = useAppDispatch()

  return (
    <UiModal className="modal-def" name="support">
      <div className="modal-def__wrap">
        <div className="modal-def__content modal-content modal-chat">
          <div
            className="modal-content__close modal-def__close close-btn"
            onClick={() => {
              dispatch(closeModals())
            }}
          >
            <Close2Icon />
          </div>
          <div className="container-def">
            <div className="chat">
              <div className="chat__content">
                <div className="chat__sidebar">
                  <div className="chat__top">
                    <div className="chat__title title-def title-def_sec">Диалоги с поддержкой</div>
                    <div className="chat__title-mob title-def title-def_sec">Поддержка</div>
                    <div className="chat__btn action-btn">
                      <div className="action-btn__content">
                        <div className="action-btn__icon">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0.799988V15.2"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M0.800781 8H15.2008"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat__el chat-el">
                    <div className="chat-el__bg">
                      <OrderCardDecorSvg />
                      <div className="chat-el__count">7</div>
                    </div>
                    <div className="chat-el__content">
                      <div className="chat-el__title">
                        Я не могу перевести деньги обратно на свою банковскую карту
                      </div>
                      <div className="chat-el__date">21 апреля 2023 в 15:43</div>
                    </div>
                  </div>
                  <div className="chat__el chat-el active">
                    <div className="chat-el__bg">
                      <OrderCardDecorSvg />
                      <div className="chat-el__count">2</div>
                    </div>
                    <div className="chat-el__content">
                      <div className="chat-el__title">Заказ: 5 000 В-баксов</div>
                      <div className="chat-el__date">21 апреля 2023 в 15:43</div>
                    </div>
                  </div>
                  <div className="chat__el chat-el chat-el_gray">
                    <div className="chat-el__content">
                      <div className="chat-el__title">
                        Просьба вернуть деньги на карту так проблема с привязкой майкрософт и эпик
                        не решаются
                      </div>
                      <div className="chat-el__date">21 апреля 2023 в 15:43</div>
                    </div>
                  </div>
                  <div className="chat__el chat-el chat-el_gray">
                    <div className="chat-el__content">
                      <div className="chat-el__title">Заказ: Набор «Крот-шахтёр»</div>
                      <div className="chat-el__date">21 апреля 2023 в 15:43</div>
                    </div>
                  </div>
                </div>
                <div className="chat__body">
                  <div className="chat__body-mob">
                    <div className="close-btn chat__prev">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.957 17L3.98469 9L11.957 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="chat__body-mob-title title-small">Заказ: 5 000 В-баксов</div>
                  </div>
                  <div className="chat__body-content">
                    <div className="chat__body-wrap">
                      <div className="chat__line">
                        <div className="chat__message">
                          Здравствуйте!
                          <br />
                          Вас приветствует служба поддержки. Опишите проблему и мы постараемся
                          ответить как можно скорее.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="chat__line chat__line_2">
                        <div className="chat__message chat__message_bg">
                          Здравствуйте!
                          <br />
                          Вас приветствует служба поддержки. Опишите проблему и мы постараемся
                          ответить как можно скорее.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="center">
                        <div className="chat__new">Новые сообщения</div>
                      </div>
                      <div className="chat__line">
                        <div className="chat__message chat__message_red">Здравствуйте!</div>
                        <div className="chat__message chat__message_red">
                          Конечно! Сообщите пожалуйста правильный логин.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="chat__line">
                        <div className="chat__message">
                          Здравствуйте!
                          <br />
                          Вас приветствует служба поддержки. Опишите проблему и мы постараемся
                          ответить как можно скорее.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="chat__line chat__line_2">
                        <div className="chat__message chat__message_bg">
                          Здравствуйте!
                          <br />
                          Вас приветствует служба поддержки. Опишите проблему и мы постараемся
                          ответить как можно скорее.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="center">
                        <div className="chat__new">Новые сообщения</div>
                      </div>
                      <div className="chat__line">
                        <div className="chat__message chat__message_red">Здравствуйте!</div>
                        <div className="chat__message chat__message_red">
                          Конечно! Сообщите пожалуйста правильный логин.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="chat__line">
                        <div className="chat__message">
                          Здравствуйте!
                          <br />
                          Вас приветствует служба поддержки. Опишите проблему и мы постараемся
                          ответить как можно скорее.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="chat__line chat__line_2">
                        <div className="chat__message chat__message_bg">
                          Здравствуйте!
                          <br />
                          Вас приветствует служба поддержки. Опишите проблему и мы постараемся
                          ответить как можно скорее.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="center">
                        <div className="chat__new">Новые сообщения</div>
                      </div>
                      <div className="chat__line">
                        <div className="chat__message chat__message_red">Здравствуйте!</div>
                        <div className="chat__message chat__message_red">
                          Конечно! Сообщите пожалуйста правильный логин.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="chat__line">
                        <div className="chat__message">
                          Здравствуйте!
                          <br />
                          Вас приветствует служба поддержки. Опишите проблему и мы постараемся
                          ответить как можно скорее.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="chat__line chat__line_2">
                        <div className="chat__message chat__message_bg">
                          Здравствуйте!
                          <br />
                          Вас приветствует служба поддержки. Опишите проблему и мы постараемся
                          ответить как можно скорее.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                      <div className="center">
                        <div className="chat__new">Новые сообщения</div>
                      </div>
                      <div className="chat__line">
                        <div className="chat__message chat__message_red">Здравствуйте!</div>
                        <div className="chat__message chat__message_red">
                          Конечно! Сообщите пожалуйста правильный логин.
                        </div>
                        <div className="chat__date">21 апреля 2023 в 15:43</div>
                      </div>
                    </div>
                  </div>
                  <div className="chat__acts chat-acts">
                    <label className="chat-acts__file">
                      <input className="chat-acts__file-inp" type="file" />
                      <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 7.17064L9.16036 14.8404C7.30735 16.6532 4.24276 16.6532 2.38976 14.8404C0.536748 13.0275 0.536748 10.0294 2.38976 8.21651L8.80401 1.94128C9.58797 1.10459 10.7996 0.825688 11.9399 1.10459C13.0802 1.38349 13.9354 2.22018 14.2205 3.33578C14.5056 4.45138 14.1492 5.56697 13.3653 6.40367L6.951 12.6789C6.30958 13.3064 5.3118 13.2367 4.67038 12.6789C4.02895 12.0514 4.02895 11.0752 4.67038 10.4477L11.0846 4.17248"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </label>
                    <textarea
                      className="chat-acts__inp"
                      placeholder="Напишите сообщение"
                    ></textarea>
                    <button className="chat-acts__send">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.7227 7.74945C1.28908 7.60491 1 7.17129 1 6.73767C1 6.23178 1.28908 5.87044 1.7227 5.7259L16.2489 1.02835C16.4658 0.956082 16.6826 1.02835 16.8271 1.17289C16.9716 1.31743 17.0439 1.53424 16.9716 1.75105L12.2741 16.2773C12.1296 16.7109 11.6959 17 11.2623 17C10.8287 17 10.3951 16.6386 10.2505 16.205L8.66061 9.48393L1.7227 7.74945Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.7544 1.10071L8.51562 9.33948"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-def__overlay overlay"></div>
      </div>
    </UiModal>
  )
}
