import { DepositModal } from '../Order'
import { SupportModal } from '../Support'

const SharedModals = () => {
  return (
    <>
      <div className="modal-mob" id="modal-games">
        <div className="modal-mob__content">
          <div className="modal-mob__title title-mob">
            Игры, предметы
            <br />и подписки
          </div>
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
          </div>
        </div>
      </div>

      <SupportModal />
      <DepositModal />
    </>
  )
}

export default SharedModals
