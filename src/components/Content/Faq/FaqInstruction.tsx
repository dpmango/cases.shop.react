/* eslint-disable react/no-unknown-property */
import { FreeMode, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const FaqInstruction = () => {
  const slides = [
    {
      img: '/img/faq/faq1.svg',
      text: 'Авторизуйтесь под своим игровым аккаунтом на сайте EpicGames',
    },
    {
      img: '/img/faq/faq2.svg',
      text: 'Привяжите учётную запись Xbox <br/>(Консоль не требуется)',
    },
    {
      img: '/img/faq/faq3.svg',
      text: 'Предоставьте доступ к учетной записи XBOX',
    },
    {
      img: '/img/faq/faq4.svg',
      text: 'Дождитесь покупки со страны, где <br/>донат разрешён',
    },
    {
      img: '/img/faq/faq5.svg',
      text: 'Похвастайтесь друзьям новым <br/>скином',
    },
  ]
  return (
    <div className="faq__guide">
      <Swiper
        modules={[Mousewheel, FreeMode]}
        slidesPerView={'auto'}
        freeMode={{ enabled: true, sticky: true }}
        mousewheel={{
          forceToAxis: true,
        }}
        spaceBetween={5}
      >
        {slides.map((x, idx) => (
          <SwiperSlide key={idx}>
            <div className="faq__slide">
              <img src={x.img} alt="" className="faq__image" />
              <p className="faq__text p-small" dangerouslySetInnerHTML={{ __html: x.text }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FaqInstruction
