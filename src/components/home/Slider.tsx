import React from 'react'
import Slider from 'react-slick'
import { useRecoilValue } from 'recoil'

import { getShopSlider } from '@/core/storage/selectors/main'

const SliderPage = () => {
  const sliderData = useRecoilValue(getShopSlider)

  return (
    <>
      {sliderData && sliderData.length ? (
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
            {sliderData.map((item, index) => (
              <a key={index} href={item.link_url} className="main__card">
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
      ) : (
        ''
      )}
    </>
  )
}

export default SliderPage
