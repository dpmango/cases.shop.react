import { SecurePasswordIcon } from '@/components/Ui'

export const OrderPasswordNote = () => {
  return (
    <div className="block-info__block">
      <div className="wrap-info">
        <div className="wrap-info__el info-message">
          <div className="info-message__content">
            <div className="info-message__icon">
              <SecurePasswordIcon />
            </div>
            <div className="info-message__body">
              <div className="info-message__title title-def title-def_small">
                Ваши данные надёжно защищены
              </div>
              <div className="info-message__text text-cat">
                Мы не передаём ваши данные третьим лицам и не сохраняем их. Наш менеджер зайдёт
                в ваш аккаунт один раз чтобы совершить покупку.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
