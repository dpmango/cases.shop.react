import React from 'react'
import Slider from 'react-slick'

const PageSlider = () => {
  // const { slider: sliderData } = useAppSelector((state) => state.sessionState)

  const sliderData = [
    {
      id: '1',
      link_url: '/',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
    {
      id: '1',
      link_url: '/',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
    {
      id: '1',
      link_url: '/',
      photo_url: 'https://cases.kateweb.ru/img/item1.png',
    },
  ]
  return (
    <>
      {sliderData && sliderData.length && (
        <>
          <p className="main__title">ЛУЧШИЕ ПРЕДЛОЖЕНИЯ</p>
          <Slider
            dots={true}
            infinite={true}
            autoplay={true}
            speed={500}
            arrows={true}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {sliderData.map((item, idx) => (
              <a key={item.id || idx} href={item.link_url} className="main__card">
                <img
                  style={{
                    maxHeight: 650,
                    objectFit: 'contain',
                  }}
                  src={item.photo_url}
                  alt={item.id}
                />
              </a>
            ))}
          </Slider>
        </>
      )}
    </>
  )
}

export default PageSlider
