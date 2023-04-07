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
                <img src={'/img/round1.svg'} alt="" className="faq__pic" />
                <p className="faq__text">
                  Авторизуйтесь под своим игровым аккаунтом на сайте EpicGames
                </p>
              </div>
              <div className="faq__item">
                <img src={'/img/round2.svg'} alt="" className="faq__pic" />
                <p className="faq__text">Привяжите учётную запись Xbox (Консоль не требуется)</p>
              </div>
              <div className="faq__item">
                <img src={'/img/round3.svg'} alt="" className="faq__pic" />
                <p className="faq__text">Предоставьте доступ к учетной записи XBOX</p>
              </div>
              <div className="faq__item">
                <img src={'/img/round4.svg'} alt="" className="faq__pic" />
                <p className="faq__text">Дождитесь покупки со страны, где донат разрешён</p>
              </div>
              <div className="faq__item">
                <img src={'/img/round5.svg'} alt="" className="faq__pic" />
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
                      <li className="accardeon__text">{item.answer}</li>
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
