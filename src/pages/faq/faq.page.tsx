import Round1 from '@/assets/img/round1.png'
import Round2 from '@/assets/img/round2.png'
import Round3 from '@/assets/img/round3.png'
import Round4 from '@/assets/img/round4.png'
import Round5 from '@/assets/img/round5.png'

export const Page = () => {
  const { faq, settings } = useAppSelector((state) => state.sessionState)

  return (
    <div
      style={{
        background: settings.background_site_color ? settings.background_site_color : '#000000',
      }}
    >
      <img src={settings.faq_left_footer_image} alt="" className="fire fire2" />
      <img src={settings.faq_right_footer_image} alt="" className="fire fire3" />
      <section className="faq" id="faq">
        <div className="container">
          <p className="faq__title">КАК ЭТО РАБОТАЕТ?</p>
          <div className="faq__wrap">
            <div className="faq__box d-flex">
              <div className="faq__item">
                <img src={Round1} alt="" className="faq__pic" />
                <p className="faq__text">
                  Авторизуйтесь под своим игровым аккаунтом на сайте EpicGames
                </p>
              </div>
              <div className="faq__item">
                <img src={Round2} alt="" className="faq__pic" />
                <p className="faq__text">Привяжите учётную запись Xbox (Консоль не требуется)</p>
              </div>
              <div className="faq__item">
                <img src={Round3} alt="" className="faq__pic" />
                <p className="faq__text">Предоставьте доступ к учетной записи XBOX</p>
              </div>
              <div className="faq__item">
                <img src={Round4} alt="" className="faq__pic" />
                <p className="faq__text">Дождитесь покупки со страны, где донат разрешён</p>
              </div>
              <div className="faq__item">
                <img src={Round5} alt="" className="faq__pic" />
                <p className="faq__text">Похвастайтесь друзьям новым скином</p>
              </div>
            </div>
            <p className="faq__name">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>
            <ul className="accordeon">
              {faq ? (
                faq.map((item, index) => (
                  <li className="accordeon__item" key={index}>
                    <div className="accordeon__button closed">{item.question}</div>
                    <ul className="accordeon__panel">
                      <li className="panel__text">{item.answer}</li>
                    </ul>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
