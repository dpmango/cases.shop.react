import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="wrapper-def">
        <div className="menu-mob">
          <div className="menu-mob__content">
            <div className="menu-mob__top">
              <div className="menu-mob__title">Меню</div>
              <div className="close-btn menu-mob__close">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L16.9447 17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9447 1L1 17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <ul className="menu-mob__links links-profile">
              <li className="links-profile__el">
                <a className="links-profile__link" href="#">
                  Главная
                </a>
              </li>
              <li className="links-profile__el">
                <a className="links-profile__link" href="#">
                  Отзывы
                </a>
              </li>
              <li className="links-profile__el">
                <a className="links-profile__link" href="#">
                  Ответы на вопросы
                </a>
              </li>
              <li className="links-profile__el">
                <a className="links-profile__link" href="#">
                  Договор оферты
                </a>
              </li>
            </ul>
            <div className="menu-mob__footer">
              <div className="pay-info">
                <div className="pay-info__title">Принимаем к оплате</div>
                <div className="pay-info__el pay-info-el">
                  <img className="pay-info-el__img" src="/img/pay/1.svg" alt="" />
                </div>
                <div className="pay-info__el pay-info-el">
                  <img className="pay-info-el__img" src="/img/pay/2.svg" alt="" />
                </div>
                <div className="pay-info__el pay-info-el">
                  <img className="pay-info-el__img" src="/img/pay/3.svg" alt="" />
                </div>
              </div>
              <div className="menu-mob__text">© 2023 RuPlayShop</div>
            </div>
          </div>
        </div>
        <div className="modal-act profile-mob" id="profile-mob">
          <div className="profile-mob__content">
            <div className="profile-mob__title">Профиль</div>
            <div className="balance-info profile-mob__balance">
              <div className="balance-info__top">
                <div className="action-btn__dropdown-title">Баланс</div>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 15.0002V17.9168C19.125 18.2484 18.9933 18.5663 18.7589 18.8007C18.5245 19.0351 18.2065 19.1668 17.875 19.1668H3.5C3.00272 19.1668 2.52581 18.9693 2.17417 18.6177C1.82254 18.266 1.625 17.7891 1.625 17.2918V2.7085C1.625 2.21122 1.82254 1.7343 2.17417 1.38267C2.52581 1.03104 3.00272 0.833496 3.5 0.833496H16.625C16.9565 0.833496 17.2745 0.965192 17.5089 1.19961C17.7433 1.43403 17.875 1.75198 17.875 2.0835V4.79183"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.1252 15C19.4567 15 19.7746 14.8683 20.009 14.6339C20.2435 14.3995 20.3752 14.0815 20.3752 13.75V10C20.3752 9.66848 20.2435 9.35054 20.009 9.11612C19.7746 8.8817 19.4567 8.75 19.1252 8.75H15.5835C14.7547 8.75 13.9598 9.07924 13.3738 9.66529C12.7877 10.2513 12.4585 11.0462 12.4585 11.875C12.4585 12.7038 12.7877 13.4987 13.3738 14.0847C13.9598 14.6708 14.7547 15 15.5835 15H19.1252Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9956 12.1831C15.9127 12.1831 15.8332 12.1502 15.7746 12.0916C15.716 12.033 15.6831 11.9535 15.6831 11.8706C15.6831 11.7877 15.716 11.7082 15.7746 11.6496C15.8332 11.591 15.9127 11.5581 15.9956 11.5581"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.9956 12.1831C16.0785 12.1831 16.158 12.1502 16.2166 12.0916C16.2752 12.033 16.3081 11.9535 16.3081 11.8706C16.3081 11.7877 16.2752 11.7082 16.2166 11.6496C16.158 11.591 16.0785 11.5581 15.9956 11.5581"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19.1252 8.74984V6.0415C19.1252 5.70998 18.9935 5.39204 18.759 5.15762C18.5246 4.9232 18.2067 4.7915 17.8752 4.7915H5.69183C5.41794 4.806 5.14547 4.74341 4.90536 4.61084C4.66525 4.47827 4.46713 4.28102 4.3335 4.0415"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="balance-info__cost">25 045,62 ₽</div>
              <button
                className="balance-info__btn btn-def btn-def_full btn-modal"
                data-modal="#modal-balance"
              >
                <span>Пополнить</span>
              </button>
            </div>
            <div className="profile-mob__notify notify-info">
              <div className="notify-info__top">
                <div className="notify-info__title">Уведомления</div>
                <div className="notify-info__count count-def">9</div>
              </div>
              <div className="notify-info__content">
                <div className="notify-info__el notify-info-el">
                  <img className="notify-info-el__img" src="/img/fall_bg.jpg" alt="" />
                </div>
                <div className="notify-info__el notify-info-el">
                  <img className="notify-info-el__img" src="/img/fall_bg.jpg" alt="" />
                </div>
                <div className="notify-info__el notify-info-el">
                  <img className="notify-info-el__img" src="/img/fall_bg.jpg" alt="" />
                </div>
                <div className="notify-info__el notify-info-el">
                  <img className="notify-info-el__img" src="/img/fall_bg.jpg" alt="" />
                </div>
                <div className="notify-info__el notify-info-el">
                  <img className="notify-info-el__img" src="/img/fall_bg.jpg" alt="" />
                </div>
                <div className="notify-info__el notify-info-el">
                  <img className="notify-info-el__img" src="/img/fall_bg.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="profile-mob__theme">
              <div className="action-btn__dropdown-title">Тема</div>
              <div className="theme-btn">
                <button className="theme-btn__btn theme-btn__btn_black active">
                  <svg
                    className="theme-btn__btn-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3625 13.1251C13.0925 13.1249 11.8402 12.8269 10.7061 12.2552C9.57203 11.6835 8.58774 10.854 7.83218 9.83315C7.07662 8.81232 6.57084 7.62861 6.35541 6.37699C6.13997 5.12537 6.22089 3.84068 6.59166 2.62598C5.36096 3.19325 4.29176 4.05945 3.48149 5.14567C2.67121 6.23189 2.14561 7.50359 1.95257 8.84492C1.75954 10.1862 1.9052 11.5546 2.3763 12.8252C2.84739 14.0958 3.62894 15.2284 4.64973 16.1197C5.67053 17.0109 6.89812 17.6326 8.22066 17.9281C9.54321 18.2236 10.9187 18.1834 12.2217 17.8113C13.5248 17.4391 14.714 16.7468 15.681 15.7975C16.6481 14.8482 17.3622 13.6719 17.7583 12.376C16.6942 12.8694 15.5354 13.125 14.3625 13.1251Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.98749 3.125H13.7375"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.8625 1.25V5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.6125 6.875H18.1125"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.8625 5.625V8.125"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Тёмная</span>
                </button>
                <button className="theme-btn__btn theme-btn__btn_white">
                  <svg
                    className="theme-btn__btn-icon"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13.4712H16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 3.47119V2.47119"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.096 5.37464L13.8033 4.66797"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 9.97119H16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 9.97119H1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.90399 5.37464L3.19666 4.66797"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.7247 11.4713C12.9742 10.7912 13.0558 10.061 12.9626 9.34258C12.8694 8.6242 12.6042 7.93893 12.1895 7.34501C11.7747 6.75109 11.2228 6.26607 10.5804 5.93117C9.93809 5.59627 9.2244 5.42139 8.5 5.42139C7.7756 5.42139 7.06191 5.59627 6.41958 5.93117C5.77725 6.26607 5.22526 6.75109 4.81052 7.34501C4.39578 7.93893 4.13056 8.6242 4.03738 9.34258C3.94421 10.061 4.02584 10.7912 4.27533 11.4713"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Светлая</span>
                </button>
              </div>
            </div>
            <ul className="profile-mob__links links-profile">
              <li className="links-profile__el">
                <a className="links-profile__link" href="#">
                  Сменить пароль
                </a>
              </li>
              <li className="links-profile__el">
                <a className="links-profile__link" href="#">
                  Выйти
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mob-acts">
          <div className="mob-acts__content">
            <button className="mob-acts__el act-mob" data-modal="#modal-games">
              <div className="act-mob__icon">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 15.8748C11.5 15.8748 15.35 13.0748 15.35 11.0019C15.35 8.60792 12.2 7.85192 11.5 10.7613C10.8 7.85192 7.64999 8.60792 7.64999 11.0019C7.64999 13.0748 11.5 15.8748 11.5 15.8748Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.90625 1.65625C7.13831 1.65625 7.36087 1.74844 7.52497 1.91253C7.68906 2.07663 7.78125 2.29919 7.78125 2.53125V6.48625C7.28246 6.84513 6.84513 7.28246 6.48625 7.78125H2.53125C2.29919 7.78125 2.07663 7.68906 1.91253 7.52497C1.74844 7.36087 1.65625 7.13831 1.65625 6.90625V2.53125C1.65625 2.29919 1.74844 2.07663 1.91253 1.91253C2.07663 1.74844 2.29919 1.65625 2.53125 1.65625H6.90625Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.4688 1.65625C20.7008 1.65625 20.9234 1.74844 21.0875 1.91253C21.2516 2.07663 21.3438 2.29919 21.3438 2.53125V6.90625C21.3438 7.13831 21.2516 7.36087 21.0875 7.52497C20.9234 7.68906 20.7008 7.78125 20.4688 7.78125H16.5137C16.1549 7.28246 15.7175 6.84513 15.2188 6.48625V2.53125C15.2188 2.29919 15.3109 2.07663 15.475 1.91253C15.6391 1.74844 15.8617 1.65625 16.0938 1.65625H20.4688Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.78125 16.5137V20.4688C7.78125 20.7008 7.68906 20.9234 7.52497 21.0875C7.36087 21.2516 7.13831 21.3438 6.90625 21.3438H2.53125C2.29919 21.3438 2.07663 21.2516 1.91253 21.0875C1.74844 20.9234 1.65625 20.7008 1.65625 20.4688V16.0938C1.65625 15.8617 1.74844 15.6391 1.91253 15.475C2.07663 15.3109 2.29919 15.2188 2.53125 15.2188H6.48625C6.84513 15.7175 7.28246 16.1549 7.78125 16.5137Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.4688 15.2188C20.7008 15.2188 20.9234 15.3109 21.0875 15.475C21.2516 15.6391 21.3438 15.8617 21.3438 16.0938V20.4688C21.3438 20.7008 21.2516 20.9234 21.0875 21.0875C20.9234 21.2516 20.7008 21.3438 20.4688 21.3438H16.0938C15.8617 21.3438 15.6391 21.2516 15.475 21.0875C15.3109 20.9234 15.2188 20.7008 15.2188 20.4688V16.5137C15.7175 16.1549 16.1549 15.7175 16.5137 15.2188H20.4688Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.40625 7.78125V15.2188"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.78125 3.40625H15.2188"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5938 7.78125V15.2188"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.78125 19.5938H15.2188"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <button className="mob-acts__el act-mob" data-modal="#modal-support">
              <div className="act-mob__count">2</div>
              <div className="act-mob__icon">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0737 5.32031C15.0737 4.99583 15.17 4.67863 15.3502 4.40883C15.5306 4.13903 15.7868 3.92875 16.0865 3.80457C16.3863 3.6804 16.7162 3.64791 17.0344 3.71121C17.3527 3.77451 17.645 3.93077 17.8745 4.16021C18.1039 4.38966 18.2602 4.68199 18.3235 5.00024C18.3867 5.31849 18.3543 5.64837 18.2301 5.94815C18.106 6.24794 17.8957 6.50417 17.6258 6.68444C17.3561 6.86471 17.0389 6.96094 16.7144 6.96094"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.7144 9.58594C16.5331 9.58594 16.3862 9.43903 16.3862 9.25781C16.3862 9.07659 16.5331 8.92969 16.7144 8.92969"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.7144 9.58594C16.8956 9.58594 17.0425 9.43903 17.0425 9.25781C17.0425 9.07659 16.8956 8.92969 16.7144 8.92969"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19.4966 9.96026C20.2392 9.40428 20.7968 8.63727 21.0967 7.75942C21.3966 6.88158 21.4248 5.93369 21.1777 5.03956C20.9305 4.14543 20.4194 3.34661 19.7113 2.74743C19.0031 2.14824 18.1307 1.77653 17.208 1.68085C16.2852 1.58517 15.3551 1.76996 14.5391 2.21109C13.723 2.65222 13.0589 3.32918 12.6336 4.15358C12.2082 4.97797 12.0413 5.91147 12.1547 6.83218C12.2681 7.75288 12.6565 8.618 13.2692 9.31453L12.6952 12.6211L14.9107 11.2553"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.20215 17.4062C9.83308 17.4062 11.1553 16.0841 11.1553 14.4531C11.1553 12.8221 9.83308 11.5 8.20215 11.5C6.57118 11.5 5.24902 12.8221 5.24902 14.4531C5.24902 16.0841 6.57118 17.4062 8.20215 17.4062Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.7765 21.3375C12.3082 20.5396 11.6393 19.878 10.8361 19.4185C10.033 18.9591 9.12376 18.7177 8.19852 18.7183C7.27329 18.7189 6.3643 18.9615 5.56183 19.4221C4.75936 19.8826 4.09132 20.5451 3.62402 21.3436"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.749 13.4688V21.3438"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.65527 21.3438V4.28125C1.65527 3.58506 1.93183 2.91738 2.42412 2.42509C2.9164 1.93281 3.58408 1.65625 4.28027 1.65625H10.8428"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.65527 5.65576H9.53027"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <a className="mob-acts__el act-mob" href="#">
              <div className="act-mob__count act-mob__count_black">39</div>
              <div className="act-mob__icon">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8046 2.05018L14.7323 7.85056L20.3673 8.40881C20.5015 8.41996 20.6296 8.46931 20.7366 8.55102C20.8436 8.63274 20.9249 8.7434 20.9709 8.86989C21.0169 8.99639 21.0258 9.13342 20.9963 9.26478C20.9669 9.39613 20.9004 9.5163 20.8048 9.61106L16.1673 14.2074L17.8867 20.4532C17.9219 20.5857 17.918 20.7255 17.8756 20.8558C17.8332 20.9862 17.7541 21.1015 17.6477 21.1879C17.5413 21.2743 17.4122 21.3282 17.2759 21.343C17.1397 21.3578 17.002 21.3329 16.8796 21.2713L11.1667 18.4424L5.46169 21.2678C5.33924 21.3294 5.2016 21.3543 5.06533 21.3395C4.92906 21.3247 4.79997 21.2708 4.69358 21.1844C4.58719 21.098 4.50804 20.9827 4.46564 20.8523C4.42323 20.722 4.41939 20.5822 4.45457 20.4497L6.17394 14.2039L1.53294 9.60756C1.43734 9.5128 1.37088 9.39263 1.34145 9.26128C1.31201 9.12992 1.32083 8.99289 1.36687 8.86639C1.4129 8.7399 1.49421 8.62924 1.60118 8.54752C1.70815 8.46581 1.8363 8.41646 1.97044 8.40531L7.60544 7.84706L10.5288 2.05018C10.5889 1.93276 10.6803 1.83421 10.7929 1.76539C10.9054 1.69657 11.0348 1.66016 11.1667 1.66016C11.2986 1.66016 11.428 1.69657 11.5405 1.76539C11.6531 1.83421 11.7444 1.93276 11.8046 2.05018Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <a className="mob-acts__el act-mob" href="#">
              <div className="act-mob__count">1</div>
              <div className="act-mob__icon">
                <svg
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.625 6.90625H18.375C18.375 6.90625 19.6875 6.90625 19.6875 8.21875V20.0312C19.6875 20.0312 19.6875 21.3438 18.375 21.3438H2.625C2.625 21.3438 1.3125 21.3438 1.3125 20.0312V8.21875C1.3125 8.21875 1.3125 6.90625 2.625 6.90625Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.5123 7.5625L17.4123 2.43588C17.309 2.2034 17.1404 2.00594 16.927 1.86753C16.7135 1.72911 16.4644 1.65571 16.2101 1.65626H4.79043C4.53589 1.65554 4.28663 1.72886 4.07302 1.86729C3.8594 2.00571 3.69065 2.20326 3.5873 2.43588L1.4873 7.5625"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 6.90625V1.65625"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.4688 17.4062H16.4062"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
            <button className="mob-acts__el act-mob" data-modal="#profile-mob">
              <div className="act-mob__count">9</div>
              <div className="act-mob__icon">
                <svg
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5415 3.91748C7.25272 4.65542 8.10546 5.24235 9.04871 5.64316C9.99197 6.04398 11.0064 6.25045 12.0313 6.25023C13.0693 6.25053 14.0965 6.03913 15.05 5.62898"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.90625 6.25C5.90625 7.46834 6.39023 8.63678 7.25173 9.49827C8.11322 10.3598 9.28166 10.8438 10.5 10.8438C11.7183 10.8438 12.8868 10.3598 13.7483 9.49827C14.6098 8.63678 15.0937 7.46834 15.0938 6.25C15.0937 5.03166 14.6098 3.86322 13.7483 3.00173C12.8868 2.14023 11.7183 1.65625 10.5 1.65625C9.28166 1.65625 8.11322 2.14023 7.25173 3.00173C6.39023 3.86322 5.90625 5.03166 5.90625 6.25Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.96875 21.3438C1.96875 19.0811 2.86758 16.9112 4.4675 15.3112C6.06742 13.7113 8.23737 12.8125 10.5 12.8125C12.7626 12.8125 14.9326 13.7113 16.5325 15.3112C18.1324 16.9112 19.0312 19.0811 19.0312 21.3438"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <header className="top-menu">
          <div className="container-def">
            <div className="top-menu__wrap">
              <div className="top-menu__content">
                <div className="top-menu__left">
                  <a className="logo-def top-menu__logo" href="#">
                    <img className="logo-def__img" src="/img/logo.svg" alt="" />
                    <img
                      className="logo-def__img logo-def__img-black"
                      src="/img/logo_black.svg"
                      alt=""
                    />
                  </a>
                  <nav className="top-menu__links">
                    <ul className="links-def">
                      <li className="links-def__el">
                        <a className="links-def__link" href="#">
                          Игры
                        </a>
                      </li>
                      <li className="links-def__el">
                        <a className="links-def__link" href="#">
                          Отзывы
                        </a>
                      </li>
                      <li className="links-def__el">
                        <a className="links-def__link" href="#">
                          Ответы на вопросы
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="top-menu__right">
                  <button
                    className="action-btn action-btn_long top-menu__btn btn-modal"
                    data-modal="#modal-support"
                  >
                    <div className="action-btn__content">
                      <div className="action-btn__text">Поддержка</div>
                      <div className="action-btn__icon">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4036 5.11426C14.4036 4.80523 14.4952 4.50313 14.6669 4.24618C14.8386 3.98923 15.0826 3.78896 15.3681 3.67069C15.6536 3.55243 15.9678 3.52149 16.2709 3.58178C16.574 3.64207 16.8524 3.79088 17.071 4.0094C17.2895 4.22793 17.4383 4.50633 17.4986 4.80943C17.5588 5.11253 17.5279 5.42669 17.4096 5.7122C17.2914 5.99771 17.0911 6.24174 16.8341 6.41343C16.5772 6.58512 16.2751 6.67676 15.9661 6.67676"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.9661 9.17676C15.7935 9.17676 15.6536 9.03684 15.6536 8.86426C15.6536 8.69167 15.7935 8.55176 15.9661 8.55176"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M15.9661 9.17676C16.1386 9.17676 16.2786 9.03684 16.2786 8.86426C16.2786 8.69167 16.1386 8.55176 15.9661 8.55176"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M18.616 9.53358C19.3233 9.00408 19.8544 8.27359 20.1399 7.43754C20.4256 6.6015 20.4524 5.69875 20.2171 4.8472C19.9817 3.99565 19.4949 3.23487 18.8205 2.66422C18.146 2.09356 17.3152 1.73956 16.4364 1.64843C15.5576 1.55731 14.6718 1.7333 13.8946 2.15342C13.1174 2.57354 12.4849 3.21827 12.0799 4.00341C11.6747 4.78854 11.5158 5.67759 11.6238 6.55446C11.7318 7.43132 12.1017 8.25523 12.6852 8.9186L12.1385 12.0678L14.2485 10.7669"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.85913 16.625C9.4124 16.625 10.6716 15.3658 10.6716 13.8125C10.6716 12.2592 9.4124 11 7.85913 11C6.30583 11 5.04663 12.2592 5.04663 13.8125C5.04663 15.3658 6.30583 16.625 7.85913 16.625Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.2159 20.369C11.7699 19.6091 11.1328 18.979 10.3679 18.5414C9.60308 18.1038 8.73711 17.8739 7.85593 17.8745C6.97476 17.8751 6.10906 18.1062 5.3448 18.5448C4.58054 18.9834 3.94431 19.6143 3.49927 20.3748"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.9993 12.875V20.375"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.62427 20.375V4.125C1.62427 3.46196 1.88766 2.82607 2.3565 2.35723C2.82534 1.88839 3.46122 1.625 4.12427 1.625H10.3742"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.62427 5.43408H9.12426"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <a className="action-btn action-btn_red top-menu__btn" href="#">
                    <div className="action-btn__count">2</div>
                    <div className="action-btn__content">
                      <div className="action-btn__icon">
                        <svg
                          width="20"
                          height="22"
                          viewBox="0 0 20 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.19385 19.6665C8.45959 20.4665 9.16824 20.9998 9.96548 20.9998C10.7627 20.9998 11.4714 20.4665 11.7371 19.6665"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.96533 2.95556V1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.9655 2.95557C13.5973 2.95557 16.6091 5.97779 16.6091 9.62223C16.6091 15.8445 17.9378 17 17.9378 17H1.99316C1.99316 17 3.32189 15.3111 3.32189 9.62223C3.32189 5.97779 6.24508 2.95557 9.9655 2.95557Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a className="action-btn top-menu__btn" href="#">
                    <div className="action-btn__count">39</div>
                    <div className="action-btn__content">
                      <div className="action-btn__icon">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6076 1.99987L14.3959 7.52404L19.7626 8.0557C19.8903 8.06632 20.0124 8.11332 20.1143 8.19115C20.2161 8.26897 20.2936 8.37436 20.3374 8.49483C20.3813 8.61531 20.3897 8.74582 20.3616 8.87091C20.3336 8.99601 20.2703 9.11046 20.1792 9.2007L15.7626 13.5782L17.4001 19.5265C17.4336 19.6527 17.4299 19.7859 17.3895 19.91C17.3492 20.0341 17.2738 20.144 17.1724 20.2263C17.0711 20.3086 16.9482 20.3599 16.8184 20.374C16.6886 20.3881 16.5575 20.3643 16.4409 20.3057L11.0001 17.6115L5.56674 20.3024C5.45012 20.361 5.31903 20.3847 5.18925 20.3706C5.05948 20.3565 4.93653 20.3053 4.83521 20.2229C4.73389 20.1406 4.6585 20.0308 4.61812 19.9067C4.57773 19.7825 4.57407 19.6494 4.60758 19.5232L6.24508 13.5749L1.82508 9.19737C1.73402 9.10713 1.67073 8.99268 1.6427 8.86758C1.61467 8.74248 1.62307 8.61197 1.66691 8.4915C1.71075 8.37103 1.78819 8.26564 1.89007 8.18782C1.99194 8.10999 2.11398 8.06299 2.24174 8.05237L7.60841 7.5207L10.3926 1.99987C10.4498 1.88804 10.5369 1.79418 10.644 1.72864C10.7512 1.6631 10.8744 1.62842 11.0001 1.62842C11.1257 1.62842 11.2489 1.6631 11.3561 1.72864C11.4633 1.79418 11.5503 1.88804 11.6076 1.99987Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a className="action-btn action-btn_red top-menu__btn" href="#">
                    <div className="action-btn__count">1</div>
                    <div className="action-btn__content">
                      <div className="action-btn__icon">
                        <svg
                          width="20"
                          height="22"
                          viewBox="0 0 20 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 6.625H17.5C17.5 6.625 18.75 6.625 18.75 7.875V19.125C18.75 19.125 18.75 20.375 17.5 20.375H2.5C2.5 20.375 1.25 20.375 1.25 19.125V7.875C1.25 7.875 1.25 6.625 2.5 6.625Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.5834 7.25L16.5834 2.3675C16.485 2.14609 16.3245 1.95804 16.1212 1.82622C15.9179 1.69439 15.6807 1.62449 15.4384 1.625H4.56258C4.32016 1.62433 4.08277 1.69416 3.87933 1.82599C3.67589 1.95782 3.51517 2.14596 3.41675 2.3675L1.41675 7.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 6.625V1.625"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.875 16.625H15.625"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <div className="action-btn top-menu__btn">
                    <button className="action-btn__content">
                      <div className="action-btn__icon">
                        <svg
                          width="18"
                          height="22"
                          viewBox="0 0 18 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.23 3.77832C5.90735 4.48112 6.71948 5.0401 7.61781 5.42183C8.51615 5.80356 9.48225 6.0002 10.4583 5.99999C11.4469 6.00027 12.4252 5.79894 13.3333 5.40832"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.625 6C4.625 7.16032 5.08594 8.27312 5.90641 9.09359C6.72688 9.91406 7.83968 10.375 9 10.375C10.1603 10.375 11.2731 9.91406 12.0936 9.09359C12.9141 8.27312 13.375 7.16032 13.375 6C13.375 4.83968 12.9141 3.72688 12.0936 2.90641C11.2731 2.08594 10.1603 1.625 9 1.625C7.83968 1.625 6.72688 2.08594 5.90641 2.90641C5.08594 3.72688 4.625 4.83968 4.625 6Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.875 20.375C0.875 18.2201 1.73102 16.1535 3.25476 14.6298C4.77849 13.106 6.84512 12.25 9 12.25C11.1549 12.25 13.2215 13.106 14.7452 14.6298C16.269 16.1535 17.125 18.2201 17.125 20.375"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <div className="action-btn__dropdown">
                      <div className="balance-info">
                        <div className="balance-info__top">
                          <div className="action-btn__dropdown-title">Баланс</div>
                          <svg
                            width="22"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.125 15.0002V17.9168C19.125 18.2484 18.9933 18.5663 18.7589 18.8007C18.5245 19.0351 18.2065 19.1668 17.875 19.1668H3.5C3.00272 19.1668 2.52581 18.9693 2.17417 18.6177C1.82254 18.266 1.625 17.7891 1.625 17.2918V2.7085C1.625 2.21122 1.82254 1.7343 2.17417 1.38267C2.52581 1.03104 3.00272 0.833496 3.5 0.833496H16.625C16.9565 0.833496 17.2745 0.965192 17.5089 1.19961C17.7433 1.43403 17.875 1.75198 17.875 2.0835V4.79183"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.1252 15C19.4567 15 19.7746 14.8683 20.009 14.6339C20.2435 14.3995 20.3752 14.0815 20.3752 13.75V10C20.3752 9.66848 20.2435 9.35054 20.009 9.11612C19.7746 8.8817 19.4567 8.75 19.1252 8.75H15.5835C14.7547 8.75 13.9598 9.07924 13.3738 9.66529C12.7877 10.2513 12.4585 11.0462 12.4585 11.875C12.4585 12.7038 12.7877 13.4987 13.3738 14.0847C13.9598 14.6708 14.7547 15 15.5835 15H19.1252Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.9956 12.1831C15.9127 12.1831 15.8332 12.1502 15.7746 12.0916C15.716 12.033 15.6831 11.9535 15.6831 11.8706C15.6831 11.7877 15.716 11.7082 15.7746 11.6496C15.8332 11.591 15.9127 11.5581 15.9956 11.5581"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M15.9956 12.1831C16.0785 12.1831 16.158 12.1502 16.2166 12.0916C16.2752 12.033 16.3081 11.9535 16.3081 11.8706C16.3081 11.7877 16.2752 11.7082 16.2166 11.6496C16.158 11.591 16.0785 11.5581 15.9956 11.5581"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M19.1252 8.74984V6.0415C19.1252 5.70998 18.9935 5.39204 18.759 5.15762C18.5246 4.9232 18.2067 4.7915 17.8752 4.7915H5.69183C5.41794 4.806 5.14547 4.74341 4.90536 4.61084C4.66525 4.47827 4.46713 4.28102 4.3335 4.0415"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="balance-info__cost">25 045,62 ₽</div>
                        <button
                          className="balance-info__btn btn-def btn-def_full btn-modal"
                          data-modal="#modal-balance"
                        >
                          <span>Пополнить</span>
                        </button>
                      </div>
                      <div className="action-btn__dropdown-content">
                        <div className="action-btn__dropdown-block">
                          <div className="action-btn__dropdown-title">Тема</div>
                          <div className="theme-btn">
                            <button className="theme-btn__btn theme-btn__btn_black active">
                              <svg
                                className="theme-btn__btn-icon"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.3625 13.1251C13.0925 13.1249 11.8402 12.8269 10.7061 12.2552C9.57203 11.6835 8.58774 10.854 7.83218 9.83315C7.07662 8.81232 6.57084 7.62861 6.35541 6.37699C6.13997 5.12537 6.22089 3.84068 6.59166 2.62598C5.36096 3.19325 4.29176 4.05945 3.48149 5.14567C2.67121 6.23189 2.14561 7.50359 1.95257 8.84492C1.75954 10.1862 1.9052 11.5546 2.3763 12.8252C2.84739 14.0958 3.62894 15.2284 4.64973 16.1197C5.67053 17.0109 6.89812 17.6326 8.22066 17.9281C9.54321 18.2236 10.9187 18.1834 12.2217 17.8113C13.5248 17.4391 14.714 16.7468 15.681 15.7975C16.6481 14.8482 17.3622 13.6719 17.7583 12.376C16.6942 12.8694 15.5354 13.125 14.3625 13.1251Z"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.98749 3.125H13.7375"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M11.8625 1.25V5"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.6125 6.875H18.1125"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.8625 5.625V8.125"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>Тёмная</span>
                            </button>
                            <button className="theme-btn__btn theme-btn__btn_white">
                              <svg
                                className="theme-btn__btn-icon"
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 13.4712H16"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.5 3.47119V2.47119"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13.096 5.37464L13.8033 4.66797"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15 9.97119H16"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2 9.97119H1"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M3.90399 5.37464L3.19666 4.66797"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.7247 11.4713C12.9742 10.7912 13.0558 10.061 12.9626 9.34258C12.8694 8.6242 12.6042 7.93893 12.1895 7.34501C11.7747 6.75109 11.2228 6.26607 10.5804 5.93117C9.93809 5.59627 9.2244 5.42139 8.5 5.42139C7.7756 5.42139 7.06191 5.59627 6.41958 5.93117C5.77725 6.26607 5.22526 6.75109 4.81052 7.34501C4.39578 7.93893 4.13056 8.6242 4.03738 9.34258C3.94421 10.061 4.02584 10.7912 4.27533 11.4713"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>Светлая</span>
                            </button>
                          </div>
                        </div>
                        <div className="action-btn__dropdown-links">
                          <a className="action-btn__dropdown-link" href="#">
                            Сменить пароль
                          </a>
                          <a className="action-btn__dropdown-link" href="#">
                            Выйти
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="top-menu__burger btn-burger">
                  <svg
                    width="22"
                    height="15"
                    viewBox="0 0 22 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13.3077H20.9308"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 7.15384H20.9308"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H20.9308"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>
        <img className="home-bg" src="/img/home-bg.jpg" alt="" />
        <img className="home-bg-2" src="/img/home-bg-2.jpg" alt="" />
        <section className="sec-header padding-top">
          <div className="container-def">
            <div className="sec-header__wrap">
              <h1 className="title-def title-def_main sec-header__title">
                Пополняйте баланс, покупайте внутриигровую валюту и предметы
              </h1>
              <div className="sec-header__content">
                <div className="descrp">
                  <div className="descrp__el">
                    <div className="descrp-el">
                      <div className="descrp-el__top">
                        <div className="descrp-el__icon">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.25 16.345C21.2495 14.4748 20.7246 12.6422 19.7348 11.0553C18.7451 9.46844 17.3301 8.19095 15.6507 7.36791C13.9713 6.54488 12.0948 6.20929 10.2342 6.39926C8.37367 6.58924 6.60367 7.29716 5.12527 8.44262C3.64687 9.58809 2.51932 11.1252 1.87069 12.8793C1.22205 14.6335 1.07833 16.5344 1.45585 18.3661C1.83337 20.1978 2.71699 21.887 4.00636 23.2417C5.29573 24.5964 6.93916 25.5624 8.75 26.03V36.2567C8.75 36.9197 9.01339 37.5556 9.48224 38.0244C9.95108 38.4933 10.587 38.7567 11.25 38.7567C11.913 38.7567 12.5489 38.4933 13.0178 38.0244C13.4866 37.5556 13.75 36.9197 13.75 36.2567V26.03C15.897 25.4756 17.7988 24.2234 19.1565 22.4703C20.5141 20.7171 21.2506 18.5624 21.25 16.345Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22.605 26.25C23.9109 26.0697 25.168 25.6318 26.3033 24.9617L34.4816 33.1383C34.9532 33.5937 35.5847 33.8457 36.2402 33.84C36.8956 33.8343 37.5227 33.5714 37.9862 33.1079C38.4497 32.6444 38.7126 32.0173 38.7183 31.3618C38.724 30.7063 38.472 30.0748 38.0167 29.6033L29.8333 21.4267C30.9561 19.525 31.4177 17.3051 31.1463 15.1135C30.8748 12.9218 29.8855 10.8817 28.3327 9.31137C26.7799 7.74107 24.751 6.72894 22.5625 6.43292C20.3741 6.13691 18.1492 6.57365 16.235 7.675"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.75 15.095C8.75 15.758 9.01339 16.3939 9.48223 16.8628C9.95107 17.3316 10.587 17.595 11.25 17.595C11.913 17.595 12.5489 17.3316 13.0178 16.8628C13.4866 16.3939 13.75 15.758 13.75 15.095C13.75 14.432 13.4866 13.7961 13.0178 13.3272C12.5489 12.8584 11.913 12.595 11.25 12.595C10.587 12.595 9.95107 12.8584 9.48223 13.3272C9.01339 13.7961 8.75 14.432 8.75 15.095Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.25 12.595V5C11.25 4.00544 11.6451 3.05161 12.3483 2.34835C13.0516 1.64509 14.0054 1.25 15 1.25C15.9946 1.25 16.9484 1.64509 17.6516 2.34835C18.3549 3.05161 18.75 4.00544 18.75 5V6.64833"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <svg
                          className="descrp-el__arr"
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.49133 11L7.47404 6L2.49133 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="descrp-el__text text-info">
                        Авторизуйтесь под своим игровым аккаунтом на сайте EpicGames
                      </p>
                    </div>
                  </div>
                  <div className="descrp__el">
                    <div className="descrp-el">
                      <div className="descrp-el__top">
                        <div className="descrp-el__icon">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.2133 3.13834C28.3723 3.2153 28.5019 3.34182 28.5828 3.49883C28.6636 3.65584 28.6912 3.83486 28.6615 4.00895C28.6318 4.18303 28.5464 4.34275 28.4181 4.46408C28.2897 4.58541 28.1255 4.66177 27.95 4.68167C25.3222 5.00636 22.7521 5.69402 20.3133 6.72501C20.214 6.76627 20.1075 6.78751 20 6.78751C19.8925 6.78751 19.786 6.76627 19.6867 6.72501C17.2473 5.69402 14.6767 5.00635 12.0483 4.68167C11.873 4.66149 11.7089 4.58491 11.5808 4.46347C11.4527 4.34203 11.3675 4.18229 11.338 4.00826C11.3085 3.83423 11.3363 3.65532 11.4172 3.49845C11.4981 3.34157 11.6278 3.2152 11.7867 3.13834C14.3463 1.8957 17.1546 1.25006 20 1.25006C22.8454 1.25006 25.6536 1.8957 28.2133 3.13834Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M37.62 26.4383C37.5573 26.6116 37.4378 26.7585 37.2809 26.855C37.124 26.9516 36.9391 26.9922 36.7561 26.9701C36.5732 26.9481 36.4032 26.8647 36.2738 26.7337C36.1443 26.6026 36.0631 26.4315 36.0434 26.2483C35.6387 23.2663 34.6456 20.3944 33.1218 17.7993C31.598 15.2043 29.5737 12.9379 27.1667 11.1317C27.0588 11.0457 26.9746 10.9337 26.9218 10.8063C26.8691 10.6788 26.8495 10.5401 26.865 10.403C26.8805 10.2659 26.9305 10.135 27.0104 10.0226C27.0903 9.91013 27.1974 9.81978 27.3217 9.76001C29.3084 8.75046 31.4355 8.04483 33.6317 7.66667C33.7687 7.64766 33.9082 7.66368 34.0374 7.71323C34.1665 7.76278 34.2809 7.84424 34.37 7.95001C36.4843 10.479 37.8974 13.5189 38.4677 16.7656C39.0381 20.0123 38.7458 23.3518 37.62 26.45V26.4383Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M33.7666 32.295C33.7821 32.4154 33.7705 32.5377 33.7327 32.653C33.6949 32.7683 33.6319 32.8738 33.5483 32.9617C31.7984 34.7922 29.6956 36.2491 27.3671 37.2444C25.0385 38.2398 22.5324 38.753 20 38.753C17.4676 38.753 14.9615 38.2398 12.6329 37.2444C10.3043 36.2491 8.20158 34.7922 6.45164 32.9617C6.36801 32.8738 6.30501 32.7683 6.26725 32.653C6.22948 32.5377 6.21788 32.4154 6.23331 32.295C6.92997 26.7133 12.7933 19.7483 19.5066 14.6433C19.6485 14.5355 19.8218 14.4771 20 14.4771C20.1782 14.4771 20.3515 14.5355 20.4933 14.6433C27.2066 19.7467 33.07 26.7133 33.7666 32.295Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.95667 26.2483C3.93692 26.4315 3.85571 26.6026 3.72626 26.7336C3.59681 26.8647 3.42677 26.9481 3.24387 26.9701C3.06096 26.9922 2.87599 26.9516 2.71911 26.855C2.56222 26.7584 2.44269 26.6116 2.38 26.4383C1.25426 23.3401 0.961939 20.0006 1.5323 16.7539C2.10266 13.5073 3.51569 10.4673 5.63 7.93833C5.7193 7.8328 5.83378 7.75152 5.96284 7.70199C6.0919 7.65246 6.23137 7.6363 6.36833 7.65499C8.56804 8.03603 10.698 8.74562 12.6867 9.75999C12.811 9.81977 12.9181 9.91011 12.998 10.0226C13.0778 10.135 13.1278 10.2659 13.1433 10.403C13.1588 10.54 13.1393 10.6788 13.0865 10.8062C13.0337 10.9337 12.9495 11.0457 12.8417 11.1317C10.4331 12.9371 8.40727 15.2032 6.88199 17.7983C5.3567 20.3933 4.36233 23.2656 3.95667 26.2483Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <svg
                          className="descrp-el__arr"
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.49133 11L7.47404 6L2.49133 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="descrp-el__text text-info">
                        Привяжите учётную запись Xbox (консоль не требуется)
                      </p>
                    </div>
                  </div>
                  <div className="descrp__el">
                    <div className="descrp-el">
                      <div className="descrp-el__top">
                        <div className="descrp-el__icon">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.35 20.71C18.7687 19.1609 16.765 18.1134 14.5905 17.6989C12.416 17.2844 10.1675 17.5215 8.12717 18.3804C6.08689 19.2392 4.34574 20.6815 3.12224 22.5264C1.89875 24.3712 1.24742 26.5363 1.25001 28.75"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.57501 4.63333C8.18564 6.30484 10.2676 7.44552 12.5433 7.90321C14.8189 8.3609 17.1801 8.11385 19.3117 7.195"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.5 15C13.4028 15 14.2968 14.8222 15.1309 14.4767C15.9651 14.1312 16.723 13.6248 17.3614 12.9864C17.9998 12.348 18.5062 11.5901 18.8517 10.7559C19.1972 9.92183 19.375 9.02784 19.375 8.125C19.375 7.22216 19.1972 6.32816 18.8517 5.49405C18.5062 4.65994 17.9998 3.90204 17.3614 3.26364C16.723 2.62524 15.9651 2.11883 15.1309 1.77333C14.2968 1.42783 13.4028 1.25 12.5 1.25C10.6766 1.25 8.92795 1.97433 7.63864 3.26364C6.34933 4.55295 5.625 6.30164 5.625 8.125C5.625 9.94836 6.34933 11.697 7.63864 12.9864C8.92795 14.2757 10.6766 15 12.5 15Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M25.5167 32.6C25.3509 32.6 25.1919 32.5342 25.0747 32.4169C24.9575 32.2997 24.8917 32.1408 24.8917 31.975C24.8917 31.8092 24.9575 31.6503 25.0747 31.5331C25.1919 31.4159 25.3509 31.35 25.5167 31.35"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M25.5167 32.6C25.6824 32.6 25.8414 32.5342 25.9586 32.4169C26.0758 32.2997 26.1417 32.1408 26.1417 31.975C26.1417 31.8092 26.0758 31.6503 25.9586 31.5331C25.8414 31.4159 25.6824 31.35 25.5167 31.35"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M31.81 29.5067L37.9567 23.36C38.3342 22.9804 38.591 22.4976 38.6947 21.9723C38.7984 21.447 38.7445 20.9028 38.5395 20.4082C38.3346 19.9136 37.988 19.4906 37.5432 19.1926C37.0984 18.8945 36.5754 18.7348 36.04 18.7333C35.3212 18.7333 34.6318 19.0187 34.1233 19.5267L27.9833 25.6783C26.5358 25.1113 24.9371 25.0598 23.4561 25.5327C21.9751 26.0055 20.702 26.9738 19.8509 28.2747C18.9997 29.5756 18.6223 31.1299 18.7822 32.6764C18.942 34.2228 19.6294 35.667 20.7287 36.7663C21.828 37.8656 23.2722 38.553 24.8186 38.7128C26.3651 38.8727 27.9194 38.4953 29.2203 37.6441C30.5212 36.793 31.4895 35.5199 31.9623 34.0389C32.4352 32.5579 32.3837 30.9592 31.8167 29.5117L31.81 29.5067Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <svg
                          className="descrp-el__arr"
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.49133 11L7.47404 6L2.49133 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="descrp-el__text text-info">
                        Предоставьте доступ к учетной записи Xbox
                      </p>
                    </div>
                  </div>
                  <div className="descrp__el">
                    <div className="descrp-el">
                      <div className="descrp-el__top">
                        <div className="descrp-el__icon">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.1833 38.7167C17.5395 38.9464 13.9079 38.1073 10.7342 36.3024C7.56053 34.4975 4.98285 31.8052 3.31753 28.5561C1.65222 25.307 0.971733 21.6423 1.35959 18.012C1.74745 14.3816 3.18678 10.9434 5.50093 8.11947C7.81507 5.2955 10.9033 3.2086 14.3867 2.11489C17.8701 1.02118 21.597 0.96825 25.11 1.9626C28.623 2.95695 31.7693 4.95532 34.1627 7.71243C36.5561 10.4695 38.0925 13.8654 38.5833 17.4833"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.33335 34.6667L10 26.25H11.8C12.1802 26.2513 12.5554 26.1647 12.8966 25.9971C13.2377 25.8294 13.5355 25.5851 13.7667 25.2833C14.0048 24.9885 14.1697 24.6415 14.2479 24.2707C14.3261 23.8999 14.3154 23.5159 14.2167 23.15L12.9667 18.15C12.8357 17.608 12.5261 17.1258 12.0877 16.7811C11.6493 16.4364 11.1077 16.2494 10.55 16.25H1.66669"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M35 8.75H28.2C27.6423 8.74937 27.1007 8.93645 26.6623 9.28111C26.2239 9.62577 25.9143 10.108 25.7833 10.65L24.5333 15.65"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M37.2 22.6333C36.2406 21.7188 34.9573 21.2226 33.6322 21.2538C32.3071 21.2851 31.0486 21.8412 30.1333 22.8L28.75 24.25L27.3667 22.8C26.9187 22.305 26.3761 21.9047 25.7709 21.6227C25.1657 21.3408 24.5101 21.1829 23.8429 21.1584C23.1757 21.1339 22.5104 21.2433 21.8861 21.4801C21.2618 21.7169 20.6913 22.0763 20.2082 22.5371C19.7251 22.998 19.3392 23.5509 19.0733 24.1633C18.8073 24.7757 18.6667 25.4351 18.6597 26.1028C18.6527 26.7704 18.7795 27.4326 19.0326 28.0505C19.2857 28.6683 19.66 29.2292 20.1333 29.7L28.75 38.75L37.3667 29.7C38.2812 28.7406 38.7774 27.4573 38.7462 26.1322C38.7149 24.8071 38.1588 23.5486 37.2 22.6333Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <svg
                          className="descrp-el__arr"
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.49133 11L7.47404 6L2.49133 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="descrp-el__text text-info">
                        Дождитесь покупки со страны, где донат разрешён
                      </p>
                    </div>
                  </div>
                  <div className="descrp__el">
                    <div className="descrp-el">
                      <div className="descrp-el__top">
                        <div className="descrp-el__icon">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.3667 8.75C22.298 9.80694 21.8147 10.794 21.0218 11.4963C20.229 12.1986 19.1908 12.5594 18.1333 12.5C17.4554 12.5156 16.7832 12.3731 16.1699 12.0838C15.5566 11.7946 15.0191 11.3664 14.6 10.8333C14.1783 11.3635 13.6403 11.7896 13.0276 12.0786C12.415 12.3676 11.744 12.5118 11.0667 12.5C10.0288 12.5565 9.00925 12.2102 8.22054 11.5333C7.43183 10.8563 6.93488 9.90107 6.83334 8.86667"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.85 12.5V16.25"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.35 12.5V16.25"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.60001 21.25H22.1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20.85 21.25L18.7667 26.4667C18.545 27.0015 18.3883 27.5611 18.3 28.1333C18.1458 29.3411 17.5561 30.4511 16.6417 31.2551C15.7273 32.059 14.5509 32.5017 13.3333 32.5C12.5583 32.5014 11.7947 32.3125 11.1098 31.9498C10.4248 31.5872 9.83936 31.0619 9.40489 30.42C8.97042 29.7782 8.70021 29.0395 8.61799 28.2688C8.53577 27.4981 8.64405 26.719 8.93334 26L10.8333 21.25"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.85 21.25L13.35 26.25"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.80001 23.8667C3.19437 22.0424 2.00061 19.8937 1.30001 17.5667C1.23019 17.3376 1.22763 17.0933 1.29263 16.8629C1.35764 16.6324 1.48746 16.4255 1.66668 16.2667C1.85511 16.1119 2.08373 16.0141 2.32577 15.9845C2.56781 15.955 2.81324 15.9951 3.03334 16.1L5.81668 17.5V13.75C5.81668 10.4348 7.13364 7.25537 9.47784 4.91117C11.822 2.56696 15.0015 1.25 18.3167 1.25C21.6319 1.25 24.8113 2.56696 27.1555 4.91117C29.4997 7.25537 30.8167 10.4348 30.8167 13.75V16.25L36.2833 15.3333C36.5043 15.2981 36.7307 15.3228 36.9388 15.4049C37.147 15.487 37.3293 15.6234 37.4667 15.8C37.606 15.9732 37.6952 16.1813 37.7246 16.4017C37.754 16.6221 37.7224 16.8463 37.6333 17.05C36.75 19.2 34.8 23.8667 30.8167 26.25H38.3333C38.3333 26.25 32.0833 38.75 19.5833 38.75C16.5263 38.7184 13.5146 38.0067 10.7667 36.6667"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="descrp-el__text text-info">
                        Похвастайтесь друзьям новым скином
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-def">
          <div className="container-def">
            <div className="sec-def__wrap">
              <h2 className="title-def title-def_sec sec-def__title">Игры, предметы и подписки</h2>
              <div className="sec-def__content">
                <div className="cat cat_limit">
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/fortnite.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Fortnite</div>
                          <div className="cat-el__text text-cat">В-баксы, подписки, наборы</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/overwatch.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Overwatch 2</div>
                          <div className="cat-el__text text-cat">
                            Жетоны, монеты, наборы, пакеты
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/valorant.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Valorant</div>
                          <div className="cat-el__text text-cat">Аккаунты, ключи</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/brawl.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Brawl Stars</div>
                          <div className="cat-el__text text-cat">Пропуски, гемы</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/playstation.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">PlayStation</div>
                          <div className="cat-el__text text-cat">Подписки, апгрейды, игры</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/twitch.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Twitch</div>
                          <div className="cat-el__text text-cat">Подписки</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/xbox.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">XboxGamePass</div>
                          <div className="cat-el__text text-cat">Подписки</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/battlenet.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">BattleNet</div>
                          <div className="cat-el__text text-cat">Аккаунты</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/fallguys.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">FallGuys</div>
                          <div className="cat-el__text text-cat">Наборы, шмяксы, герои</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/genshinimpact.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Genshin Impact</div>
                          <div className="cat-el__text text-cat">Подписки, наборы, кристаллы</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/heartstone.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Heartstone</div>
                          <div className="cat-el__text text-cat">
                            Пропуски, рунические камни, паки
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/roblox.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Roblox</div>
                          <div className="cat-el__text text-cat">Робуксы</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/diablo.png" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Diablo IV</div>
                          <div className="cat-el__text text-cat">Игра подарком на аккаунт</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/mlegends.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Mobile Legends</div>
                          <div className="cat-el__text text-cat">Алмазы, пропуски</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/pubgmobile.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">PUBG Mobile</div>
                          <div className="cat-el__text text-cat">Валюта</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/mine.png" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Minecraft</div>
                          <div className="cat-el__text text-cat">Монетки</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/Honkai.png" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Honkai: Star Rail</div>
                          <div className="cat-el__text text-cat">Аккаунты, пропуски, сущности</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cat__el">
                    <a className="cat-el content-bg" href="#">
                      <div className="cat-el__content">
                        <img className="cat-el__icon" src="/img/cat/steam.svg" alt="" />
                        <div className="cat-el__body">
                          <div className="cat-el__title title-cat">Steam</div>
                          <div className="cat-el__text text-cat">Аккаунты</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <button className="sec-def__btn btn-show">Показать меньше</button>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-def">
          <div className="container-def">
            <div className="sec-def__wrap">
              <h2 className="title-def title-def_sec sec-def__title">Популярные товары</h2>
              <div className="sec-def__content">
                <div className="products products_limit">
                  <div className="products__el">
                    <div className="products-el">
                      <img className="products-el__img" src="/img/pr_bg.jpg" alt="" />
                      <div className="products-el__content">
                        <div className="products-el__cat cat-info">
                          <img className="cat-info__icon" src="/img/cat/heartstone.svg" alt="" />
                          <div className="cat-info__body">
                            <div className="cat-info__title">Heartstone</div>
                          </div>
                        </div>
                        <div className="products-el__title title-def title-def_med">
                          Сезонный пропуск для полей сражений
                        </div>
                        <div className="products-el__bottom">
                          <div className="products-el__cost pr-cost">
                            <div className="pr-cost__new">1 057 ₽</div>
                            <div className="pr-cost__old">1 406 ₽</div>
                          </div>
                          <div className="products-el__acts">
                            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
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
                                      d="M15 1L11.5204 10.8675C11.3961 11.247 11.0233 11.5 10.6505 11.5H3.93986C3.56705 11.5 3.19424 11.247 3.06997 10.8675L1.08163 5.1747C0.957357 4.92169 0.957356 4.54217 1.2059 4.28916C1.33017 4.03615 1.70298 3.90964 1.95153 3.90964H14.0058"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.08333 13.8331C5.375 13.8331 5.66667 14.1248 5.66667 14.4165C5.66667 14.7081 5.375 14.9998 5.08333 14.9998C4.79167 14.9998 4.5 14.7081 4.5 14.4165C4.5 14.2706 4.5 14.1248 4.64583 13.979C4.79167 13.8331 4.9375 13.8331 5.08333 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.74984 13.8331C10.0415 13.8331 10.3332 14.1248 10.3332 14.4165C10.3332 14.7081 10.0415 14.9998 9.74984 14.9998C9.45817 14.9998 9.1665 14.7081 9.1665 14.4165C9.1665 14.2706 9.1665 14.1248 9.31234 13.979C9.45817 13.8331 9.604 13.8331 9.74984 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <button className="action-btn action-btn_small products-el__acts-el">
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
                                      d="M8.42526 1.70002L10.3771 5.56694L14.1338 5.9391C14.2232 5.94653 14.3086 5.97944 14.3799 6.03391C14.4512 6.08839 14.5055 6.16216 14.5361 6.24649C14.5668 6.33082 14.5727 6.42218 14.5531 6.50975C14.5335 6.59732 14.4892 6.67743 14.4254 6.7406L11.3338 9.80485L12.48 13.9687C12.5035 14.057 12.5009 14.1502 12.4726 14.2371C12.4444 14.324 12.3916 14.4009 12.3207 14.4585C12.2497 14.5161 12.1637 14.552 12.0728 14.5619C11.982 14.5717 11.8902 14.5552 11.8086 14.5141L8.00001 12.6282L4.19667 14.5118C4.11503 14.5528 4.02327 14.5694 3.93243 14.5595C3.84158 14.5497 3.75552 14.5138 3.6846 14.4562C3.61367 14.3986 3.5609 14.3217 3.53263 14.2348C3.50436 14.1479 3.5018 14.0547 3.52526 13.9664L4.67151 9.80252L1.57751 6.73827C1.51377 6.6751 1.46946 6.59499 1.44984 6.50742C1.43022 6.41985 1.4361 6.32849 1.46679 6.24416C1.49747 6.15983 1.55168 6.08606 1.623 6.03158C1.69431 5.9771 1.77974 5.9442 1.86917 5.93677L5.62584 5.5646L7.57475 1.70002C7.61484 1.62174 7.67575 1.55604 7.75078 1.51016C7.82582 1.46428 7.91206 1.44 8.00001 1.44C8.08795 1.44 8.17419 1.46428 8.24923 1.51016C8.32426 1.55604 8.38517 1.62174 8.42526 1.70002Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products__el">
                    <div className="products-el">
                      <img className="products-el__img" src="/img/fall_bg.jpg" alt="" />
                      <div className="products-el__content">
                        <div className="products-el__cat cat-info">
                          <img className="cat-info__icon" src="/img/cat/fallguys.svg" alt="" />
                          <div className="cat-info__body">
                            <div className="cat-info__title">Fall Guys</div>
                          </div>
                        </div>
                        <div className="products-el__title title-def title-def_med">
                          Набор «Крот-шахтёр»
                        </div>
                        <div className="products-el__bottom">
                          <div className="products-el__cost pr-cost">
                            <div className="pr-cost__val">213 ₽</div>
                          </div>
                          <div className="products-el__acts">
                            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
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
                                      d="M15 1L11.5204 10.8675C11.3961 11.247 11.0233 11.5 10.6505 11.5H3.93986C3.56705 11.5 3.19424 11.247 3.06997 10.8675L1.08163 5.1747C0.957357 4.92169 0.957356 4.54217 1.2059 4.28916C1.33017 4.03615 1.70298 3.90964 1.95153 3.90964H14.0058"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.08333 13.8331C5.375 13.8331 5.66667 14.1248 5.66667 14.4165C5.66667 14.7081 5.375 14.9998 5.08333 14.9998C4.79167 14.9998 4.5 14.7081 4.5 14.4165C4.5 14.2706 4.5 14.1248 4.64583 13.979C4.79167 13.8331 4.9375 13.8331 5.08333 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.74984 13.8331C10.0415 13.8331 10.3332 14.1248 10.3332 14.4165C10.3332 14.7081 10.0415 14.9998 9.74984 14.9998C9.45817 14.9998 9.1665 14.7081 9.1665 14.4165C9.1665 14.2706 9.1665 14.1248 9.31234 13.979C9.45817 13.8331 9.604 13.8331 9.74984 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <button className="action-btn action-btn_small products-el__acts-el">
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
                                      d="M8.42526 1.70002L10.3771 5.56694L14.1338 5.9391C14.2232 5.94653 14.3086 5.97944 14.3799 6.03391C14.4512 6.08839 14.5055 6.16216 14.5361 6.24649C14.5668 6.33082 14.5727 6.42218 14.5531 6.50975C14.5335 6.59732 14.4892 6.67743 14.4254 6.7406L11.3338 9.80485L12.48 13.9687C12.5035 14.057 12.5009 14.1502 12.4726 14.2371C12.4444 14.324 12.3916 14.4009 12.3207 14.4585C12.2497 14.5161 12.1637 14.552 12.0728 14.5619C11.982 14.5717 11.8902 14.5552 11.8086 14.5141L8.00001 12.6282L4.19667 14.5118C4.11503 14.5528 4.02327 14.5694 3.93243 14.5595C3.84158 14.5497 3.75552 14.5138 3.6846 14.4562C3.61367 14.3986 3.5609 14.3217 3.53263 14.2348C3.50436 14.1479 3.5018 14.0547 3.52526 13.9664L4.67151 9.80252L1.57751 6.73827C1.51377 6.6751 1.46946 6.59499 1.44984 6.50742C1.43022 6.41985 1.4361 6.32849 1.46679 6.24416C1.49747 6.15983 1.55168 6.08606 1.623 6.03158C1.69431 5.9771 1.77974 5.9442 1.86917 5.93677L5.62584 5.5646L7.57475 1.70002C7.61484 1.62174 7.67575 1.55604 7.75078 1.51016C7.82582 1.46428 7.91206 1.44 8.00001 1.44C8.08795 1.44 8.17419 1.46428 8.24923 1.51016C8.32426 1.55604 8.38517 1.62174 8.42526 1.70002Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products__el">
                    <div className="products-el">
                      <img className="products-el__img" src="/img/bg/valorant.jpg" alt="" />
                      <div className="products-el__content">
                        <div className="products-el__cat cat-info">
                          <img className="cat-info__icon" src="/img/cat/valorant.svg" alt="" />
                          <div className="cat-info__body">
                            <div className="cat-info__title">Valorant</div>
                          </div>
                        </div>
                        <div className="products-el__title title-def title-def_med">
                          Ключ 925 VP
                        </div>
                        <div className="products-el__bottom">
                          <div className="products-el__cost pr-cost">
                            <div className="pr-cost__val">566 ₽</div>
                          </div>
                          <div className="products-el__acts">
                            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
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
                                      d="M15 1L11.5204 10.8675C11.3961 11.247 11.0233 11.5 10.6505 11.5H3.93986C3.56705 11.5 3.19424 11.247 3.06997 10.8675L1.08163 5.1747C0.957357 4.92169 0.957356 4.54217 1.2059 4.28916C1.33017 4.03615 1.70298 3.90964 1.95153 3.90964H14.0058"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.08333 13.8331C5.375 13.8331 5.66667 14.1248 5.66667 14.4165C5.66667 14.7081 5.375 14.9998 5.08333 14.9998C4.79167 14.9998 4.5 14.7081 4.5 14.4165C4.5 14.2706 4.5 14.1248 4.64583 13.979C4.79167 13.8331 4.9375 13.8331 5.08333 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.74984 13.8331C10.0415 13.8331 10.3332 14.1248 10.3332 14.4165C10.3332 14.7081 10.0415 14.9998 9.74984 14.9998C9.45817 14.9998 9.1665 14.7081 9.1665 14.4165C9.1665 14.2706 9.1665 14.1248 9.31234 13.979C9.45817 13.8331 9.604 13.8331 9.74984 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <button className="action-btn action-btn_small products-el__acts-el">
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
                                      d="M8.42526 1.70002L10.3771 5.56694L14.1338 5.9391C14.2232 5.94653 14.3086 5.97944 14.3799 6.03391C14.4512 6.08839 14.5055 6.16216 14.5361 6.24649C14.5668 6.33082 14.5727 6.42218 14.5531 6.50975C14.5335 6.59732 14.4892 6.67743 14.4254 6.7406L11.3338 9.80485L12.48 13.9687C12.5035 14.057 12.5009 14.1502 12.4726 14.2371C12.4444 14.324 12.3916 14.4009 12.3207 14.4585C12.2497 14.5161 12.1637 14.552 12.0728 14.5619C11.982 14.5717 11.8902 14.5552 11.8086 14.5141L8.00001 12.6282L4.19667 14.5118C4.11503 14.5528 4.02327 14.5694 3.93243 14.5595C3.84158 14.5497 3.75552 14.5138 3.6846 14.4562C3.61367 14.3986 3.5609 14.3217 3.53263 14.2348C3.50436 14.1479 3.5018 14.0547 3.52526 13.9664L4.67151 9.80252L1.57751 6.73827C1.51377 6.6751 1.46946 6.59499 1.44984 6.50742C1.43022 6.41985 1.4361 6.32849 1.46679 6.24416C1.49747 6.15983 1.55168 6.08606 1.623 6.03158C1.69431 5.9771 1.77974 5.9442 1.86917 5.93677L5.62584 5.5646L7.57475 1.70002C7.61484 1.62174 7.67575 1.55604 7.75078 1.51016C7.82582 1.46428 7.91206 1.44 8.00001 1.44C8.08795 1.44 8.17419 1.46428 8.24923 1.51016C8.32426 1.55604 8.38517 1.62174 8.42526 1.70002Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products__el">
                    <div className="products-el">
                      <img className="products-el__img" src="/img/bg/Honkai.jpg" alt="" />
                      <div className="products-el__content">
                        <div className="products-el__cat cat-info">
                          <img className="cat-info__icon" src="/img/cat/Honkai.png" alt="" />
                          <div className="cat-info__body">
                            <div className="cat-info__title">Honkai: Star Rail</div>
                          </div>
                        </div>
                        <div className="products-el__title title-def title-def_med">
                          Медаль безымянных
                        </div>
                        <div className="products-el__bottom">
                          <div className="products-el__cost pr-cost">
                            <div className="pr-cost__val">1 199 ₽</div>
                          </div>
                          <div className="products-el__acts">
                            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
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
                                      d="M15 1L11.5204 10.8675C11.3961 11.247 11.0233 11.5 10.6505 11.5H3.93986C3.56705 11.5 3.19424 11.247 3.06997 10.8675L1.08163 5.1747C0.957357 4.92169 0.957356 4.54217 1.2059 4.28916C1.33017 4.03615 1.70298 3.90964 1.95153 3.90964H14.0058"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.08333 13.8331C5.375 13.8331 5.66667 14.1248 5.66667 14.4165C5.66667 14.7081 5.375 14.9998 5.08333 14.9998C4.79167 14.9998 4.5 14.7081 4.5 14.4165C4.5 14.2706 4.5 14.1248 4.64583 13.979C4.79167 13.8331 4.9375 13.8331 5.08333 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.74984 13.8331C10.0415 13.8331 10.3332 14.1248 10.3332 14.4165C10.3332 14.7081 10.0415 14.9998 9.74984 14.9998C9.45817 14.9998 9.1665 14.7081 9.1665 14.4165C9.1665 14.2706 9.1665 14.1248 9.31234 13.979C9.45817 13.8331 9.604 13.8331 9.74984 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <button className="action-btn action-btn_small products-el__acts-el">
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
                                      d="M8.42526 1.70002L10.3771 5.56694L14.1338 5.9391C14.2232 5.94653 14.3086 5.97944 14.3799 6.03391C14.4512 6.08839 14.5055 6.16216 14.5361 6.24649C14.5668 6.33082 14.5727 6.42218 14.5531 6.50975C14.5335 6.59732 14.4892 6.67743 14.4254 6.7406L11.3338 9.80485L12.48 13.9687C12.5035 14.057 12.5009 14.1502 12.4726 14.2371C12.4444 14.324 12.3916 14.4009 12.3207 14.4585C12.2497 14.5161 12.1637 14.552 12.0728 14.5619C11.982 14.5717 11.8902 14.5552 11.8086 14.5141L8.00001 12.6282L4.19667 14.5118C4.11503 14.5528 4.02327 14.5694 3.93243 14.5595C3.84158 14.5497 3.75552 14.5138 3.6846 14.4562C3.61367 14.3986 3.5609 14.3217 3.53263 14.2348C3.50436 14.1479 3.5018 14.0547 3.52526 13.9664L4.67151 9.80252L1.57751 6.73827C1.51377 6.6751 1.46946 6.59499 1.44984 6.50742C1.43022 6.41985 1.4361 6.32849 1.46679 6.24416C1.49747 6.15983 1.55168 6.08606 1.623 6.03158C1.69431 5.9771 1.77974 5.9442 1.86917 5.93677L5.62584 5.5646L7.57475 1.70002C7.61484 1.62174 7.67575 1.55604 7.75078 1.51016C7.82582 1.46428 7.91206 1.44 8.00001 1.44C8.08795 1.44 8.17419 1.46428 8.24923 1.51016C8.32426 1.55604 8.38517 1.62174 8.42526 1.70002Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products__el">
                    <div className="products-el">
                      <img className="products-el__img" src="/img/bg/Honkai2.jpg" alt="" />
                      <div className="products-el__content">
                        <div className="products-el__cat cat-info">
                          <img className="cat-info__icon" src="/img/cat/Honkai.png" alt="" />
                          <div className="cat-info__body">
                            <div className="cat-info__title">Honkai: Star Rail</div>
                          </div>
                        </div>
                        <div className="products-el__title title-def title-def_med">
                          980 + 980 Сущность древних снов
                        </div>
                        <div className="products-el__bottom">
                          <div className="products-el__cost pr-cost">
                            <div className="pr-cost__val">1 518 ₽</div>
                          </div>
                          <div className="products-el__acts">
                            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
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
                                      d="M15 1L11.5204 10.8675C11.3961 11.247 11.0233 11.5 10.6505 11.5H3.93986C3.56705 11.5 3.19424 11.247 3.06997 10.8675L1.08163 5.1747C0.957357 4.92169 0.957356 4.54217 1.2059 4.28916C1.33017 4.03615 1.70298 3.90964 1.95153 3.90964H14.0058"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.08333 13.8331C5.375 13.8331 5.66667 14.1248 5.66667 14.4165C5.66667 14.7081 5.375 14.9998 5.08333 14.9998C4.79167 14.9998 4.5 14.7081 4.5 14.4165C4.5 14.2706 4.5 14.1248 4.64583 13.979C4.79167 13.8331 4.9375 13.8331 5.08333 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.74984 13.8331C10.0415 13.8331 10.3332 14.1248 10.3332 14.4165C10.3332 14.7081 10.0415 14.9998 9.74984 14.9998C9.45817 14.9998 9.1665 14.7081 9.1665 14.4165C9.1665 14.2706 9.1665 14.1248 9.31234 13.979C9.45817 13.8331 9.604 13.8331 9.74984 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <button className="action-btn action-btn_small products-el__acts-el">
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
                                      d="M8.42526 1.70002L10.3771 5.56694L14.1338 5.9391C14.2232 5.94653 14.3086 5.97944 14.3799 6.03391C14.4512 6.08839 14.5055 6.16216 14.5361 6.24649C14.5668 6.33082 14.5727 6.42218 14.5531 6.50975C14.5335 6.59732 14.4892 6.67743 14.4254 6.7406L11.3338 9.80485L12.48 13.9687C12.5035 14.057 12.5009 14.1502 12.4726 14.2371C12.4444 14.324 12.3916 14.4009 12.3207 14.4585C12.2497 14.5161 12.1637 14.552 12.0728 14.5619C11.982 14.5717 11.8902 14.5552 11.8086 14.5141L8.00001 12.6282L4.19667 14.5118C4.11503 14.5528 4.02327 14.5694 3.93243 14.5595C3.84158 14.5497 3.75552 14.5138 3.6846 14.4562C3.61367 14.3986 3.5609 14.3217 3.53263 14.2348C3.50436 14.1479 3.5018 14.0547 3.52526 13.9664L4.67151 9.80252L1.57751 6.73827C1.51377 6.6751 1.46946 6.59499 1.44984 6.50742C1.43022 6.41985 1.4361 6.32849 1.46679 6.24416C1.49747 6.15983 1.55168 6.08606 1.623 6.03158C1.69431 5.9771 1.77974 5.9442 1.86917 5.93677L5.62584 5.5646L7.57475 1.70002C7.61484 1.62174 7.67575 1.55604 7.75078 1.51016C7.82582 1.46428 7.91206 1.44 8.00001 1.44C8.08795 1.44 8.17419 1.46428 8.24923 1.51016C8.32426 1.55604 8.38517 1.62174 8.42526 1.70002Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products__el">
                    <div className="products-el">
                      <img className="products-el__img" src="/img/bg/PUBG.jpg" alt="" />
                      <div className="products-el__content">
                        <div className="products-el__cat cat-info">
                          <img className="cat-info__icon" src="/img/cat/pubgmobile.svg" alt="" />
                          <div className="cat-info__body">
                            <div className="cat-info__title">PUBG Mobile</div>
                          </div>
                        </div>
                        <div className="products-el__title title-def title-def_med">
                          24 000 UC + 8 400 бонус (ключ)
                        </div>
                        <div className="products-el__bottom">
                          <div className="products-el__cost pr-cost">
                            <div className="pr-cost__val">35 667 ₽</div>
                          </div>
                          <div className="products-el__acts">
                            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
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
                                      d="M15 1L11.5204 10.8675C11.3961 11.247 11.0233 11.5 10.6505 11.5H3.93986C3.56705 11.5 3.19424 11.247 3.06997 10.8675L1.08163 5.1747C0.957357 4.92169 0.957356 4.54217 1.2059 4.28916C1.33017 4.03615 1.70298 3.90964 1.95153 3.90964H14.0058"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.08333 13.8331C5.375 13.8331 5.66667 14.1248 5.66667 14.4165C5.66667 14.7081 5.375 14.9998 5.08333 14.9998C4.79167 14.9998 4.5 14.7081 4.5 14.4165C4.5 14.2706 4.5 14.1248 4.64583 13.979C4.79167 13.8331 4.9375 13.8331 5.08333 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.74984 13.8331C10.0415 13.8331 10.3332 14.1248 10.3332 14.4165C10.3332 14.7081 10.0415 14.9998 9.74984 14.9998C9.45817 14.9998 9.1665 14.7081 9.1665 14.4165C9.1665 14.2706 9.1665 14.1248 9.31234 13.979C9.45817 13.8331 9.604 13.8331 9.74984 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <button className="action-btn action-btn_small products-el__acts-el">
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
                                      d="M8.42526 1.70002L10.3771 5.56694L14.1338 5.9391C14.2232 5.94653 14.3086 5.97944 14.3799 6.03391C14.4512 6.08839 14.5055 6.16216 14.5361 6.24649C14.5668 6.33082 14.5727 6.42218 14.5531 6.50975C14.5335 6.59732 14.4892 6.67743 14.4254 6.7406L11.3338 9.80485L12.48 13.9687C12.5035 14.057 12.5009 14.1502 12.4726 14.2371C12.4444 14.324 12.3916 14.4009 12.3207 14.4585C12.2497 14.5161 12.1637 14.552 12.0728 14.5619C11.982 14.5717 11.8902 14.5552 11.8086 14.5141L8.00001 12.6282L4.19667 14.5118C4.11503 14.5528 4.02327 14.5694 3.93243 14.5595C3.84158 14.5497 3.75552 14.5138 3.6846 14.4562C3.61367 14.3986 3.5609 14.3217 3.53263 14.2348C3.50436 14.1479 3.5018 14.0547 3.52526 13.9664L4.67151 9.80252L1.57751 6.73827C1.51377 6.6751 1.46946 6.59499 1.44984 6.50742C1.43022 6.41985 1.4361 6.32849 1.46679 6.24416C1.49747 6.15983 1.55168 6.08606 1.623 6.03158C1.69431 5.9771 1.77974 5.9442 1.86917 5.93677L5.62584 5.5646L7.57475 1.70002C7.61484 1.62174 7.67575 1.55604 7.75078 1.51016C7.82582 1.46428 7.91206 1.44 8.00001 1.44C8.08795 1.44 8.17419 1.46428 8.24923 1.51016C8.32426 1.55604 8.38517 1.62174 8.42526 1.70002Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products__el">
                    <div className="products-el">
                      <img className="products-el__img" src="/img/bg/Diablo.jpg" alt="" />
                      <div className="products-el__content">
                        <div className="products-el__cat cat-info">
                          <img className="cat-info__icon" src="/img/cat/diablo.png" alt="" />
                          <div className="cat-info__body">
                            <div className="cat-info__title">Diablo IV</div>
                          </div>
                        </div>
                        <div className="products-el__title title-def title-def_med">
                          Digital Deluxe Edition
                        </div>
                        <div className="products-el__bottom">
                          <div className="products-el__cost pr-cost">
                            <div className="pr-cost__new">11 380 ₽</div>
                            <div className="pr-cost__old">12 996 ₽</div>
                          </div>
                          <div className="products-el__acts">
                            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
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
                                      d="M15 1L11.5204 10.8675C11.3961 11.247 11.0233 11.5 10.6505 11.5H3.93986C3.56705 11.5 3.19424 11.247 3.06997 10.8675L1.08163 5.1747C0.957357 4.92169 0.957356 4.54217 1.2059 4.28916C1.33017 4.03615 1.70298 3.90964 1.95153 3.90964H14.0058"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.08333 13.8331C5.375 13.8331 5.66667 14.1248 5.66667 14.4165C5.66667 14.7081 5.375 14.9998 5.08333 14.9998C4.79167 14.9998 4.5 14.7081 4.5 14.4165C4.5 14.2706 4.5 14.1248 4.64583 13.979C4.79167 13.8331 4.9375 13.8331 5.08333 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.74984 13.8331C10.0415 13.8331 10.3332 14.1248 10.3332 14.4165C10.3332 14.7081 10.0415 14.9998 9.74984 14.9998C9.45817 14.9998 9.1665 14.7081 9.1665 14.4165C9.1665 14.2706 9.1665 14.1248 9.31234 13.979C9.45817 13.8331 9.604 13.8331 9.74984 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <button className="action-btn action-btn_small products-el__acts-el">
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
                                      d="M8.42526 1.70002L10.3771 5.56694L14.1338 5.9391C14.2232 5.94653 14.3086 5.97944 14.3799 6.03391C14.4512 6.08839 14.5055 6.16216 14.5361 6.24649C14.5668 6.33082 14.5727 6.42218 14.5531 6.50975C14.5335 6.59732 14.4892 6.67743 14.4254 6.7406L11.3338 9.80485L12.48 13.9687C12.5035 14.057 12.5009 14.1502 12.4726 14.2371C12.4444 14.324 12.3916 14.4009 12.3207 14.4585C12.2497 14.5161 12.1637 14.552 12.0728 14.5619C11.982 14.5717 11.8902 14.5552 11.8086 14.5141L8.00001 12.6282L4.19667 14.5118C4.11503 14.5528 4.02327 14.5694 3.93243 14.5595C3.84158 14.5497 3.75552 14.5138 3.6846 14.4562C3.61367 14.3986 3.5609 14.3217 3.53263 14.2348C3.50436 14.1479 3.5018 14.0547 3.52526 13.9664L4.67151 9.80252L1.57751 6.73827C1.51377 6.6751 1.46946 6.59499 1.44984 6.50742C1.43022 6.41985 1.4361 6.32849 1.46679 6.24416C1.49747 6.15983 1.55168 6.08606 1.623 6.03158C1.69431 5.9771 1.77974 5.9442 1.86917 5.93677L5.62584 5.5646L7.57475 1.70002C7.61484 1.62174 7.67575 1.55604 7.75078 1.51016C7.82582 1.46428 7.91206 1.44 8.00001 1.44C8.08795 1.44 8.17419 1.46428 8.24923 1.51016C8.32426 1.55604 8.38517 1.62174 8.42526 1.70002Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products__el">
                    <div className="products-el">
                      <img className="products-el__img" src="/img/bg/Legends.jpg" alt="" />
                      <div className="products-el__content">
                        <div className="products-el__cat cat-info">
                          <img className="cat-info__icon" src="/img/cat/mlegends.svg" alt="" />
                          <div className="cat-info__body">
                            <div className="cat-info__title">Mobile Legends</div>
                          </div>
                        </div>
                        <div className="products-el__title title-def title-def_med">
                          Сумеречный пропуск
                        </div>
                        <div className="products-el__bottom">
                          <div className="products-el__cost pr-cost">
                            <div className="pr-cost__val">646 ₽</div>
                          </div>
                          <div className="products-el__acts">
                            <button className="action-btn action-btn_bg action-btn_small products-el__acts-el">
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
                                      d="M15 1L11.5204 10.8675C11.3961 11.247 11.0233 11.5 10.6505 11.5H3.93986C3.56705 11.5 3.19424 11.247 3.06997 10.8675L1.08163 5.1747C0.957357 4.92169 0.957356 4.54217 1.2059 4.28916C1.33017 4.03615 1.70298 3.90964 1.95153 3.90964H14.0058"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.08333 13.8331C5.375 13.8331 5.66667 14.1248 5.66667 14.4165C5.66667 14.7081 5.375 14.9998 5.08333 14.9998C4.79167 14.9998 4.5 14.7081 4.5 14.4165C4.5 14.2706 4.5 14.1248 4.64583 13.979C4.79167 13.8331 4.9375 13.8331 5.08333 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.74984 13.8331C10.0415 13.8331 10.3332 14.1248 10.3332 14.4165C10.3332 14.7081 10.0415 14.9998 9.74984 14.9998C9.45817 14.9998 9.1665 14.7081 9.1665 14.4165C9.1665 14.2706 9.1665 14.1248 9.31234 13.979C9.45817 13.8331 9.604 13.8331 9.74984 13.8331Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                            <button className="action-btn action-btn_small products-el__acts-el">
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
                                      d="M8.42526 1.70002L10.3771 5.56694L14.1338 5.9391C14.2232 5.94653 14.3086 5.97944 14.3799 6.03391C14.4512 6.08839 14.5055 6.16216 14.5361 6.24649C14.5668 6.33082 14.5727 6.42218 14.5531 6.50975C14.5335 6.59732 14.4892 6.67743 14.4254 6.7406L11.3338 9.80485L12.48 13.9687C12.5035 14.057 12.5009 14.1502 12.4726 14.2371C12.4444 14.324 12.3916 14.4009 12.3207 14.4585C12.2497 14.5161 12.1637 14.552 12.0728 14.5619C11.982 14.5717 11.8902 14.5552 11.8086 14.5141L8.00001 12.6282L4.19667 14.5118C4.11503 14.5528 4.02327 14.5694 3.93243 14.5595C3.84158 14.5497 3.75552 14.5138 3.6846 14.4562C3.61367 14.3986 3.5609 14.3217 3.53263 14.2348C3.50436 14.1479 3.5018 14.0547 3.52526 13.9664L4.67151 9.80252L1.57751 6.73827C1.51377 6.6751 1.46946 6.59499 1.44984 6.50742C1.43022 6.41985 1.4361 6.32849 1.46679 6.24416C1.49747 6.15983 1.55168 6.08606 1.623 6.03158C1.69431 5.9771 1.77974 5.9442 1.86917 5.93677L5.62584 5.5646L7.57475 1.70002C7.61484 1.62174 7.67575 1.55604 7.75078 1.51016C7.82582 1.46428 7.91206 1.44 8.00001 1.44C8.08795 1.44 8.17419 1.46428 8.24923 1.51016C8.32426 1.55604 8.38517 1.62174 8.42526 1.70002Z"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="sec-def__btn btn-show">Показать ещё</button>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-def sec-reviews">
          <div className="container-def">
            <div className="sec-def__wrap">
              <h2 className="title-def title-def_sec sec-def__title">Отзывы</h2>
              <div className="sec-def__content">
                <div className="rewiews rewiews_masonry rewiews_limit">
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Arten__37</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">
                          Как всегда: быстро, качественно и безопасно!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Елена</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">
                          Брала подписку фортнайт, сделали быстро, все на высоте. Спасибо!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Andrey</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">
                          Ребята красавчики, все быстро и четко
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Lexar4ik</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">
                          покупаю не в первые всё быстро и хорошо
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Лягушка хакер 228</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">
                          Купил 13 500 вб и в течение 5 минут получил свои бибаксы. Спасибо вам
                          за сервис!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Zertoga</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">ВВсё шик</div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Darina Darina</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">
                          Спасибо огромное! Вчера немогла выполнить заказ. Но сегодня выполнили
                          заказ на 1000В-баксов.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Костя Билбоско</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">Спасибо</div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Андрей Jelonse</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">
                          Всем спасибо заказ выполнили считанные секунды
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">(･ᴗ･)</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">Всё оч круто!!!</div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">lastmovieknight</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">
                          Огромное спасибо без вас было бы тяжко
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rewiews__el">
                    <div className="rewiews-el content-bg">
                      <div className="rewiews-el__top">
                        <img className="rewiews-el__img" src="/img/user.png " alt="" />
                        <div className="rewiews-el__top-body">
                          <div className="rewiews-el__name title-cat">Egor Egorychev</div>
                          <div className="rewiews-el__date text-date">3 августа 2023 в 19:04</div>
                        </div>
                      </div>
                      <div className="rewiews-el__body">
                        <div className="rewiews-el__text text-info">Топ</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="sec-def__btn btn-show sec-reviews__btn">Показать ещё</button>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-def sec-def_last">
          <div className="container-def">
            <div className="sec-def__wrap">
              <h2 className="title-def title-def_sec sec-def__title">Ответы на вопросы</h2>
              <div className="sec-def__content">
                <div className="faq">
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          У меня нет консоли Xbox
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Передумал приобретать товар
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Как купить товар?
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          У меня несколько заказов, можно ли их выполнить одновременно?
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Можно ли оформить покупку подарком?
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Неверные данные при оформлении заказа?
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Почему выполнение заказа может задерживаться?
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Могу ли я играть пока заказ выполняется?
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Не могу пополнить баланс
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Нужно ли менять пароль?
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Вы меня обманите?
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq__el">
                    <div className="faq-el">
                      <div className="faq-el__top">
                        <div className="faq-el__arr">
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L5.98271 6.5L10.9654 1.5"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="faq-el__title title-def title-def_med">
                          Почему поддержка мне не отвечает?
                        </div>
                      </div>
                      <div className="faq-el__body">
                        <p className="faq-el__text text-info">
                          Если вы передумаете покупать товар или у вас возникнут проблемы при
                          оформлении заказа — сообщите об этом оператору или напишите обращение
                          в поддержку создав тикет. Возврат осуществляется только на баланс
                          магазина, в ваш личный кабинет.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="sec-footer">
          <div className="container-def">
            <div className="sec-footer__wrap">
              <div className="sec-footer__content">
                <div className="sec-footer__left">
                  <div className="sec-footer__text">© 2023 RuPlayShop</div>
                  <a className="sec-footer__text" href="#">
                    Договор оферты
                  </a>
                </div>
                <div className="sec-footer__right">
                  <div className="pay-info">
                    <div className="pay-info__title sec-footer__text">Принимаем к оплате</div>
                    <div className="pay-info__el pay-info-el">
                      <img className="pay-info-el__img" src="/img/pay/1.svg" alt="" />
                    </div>
                    <div className="pay-info__el pay-info-el">
                      <img className="pay-info-el__img" src="/img/pay/2.svg" alt="" />
                    </div>
                    <div className="pay-info__el pay-info-el">
                      <img className="pay-info-el__img" src="/img/pay/3.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <div className="modal-mob" id="modal-games">
    <div className="modal-mob__content">
      <div className="modal-mob__title title-mob">Игры, предметы
        <br>и подписки</div>
      <div className="cat">
        <div className="cat__el">
          <div className="cat-el content-bg">
            <div className="cat-el__content">
              <img className="cat-el__icon" src="/img/cat/fortnite.svg" alt="" />
              <div className="cat-el__body">
                <div className="cat-el__title title-cat">Fortnite</div>
                <div className="cat-el__text text-cat">В-баксы, подписки, наборы</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cat__el">
          <div className="cat-el content-bg">
            <div className="cat-el__content">
              <img className="cat-el__icon" src="/img/cat/overwatch.svg" alt="" />
              <div className="cat-el__body">
                <div className="cat-el__title title-cat">Overwatch 2</div>
                <div className="cat-el__text text-cat">Жетоны, монеты, наборы, пакеты</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cat__el">
          <div className="cat-el content-bg">
            <div className="cat-el__content">
              <img className="cat-el__icon" src="/img/cat/valorant.svg" alt="" />
              <div className="cat-el__body">
                <div className="cat-el__title title-cat">Valorant</div>
                <div className="cat-el__text text-cat">Аккаунты, ключи</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cat__el">
          <div className="cat-el content-bg">
            <div className="cat-el__content">
              <img className="cat-el__icon" src="/img/cat/brawl.svg" alt="" />
              <div className="cat-el__body">
                <div className="cat-el__title title-cat">Brawl Stars</div>
                <div className="cat-el__text text-cat">Пропуски, гемы</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cat__el">
          <div className="cat-el content-bg">
            <div className="cat-el__content">
              <img className="cat-el__icon" src="/img/cat/playstation.svg" alt="" />
              <div className="cat-el__body">
                <div className="cat-el__title title-cat">PlayStation</div>
                <div className="cat-el__text text-cat">Подписки, апгрейды, игры</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cat__el">
          <div className="cat-el content-bg">
            <div className="cat-el__content">
              <img className="cat-el__icon" src="/img/cat/twitch.svg" alt="" />
              <div className="cat-el__body">
                <div className="cat-el__title title-cat">Twitch</div>
                <div className="cat-el__text text-cat">Подписки</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal-def" id="modal-support">
    <div className="modal-def__wrap">
      <div className="modal-def__content modal-content modal-chat">
        <div className="modal-content__close modal-def__close close-btn">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L20.9308 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.9308 1L1 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.799988V15.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M0.800781 8H15.2008" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat__el chat-el">
                  <div className="chat-el__bg">
                    <svg width="42" height="62" viewBox="0 0 42 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1419_9735)">
                        <mask id="mask0_1419_9735" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="42" height="62">
                          <path d="M0 0V62H42V0H0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_1419_9735)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9219 10.5905C33.6191 11.5457 42 20.3956 42 31.1719C42 41.8651 33.7478 50.6615 23.1688 51.7296L19.9282 62L18.3592 61.5205C18.3697 61.3084 18.375 61.0949 18.375 60.8802C16 55.5 11.8447 52.0081 10 49.5C5 45 0 39.0912 0 31.1719C0 23.3153 4.45471 16.4827 11.014 12.9868L10.9989 12.9223C15 9 18.3752 6.59395 18.3752 1.46354C18.3752 1.34135 18.3735 1.21967 18.3701 1.09834L20.5941 0.596748L22.9219 10.5905Z"
                          fill="#202229" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1419_9735">
                          <rect width="42" height="62" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="chat-el__count">7</div>
                  </div>
                  <div className="chat-el__content">
                    <div className="chat-el__title">Я не могу перевести деньги обратно на свою банковскую карту</div>
                    <div className="chat-el__date">21 апреля 2023 в 15:43</div>
                  </div>
                </div>
                <div className="chat__el chat-el active">
                  <div className="chat-el__bg">
                    <svg width="42" height="62" viewBox="0 0 42 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1419_9735)">
                        <mask id="mask0_1419_9735" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="42" height="62">
                          <path d="M0 0V62H42V0H0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_1419_9735)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9219 10.5905C33.6191 11.5457 42 20.3956 42 31.1719C42 41.8651 33.7478 50.6615 23.1688 51.7296L19.9282 62L18.3592 61.5205C18.3697 61.3084 18.375 61.0949 18.375 60.8802C16 55.5 11.8447 52.0081 10 49.5C5 45 0 39.0912 0 31.1719C0 23.3153 4.45471 16.4827 11.014 12.9868L10.9989 12.9223C15 9 18.3752 6.59395 18.3752 1.46354C18.3752 1.34135 18.3735 1.21967 18.3701 1.09834L20.5941 0.596748L22.9219 10.5905Z"
                          fill="#202229" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1419_9735">
                          <rect width="42" height="62" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="chat-el__count">2</div>
                  </div>
                  <div className="chat-el__content">
                    <div className="chat-el__title">Заказ: 5 000 В-баксов</div>
                    <div className="chat-el__date">21 апреля 2023 в 15:43</div>
                  </div>
                </div>
                <div className="chat__el chat-el chat-el_gray">
                  <div className="chat-el__content">
                    <div className="chat-el__title">Просьба вернуть деньги на карту так проблема с привязкой майкрософт и эпик не решаются</div>
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
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.957 17L3.98469 9L11.957 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="chat__body-mob-title title-small">Заказ: 5 000 В-баксов</div>
                </div>
                <div className="chat__body-content">
                  <div className="chat__body-wrap">
                    <div className="chat__line">
                      <div className="chat__message">Здравствуйте!
                        <br>Вас приветствует служба поддержки. Опишите проблему и мы постараемся ответить как можно скорее.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="chat__line chat__line_2">
                      <div className="chat__message chat__message_bg">Здравствуйте!
                        <br>Вас приветствует служба поддержки. Опишите проблему и мы постараемся ответить как можно скорее.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="center">
                      <div className="chat__new">Новые сообщения</div>
                    </div>
                    <div className="chat__line">
                      <div className="chat__message chat__message_red">Здравствуйте!</div>
                      <div className="chat__message chat__message_red">Конечно! Сообщите пожалуйста правильный логин.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="chat__line">
                      <div className="chat__message">Здравствуйте!
                        <br>Вас приветствует служба поддержки. Опишите проблему и мы постараемся ответить как можно скорее.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="chat__line chat__line_2">
                      <div className="chat__message chat__message_bg">Здравствуйте!
                        <br>Вас приветствует служба поддержки. Опишите проблему и мы постараемся ответить как можно скорее.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="center">
                      <div className="chat__new">Новые сообщения</div>
                    </div>
                    <div className="chat__line">
                      <div className="chat__message chat__message_red">Здравствуйте!</div>
                      <div className="chat__message chat__message_red">Конечно! Сообщите пожалуйста правильный логин.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="chat__line">
                      <div className="chat__message">Здравствуйте!
                        <br>Вас приветствует служба поддержки. Опишите проблему и мы постараемся ответить как можно скорее.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="chat__line chat__line_2">
                      <div className="chat__message chat__message_bg">Здравствуйте!
                        <br>Вас приветствует служба поддержки. Опишите проблему и мы постараемся ответить как можно скорее.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="center">
                      <div className="chat__new">Новые сообщения</div>
                    </div>
                    <div className="chat__line">
                      <div className="chat__message chat__message_red">Здравствуйте!</div>
                      <div className="chat__message chat__message_red">Конечно! Сообщите пожалуйста правильный логин.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="chat__line">
                      <div className="chat__message">Здравствуйте!
                        <br>Вас приветствует служба поддержки. Опишите проблему и мы постараемся ответить как можно скорее.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="chat__line chat__line_2">
                      <div className="chat__message chat__message_bg">Здравствуйте!
                        <br>Вас приветствует служба поддержки. Опишите проблему и мы постараемся ответить как можно скорее.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                    <div className="center">
                      <div className="chat__new">Новые сообщения</div>
                    </div>
                    <div className="chat__line">
                      <div className="chat__message chat__message_red">Здравствуйте!</div>
                      <div className="chat__message chat__message_red">Конечно! Сообщите пожалуйста правильный логин.</div>
                      <div className="chat__date">21 апреля 2023 в 15:43</div>
                    </div>
                  </div>
                </div>
                <div className="chat__acts chat-acts">
                  <label className="chat-acts__file">
                    <input className="chat-acts__file-inp" type="file">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 7.17064L9.16036 14.8404C7.30735 16.6532 4.24276 16.6532 2.38976 14.8404C0.536748 13.0275 0.536748 10.0294 2.38976 8.21651L8.80401 1.94128C9.58797 1.10459 10.7996 0.825688 11.9399 1.10459C13.0802 1.38349 13.9354 2.22018 14.2205 3.33578C14.5056 4.45138 14.1492 5.56697 13.3653 6.40367L6.951 12.6789C6.30958 13.3064 5.3118 13.2367 4.67038 12.6789C4.02895 12.0514 4.02895 11.0752 4.67038 10.4477L11.0846 4.17248"
                      stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </label>
                  <textarea className="chat-acts__inp" placeholder="Напишите сообщение"></textarea>
                  <button className="chat-acts__send">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.7227 7.74945C1.28908 7.60491 1 7.17129 1 6.73767C1 6.23178 1.28908 5.87044 1.7227 5.7259L16.2489 1.02835C16.4658 0.956082 16.6826 1.02835 16.8271 1.17289C16.9716 1.31743 17.0439 1.53424 16.9716 1.75105L12.2741 16.2773C12.1296 16.7109 11.6959 17 11.2623 17C10.8287 17 10.3951 16.6386 10.2505 16.205L8.66061 9.48393L1.7227 7.74945Z"
                      stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.7544 1.10071L8.51562 9.33948" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
  </div>
  <div className="modal-def" id="modal-balance">
    <div className="modal-def__wrap">
      <div className="modal-def__content modal-content">
        <div className="modal-content__mob">
          <div className="modal-content__prev close-btn modal-def__close">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9585 17L3.98616 9L11.9585 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="modal-content__mob-title">Баланс</div>
        </div>
        <div className="modal-content__close modal-def__close close-btn">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L20.9308 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.9308 1L1 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="modal-content__balance">
          <div className="modal-content__title title-def title-def_sec">Пополнить баланс</div>
          <div className="modal-content__block">
            <div className="title-small title-small_m">Сумма пополнения, ₽</div>
            <div className="balance-add">
              <div className="balance-add__in">
                <button className="balance-add__btn">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H16.9447" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="balance-add__inpWrap">
                  <input className="balance-add__inp" type="text" value="22 600">
                </div>
                <button className="balance-add__btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0.799805V15.1998" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M0.799805 8H15.1998" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
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
                    <svg className="payment-choose-el__img" width="76" height="20" viewBox="0 0 76 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1104_6632)">
                        <mask id="mask0_1104_6632" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                          <path d="M20 0H0V20H20V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_1104_6632)">
                          <path d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10Z" fill="#1E7F94" />
                          <path d="M7.03771 10.6125C7.03771 10.458 7.03771 10.3034 7.03771 10.1489C7.03771 10.065 7.04501 9.94707 7.00061 9.87487C6.95231 9.79637 6.97931 9.62897 6.98616 9.54727C7.00181 9.36122 7.03771 9.18057 7.03771 8.99302C7.03771 8.98012 7.04191 8.78262 6.99131 8.87247C6.90906 9.01877 6.90056 9.23137 6.85121 9.39172C6.75861 9.69277 6.70391 9.96107 6.70391 10.2746C6.70391 10.3996 6.70391 10.5246 6.70391 10.6496C6.70391 10.6814 6.72246 10.6981 6.72246 10.6568C6.72246 10.5277 6.72746 10.3979 6.71316 10.2694C6.67301 9.90772 6.67521 9.50947 6.76986 9.15682C6.81841 8.97582 6.86566 8.77892 6.94086 8.60977C6.97811 8.52597 6.99541 8.40302 7.01916 8.31312C7.05701 8.16957 7.08421 7.91632 7.19636 7.80417C7.26591 7.73462 7.47801 7.68262 7.57546 7.68262"
                          stroke="#F0CAAB" strokeLinecap="round" />
                          <path d="M7.6125 7.12631C7.61165 7.16131 7.55685 7.37346 7.55685 7.24166C7.55685 7.15606 7.5478 7.13956 7.62175 7.09846C7.67945 7.06646 7.7544 7.04036 7.8247 7.05316C7.97375 7.08026 7.7522 7.52406 7.79795 7.58166C7.8234 7.61371 7.84565 7.51501 7.868 7.48066C7.9164 7.40631 7.9269 7.39576 7.99365 7.33851C8.09995 7.24741 8.20335 7.16141 8.30065 7.06036C8.37645 6.98166 8.45805 6.91676 8.40165 7.08511C8.34395 7.25726 8.2497 7.41781 8.1688 7.57956C8.09995 7.71726 8.09345 7.67926 8.1544 7.60841C8.24765 7.49996 8.3738 7.39971 8.48815 7.31586C8.4968 7.30951 8.6152 7.21436 8.66125 7.24166C8.7266 7.28046 8.65615 7.47811 8.6458 7.51676C8.60145 7.68246 8.5595 7.85416 8.50055 8.01536C8.48835 8.04866 8.52785 7.90651 8.5335 7.89276C8.57005 7.80351 8.61355 7.71601 8.6592 7.63111C8.66245 7.62501 8.76425 7.48631 8.76425 7.50951C8.76425 7.52571 7.97585 7.69701 8.0771 7.83196C8.201 7.99716 7.97075 8.02551 7.8247 8.05141C7.6344 8.08516 7.45235 8.07136 7.3292 7.90721C7.296 7.86296 7.2814 7.75486 7.2787 7.84951C7.27075 8.12796 7.19885 8.39806 7.1582 8.67366C7.13955 8.79996 7.12225 8.92671 7.10255 9.05276C7.0883 9.14386 7.05735 9.15656 7.1015 9.06101C7.2164 8.81261 7.4259 8.55226 7.63105 8.36871C7.66825 8.33546 7.66335 8.42641 7.664 8.43876C7.6744 8.63876 7.66815 8.84021 7.66815 9.04041C7.66815 9.10206 7.6463 9.22241 7.6805 9.10426C7.7129 8.99226 7.75935 8.87701 7.80205 8.77051C7.8962 8.53581 7.9784 8.25291 8.11935 8.04006C8.1253 8.03111 8.14665 8.02066 8.15025 8.03081C8.162 8.06381 8.15415 8.10086 8.15335 8.13591C8.15035 8.26366 8.13915 8.35366 8.11935 8.48206C8.0953 8.63786 8.05965 8.79171 8.03075 8.94666C8.0229 8.98876 7.96225 9.17696 7.99575 9.02391C8.0269 8.88146 8.06555 8.73866 8.11525 8.60156C8.14635 8.51566 8.1476 8.55936 8.11935 8.59536C7.9852 8.76631 7.76695 8.86176 7.596 8.98991C7.5579 9.01851 7.45925 9.19071 7.39925 9.16401C7.3488 9.14161 7.36105 9.04621 7.3436 9.00436C7.33765 8.99006 7.3343 9.03421 7.3333 9.04966C7.3275 9.13966 7.0124 11.4109 7 11.5001C6.9463 11.8872 7.4035 11.9672 6.75 11.5001C7.8436 12.346 7.32395 11.855 7.3436 11.8878C7.36525 11.9238 7.3295 10.2951 7.33845 10.2664C7.4689 9.84816 7.68765 9.44651 7.7938 9.02186C7.8141 8.94076 7.82715 9.02966 7.8309 9.06721C7.8548 9.30636 7.8368 9.56376 7.79795 9.79966C7.76235 10.0157 7.6809 10.2467 7.66815 10.4642C7.6635 10.5426 7.6496 10.393 7.6496 10.3704C7.6496 10.0626 7.8329 9.71581 7.97515 9.45456C8.055 9.30786 8.14495 9.16891 8.2502 9.03936C8.3068 8.96966 8.2986 9.13021 8.2986 9.15166C8.2986 9.54441 8.25665 9.96026 8.3079 10.3498C8.31015 10.3669 8.31715 10.5059 8.31715 10.424C8.31715 10.2441 8.3302 10.0648 8.3398 9.88516C8.3738 9.24931 8.44895 8.60186 8.60355 7.98341C8.6062 7.97276 8.6567 7.78301 8.6777 7.83711C8.7313 7.97491 8.688 8.20146 8.688 8.34606C8.688 8.58781 8.68685 8.82956 8.688 9.07131C8.6888 9.22756 8.6796 9.41146 8.71685 9.56581C8.77625 9.81191 8.8504 10.5686 8.83635 10.3158C8.83275 10.2503 8.74915 10.2558 8.72925 10.2045C8.7205 10.182 8.7591 10.1152 8.7663 10.0953C8.89635 9.73891 8.9797 9.36366 9.05685 8.99301C9.1762 8.41931 9.2629 7.82541 9.2629 7.23861C9.2629 7.17346 9.2967 6.99966 9.1887 6.99651C9.03765 6.99206 9.01415 7.07471 8.9641 7.22726C8.88705 7.46226 8.8241 7.71001 8.78485 7.95456C8.78095 7.97881 8.7807 8.01016 8.8096 7.98651C8.8981 7.91411 8.916 7.75001 8.96515 7.65171C8.98665 7.60866 9.0946 7.41736 9.096 7.55691C9.09695 7.65561 9.05385 7.86526 9.11865 7.95251C9.16755 8.01836 9.2495 7.88076 9.27525 7.85156C9.36385 7.75111 9.8415 7.36836 9.97575 7.33851C10.0102 7.33086 9.6992 7.66191 9.7821 7.66406C9.9831 7.66921 10.1786 7.63531 10.3827 7.64861C10.5426 7.65906 10.6984 7.71971 10.8576 7.71971C10.9251 7.71971 10.9936 7.71591 11.0605 7.72486C11.4814 7.78096 11.9035 7.86961 12.3102 7.98961C12.5756 8.06791 12.8375 8.15716 13.1014 8.23481C13.1905 8.26096 13.297 8.36866 13.3693 8.42846C13.4281 8.47716 13.5243 8.53236 13.5083 8.62006C13.4827 8.76091 13.4519 8.96781 13.495 9.10221C13.5008 9.12036 13.4879 9.05771 13.4702 9.05071C13.2285 8.95481 12.918 9.03126 12.6625 9.00846C12.5177 8.99556 12.4425 8.84816 12.3225 8.76636C12.1919 8.67731 12.0789 8.54446 11.9579 8.44391C11.6243 8.16676 11.2454 7.86961 10.802 7.81241C10.5266 7.77686 10.2509 7.76036 9.97575 7.71971C9.7906 7.69231 9.55895 7.62421 9.369 7.64656C9.33605 7.65041 9.28915 7.68426 9.2742 7.71246C9.2412 7.77486 9.2502 7.89351 9.24225 7.95871C9.21765 8.16101 9.17925 8.36116 9.1475 8.56241C9.10335 8.84191 9.05715 9.12426 8.9291 9.38036C8.91155 9.41546 8.897 9.41091 8.8879 9.45246C8.86015 9.57886 8.8549 9.70266 8.8549 9.83161C8.8549 9.94161 8.9122 10.0104 8.95895 10.1067C9.00305 10.1975 9.04695 10.2869 9.0867 10.3797C9.12435 10.4675 9.27165 10.4594 9.35145 10.4683C9.403 10.474 9.454 10.4827 9.506 10.4827C9.59275 10.4827 9.50865 10.2554 9.506 10.2416C9.4525 9.96496 9.37885 9.69001 9.33705 9.41126C9.3348 9.39631 9.33535 9.37476 9.3381 9.35976C9.34235 9.33621 9.3628 9.26291 9.3628 9.26291C9.35545 9.27761 9.33705 9.34836 9.33705 9.30721C9.33705 9.25231 9.2916 9.40891 9.25565 9.45041C9.22885 9.48136 9.2258 9.49696 9.2258 9.53696C9.2258 9.70886 9.18215 9.87801 9.13305 10.0428C9.07005 10.2545 9.04035 10.0057 9.04035 9.92636"
                          stroke="#F0CAAB" strokeLinecap="round" />
                          <path d="M9.57811 8.09033C9.57811 8.26493 9.59916 8.45513 9.57401 8.62808C9.56606 8.68258 9.54101 8.72318 9.54101 8.77643C9.54101 8.85803 9.52366 8.93633 9.52246 9.01753C9.52176 9.06873 9.50991 9.25743 9.55956 9.29153C9.78756 9.44828 9.97011 9.67583 10.189 9.85093C10.2821 9.92543 10.3381 10.023 10.4023 10.1281C10.4288 10.1714 10.4607 10.2032 10.392 10.2228C10.2958 10.2503 10.1963 10.2752 10.1004 10.2321C10.0024 10.188 10.0631 10.1532 10.1447 10.1785C10.2434 10.2092 10.3545 10.2743 10.4311 10.3454C10.4914 10.4014 10.5482 10.5021 10.5888 10.5741C10.6325 10.6519 10.7128 10.639 10.7876 10.6679C10.8989 10.7109 10.9759 10.7193 11.0946 10.7235C11.2499 10.7291 11.3046 10.7633 11.4284 10.6349C11.6304 10.4254 11.3927 10.0599 11.28 9.86638C11.1982 9.72593 11.06 9.61968 10.9359 9.51818C10.8241 9.42668 10.7487 9.30958 10.6537 9.20398C10.5093 9.04358 10.3127 8.85208 10.3394 8.61163C10.3464 8.54893 10.402 8.51463 10.4394 8.47048C10.5071 8.39038 10.5251 8.34403 10.631 8.30873C10.7131 8.28138 10.8086 8.39243 10.8721 8.43853C10.9116 8.46723 10.9977 8.51418 11.0204 8.56218C11.0628 8.65163 11.107 8.71813 11.1914 8.77643C11.3527 8.88783 11.5153 9.03598 11.6983 9.10918C11.7835 9.14328 11.8063 9.19413 11.8662 9.27403C11.8883 9.30343 11.9392 9.41533 11.997 9.35748C12.0416 9.31293 12.0925 9.21533 12.1186 9.15658C12.1427 9.10228 12.113 9.07213 12.0918 9.01753C12.0674 8.95468 12.063 8.89018 12.063 8.82383C12.063 8.78988 12.015 8.78478 11.9981 8.74758C11.9434 8.62723 12.0739 8.68423 12.1382 8.70328C12.2567 8.73843 12.3698 8.77253 12.4895 8.79913C12.6919 8.84408 12.9106 8.78658 13.1107 8.83103C13.1884 8.84833 13.2683 8.87608 13.2683 8.97113C13.2683 9.06248 13.3029 9.09453 13.3796 9.13288C13.4558 9.17098 13.4443 9.15888 13.3981 9.22563C13.364 9.27488 13.3425 9.31378 13.3425 9.37398C13.3425 9.52453 13.3071 9.67253 13.3054 9.82313C13.305 9.85753 13.3257 9.94603 13.2786 9.95913C13.2057 9.97938 13.1205 9.98258 13.0458 9.97768C12.9474 9.97118 12.8455 9.96583 12.7491 9.94468C12.722 9.93873 12.6308 9.90663 12.6049 9.93028C12.5888 9.94483 12.6002 10.0235 12.6007 10.0415C12.6043 10.1539 12.6653 10.2416 12.7326 10.3279C12.8078 10.4245 12.8467 10.4857 12.8799 10.602C12.8935 10.6495 13.0721 10.4749 13.0932 10.4629C13.1736 10.4169 13.2425 10.3526 13.3425 10.3526C13.4139 10.3526 13.4486 10.233 13.4908 10.1858C13.5172 10.1563 13.5375 10.1323 13.5835 10.1528C13.6153 10.1669 13.7172 10.1858 13.6824 10.1858C13.4495 10.1858 13.2236 10.144 12.9922 10.1312C12.8291 10.1221 12.6881 10.1965 12.5358 10.2414C12.3989 10.2818 12.2555 10.3562 12.2123 10.5072C12.2055 10.5311 12.1928 10.46 12.1928 10.4351C12.1928 10.4034 12.1748 10.3408 12.1547 10.2702C12.1378 10.2112 12.1371 10.3114 12.1371 10.3248C12.1371 10.4164 12.1063 10.4993 12.0877 10.5896C12.0228 10.9048 11.8355 11.0799 11.585 11.2572C11.4821 11.33 11.3937 11.3959 11.3109 11.49C11.228 11.5842 11.1369 11.5743 11.0204 11.5765C10.7719 11.5812 10.528 11.6322 10.2787 11.6322C10.1243 11.6322 10.0048 11.5857 9.85626 11.5539C9.74741 11.5305 9.67891 11.4445 9.57811 11.4137C9.50976 11.3929 9.45241 11.3503 9.38446 11.3272C9.31666 11.3042 9.23221 11.2908 9.16911 11.2592C9.12016 11.2347 9.13711 11.1813 9.10421 11.1531C9.08436 11.1361 9.01356 11.1339 8.98986 11.1325C8.88421 11.1265 8.77311 11.1689 8.66846 11.148C8.55691 11.1256 8.61841 11.0086 8.57471 10.9368C8.51541 10.8393 8.46136 10.775 8.38206 10.6957C8.34796 10.6616 8.29601 10.5587 8.23476 10.5762C8.19011 10.5889 8.23846 10.8775 8.24196 10.9141C8.25686 11.0705 8.32641 11.3783 8.11111 11.4282C7.96951 11.461 7.81341 11.4467 7.66811 11.4467C7.62966 11.4467 7.59121 11.4467 7.55276 11.4467C7.54426 11.4467 6.99741 11.4939 7.00001 11.49C7.03106 11.4434 7.57631 11.5248 7.59396 11.5487C7.63576 11.6054 7.65096 11.6602 7.67741 11.7249C7.72971 11.8527 7.77356 12.01 7.92361 12.0216C8.05476 12.0317 8.20466 12.1131 8.33156 12.1514C8.43756 12.1833 8.53881 12.2258 8.64271 12.2626C8.70376 12.2843 8.65731 12.281 8.62211 12.2771C8.47091 12.2601 8.32081 12.2389 8.16881 12.2297C8.12831 12.2272 7.98796 12.2015 7.95041 12.2297C7.94541 12.2334 7.96446 12.2955 7.96481 12.3038C7.96901 12.3964 8.01196 12.45 8.06166 12.5222C8.06786 12.5312 8.18356 12.4852 8.21411 12.4852C8.28866 12.4852 8.36316 12.4852 8.43771 12.4852C8.50816 12.4852 8.54416 12.4883 8.60356 12.5222C8.64396 12.5453 8.65206 12.6134 8.69731 12.6335C8.83766 12.6959 8.99411 12.6891 9.14751 12.6891C9.26866 12.6891 9.38796 12.6924 9.50806 12.7118C9.56961 12.7217 9.62721 12.7633 9.68936 12.7633C9.75361 12.7633 9.81086 12.7568 9.87481 12.7448C9.93816 12.7328 10 12.7262 10.0644 12.7262C10.1162 12.7262 9.92656 12.7522 9.90776 12.7561C9.76076 12.7869 9.63516 12.856 9.48541 12.856C9.42631 12.856 9.36726 12.856 9.30821 12.856C9.25401 12.856 9.22431 12.8673 9.17841 12.8756C9.16736 12.8776 9.11081 12.9096 9.12996 12.9096C9.20136 12.9096 9.28081 12.8874 9.34736 12.8643C9.57576 12.785 9.77981 12.7262 10.0232 12.7262C10.0692 12.7262 10.3378 12.6946 10.3549 12.7458C10.3604 12.7624 10.3471 12.7961 10.3714 12.7994C10.4805 12.8139 10.6146 12.7803 10.7196 12.754C10.9068 12.7072 11.0572 12.5213 11.2306 12.4336C11.3227 12.3871 11.3726 12.3538 11.4284 12.2771C11.4683 12.2222 11.4927 12.1654 11.5437 12.1143C11.6686 11.9895 11.7152 11.8075 11.8786 11.7156C11.9635 11.6678 12.0358 11.6162 12.1186 11.5672C12.2099 11.5133 12.2467 11.4505 12.3164 11.3808C12.4487 11.2484 12.5797 11.1154 12.712 10.9831"
                          stroke="#F0CAAB" strokeWidth="3" strokeLinecap="round" />
                          <path d="M10.4869 14.1539C10.3397 14.1539 10.2347 14.1523 10.1078 14.0798C10.0749 14.061 10.151 14.0932 10.1624 14.0983C10.2646 14.1437 10.3436 14.2406 10.4591 14.2662C10.49 14.2731 10.6703 14.3942 10.6723 14.3579C10.6838 14.1509 10.6723 13.9388 10.6723 13.7315C10.6723 13.6742 10.6499 13.5907 10.7197 13.578C10.8051 13.5625 10.9065 13.5898 11.0001 13.578C11.0968 13.566 11.1591 13.3163 11.2111 13.235C11.2682 13.1459 11.3194 13.0541 11.3729 12.963C11.4087 12.902 11.4348 12.8084 11.4841 12.759C11.501 12.7422 11.4545 12.8205 11.4512 12.7632C11.4483 12.714 11.4926 12.6945 11.5068 12.6519"
                          stroke="#F0CAAB" strokeWidth="2" strokeLinecap="round" />
                          <path d="M7.32573 11.7685C7.10458 11.7512 6.88343 11.7325 6.66203 11.7189C6.63383 11.7172 6.60158 11.7269 6.57748 11.7121C6.56793 11.7062 6.55713 11.6908 6.55223 11.681C6.52653 11.6296 6.51353 11.5753 6.48618 11.5236C6.43223 11.4217 6.34598 11.356 6.28503 11.2612C6.23688 11.1864 6.15398 11.1642 6.10913 11.0873C6.08053 11.0383 6.00853 10.9874 5.96143 10.9639"
                          stroke="#F0CAAB" strokeLinecap="round" />
                          <path d="M7.93799 12.748C8.06309 12.8428 8.16804 12.9391 8.28389 13.0318C8.31799 13.059 8.38279 13.1128 8.42774 13.1153C8.47729 13.1181 8.57904 13.1381 8.60264 13.1853" stroke="#F0CAAB" strokeLinecap="round" />
                          <path d="M14.2524 10.5444C14.2901 10.3685 14.3749 10.2194 14.3749 10.0371" stroke="#F0CAAB" strokeLinecap="round" />
                          <path d="M16.3179 14.5747C16.4275 14.5747 16.5342 14.5752 16.6432 14.5873C16.6647 14.5897 16.737 14.5883 16.7548 14.6026C16.8203 14.655 16.9656 14.665 17.0466 14.6808C17.1086 14.6929 17.1724 14.6863 17.2351 14.6878C17.3112 14.6896 17.3875 14.7124 17.4606 14.7318C17.5154 14.7463 17.5674 14.7694 17.6218 14.7855C17.67 14.7998 17.7282 14.7656 17.7726 14.7534C17.827 14.7385 17.8908 14.7375 17.9388 14.7066C17.9594 14.6934 17.9804 14.6772 18.0016 14.6655C18.029 14.6502 18.1092 14.6294 18.114 14.6773C18.1298 14.8354 18.0876 14.9536 17.9765 15.0647C17.8832 15.158 17.8241 15.2898 17.7154 15.3663C17.6237 15.4308 17.4362 15.3262 17.4362 15.2092C17.4362 15.1551 17.3043 15.1165 17.2651 15.0955C17.1294 15.0224 16.9592 15.0765 16.8191 15.0075C16.7071 14.9523 16.5422 14.9659 16.4749 14.8449C16.4741 14.8433 16.7671 14.8554 16.8261 14.8609C16.9659 14.8739 17.1052 14.8879 17.2449 14.9021C17.4228 14.9202 17.606 14.9831 17.7754 15.0396"
                          stroke="#F0CAAB" strokeLinecap="round" />
                          <path d="M5.81738 10.8512C5.93408 10.9678 6.05423 11.1227 6.19933 11.2066C6.34613 11.2914 6.49018 11.389 6.64148 11.4668C6.69068 11.4921 6.60198 11.4672 6.59088 11.4638C6.55008 11.4511 6.50668 11.4446 6.46798 11.4258C6.42298 11.404 6.38288 11.3716 6.33243 11.3716C6.29688 11.3716 6.34723 11.4521 6.36198 11.4668C6.40518 11.51 6.47353 11.553 6.52763 11.5831C6.57608 11.61 6.62803 11.6446 6.67943 11.6692C6.78033 11.7175 6.88553 11.7494 6.98243 11.8047C7.07493 11.8576 7.18798 11.8771 7.27878 11.9355C7.30883 11.9548 7.33663 11.9817 7.36793 11.9981C7.39793 12.0138 7.38538 11.9652 7.39083 11.9529C7.39853 11.9357 7.63403 11.9362 7.66073 11.9355C7.72088 11.9338 7.77523 11.9189 7.83423 11.9084C7.90748 11.8953 7.95798 11.8857 8.01493 11.8306C8.07733 11.7703 8.15278 11.7253 8.21373 11.6644C8.25713 11.621 8.32838 11.5968 8.37638 11.5608C8.41588 11.5311 8.59343 11.6713 8.65103 11.6921C8.69443 11.7078 8.74243 11.7028 8.78598 11.7186C8.81618 11.7296 8.85118 11.7548 8.88058 11.7614C8.93928 11.7744 8.98543 11.808 9.03778 11.8355C9.12468 11.881 9.22458 11.9205 9.31788 11.9505C9.42823 11.986 9.52278 11.9874 9.61608 12.0584C9.66953 12.099 9.70643 12.1083 9.77393 12.109C9.92563 12.1105 10.0616 12.1299 10.2094 12.1571C10.3182 12.1772 10.4199 12.1322 10.5221 12.0981C10.6698 12.0489 10.7674 11.9209 10.9058 11.8547C10.9252 11.8455 10.9466 11.8351 10.963 11.8216C10.9647 11.8203 10.9846 11.8069 10.9811 11.8059C10.9095 11.7855 10.8256 11.7864 10.7522 11.7704C10.5505 11.7265 10.3753 11.6329 10.1896 11.5475C10.1395 11.5245 10.0844 11.5094 10.0353 11.4849C9.91263 11.4235 9.80703 11.3377 9.69078 11.2656C9.58563 11.2004 9.51163 11.1374 9.45523 11.0246C9.42523 10.9646 9.36723 10.8985 9.31728 10.8536C9.31008 10.8471 9.29073 10.8465 9.28053 10.8397C9.25048 10.8197 9.23083 10.7952 9.19318 10.7885C9.05113 10.7632 8.91848 10.7123 8.77938 10.668C8.65168 10.6274 8.60073 10.7914 8.49323 10.8379C8.45073 10.8563 8.29208 10.87 8.24683 10.8445C8.18178 10.8079 8.09523 10.8148 8.02938 10.7704C8.00688 10.7553 7.94758 10.6995 7.96673 10.7186C7.98703 10.7389 8.03148 10.7319 8.05708 10.7319C8.09663 10.7319 8.13623 10.7319 8.17578 10.7319C8.22213 10.7319 8.26388 10.7519 8.30888 10.7536C8.43683 10.7583 8.56433 10.7537 8.69503 10.7698C8.80238 10.7831 8.88718 10.8198 8.97513 10.8861C9.02783 10.9258 9.06973 10.9509 9.12813 10.9801C9.27118 11.0516 9.39113 11.1569 9.51188 11.2602C9.69033 11.4129 9.83653 11.6139 10.0715 11.6837C10.1955 11.7205 10.3138 11.7701 10.4402 11.8005C10.5295 11.822 10.6522 11.8164 10.7353 11.8541C10.7664 11.8683 10.796 11.8455 10.8179 11.8258C10.873 11.7762 10.931 11.7629 11.004 11.762C11.017 11.7618 11.1236 11.7663 11.0944 11.7728C10.9792 11.7986 10.847 11.7899 10.7305 11.7897C10.4624 11.7891 10.1946 11.7709 9.92693 11.7578C9.82768 11.7529 9.72868 11.7511 9.62933 11.7511C9.59393 11.7511 9.54688 11.7578 9.51248 11.7451C9.49338 11.7381 9.48398 11.7059 9.47633 11.6903C9.44753 11.6313 9.41113 11.5808 9.36428 11.5343C9.23398 11.4049 9.06063 11.321 8.91128 11.2174C8.85348 11.1773 8.78568 11.1562 8.72093 11.1307C8.64843 11.1021 8.57258 11.0352 8.64083 11.1499C8.69923 11.2482 8.76728 11.3402 8.82453 11.4391C8.84683 11.4776 8.58843 11.439 8.56673 11.4343C8.43778 11.4065 8.33893 11.34 8.28723 11.221C8.25058 11.1368 8.02868 11.3292 8.00828 11.3548C7.93143 11.4512 7.95538 11.5621 7.82458 11.6041C7.63483 11.6651 7.46258 11.6321 7.27098 11.5945C7.10103 11.5611 6.96523 11.5165 6.82338 11.4174C6.76588 11.3773 6.70543 11.345 6.64688 11.306C6.62073 11.2885 6.59803 11.2668 6.56798 11.2548C6.52553 11.2378 6.67493 11.2562 6.68363 11.2572C6.80683 11.2706 6.90458 11.2412 7.02458 11.2198C7.06603 11.2125 7.11363 11.2068 7.15348 11.1933C7.23163 11.1669 7.30323 11.0978 7.37698 11.059C7.45458 11.0181 7.53218 10.9751 7.61133 10.9355C7.63998 10.9212 7.68913 10.9129 7.71253 10.8921C7.76053 10.8494 7.86198 10.8728 7.92458 10.8728C7.99083 10.8728 7.92973 11.011 7.91673 11.0415C7.86518 11.1622 7.77368 11.224 7.67158 11.2957C7.62118 11.3311 7.59108 11.3874 7.53903 11.421C7.49803 11.4475 7.43818 11.4617 7.38963 11.4686C7.36553 11.4721 7.35308 11.469 7.35833 11.4415C7.36423 11.4103 7.39678 11.3924 7.41978 11.3746C7.47748 11.33 7.53688 11.2839 7.57758 11.2222C7.60953 11.1738 7.61463 11.1402 7.65773 11.1036C7.70938 11.0595 7.76583 11.0058 7.83423 10.9921"
                          stroke="white" strokeLinecap="round" />
                          <path d="M16.5032 16.2578C16.3723 16.2369 16.2508 16.2311 16.128 16.1752C16.0813 16.154 16.0126 16.1661 15.9617 16.1661C15.8749 16.1661 15.8608 16.1408 15.8608 16.0467C15.8608 15.9236 15.8317 15.8582 15.7221 15.8071C15.5814 15.7414 15.4769 15.6039 15.3376 15.5419C15.2218 15.4905 15.3506 15.8332 15.3743 15.8795C15.4359 15.9995 15.5158 16.1003 15.5762 16.2211C15.6378 16.3442 15.7188 16.3903 15.8424 16.4598C15.927 16.5074 16.0306 16.5632 16.081 16.6515C16.1116 16.705 15.8754 16.68 15.824 16.68C15.6837 16.68 15.5369 16.6393 15.4029 16.5974C15.3358 16.5765 15.2563 16.5901 15.1918 16.5607C14.9595 16.4552 14.7747 16.2765 14.5493 16.1477C14.4449 16.0881 14.3493 16.0449 14.2637 15.9641C14.2113 15.9147 14.1742 15.8942 14.1312 15.8356C14.091 15.781 14.0329 15.7366 13.9843 15.6929C13.9101 15.6261 13.8775 15.5456 13.8191 15.4726C13.7685 15.4093 13.7688 15.445 13.8007 15.5052C13.8233 15.5479 13.8232 15.4761 13.8232 15.4593C13.8232 15.4193 13.7962 15.3902 13.7824 15.3543C13.735 15.2311 13.6463 15.1416 13.607 15.0137C13.579 14.9227 13.5526 14.8109 13.5478 14.7159C13.5445 14.6486 13.4927 14.6009 13.4927 14.5323C13.4927 14.3979 13.4967 14.2628 13.4927 14.1285C13.4924 14.1179 13.4598 13.8834 13.507 13.9306C13.5489 13.9725 13.5478 14.1364 13.5478 13.949C13.5478 13.7892 13.5618 13.6527 13.6019 13.5125C13.6187 13.4538 13.6201 13.3986 13.6498 13.3391C13.7108 13.217 13.8297 13.0758 13.8589 12.9445C13.9025 12.7482 14.0356 12.6311 14.1719 12.4947C14.3057 12.361 14.3598 12.2874 14.4289 12.1021C14.4913 11.935 14.532 11.8402 14.6819 11.7584C14.9517 11.6112 15.2823 11.5585 15.5854 11.5585C15.6777 11.5585 15.7139 11.5506 15.7139 11.6595C15.7139 11.6853 15.6953 11.6724 15.6874 11.6666C15.6055 11.6063 15.5822 11.4756 15.5569 11.3852C15.506 11.2037 15.5889 11.1896 15.7608 11.1353C15.9188 11.0854 16.0356 10.9213 16.1932 10.8783C16.3998 10.822 16.579 10.7143 16.7684 10.6234C16.8592 10.5798 16.9834 10.5817 17.0825 10.5714C17.1717 10.562 17.2584 10.5306 17.3476 10.5306C17.4087 10.5306 17.5019 10.5315 17.5567 10.502C17.6217 10.467 17.65 10.4248 17.7331 10.4204C17.807 10.4165 17.9224 10.3577 17.9493 10.4653C18.0217 10.7549 18.0153 11.0627 18.0962 11.3505C18.1297 11.4697 18.1106 11.5894 18.1288 11.7115C18.1533 11.8755 18.1553 12.0327 18.1553 12.199C18.1553 12.4537 18.1749 12.7159 18.1329 12.9679C18.1068 13.1247 18.0185 13.1679 17.8882 13.2331C17.8159 13.2692 17.7469 13.3309 17.6587 13.3075C17.5796 13.2866 17.5192 13.213 17.4782 13.1474C17.3172 12.8898 17.2347 12.5857 17.2151 12.2846C17.2 12.054 17.2355 11.8096 17.0631 11.6279C16.9424 11.5007 16.8502 11.655 16.8153 11.7747C16.7074 12.1452 16.6744 12.5305 16.7011 12.9129C16.7114 13.0613 16.7353 13.1894 16.7959 13.3259C16.8112 13.3603 16.8428 13.486 16.8071 13.5145C16.7881 13.5298 16.7158 13.4916 16.6929 13.4921C16.5934 13.4942 16.5075 13.557 16.4053 13.5462C16.3554 13.5408 16.3126 13.5174 16.2677 13.4972C16.2196 13.4756 16.1721 13.5302 16.132 13.5513C15.8856 13.681 15.6194 13.6963 15.5487 14.0224C15.522 14.1453 15.5354 14.3039 15.4212 14.3895C15.3911 14.4121 15.3489 14.3981 15.3152 14.3957C15.1866 14.3863 15.0869 14.427 14.9572 14.3753C14.7985 14.3119 14.5914 14.191 14.5901 13.9959C14.5896 13.9266 14.6235 13.8537 14.6298 13.7838C14.6336 13.7429 14.628 13.7021 14.6349 13.6614C14.6764 13.417 14.841 13.1933 15.0082 13.0169C15.092 12.9284 15.1711 12.7919 15.2917 12.7517"
                          stroke="#FFDE6C" strokeWidth="3" strokeLinecap="round" />
                          <path d="M17.0725 16.1113C17.0725 15.8828 17.2296 15.6021 17 15.5001C16.8908 15.4515 16.6608 15.508 16.5484 15.4575C16.4093 15.3952 16.2352 15.3074 16.1262 15.2016C16.0933 15.1697 16.0803 15.1463 16.0527 15.1108C16.0332 15.0858 16.0192 15.0263 15.9987 15.0099C15.9544 14.9745 15.9426 14.8441 15.9253 14.7886C15.8935 14.687 15.8794 14.5828 15.8794 14.4775C15.8794 14.4026 15.881 14.3372 15.8967 14.2664C15.9209 14.1577 16.0046 14.1838 16.0996 14.1838C16.1911 14.1838 16.2391 14.0874 16.3301 14.0777C16.4088 14.0693 16.4895 14.0737 16.5688 14.0737C16.6233 14.0737 16.6686 14.0989 16.7238 14.091C16.769 14.0845 16.7632 14.109 16.8013 14.1104C16.928 14.1151 17.0558 14.1104 17.1827 14.1104C17.2894 14.1104 17.3962 14.1104 17.5029 14.1104C17.7198 14.1104 17.9309 14.0737 18.1464 14.0737C18.1847 14.0737 18.2234 14.0752 18.2616 14.0737C18.3046 14.0719 18.2682 14.0008 18.3167 13.99C18.3355 13.9859 18.4356 13.8401 18.4554 13.8095C18.5483 13.6659 18.614 13.4761 18.6879 13.32C18.7378 13.2146 18.7325 13.109 18.7695 13.0049C18.8154 12.8758 18.9039 12.77 18.9551 12.6459C19.0192 12.4909 18.9461 11.9929 19.0143 12.1462C19.0464 12.2186 18.9778 11.9985 18.9714 11.982C18.9034 11.8071 18.7936 11.6497 18.7359 11.4701C18.7084 11.3847 18.724 11.2818 18.7389 11.1957C18.7759 10.983 18.761 10.752 18.7797 10.5369C18.7897 10.422 18.781 10.3222 18.8531 10.23C18.9207 10.1436 19.0951 10.0719 19.2019 10.0719C19.2343 10.0719 19.2817 10.0803 19.3121 10.0678C19.3445 10.0545 19.3488 10.1253 19.3488 10.079C19.3488 9.99165 19.3281 9.27805 19.308 9.2867C19.2309 9.3197 19.1481 9.4366 19.1183 9.5151C19.0736 9.6328 19.0538 9.6372 18.9602 9.6793C18.858 9.7253 18.774 9.80805 18.7144 9.90265C18.6489 10.0067 18.8256 10.0062 18.8797 10.0168C19.0456 10.0497 19.1357 10.1037 19.2794 10.182C19.3326 10.2111 19.526 10.2576 19.5191 10.2555C19.1683 10.1476 18.7916 10.1546 18.4309 10.1076C18.3427 10.0961 18.1142 10.1012 18.1739 10.0352C18.205 10.0008 18.2265 9.9536 18.2433 9.9108C18.2473 9.9005 18.2788 9.88835 18.2678 9.88835C18.1449 9.88835 18.0231 9.88665 17.9027 9.9149C17.7645 9.9473 17.5981 9.9819 17.4856 10.0719C17.4681 10.0859 17.3835 10.1433 17.3897 10.1433C17.4604 10.1433 17.5396 10.1065 17.609 10.0943C17.7218 10.0746 17.8334 10.0719 17.9475 10.0719C18.0151 10.0719 18.0644 10.0449 18.1301 10.0352C18.1776 10.0282 18.2357 10.0238 18.2759 9.99445C18.308 9.97105 18.3193 9.9307 18.3534 9.9067C18.4069 9.8691 18.4688 9.85165 18.3616 9.85165C18.2998 9.85165 18.0911 9.8002 18.0811 9.87C18.0528 10.0683 17.7506 10.2262 17.61 10.333C17.4874 10.4261 17.3597 10.5227 17.2643 10.645C17.165 10.7722 17.0994 10.9285 16.9889 11.0469C16.9422 11.0969 16.9073 11.0859 16.9073 11.0265"
                          stroke="#FFDE6C" strokeLinecap="round" />
                          <path d="M3.44727 7.9229C3.59341 7.77675 3.85457 7.6254 3.93848 7.4366C3.96897 7.368 3.99627 7.2884 4.01707 7.21555C4.03452 7.1545 4.02566 7.07205 4.049 7.01665C4.11094 6.86955 4.21291 6.75865 4.32654 6.63595C4.40082 6.5557 4.48618 6.4564 4.48618 6.34245C4.48618 6.2871 4.52386 6.22255 4.53162 6.16435C4.54311 6.0782 4.59943 6.00415 4.61758 5.92245C4.66183 5.7233 4.81041 5.92755 4.95038 5.9777C5.05323 6.01455 5.17058 6.05895 5.23773 6.14965C5.31613 6.2555 5.42963 6.37985 5.54723 6.4419C5.63208 6.4867 5.73898 6.53035 5.83458 6.53035C5.97718 6.53035 5.92393 6.4037 5.90088 6.2884C5.85143 6.04115 5.78633 5.83985 5.54723 5.74685C5.40193 5.69035 5.23738 5.6731 5.09528 5.7137C4.96456 5.75105 5.38138 5.7622 5.50298 5.7014C5.63508 5.63535 5.84038 5.5328 5.94018 5.71245C6.03013 5.87435 6.24708 5.94655 6.33808 6.11035C6.36583 6.1603 6.43428 6.3977 6.46453 6.3977C6.51178 6.3977 6.54158 6.32285 6.59718 6.3105C6.67563 6.2931 6.68513 6.30245 6.62913 6.2184C6.58138 6.14685 6.54193 6.03215 6.54193 5.94455C6.54193 5.8941 6.52123 5.8237 6.47558 5.80085"
                          stroke="#F0CAAB" strokeWidth="2" strokeLinecap="round" />
                          <path d="M6.67441 5.44712C6.87861 5.44712 7.07321 5.41457 7.27126 5.40292C7.30171 5.40112 7.41591 5.23616 7.44811 5.20396C7.49456 5.15751 7.58116 5.11557 7.64701 5.11557C7.68021 5.11557 7.71336 5.11557 7.74651 5.11557C7.80946 5.11557 7.77686 5.10251 7.75756 5.12661C7.72641 5.16551 7.54621 5.18186 7.50211 5.18186C7.37456 5.18186 7.25391 5.20396 7.12756 5.20396C7.08111 5.20396 6.85531 5.20447 6.82916 5.23717C6.81046 5.26052 7.06531 5.22656 7.09931 5.22116C7.25091 5.19711 7.40471 5.18087 7.55491 5.14997C7.60616 5.13942 7.67866 5.15217 7.71826 5.12047C7.72986 5.11117 7.92216 5.11152 7.90736 5.09837C7.86521 5.06087 7.66466 5.09226 7.61266 5.09466C7.45101 5.10221 7.29541 5.17971 7.14356 5.23101C6.95911 5.29326 6.78476 5.34441 6.59706 5.39311C6.45511 5.42991 6.32296 5.44712 6.17706 5.44712C6.11106 5.44712 6.01406 5.46467 5.96216 5.50117C5.59376 5.76042 5.08371 5.89387 4.85079 6.30797C4.79155 6.41332 4.84507 6.62326 4.74027 6.70711C4.65369 6.77636 4.61777 6.93892 4.53518 7.02147C4.33453 7.22212 5.00996 6.70392 5.21061 6.50327C5.22826 6.48562 5.41446 6.29702 5.41446 6.40747C5.41446 6.51647 5.31941 6.58112 5.24866 6.65182C5.14846 6.75202 5.05461 6.86696 4.97359 6.98341C4.89277 7.09961 4.81303 7.22382 4.79676 7.37027C4.79444 7.39107 4.76286 7.52582 4.79553 7.47587C4.86134 7.37522 4.90907 7.26801 4.98465 7.17131C5.01821 7.12831 5.37026 6.81682 5.37026 6.95272C5.37026 7.12887 5.33836 7.65667 5.34816 7.48077C5.35006 7.44672 5.41956 7.07566 5.49796 7.15411C5.56031 7.21646 5.48736 7.39237 5.61461 7.39237C5.70956 7.39237 5.92286 7.12032 5.92286 7.28307C5.92286 7.38912 5.76896 7.51222 5.74111 7.34812C5.72826 7.27232 5.72916 7.04952 5.70061 7.12097C5.69071 7.14567 5.68151 7.25341 5.63551 7.23271C5.53546 7.18766 5.44576 7.08422 5.32236 7.11357C5.15376 7.15372 5.13031 7.28947 5.12711 7.43167C5.12171 7.66992 4.94649 7.69811 4.74641 7.60846C4.62651 7.55476 4.4796 7.48696 4.37677 7.40341C4.33105 7.36626 4.28712 7.19222 4.28712 7.25112C4.28712 7.35237 4.31055 7.48122 4.33256 7.58022C4.34855 7.65222 4.32076 7.70017 4.34238 7.76937C4.36755 7.84987 4.37554 7.96602 4.37554 8.05057C4.37554 8.14077 4.33001 8.14006 4.25396 8.15616C4.15489 8.17721 4.05924 8.21426 3.96046 8.23721C3.90683 8.24971 3.85708 8.29552 3.80082 8.29862C3.70953 8.30372 3.83545 8.23247 3.88924 8.25932C3.94727 8.28837 4.00047 8.36067 4.04888 8.40427C4.10634 8.45597 4.17986 8.49532 4.25519 8.49757C4.29996 8.49892 4.24757 8.56947 4.28712 8.54687C4.32479 8.52537 4.46396 8.33496 4.46396 8.28756C4.46396 8.20306 4.53073 8.10677 4.56957 8.03337C4.63866 7.90287 4.6148 8.03016 4.64571 8.07266C4.68928 8.13256 4.74927 8.16501 4.82746 8.14266C4.88257 8.12691 4.94483 8.09232 5.00551 8.07882C5.06081 8.06652 5.07431 8.05712 5.12466 8.02357C5.18131 7.98577 5.29491 7.96446 5.33586 7.91181C5.37631 7.85976 5.42256 7.80422 5.46971 7.75707C5.53831 7.68847 5.51901 7.60507 5.55201 7.52497C5.56996 7.48137 5.49236 7.53932 5.47096 7.54707C5.40901 7.56962 5.45986 7.60841 5.48076 7.64041C5.55311 7.75101 5.48446 7.80241 5.61831 7.75091C5.75686 7.69766 5.89681 7.65767 6.03341 7.59622C6.09106 7.57027 6.14251 7.59306 6.18811 7.53601C6.24961 7.45916 6.45416 7.34812 6.55286 7.34812C6.61671 7.34812 6.69646 7.31217 6.76286 7.30272C6.85536 7.28947 6.93031 7.25396 7.02811 7.25971C7.06541 7.26191 7.00726 7.27026 6.96056 7.23761C6.90106 7.19596 6.84931 7.19341 6.78006 7.19341C6.66401 7.19341 6.55086 7.17131 6.43251 7.17131C6.24051 7.17131 6.04856 7.17131 5.85656 7.17131"
                          stroke="#F0CAAB" strokeLinecap="round" />
                          <path d="M14.0505 11.2041C13.9761 11.2041 13.9252 11.212 13.8567 11.2426C13.8124 11.2625 13.8101 11.2917 13.7791 11.3227C13.7347 11.3671 13.6866 11.402 13.6552 11.4586C13.6442 11.4784 13.6439 11.4695 13.6263 11.4713C13.565 11.4774 13.4777 11.6063 13.4464 11.6506C13.3993 11.717 13.3375 11.7822 13.2984 11.8533C13.2811 11.8847 13.2421 11.9271 13.2382 11.9622C13.2352 11.9898 13.2197 11.9705 13.2033 11.9731C13.1297 11.9846 13.0438 12.0986 12.9993 12.1536C12.9054 12.2697 12.8301 12.3948 12.746 12.5194C12.7218 12.5553 12.6945 12.6023 12.6618 12.6313C12.6436 12.6475 12.6387 12.7259 12.6323 12.7582C12.6096 12.8739 12.5863 12.9697 12.5445 13.0795C12.4886 13.2262 12.4703 13.3875 12.4127 13.5314C12.329 13.7406 12.2958 13.9838 12.2852 14.2077C12.2831 14.2517 12.2629 14.3228 12.2581 14.3779C12.2461 14.517 12.2418 14.6542 12.2418 14.7937C12.2418 14.994 12.2432 15.1802 12.3153 15.3713C12.3457 15.4519 12.3589 15.5339 12.3893 15.6138C12.4395 15.7459 12.5269 15.8645 12.5986 15.9856C12.6562 16.0827 12.7128 16.1706 12.7846 16.2581C12.8286 16.3118 12.8688 16.3686 12.9133 16.4218C12.9478 16.463 12.9961 16.4927 13.0324 16.5331C13.1142 16.624 13.2034 16.7015 13.2924 16.7816C13.3316 16.8169 13.2046 16.7543 13.1925 16.7491C13.0993 16.709 12.9991 16.6855 12.9049 16.6492C12.8584 16.6313 12.7999 16.6184 12.8929 16.6468C13.0094 16.6824 13.1204 16.7387 13.2268 16.7972C13.2715 16.8218 13.3195 16.8323 13.3634 16.8574C13.3769 16.8652 13.3926 16.8661 13.4031 16.8767C13.4287 16.9023 13.3325 16.8597 13.2972 16.8514C13.2099 16.831 13.1229 16.7924 13.0324 16.7924C12.9614 16.7924 12.9197 16.8225 12.8423 16.7948C12.7995 16.7795 12.7453 16.743 12.7015 16.7659C12.6714 16.7817 12.6437 16.8127 12.6077 16.8141C12.5743 16.8153 12.5371 16.8328 12.5066 16.849C12.492 16.8567 12.49 16.9025 12.4639 16.917C12.4347 16.9332 12.3977 16.9115 12.3718 16.8995C12.1845 16.8132 12.021 16.6958 11.8435 16.5921C11.8006 16.567 11.746 16.549 11.7088 16.5144C11.6643 16.4732 11.5943 16.4899 11.5367 16.4832C11.3787 16.4647 11.2379 16.4475 11.0939 16.3755C10.947 16.302 10.8036 16.2225 10.651 16.1607C10.4408 16.0754 10.2447 15.9646 10.0373 15.8743C9.99973 15.8579 9.87808 15.8279 9.87008 15.7744C9.85908 15.701 9.78813 15.6285 9.75213 15.5662C9.65193 15.3926 9.57998 15.1996 9.49883 15.0163C9.43448 14.8708 9.37208 14.7241 9.32378 14.5723C9.31123 14.5329 9.30908 14.4836 9.30693 14.4423C9.30548 14.4154 9.29443 14.3856 9.28528 14.3605C9.28193 14.3513 9.25893 14.2823 9.26598 14.322C9.31343 14.5876 9.52753 14.6645 9.72568 14.7985C9.87838 14.9017 10.0426 14.9725 10.2118 15.044C10.3411 15.0985 10.457 15.1519 10.5921 15.1836C10.6634 15.2002 10.7358 15.2305 10.8099 15.2329C10.8788 15.2351 10.953 15.1539 10.9946 15.1077C11.0998 14.9911 11.1602 14.8361 11.2467 14.7058C11.2475 14.7046 11.2704 14.6589 11.2804 14.6697C11.2815 14.6709 11.2856 14.6773 11.2888 14.6757C11.3332 14.6542 11.3927 14.5853 11.4236 14.5566C11.632 14.3628 11.8596 14.1856 11.9549 13.9104C11.9826 13.8304 11.9633 13.7405 11.9928 13.6613C11.9983 13.6464 11.9962 13.6506 11.9759 13.6613C11.8638 13.7206 11.7663 13.8107 11.6715 13.8936C11.6466 13.9153 11.5704 13.9615 11.5704 14.0037C11.5704 14.0389 11.637 13.9944 11.6486 13.9862C11.7073 13.945 11.7422 13.8768 11.7774 13.8166C11.8468 13.6975 11.9127 13.5768 11.9687 13.4508C12.0126 13.3518 12.056 13.259 12.1251 13.1752C12.1981 13.0867 12.3592 12.7841 12.3213 12.8924C12.2699 13.0393 12.1857 13.1823 12.1239 13.3244C11.9609 13.6992 11.81 14.0779 11.71 14.4748C11.6705 14.6314 11.6318 14.7901 11.6227 14.9519C11.6169 15.0562 11.6164 15.1796 11.6907 15.263C11.7552 15.3353 11.8534 15.3802 11.9398 15.4194C11.9642 15.4305 12.0412 15.4495 12.0144 15.4495C11.9849 15.4495 11.9732 15.1428 11.9717 15.1252C11.9566 14.9515 11.9633 14.7828 11.9603 14.6096C11.9596 14.5723 11.9347 14.5481 11.9284 14.5133C11.9264 14.5025 11.9273 14.4891 11.929 14.4784C11.9453 14.3762 11.9471 14.5527 11.947 14.5542C11.9417 14.9405 11.9352 15.3268 11.9482 15.713C11.9542 15.8891 11.9506 16.0987 12.0144 16.269C12.0651 16.4041 12.2054 16.4606 12.3321 16.506C12.3871 16.5257 12.4431 16.5433 12.5006 16.5542C12.5209 16.558 12.6362 16.5953 12.6004 16.5524C12.5219 16.4581 12.4252 16.3776 12.3405 16.2888C12.2758 16.221 12.215 16.1499 12.1462 16.0861C12.1144 16.0566 12.0567 16.0226 12.0397 15.9802C12.0262 15.9464 12.0356 15.8931 12.0361 15.8574C12.0376 15.7403 12.1437 15.9049 12.1696 15.9362C12.174 15.9415 12.2807 16.0701 12.2045 16.0325C12.0019 15.9324 11.8098 15.7488 11.6594 15.5831C11.5485 15.4608 11.4849 15.3493 11.4952 15.1842C11.4972 15.1523 11.5119 15.1257 11.503 15.0921C11.4839 15.0198 11.402 15.1609 11.3965 15.1703C11.3072 15.324 11.2886 15.477 11.3754 15.6336C11.4952 15.8496 11.6836 16.0232 11.8255 16.2238C11.8362 16.239 11.9077 16.3122 11.8453 16.2678C11.6102 16.1001 11.355 15.9085 11.1937 15.6649C11.1522 15.6022 11.1092 15.5237 11.0776 15.4543C11.0746 15.4476 11.0732 15.4293 11.0668 15.4254C11.0619 15.4225 11.0623 15.436 11.062 15.4417C11.0586 15.5068 11.0702 15.5752 11.083 15.6384C11.1133 15.7876 11.1551 15.938 11.2166 16.0776C11.2255 16.0979 11.2622 16.1532 11.2491 16.1354C11.1208 15.9604 10.8211 15.914 10.7527 15.6938C10.7376 15.645 10.7101 15.6148 10.6829 15.574C10.6656 15.5481 10.6612 15.4564 10.6234 15.4543C10.5492 15.4502 10.574 15.599 10.574 15.6366C10.574 15.7153 10.5653 15.7317 10.4802 15.7239C10.4487 15.7209 10.386 15.7056 10.3713 15.686C10.3211 15.6191 10.2312 15.5807 10.1709 15.5229C10.1145 15.4688 10.0718 15.4033 10.0169 15.3484C9.99018 15.3217 9.93623 15.3122 9.92423 15.2762"
                          stroke="white" strokeLinecap="round" />
                          <path d="M9.25443 -0.0134067C9.18638 -0.00465581 8.94383 0.0259723 8.72258 0.0522249C7.55243 0.187864 6.15683 0.651663 5.08458 1.25985C2.37839 2.80876 0.570028 5.45153 0.0977245 8.55808C-0.00864978 9.23628 -0.00439482 10.7414 0.0977245 11.4021C0.195589 12.0016 0.429613 12.9379 0.599813 13.4061C1.64228 16.2282 3.93997 18.4816 6.76528 19.4442C7.86733 19.8249 8.79918 19.9736 10.0203 19.9736C11.6925 19.9736 13.0711 19.6498 14.5306 18.906C15.8199 18.2541 16.9134 17.3746 17.8154 16.272C18.4409 15.5019 19.0877 14.3643 19.4409 13.4061C19.6196 12.916 19.8536 11.9841 19.9429 11.3803C20.0451 10.6933 20.0451 9.23193 19.9429 8.55808C19.6791 6.84728 19.0281 5.28528 18.0282 3.9595C16.4283 1.85053 14.1094 0.467892 11.484 0.0697269C11.0628 0.00409508 9.52678 -0.0527856 9.25443 -0.0134067ZM11.4457 0.686663C15.3518 1.29485 18.4665 4.26578 19.2494 8.13368L19.36 8.67188L19.0111 9.01753C18.6579 9.35878 18.6579 9.35878 18.5686 9.27568C18.4154 9.13128 18.041 9.21003 18.041 9.38943C18.041 9.42443 17.9899 9.46383 17.9261 9.47693C17.5389 9.56008 16.8538 9.74823 16.4879 9.87948C16.0624 10.0282 15.1178 10.4833 14.7774 10.7021L14.5987 10.8158L14.6583 10.6627C14.6923 10.5752 14.7221 10.422 14.7221 10.3126C14.7221 10.1289 14.7348 10.1114 14.9263 9.98888C15.8114 9.40258 15.8496 8.62808 15.0327 7.80553L14.7221 7.49488L14.8327 7.12733C15.0923 6.28288 15.5561 5.32463 15.8837 4.96148L16.0539 4.76896L15.8071 4.39704C14.9348 3.07566 13.6158 2.19182 12.1351 1.92929C11.3181 1.7849 10.4756 1.81553 9.56078 2.02555C9.10128 2.13056 9.13103 2.09556 9.08423 2.56373C9.04593 2.9619 8.82468 4.02951 8.65873 4.63769C8.49703 5.20213 8.30983 5.63528 7.94818 6.25223C7.74818 6.59788 7.72688 6.61538 7.59923 6.60228C7.47588 6.58913 7.46733 6.58038 7.48013 6.43163C7.49288 6.30913 7.46308 6.23473 7.34823 6.07723L7.20353 5.88033L7.68433 5.65278C7.94818 5.52593 8.19918 5.38153 8.23748 5.33778C8.28003 5.28963 8.31833 5.15398 8.33113 5.01838L8.34813 4.78208L8.01623 4.75145C7.75668 4.7252 7.51843 4.7427 6.96103 4.82584C6.27168 4.92647 6.24193 4.92647 6.08023 4.85209C5.93128 4.78646 5.89303 4.78646 5.69303 4.83896C5.56963 4.86959 5.37813 4.88709 5.25478 4.87397C5.11433 4.85646 4.98669 4.87397 4.88032 4.91772C4.70587 4.99648 4.33994 5.27653 4.03783 5.56968C3.68467 5.91093 3.31874 6.67228 3.31874 7.06168C3.31874 7.22798 3.22088 7.39858 2.90175 7.79238C2.89324 7.80553 2.79963 7.71803 2.70177 7.60423L2.51455 7.39423L2.4252 7.71363C2.37414 7.88863 2.31457 8.11178 2.28478 8.20808C2.25925 8.30433 2.23372 8.39183 2.22521 8.40493C2.2167 8.41368 2.15288 8.35683 2.08054 8.27368C1.91885 8.07678 1.90609 8.10303 1.79121 8.72873C1.33592 11.2096 1.88056 13.2398 3.30598 14.3424C4.25484 15.0775 5.41643 15.4319 7.01208 15.48C7.78223 15.5063 7.78648 15.5063 7.78648 15.6069C7.78648 15.7119 7.76518 15.7163 7.36098 15.782C6.54828 15.9045 5.58663 16.4383 4.62077 17.3046L4.38249 17.5146L3.98677 17.1865C0.353023 14.1499 -0.459678 8.89498 2.0848 4.92647C2.96132 3.56571 4.15697 2.45872 5.57388 1.69739C6.63763 1.12421 7.90563 0.739168 9.10978 0.616658C9.65013 0.564153 10.8969 0.599153 11.4457 0.686663ZM11.7479 2.52435C11.9691 2.56373 12.3478 2.65999 12.5903 2.74312C13.0201 2.88751 13.6158 3.17629 13.6158 3.23755C13.6158 3.25505 13.5264 3.38631 13.4201 3.5307C13.0797 3.97262 12.6627 4.65082 12.4031 5.17148C12.267 5.44713 12.1521 5.67468 12.1478 5.68343C12.1436 5.68778 12.0159 5.64403 11.8627 5.58718C11.3862 5.40338 10.8458 5.28088 10.0927 5.18463C9.90543 5.16273 9.86718 5.14523 9.88843 5.08398C9.89693 5.04463 10.0033 4.73395 10.1224 4.39267C10.3182 3.81948 10.4714 3.17629 10.5309 2.65999L10.5565 2.45434H10.9522C11.1692 2.45434 11.5266 2.48497 11.7479 2.52435ZM15.3731 4.49768C15.4369 4.58519 15.488 4.68145 15.488 4.71207C15.488 4.7427 15.3816 4.93085 15.2497 5.13213C14.9221 5.63093 14.5391 6.43163 14.3221 7.06608C14.2966 7.14043 14.2711 7.12733 14.0838 6.93918L13.8753 6.72918L13.9817 6.44913C14.2413 5.73593 15.054 4.33141 15.2029 4.33579C15.2327 4.34016 15.305 4.41017 15.3731 4.49768ZM7.93113 5.01838C8.03753 5.05773 8.01198 5.15838 7.88433 5.22838C7.81628 5.25903 7.59923 5.33778 7.39503 5.40338C7.19503 5.46463 7.02058 5.53903 7.01208 5.56968C6.98653 5.64403 6.86738 5.58278 6.78228 5.45153C6.68443 5.29838 6.73548 5.21088 6.96103 5.13213C7.23333 5.03588 7.80773 4.97023 7.93113 5.01838ZM5.98663 5.19773C6.17383 5.28963 7.06313 6.17348 7.06313 6.26538C7.06313 6.31788 6.99503 6.34848 6.79933 6.38788C6.65038 6.41413 6.43338 6.48853 6.31423 6.55413L6.09723 6.67228L5.77388 6.51038C5.41218 6.33538 5.16543 6.16908 4.92287 5.93718C4.83351 5.84968 4.75692 5.77968 4.75267 5.77968C4.74841 5.77968 4.76118 5.97223 4.78245 6.21288C4.83351 6.81228 4.79947 6.99168 4.56971 7.31108C4.39951 7.55173 4.34845 7.66113 4.40376 7.66113C4.46333 7.66113 4.75267 7.48613 4.81649 7.41608C4.94414 7.26298 5.06753 6.97418 5.09308 6.75103L5.11858 6.53228L5.34838 6.68538C5.47603 6.76853 5.64198 6.86478 5.71853 6.89543C5.84193 6.94793 5.85473 6.97418 5.83768 7.08793C5.81643 7.24983 5.85898 7.25423 6.21213 7.15793C6.33978 7.12293 6.53123 7.09233 6.63763 7.09233C6.87163 7.09233 7.16948 7.25423 7.16948 7.37673C7.16948 7.45548 7.13118 7.46863 6.86738 7.49048C6.62063 7.50798 6.48443 7.55173 6.14403 7.72238C5.91428 7.83613 5.61643 7.99368 5.48878 8.07678C5.28028 8.20368 5.22923 8.21683 5.01648 8.19933C4.70587 8.16868 4.61651 8.22118 4.53141 8.49248C4.46333 8.70248 4.45908 8.70688 4.32717 8.68063C3.94848 8.60623 3.14854 8.17308 3.14854 8.04178C3.14854 7.94118 3.2379 7.70488 3.28045 7.70488C3.29747 7.70488 3.34427 7.75738 3.37831 7.82303L3.43788 7.94553L3.46341 7.83613C3.56128 7.35048 3.59957 7.20173 3.70595 6.90418C4.01656 6.02033 4.65481 5.25903 5.09308 5.25463C5.18243 5.25028 5.36113 5.22398 5.48878 5.18898C5.79938 5.11023 5.81218 5.11023 5.98663 5.19773ZM10.4884 5.53468C11.1011 5.64843 11.5138 5.80593 12.4116 6.26538C13.2924 6.72043 13.3222 6.79478 12.4797 6.45348C12.2202 6.34848 11.9861 6.26098 11.9649 6.26098C11.9095 6.26098 11.8117 6.54978 11.8457 6.60663C11.8585 6.62853 12.0159 6.65913 12.1946 6.67663C12.5733 6.71168 13.135 6.86043 13.6158 7.05293C13.9902 7.19733 14.0413 7.26733 13.7179 7.18418C12.8669 6.96108 12.1436 6.86918 10.4458 6.76853C8.99488 6.67663 8.58213 6.63288 8.27578 6.52788L8.02048 6.44038L8.62898 6.44913L9.24168 6.46228L9.38633 6.16473C9.53103 5.86718 9.53103 5.86718 9.71398 5.86718C9.81183 5.86718 10.2288 5.90658 10.6373 5.95468C11.0458 5.99848 11.3862 6.03348 11.3947 6.02473C11.416 6.00283 10.7437 5.81908 10.382 5.74908C10.2075 5.71843 9.71398 5.67903 9.28848 5.66153C8.66298 5.63968 8.50983 5.62218 8.50983 5.57403C8.50983 5.54343 8.55238 5.49528 8.60768 5.47338C8.74383 5.40778 10.0331 5.45588 10.4884 5.53468ZM8.12688 7.00483C8.37368 7.07918 8.65023 7.15793 8.74808 7.17983C8.88853 7.21483 10.2671 7.43798 10.3735 7.44238C10.3905 7.44673 10.3267 7.48613 10.2331 7.53863C9.96503 7.67863 9.74378 7.93243 9.74378 8.09868C9.74378 8.19493 9.92673 8.13368 10.0544 7.99368C10.416 7.59548 10.6926 7.68738 11.1904 8.36118C11.45 8.71123 11.5053 8.75938 11.5436 8.65433C11.5904 8.52308 11.2458 7.80553 11.0628 7.64363C10.8926 7.49923 10.9139 7.49923 11.6883 7.66548C12.4755 7.83178 12.8329 7.93678 13.2116 8.12053C13.803 8.40493 14.0413 8.66313 14.0413 9.02188C14.0413 9.26253 14.0158 9.28003 13.6626 9.28003C13.4584 9.28003 13.3903 9.30193 13.2626 9.40258C13.0499 9.56883 12.986 9.70008 13.0711 9.79198C13.1605 9.87948 13.3009 9.84448 13.4711 9.69573C13.5945 9.58633 13.7051 9.56443 13.9987 9.58193C14.2115 9.59943 14.3689 9.76573 14.4285 10.0457C14.471 10.2426 14.4668 10.2951 14.403 10.4352C14.2625 10.7327 13.8158 10.9777 13.3392 11.0127C12.8882 11.0477 12.8499 11.0608 12.8499 11.1834C12.8499 11.2709 12.8712 11.2927 12.9563 11.2927C13.1775 11.2927 13.1265 11.4153 12.7478 11.7784C11.918 12.5791 11.2585 13.6074 10.9224 14.6268C10.9054 14.6706 10.8543 14.7056 10.8032 14.7056C10.6969 14.7056 10.2926 14.4912 10.1054 14.3381L9.97778 14.233L10.0671 14.1062C10.182 13.9486 10.2586 13.9355 10.5607 14.0318C10.8032 14.1062 10.8118 14.1062 10.8713 14.023C10.9054 13.9793 10.9352 13.9268 10.9352 13.9136C10.9352 13.9005 10.8032 13.8436 10.6416 13.7867C10.3565 13.6861 10.348 13.6774 10.4373 13.6161C10.5735 13.5242 10.8501 13.2529 10.8969 13.1611C10.9309 13.1042 10.8543 13.1261 10.6075 13.2529C10.2756 13.4236 10.2714 13.4236 9.61613 13.4542C8.91828 13.4892 8.71408 13.463 8.29708 13.2967C7.99923 13.1786 7.58223 12.8767 7.38223 12.6404L7.22908 12.4522L7.51843 12.4172C7.88858 12.3779 8.28003 12.2728 8.44173 12.1766C8.56513 12.1022 8.56938 12.1022 8.90978 12.2816C9.42463 12.5572 9.68418 12.6229 10.1607 12.5923C10.4756 12.5747 10.6075 12.5441 10.8203 12.4391C11.416 12.1503 11.8712 11.669 11.8712 11.3277C11.8712 11.1309 11.8627 11.1309 11.4883 11.2534C10.8458 11.4634 10.3777 11.3146 9.82033 10.7239C9.46293 10.3476 9.28848 10.2295 9.11403 10.2514C9.02468 10.2601 8.99488 10.2908 8.98638 10.387C8.97363 10.4877 8.99488 10.5183 9.11403 10.5664C9.19063 10.6014 9.35658 10.7589 9.49273 10.9296C9.84163 11.3671 10.5054 11.7303 10.9564 11.7303C11.0628 11.7303 11.1479 11.7478 11.1479 11.7697C11.1479 11.9228 10.5097 12.2028 10.0756 12.2422C9.69698 12.2816 9.19913 12.1153 8.68853 11.7872L8.46303 11.6384L8.28428 11.7959C8.06303 11.9928 7.85453 12.0541 7.39928 12.0584C7.06738 12.0584 7.01208 12.0453 6.74398 11.9053C6.40788 11.7303 6.05043 11.3934 5.91853 11.1309C5.83768 10.9646 5.80363 10.8114 5.84618 10.8114C5.85473 10.8114 6.01213 10.8858 6.19513 10.9733C6.65038 11.1965 6.91848 11.2009 7.33118 10.9865C7.63328 10.8333 7.88433 10.5883 7.86308 10.4745C7.83328 10.3258 7.71838 10.3083 7.57373 10.4352C7.35248 10.6233 7.10993 10.7327 6.84613 10.7546L6.60358 10.7808L6.57378 10.2689C6.55678 9.99323 6.55678 9.63008 6.56953 9.46818C6.65038 8.65873 6.94398 7.86238 7.20778 7.73113C7.46308 7.60863 7.60778 7.64798 8.00348 7.95868C8.21623 8.12493 8.25453 8.08993 8.14813 7.81428C8.06728 7.59113 7.79498 7.31983 7.61628 7.28048C7.53118 7.26298 7.48863 7.22798 7.48863 7.17543C7.48863 7.06168 7.57798 6.87353 7.63328 6.87353C7.65883 6.87353 7.88008 6.93478 8.12688 7.00483ZM13.0371 7.49048C14.3987 7.67423 15.2752 8.21683 15.2752 8.88623C15.2752 9.17943 15.0667 9.51193 14.7859 9.66073C14.6838 9.71758 14.6583 9.71758 14.6412 9.66948C14.6157 9.59068 14.42 9.38943 14.3434 9.36318C14.2966 9.34568 14.3051 9.30628 14.3774 9.15753C14.6157 8.67623 14.3859 8.30433 13.6371 7.94553C13.2626 7.76613 12.9052 7.64798 12.3393 7.50798L11.8925 7.39858L12.2967 7.42048C12.518 7.43358 12.8499 7.46423 13.0371 7.49048ZM6.80783 7.73988C6.80783 7.76178 6.73123 7.98053 6.64188 8.23433C6.41638 8.84248 6.33978 9.32818 6.33978 10.1245V10.7721L6.24618 10.7414C6.06323 10.6846 5.84618 10.5533 5.70578 10.422L5.56963 10.2908L5.53133 10.4002C5.47603 10.5489 5.48028 10.6189 5.55263 10.8683C5.70578 11.3846 5.98238 11.7959 6.39933 12.1153L6.65888 12.3122L6.50148 12.286C6.25043 12.2466 6.04618 12.1241 5.75683 11.8441C5.25903 11.3671 5.09308 10.9515 5.08883 10.1858C5.08883 9.81823 5.07603 9.67383 5.03778 9.67383C4.9101 9.67383 4.95265 9.25378 5.11008 8.98253C5.15263 8.90378 5.19093 8.82938 5.19093 8.82063C5.19093 8.81188 5.08033 8.79873 4.9484 8.78998C4.72289 8.77688 4.70161 8.76813 4.68885 8.66748C4.68034 8.60623 4.70587 8.51873 4.7399 8.47058C4.79096 8.39618 4.84202 8.38308 5.10583 8.39618C5.39093 8.40493 5.43773 8.39183 5.79938 8.21683C6.01638 8.11178 6.30573 7.95428 6.44613 7.86678C6.69718 7.70928 6.80783 7.66988 6.80783 7.73988ZM3.07621 8.26493C3.59532 8.68938 4.16548 8.93003 4.64204 8.93003C4.7782 8.93003 4.89308 8.94753 4.89308 8.96503C4.89308 8.98253 4.85479 9.12253 4.80373 9.27128L4.71438 9.54258H4.46759C4.17399 9.54258 3.74849 9.41568 3.34002 9.20568C2.99536 9.02628 2.61667 8.78563 2.48477 8.65873L2.39116 8.57558L2.47626 8.23868C2.5954 7.73988 2.58689 7.75303 2.70603 7.91053C2.76134 7.98493 2.92728 8.14678 3.07621 8.26493ZM19.2153 9.57758C18.8196 9.76133 18.7813 9.61258 19.1387 9.27568L19.3813 9.04813L19.4026 9.26253L19.4238 9.47693L19.2153 9.57758ZM18.5388 9.82698C18.5473 9.85323 18.4069 9.89698 18.2282 9.92763C17.7006 10.0107 17.3602 10.2776 17.3602 10.6014C17.3602 10.7633 17.5176 10.9646 17.5984 10.9077C17.624 10.8902 17.6878 10.7939 17.7389 10.6933C17.9176 10.3258 18.1558 10.1157 18.458 10.0457C18.5856 10.0195 18.5984 10.0282 18.6622 10.1814C18.7218 10.3301 18.7218 10.3476 18.6579 10.3827C18.5048 10.4745 18.2878 10.7021 18.2069 10.8596C18.1005 11.0783 18.1048 11.319 18.2239 11.5553C18.3601 11.8353 18.4069 11.8222 18.4324 11.4984C18.4452 11.3496 18.4877 11.1571 18.5303 11.074C18.6111 10.9077 18.8026 10.6802 18.8579 10.6802C18.9303 10.6802 18.892 11.1134 18.8026 11.2709C18.7218 11.4109 18.7175 11.4459 18.7643 11.634C18.8154 11.8484 18.9345 12.0803 19.0707 12.2378C19.1515 12.3341 19.1515 12.3385 18.9856 12.8504C18.892 13.1392 18.726 13.5724 18.6154 13.813C18.4239 14.2418 18.4111 14.2593 18.2622 14.2855C17.9644 14.3337 16.9645 14.3118 16.5177 14.2418C16.1518 14.1893 16.0624 14.1849 16.0369 14.233C15.9688 14.3424 15.9943 14.85 16.0794 15.0119C16.1858 15.2175 16.5219 15.3925 16.9474 15.4582L17.2751 15.5107V15.7382C17.2751 15.8957 17.2495 15.9963 17.1942 16.0664L17.1176 16.167L17.0878 16.0707C17.0496 15.9526 17.0368 15.9526 16.8283 16.062C16.7347 16.1101 16.607 16.1495 16.5432 16.1495C16.4113 16.1495 16.3985 16.1845 16.4794 16.2983C16.5219 16.3595 16.5815 16.3726 16.7347 16.3639C16.9176 16.3464 16.9262 16.3508 16.8581 16.4164C16.7602 16.5127 16.4028 16.6308 16.2028 16.6308C15.9092 16.6308 15.9475 16.8758 16.2454 16.9021L16.4028 16.9196L16.2879 16.9721C15.9135 17.1383 15.0072 17.1165 14.5306 16.9327C13.5137 16.5433 12.7393 15.2875 12.8201 14.163C12.8967 13.1392 13.4286 12.1635 14.3221 11.424C15.1561 10.7371 16.4071 10.1726 17.7857 9.87073C18.2878 9.76133 18.5133 9.74823 18.5388 9.82698ZM19.4366 9.96698C19.4238 10.1157 19.4111 10.1333 19.2749 10.1595C19.1132 10.1945 19.0622 10.1551 19.0622 9.99763C19.0622 9.93198 19.1005 9.89263 19.2026 9.85758C19.4366 9.78323 19.4494 9.79198 19.4366 9.96698ZM2.11033 10.0151C2.1316 10.0326 2.17415 10.3214 2.20394 10.6583C2.23372 11.0521 2.28904 11.4109 2.36137 11.6647C2.94005 13.7517 4.79522 15.0119 7.28863 15.0119H7.74818L7.73543 15.13L7.72263 15.2525L7.12693 15.2438C4.71863 15.2175 2.92303 14.1149 2.23798 12.2378C2.07629 11.8003 1.95289 11.1484 1.92736 10.5795C1.90609 10.1595 1.9146 10.0501 1.9614 10.0195C2.03374 9.97138 2.05076 9.97138 2.11033 10.0151ZM13.6711 11.6122C13.0839 12.2422 12.7265 12.8942 12.5265 13.6905C12.2457 14.8019 12.4925 15.8607 13.1988 16.6002L13.4839 16.8977L13.1477 16.8671L12.8159 16.8408L12.6371 17.0071L12.4627 17.1777L11.6457 16.7621C11.1947 16.5345 10.6458 16.2808 10.4246 16.1976C10.2033 16.1145 9.96928 15.9963 9.90118 15.9351C9.59483 15.6463 9.27148 14.955 9.20763 14.4518L9.17783 14.2199L9.57783 14.4912C10.1565 14.8806 10.6118 15.0994 10.8458 15.0994L11.0415 15.095L11.1607 14.8194C11.3649 14.3556 11.8925 13.4717 12.3053 12.9029C12.752 12.2947 13.6754 11.3102 13.8328 11.2796C13.8881 11.2709 13.9519 11.2577 13.9732 11.2534C13.9945 11.2534 13.8583 11.4109 13.6711 11.6122ZM8.31408 13.9136C8.22898 14.1105 8.16518 14.2724 8.17368 14.2812C8.49703 14.4824 8.93108 14.8106 8.91403 14.8369C8.90128 14.8587 8.74808 14.9594 8.57363 15.06C8.39918 15.165 8.25453 15.2613 8.25453 15.2744C8.25453 15.2919 8.29283 15.34 8.34388 15.3882C8.39493 15.4319 8.45878 15.5238 8.49278 15.5894C8.55238 15.7076 8.55238 15.7119 8.43323 15.7119C8.30983 15.7119 8.13963 15.5632 8.04603 15.3707C7.99923 15.2832 8.01623 15.2481 8.22048 15.0294L8.44598 14.7844L8.31833 14.6925C8.06728 14.5043 7.91413 14.3468 7.91413 14.2724C7.91413 14.1149 8.42473 13.4105 8.45878 13.5198C8.46728 13.5417 8.39918 13.7211 8.31408 13.9136ZM17.4538 14.5918C17.8708 14.5918 18.2112 14.605 18.2112 14.6137C18.2112 14.6443 17.658 15.4888 17.6197 15.5107C17.5984 15.5238 17.5602 15.48 17.5304 15.41C17.4708 15.2613 17.3474 15.2044 17.007 15.1694C16.7432 15.1388 16.4922 15.0513 16.3773 14.9419C16.3007 14.8719 16.2326 14.6006 16.2709 14.5349C16.2837 14.5131 16.3858 14.5174 16.4964 14.5393C16.6113 14.5656 17.041 14.5875 17.4538 14.5918ZM8.89703 16.1057C9.72248 16.202 10.5224 16.4908 11.6925 17.1165L12.4329 17.5103L12.6627 17.3309C12.7903 17.2346 12.9222 17.1427 12.9563 17.1296C12.9903 17.1165 13.169 17.1908 13.3477 17.3002C13.9179 17.6371 14.4753 17.9084 14.5391 17.8778C14.5902 17.8603 14.5987 17.8122 14.5774 17.6546L14.5519 17.4534L14.6923 17.4796C14.7646 17.4971 14.9987 17.519 15.2071 17.5365L15.5858 17.5628L15.1816 17.8297C14.6966 18.1491 14.0455 18.4904 13.4924 18.7091C13.1052 18.8623 13.0882 18.8666 13.0158 18.7879C12.9733 18.7441 12.9009 18.5997 12.8541 18.4685C12.7818 18.2585 12.769 18.2453 12.769 18.3635C12.7648 18.4378 12.7946 18.5954 12.8286 18.7135C12.8627 18.8316 12.8924 18.9323 12.8924 18.9366C12.8924 18.9629 11.7181 19.2254 11.3394 19.2823C10.6926 19.3829 9.37358 19.3829 8.70553 19.2823C7.70988 19.1335 6.68443 18.8141 5.80793 18.3766C5.35263 18.1491 4.68034 17.7378 4.68034 17.6896C4.68034 17.6503 5.39518 17.1296 5.73133 16.9196C6.41638 16.4995 7.22058 16.1932 7.85028 16.1101C8.27153 16.0576 8.47578 16.0576 8.89703 16.1057Z"
                          fill="#333333" />
                          <path d="M5.54401 5.54324C5.50996 5.63509 5.82911 5.96764 6.10566 6.13389C6.22481 6.20394 6.33121 6.26079 6.35246 6.26079C6.36946 6.26079 6.24611 6.08579 6.07591 5.87139C5.76526 5.47759 5.60786 5.38134 5.54401 5.54324Z" fill="#333333"
                          />
                          <path d="M12.9139 8.46171C12.7522 8.52296 12.6544 8.58421 12.6458 8.63671C12.6246 8.75486 12.7522 8.77236 13.0245 8.68921C13.3181 8.59736 13.399 8.52296 13.3181 8.42671C13.2501 8.34356 13.2245 8.34796 12.9139 8.46171Z" fill="#333333"
                          />
                          <path d="M7.53572 8.57548C7.46767 8.69803 7.47617 8.77678 7.56552 8.85553C7.67187 8.95178 7.75697 8.94743 7.85062 8.84238C7.91442 8.77238 7.92292 8.72863 7.88887 8.63238C7.83782 8.47923 7.60382 8.43988 7.53572 8.57548Z" fill="#333333"
                          />
                          <path d="M10.1057 8.65008C10.0248 8.73758 10.0376 8.92573 10.1312 8.98698C10.2333 9.05263 10.4121 8.99133 10.4376 8.87758C10.4716 8.75508 10.3652 8.58008 10.2546 8.58008C10.2121 8.58008 10.144 8.61068 10.1057 8.65008Z" fill="#333333"
                          />
                          <path d="M13.233 8.83398C13.1181 8.88208 13.0372 8.94338 13.0287 8.99148C12.9989 9.13588 13.084 9.16653 13.3053 9.08338C13.5563 8.98713 13.6287 8.92588 13.5904 8.82958C13.5563 8.73773 13.4797 8.73773 13.233 8.83398Z" fill="#333333"
                          />
                          <path d="M8.20355 9.43316C8.0589 9.51626 7.8972 9.86631 7.90145 10.0807C7.9185 10.422 8.1142 10.5752 8.5014 10.5358C8.75245 10.5095 8.8503 10.4483 8.8503 10.3258C8.8503 10.2514 8.8163 10.2426 8.58225 10.2426C8.4291 10.2426 8.2929 10.2207 8.26315 10.1901C8.161 10.0851 8.2376 9.77006 8.3993 9.63441C8.4376 9.59941 8.46735 9.52941 8.46735 9.47251C8.46735 9.35001 8.378 9.33691 8.20355 9.43316Z"
                          fill="#333333" />
                          <path d="M2.55305 8.40041C2.49774 8.50981 2.53603 8.61041 2.6424 8.64541C2.80409 8.69791 2.91898 8.49226 2.79984 8.36976C2.72325 8.29101 2.60411 8.30851 2.55305 8.40041Z" fill="#333333" />
                          <path d="M14.5944 12.3429C14.5604 12.3648 14.5093 12.4479 14.4838 12.5267C14.4583 12.6054 14.4072 12.6754 14.3689 12.6842C14.2881 12.7017 14.2753 12.6011 14.3391 12.4698C14.3732 12.4042 14.3689 12.3779 14.3221 12.3604C14.2243 12.321 14.0838 12.426 14.0583 12.5529C14.0413 12.6492 13.9732 12.7061 13.7562 12.8198C13.4073 13.008 13.2669 13.2093 13.2669 13.5112C13.2711 13.8918 13.3945 14.1062 13.6541 14.1806C13.8966 14.2506 13.9136 14.2725 13.9392 14.6313L13.969 14.9682H13.8413C13.7094 14.9682 13.5264 14.85 13.386 14.6707C13.3392 14.6094 13.2924 14.5831 13.2669 14.6094C13.2158 14.6619 13.2967 15.1695 13.3818 15.3007C13.4498 15.4101 13.6754 15.4932 13.9051 15.4932C14.0115 15.4932 14.0541 15.5151 14.0796 15.5982C14.1477 15.782 14.3817 15.7864 14.3476 15.6026C14.3221 15.4582 14.4072 15.4626 14.5391 15.607C14.6583 15.7383 14.7902 15.7295 14.7774 15.5895C14.7689 15.5064 14.7859 15.4932 14.905 15.4932C15.071 15.4932 15.1944 15.3751 15.2965 15.1344C15.3944 14.885 15.3774 14.6181 15.2412 14.3512C15.1476 14.1631 15.0795 14.0975 14.8582 13.9706C14.5732 13.8087 14.5561 13.7781 14.62 13.3843L14.6455 13.2224L14.854 13.3318C14.9689 13.3886 15.088 13.4762 15.1135 13.5243C15.2072 13.673 15.2327 13.6205 15.2284 13.2924C15.2199 12.798 15.2029 12.7673 14.9391 12.7236C14.7221 12.6842 14.7136 12.6798 14.7391 12.5704C14.7902 12.356 14.7859 12.3254 14.7221 12.3123C14.688 12.3035 14.6285 12.3167 14.5944 12.3429ZM14.3519 13.4674C14.3221 13.7606 14.3221 13.7606 14.2328 13.7299C14.1094 13.6774 14.1647 13.218 14.2966 13.218C14.3647 13.218 14.3732 13.2486 14.3519 13.4674ZM13.9009 13.533C13.8881 13.6205 13.8839 13.6249 13.8541 13.5549C13.8328 13.5155 13.8328 13.428 13.8541 13.358C13.8839 13.2486 13.8881 13.2443 13.9009 13.3361C13.9136 13.393 13.9136 13.4805 13.9009 13.533ZM14.3604 14.4519C14.3689 14.4825 14.3817 14.6138 14.3945 14.7363C14.4115 14.9551 14.4072 14.9682 14.3136 14.9682C14.2243 14.9682 14.2115 14.9463 14.2115 14.8194C14.2115 14.7407 14.1987 14.6094 14.186 14.535C14.1604 14.4169 14.1689 14.3994 14.2498 14.3994C14.3008 14.3994 14.3476 14.4256 14.3604 14.4519ZM14.7902 14.64C14.8497 14.7319 14.854 14.7757 14.8157 14.8588C14.7306 15.0513 14.637 14.9944 14.637 14.7494C14.637 14.5088 14.6838 14.4738 14.7902 14.64Z"
                          fill="#333333" />
                          <path d="M18.1472 13.7737C18.1345 13.8656 18.0919 13.9837 18.0621 14.0319C17.994 14.1369 18.0153 14.1806 18.1302 14.1806C18.2919 14.1806 18.4195 13.695 18.2706 13.6381C18.2323 13.625 18.1983 13.6118 18.1898 13.6118C18.1855 13.6118 18.1642 13.6862 18.1472 13.7737Z"
                          fill="#333333" />
                          <path d="M16.0667 15.83C15.9263 15.8912 15.7136 15.9481 15.5859 15.9612C15.3859 15.9831 15.3604 15.9962 15.3604 16.0881C15.3604 16.1581 15.3902 16.1931 15.4795 16.2106C15.6327 16.2456 15.9986 16.1713 16.2114 16.0619C16.3518 15.9875 16.3816 15.9525 16.3816 15.8431C16.3816 15.69 16.3901 15.69 16.0667 15.83Z"
                          fill="#333333" />
                          <path d="M14.5479 16.3508C14.4245 16.5039 14.7053 16.6658 15.1138 16.6702C15.3861 16.6746 15.5308 16.6133 15.5308 16.4908C15.5308 16.3945 15.518 16.3902 15.1606 16.3902C14.9521 16.3902 14.7479 16.3639 14.6968 16.3333C14.6202 16.2939 14.5947 16.2939 14.5479 16.3508Z"
                          fill="#333333" />
                          <path d="M11.2754 15.2922C11.1563 15.4454 11.3223 15.6991 11.4797 15.5985C11.6286 15.5022 11.5733 15.231 11.4031 15.231C11.3605 15.231 11.3052 15.2616 11.2754 15.2922Z" fill="#333333" />
                          <path d="M11.7949 15.8519C11.7226 15.9263 11.7311 16.0444 11.812 16.1232C11.9056 16.2238 11.9864 16.2107 12.063 16.0882C12.1183 16.005 12.1226 15.9613 12.0843 15.8913C12.0332 15.7906 11.8758 15.7688 11.7949 15.8519Z" fill="#333333"
                          />
                          <path d="M12.2969 16.342C12.1778 16.4952 12.3437 16.7489 12.5011 16.6483C12.6501 16.552 12.5948 16.2808 12.4246 16.2808C12.382 16.2808 12.3267 16.3114 12.2969 16.342Z" fill="#333333" />
                        </g>
                        <path className="svg-text" d="M26.7021 6.12782H28.7811C29.1471 6.12782 29.4771 6.16082 29.7711 6.22682C30.0651 6.29282 30.3171 6.40082 30.5271 6.55082C30.7371 6.70082 30.8991 6.89282 31.0131 7.12682C31.1271 7.36082 31.1841 7.64282 31.1841 7.97282C31.1841 8.32682 31.1181 8.62382 30.9861 8.86382C30.8541 9.10382 30.6741 9.29882 30.4461 9.44882C30.2241 9.59282 29.9631 9.69782 29.6631 9.76382C29.3631 9.82982 29.0451 9.86282 28.7091 9.86282H27.8361V12.4998H26.7021V6.12782ZM28.6281 8.90882C28.8141 8.90882 28.9911 8.89682 29.1591 8.87282C29.3271 8.84282 29.4771 8.79482 29.6091 8.72882C29.7411 8.65682 29.8461 8.56082 29.9241 8.44082C30.0021 8.32082 30.0411 8.16482 30.0411 7.97282C30.0411 7.78682 30.0021 7.63682 29.9241 7.52282C29.8461 7.40282 29.7411 7.30982 29.6091 7.24382C29.4831 7.17782 29.3361 7.13582 29.1681 7.11782C29.0061 7.09382 28.8381 7.08182 28.6641 7.08182H27.8361V8.90882H28.6281ZM33.6572 6.12782H34.6382L37.3832 12.4998H36.0872L35.4932 11.0418H32.7302L32.1542 12.4998H30.8852L33.6572 6.12782ZM35.0972 10.0698L34.1162 7.47782L33.1172 10.0698H35.0972ZM39.0165 9.73682L36.6225 6.12782H38.0085L39.6105 8.80982L41.2305 6.12782H42.5445L40.1505 9.73682V12.4998H39.0165V9.73682ZM43.0761 6.12782H45.1551C45.5211 6.12782 45.8511 6.16082 46.1451 6.22682C46.4391 6.29282 46.6912 6.40082 46.9011 6.55082C47.1111 6.70082 47.2731 6.89282 47.3871 7.12682C47.5012 7.36082 47.5581 7.64282 47.5581 7.97282C47.5581 8.32682 47.4921 8.62382 47.3601 8.86382C47.2281 9.10382 47.0481 9.29882 46.8201 9.44882C46.5981 9.59282 46.3371 9.69782 46.0371 9.76382C45.7371 9.82982 45.4191 9.86282 45.0831 9.86282H44.2101V12.4998H43.0761V6.12782ZM45.0021 8.90882C45.1881 8.90882 45.3652 8.89682 45.5331 8.87282C45.7011 8.84282 45.8512 8.79482 45.9832 8.72882C46.1152 8.65682 46.2201 8.56082 46.2981 8.44082C46.3761 8.32082 46.4151 8.16482 46.4151 7.97282C46.4151 7.78682 46.3761 7.63682 46.2981 7.52282C46.2201 7.40282 46.1152 7.30982 45.9832 7.24382C45.8572 7.17782 45.7101 7.13582 45.5421 7.11782C45.3801 7.09382 45.2121 7.08182 45.0381 7.08182H44.2101V8.90882H45.0021ZM50.0311 6.12782H51.0121L53.7571 12.4998H52.4611L51.8671 11.0418H49.1042L48.5282 12.4998H47.2592L50.0311 6.12782ZM51.4711 10.0698L50.4902 7.47782L49.4912 10.0698H51.4711ZM54.3876 6.12782H55.5216V11.4918H58.2306V12.4998H54.3876V6.12782ZM59.7501 9.73682L57.3561 6.12782H58.7421L60.3442 8.80982L61.9641 6.12782H63.2781L60.8841 9.73682V12.4998H59.7501V9.73682ZM68.1537 7.62182C67.9857 7.39382 67.7666 7.22882 67.4966 7.12682C67.2266 7.01882 66.9626 6.96482 66.7046 6.96482C66.3746 6.96482 66.0746 7.02482 65.8046 7.14482C65.5346 7.26482 65.3007 7.42982 65.1026 7.63982C64.9106 7.84982 64.7606 8.09582 64.6526 8.37782C64.5506 8.65982 64.4996 8.96582 64.4996 9.29582C64.4996 9.64382 64.5506 9.96182 64.6526 10.2498C64.7546 10.5378 64.8987 10.7868 65.0847 10.9968C65.2767 11.2008 65.5047 11.3598 65.7687 11.4738C66.0326 11.5878 66.3296 11.6448 66.6596 11.6448C67.0016 11.6448 67.3046 11.5788 67.5686 11.4468C67.8326 11.3088 68.0456 11.1288 68.2076 10.9068L69.1166 11.5458C68.8346 11.8998 68.4896 12.1758 68.0816 12.3738C67.6736 12.5658 67.1966 12.6618 66.6506 12.6618C66.1526 12.6618 65.6936 12.5808 65.2736 12.4188C64.8596 12.2508 64.5026 12.0198 64.2026 11.7258C63.9026 11.4258 63.6686 11.0718 63.5006 10.6638C63.3326 10.2498 63.2486 9.79382 63.2486 9.29582C63.2486 8.78582 63.3356 8.32682 63.5096 7.91882C63.6896 7.50482 63.9327 7.15382 64.2387 6.86582C64.5507 6.57782 64.9167 6.35582 65.3367 6.19982C65.7566 6.04382 66.2126 5.96582 66.7046 5.96582C66.9086 5.96582 67.1216 5.98682 67.3436 6.02882C67.5656 6.06482 67.7786 6.12482 67.9826 6.20882C68.1866 6.28682 68.3787 6.38582 68.5587 6.50582C68.7387 6.62582 68.8917 6.76982 69.0177 6.93782L68.1537 7.62182ZM69.8211 6.12782H70.9552V8.70182H73.9341V6.12782H75.0681V12.4998H73.9341V9.67382H70.9552V12.4998H69.8211V6.12782Z"
                        fill="#fff" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1104_6632">
                          <rect width="76" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="payment-choose-el__dropdown" style="display: block;">
                    <div className="payment-choose-el__text text-cat">Выбирая данную платёжную систему, вы соглашаетесь с её политикой <a href="#">обработки персональных данных</a>.</div>
                  </div>
                </div>
              </div>
              <div className="payment-choose__el">
                <div className="payment-choose-el">
                  <div className="payment-choose-el__top">
                    <div className="payment-choose-el__title">Энипэй</div>
                    <svg className="payment-choose-el__img" width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1104_6671)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.61888 10.7059C9.45543 10.542 9.2613 10.4119 9.04758 10.323C8.83385 10.2342 8.60472 10.1883 8.37326 10.188C8.1418 10.1877 7.91255 10.233 7.69859 10.3213C7.48463 10.4096 7.29016 10.5391 7.12628 10.7026C6.9624 10.866 6.83231 11.0602 6.74345 11.2739C6.6546 11.4876 6.60871 11.7167 6.6084 11.9482C6.60809 12.1797 6.65338 12.4089 6.74167 12.6229C6.82997 12.8368 6.95954 13.0313 7.12299 13.1952L13.9452 20.0001L16.4413 17.5103L9.61888 10.7059Z"
                        fill="#F4A800" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7123 6.80438L9.89042 0L7.39453 2.48959L14.2164 9.29425C14.3798 9.45896 14.574 9.58982 14.7879 9.67934C15.0019 9.76886 15.2314 9.81527 15.4634 9.8159C15.6953 9.81654 15.9251 9.7714 16.1396 9.68306C16.354 9.59473 16.549 9.46493 16.7132 9.30112C16.8774 9.13731 17.0077 8.9427 17.0965 8.72845C17.1854 8.5142 17.2311 8.28452 17.231 8.05258C17.2309 7.82064 17.185 7.59099 17.096 7.3768C17.0071 7.16261 16.8767 6.96808 16.7123 6.80438Z"
                        fill="#F4A800" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1459 0.365479L9.89059 0L0.792228 9.0537C0.461616 9.38431 0.275879 9.83272 0.275879 10.3003C0.275879 10.7678 0.461616 11.2162 0.792228 11.5468C1.12284 11.8775 1.57125 12.0632 2.0388 12.0632C2.50636 12.0632 2.95477 11.8775 3.28538 11.5469L10.0983 4.76712C11.5528 3.31973 10.7654 1.25534 10.1459 0.365479Z"
                        fill="#FFBB13" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0466 8.45657C22.7153 8.12654 22.2669 7.941 21.7993 7.94043C21.3317 7.93987 20.8828 8.12433 20.5507 8.45355L13.7384 15.233C12.2839 16.6801 13.0713 18.7448 13.691 19.6341L13.9455 20.0001L23.0439 10.9462C23.2077 10.783 23.3377 10.5891 23.4265 10.3756C23.5154 10.1621 23.5612 9.93317 23.5615 9.70193C23.5617 9.4707 23.5164 9.24168 23.428 9.02799C23.3397 8.81429 23.2101 8.62012 23.0466 8.45657Z"
                        fill="#FFBB13" />
                        <path fill-rule="evenodd" clip-rule="evenodd" className="svg-text" d="M38.8038 13.9726H40.8096L37.2057 4.27697H35.3531L31.7603 13.9726H33.766L34.4257 12.0337H38.1441L38.8038 13.9726ZM34.9789 10.3942L36.2715 6.5893H36.2849L37.5844 10.3942H34.9789ZM45.9471 7.1956C45.5412 7.19162 45.1393 7.27666 44.7697 7.44474C44.4002 7.61283 44.072 7.85987 43.8082 8.16848H43.7882V7.30903H42.0022V13.9726H43.7882V10.6208C43.7882 9.43478 44.3945 8.80163 45.3008 8.80163C46.1271 8.80163 46.5803 9.19478 46.5803 10.4677V13.9794H48.366V10.0211C48.366 7.96876 47.3731 7.1956 45.9471 7.1956ZM54.0383 7.30876L52.5123 11.4337H52.4934L50.8611 7.30876H48.9951L51.6605 13.5594L50.4745 16.6712H52.3003L55.8907 7.30876H54.0381H54.0383ZM57.2307 13.9726H59.1235V10.6542H60.6362C62.7685 10.6542 64.1879 9.63451 64.1879 7.50875C64.1879 5.64958 63.1685 4.27588 60.8161 4.27588H57.2307V13.9726ZM59.1233 8.95506V5.983H60.4759C61.5953 5.983 62.2019 6.5693 62.2019 7.46876C62.2019 8.36191 61.6022 8.95478 60.3959 8.95478H59.1235L59.1233 8.95506ZM70.3153 7.30876V8.06191H70.2879C70.0446 7.78123 69.7422 7.55796 69.4023 7.40817C69.0624 7.25837 68.6935 7.18578 68.3222 7.1956C66.5364 7.1956 65.1835 8.63478 65.1835 10.6605C65.1835 12.7197 66.5296 14.0852 68.3756 14.0852C68.7569 14.1011 69.1364 14.026 69.4829 13.8661C69.8294 13.7062 70.1328 13.466 70.3679 13.1655H70.4014V13.9726H72.1V7.30876H70.3153ZM68.7027 12.4868C67.703 12.4868 66.9967 11.7471 66.9967 10.6677C66.9967 9.52821 67.7498 8.80163 68.7093 8.80163C69.6756 8.80163 70.3888 9.60136 70.3888 10.6677C70.3888 11.7605 69.6288 12.4868 68.7027 12.4868ZM78.1479 7.30876L76.6219 11.4337H76.603L74.9707 7.30876H73.1046L75.7701 13.5594L74.5841 16.6712H76.4098L80.0003 7.30876H78.1477H78.1479Z"
                        fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1104_6671">
                          <rect width="79.7243" height="20" fill="white" transform="translate(0.275879)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="payment-choose-el__dropdown">
                    <div className="payment-choose-el__text text-cat">Выбирая данную платёжную систему, вы соглашаетесь с её политикой <a href="#">обработки персональных данных</a>.</div>
                  </div>
                </div>
              </div>
              <div className="payment-choose__el">
                <div className="payment-choose-el">
                  <div className="payment-choose-el__top">
                    <div className="payment-choose-el__title">Лава</div>
                    <svg className="payment-choose-el__img" width="59" height="20" viewBox="0 0 59 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1104_6679)">
                        <path d="M20.7397 10C20.7397 4.47715 16.2626 0 10.7397 0C5.2169 0 0.739746 4.47715 0.739746 10C0.739746 15.5228 5.2169 20 10.7397 20C16.2626 20 20.7397 15.5228 20.7397 10Z" fill="#F65648" />
                        <path d="M8.20906 8.60304C8.24861 8.56813 8.26843 8.55067 8.27152 8.53363C8.27425 8.51876 8.27011 8.50349 8.26025 8.49204C8.24893 8.4789 8.22347 8.47394 8.17252 8.46399C7.57847 8.3484 6.96347 8.28058 6.42397 8.27494C6.39806 8.27467 6.38515 8.27454 6.37511 8.26967C6.36615 8.2654 6.35888 8.25867 6.35384 8.25017C6.34811 8.24058 6.34688 8.22781 6.34438 8.20231L6.14438 6.1454C6.14188 6.1199 6.14066 6.10713 6.14447 6.09654C6.14784 6.08722 6.15393 6.07908 6.16188 6.07322C6.17097 6.06654 6.18352 6.06413 6.20866 6.05926C9.22216 5.47622 12.2216 5.44631 15.2802 6.0604C15.3053 6.0654 15.3178 6.0679 15.3268 6.07463C15.3347 6.08054 15.3408 6.08867 15.3441 6.09799C15.3478 6.10858 15.3466 6.12131 15.344 6.14672L15.1365 8.20258C15.1339 8.22804 15.1326 8.24072 15.1269 8.25031C15.1218 8.25876 15.1146 8.26544 15.1057 8.26972C15.0957 8.27453 15.0827 8.27467 15.0569 8.27494C14.5174 8.28054 13.9023 8.34835 13.3081 8.46399C13.2572 8.47394 13.2317 8.4789 13.2204 8.49204C13.2106 8.50349 13.2064 8.51876 13.2091 8.53363C13.2122 8.55067 13.232 8.56813 13.2716 8.60304C14.7032 9.86504 15.7156 11.5278 15.7383 13.8637C15.7386 13.8917 15.7387 13.9058 15.7333 13.9166C15.7286 13.926 15.7208 13.9338 15.7115 13.9387C15.7007 13.9442 15.6867 13.9442 15.6587 13.9442H13.5965C13.5685 13.9442 13.5545 13.9442 13.5439 13.9388C13.5344 13.934 13.5269 13.9267 13.5221 13.9173C13.5166 13.9068 13.5163 13.8924 13.516 13.8637C13.4892 11.9139 12.4879 10.6141 10.7839 9.50144C10.7682 9.49117 10.7603 9.48604 10.7518 9.48399C10.7443 9.48226 10.7363 9.48226 10.7288 9.48399C10.7203 9.48604 10.7124 9.49117 10.6967 9.50144C8.99275 10.6141 7.99143 11.9139 7.9647 13.8637C7.96429 13.8924 7.96411 13.9068 7.95856 13.9173C7.9537 13.9267 7.9462 13.934 7.93679 13.9388C7.92616 13.9442 7.91216 13.9442 7.88411 13.9442H5.82193C5.79393 13.9442 5.77993 13.9442 5.76916 13.9387C5.75979 13.9338 5.75202 13.926 5.74729 13.9166C5.74188 13.9058 5.74202 13.8917 5.74229 13.8637C5.76502 11.5278 6.77752 9.86504 8.20906 8.60304Z"
                        fill="white" />
                        <path className="svg-text" d="M33.6453 14.091H27.0234V6.45459H29.3034V11.9091H33.6453V14.091Z" fill="white" />
                        <path className="svg-text" d="M42.6684 14.091H40.2029L39.712 12.7382H36.7557L36.2647 14.091H33.8647L37.0938 6.45459H39.4284L42.6684 14.091ZM37.3884 10.84H39.0793L38.2284 8.63641L37.3884 10.84Z" fill="white" />
                        <path className="svg-text" d="M46.4658 11.5928L48.3422 6.45459H50.7749L47.644 14.091H45.2221L42.1021 6.45459H44.5893L46.4658 11.5928Z" fill="white" />
                        <path className="svg-text" d="M59.0004 14.091H56.535L56.044 12.7382H53.0877L52.5968 14.091H50.1968L53.4259 6.45459H55.7604L59.0004 14.091ZM53.7204 10.84H55.4113L54.5604 8.63641L53.7204 10.84Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1104_6679">
                          <rect width="58.2605" height="20" fill="white" transform="translate(0.739746)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="payment-choose-el__dropdown">
                    <div className="payment-choose-el__text text-cat">Выбирая данную платёжную систему, вы соглашаетесь с её политикой <a href="#">обработки персональных данных</a>.</div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-def btn-def_full modal-content__btn"><span>Оплатить</span>
            </button>
          </div>
        </div>
      </div>
      <div className="modal-def__overlay overlay"></div>
    </div>
  </div> */}
    </>
  )
}
