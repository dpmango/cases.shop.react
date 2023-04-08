const FaqInstruction = () => {
  return (
    <div className="faq__guide d-flex">
      <div className="faq__guide-card">
        <img src={'/img/faq/faq1.svg'} alt="" className="faq__pic" />
        <p className="faq__text">Авторизуйтесь под своим игровым аккаунтом на сайте EpicGames</p>
      </div>
      <div className="faq__guide-card">
        <img src={'/img/faq/faq2.svg'} alt="" className="faq__pic" />
        <p className="faq__text">Привяжите учётную запись Xbox (Консоль не требуется)</p>
      </div>
      <div className="faq__guide-card">
        <img src={'/img/faq/faq3.svg'} alt="" className="faq__pic" />
        <p className="faq__text">Предоставьте доступ к учетной записи XBOX</p>
      </div>
      <div className="faq__guide-card">
        <img src={'/img/faq/faq4.svg'} alt="" className="faq__pic" />
        <p className="faq__text">Дождитесь покупки со страны, где донат разрешён</p>
      </div>
      <div className="faq__guide-card">
        <img src={'/img/faq/faq5.svg'} alt="" className="faq__pic" />
        <p className="faq__text">Похвастайтесь друзьям новым скином</p>
      </div>
    </div>
  )
}

export default FaqInstruction
