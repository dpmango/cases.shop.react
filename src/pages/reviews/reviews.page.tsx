import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getReviews } from '@/core/api/review.api'

export const Page = () => {
  const { id: shopId, settings, reviews } = useAppSelector((state) => state.sessionState)

  const dispatch = useDispatch()

  useEffect(() => {
    if (reviews === null && shopId) {
      const fetchData = async () => {
        const { data } = await getReviews({ shopId })
        if (data) {
          dispatch(updateAnyState({ key: 'reviews', data }))
        }
      }
      fetchData()
    }
  }, [shopId])

  const loadMore = async () => {
    const { data } = await getReviews({ shopId, offset: reviews?.length })

    if (data) {
      const mergedData = [...reviews, ...data]
      dispatch(updateAnyState({ key: 'reviews', data: mergedData }))

      if (data.length < 10) document.querySelector(`.rev__btn .bttn`).style.display = `none`
    }
  }

  return (
    <div
      style={{
        background: settings.background_site_color ? settings.background_site_color : '#000000',
      }}
    >
      <img src={settings.reviews_footer_image} alt="" className="fire" />
      <section className="rev" id="rev">
        <div className="container">
          <h1>ОТЗЫВЫ</h1>
          <div className="rev__wrap">
            <div className="rev__box">
              {reviews &&
                reviews.map((el, key) => (
                  <div key={key} className="rev__item">
                    <div className="rev__top d-flex">
                      <img src={el.photo_url} alt="" className="rev__ava" />
                      <div className="rev__content">
                        <p className="rev__name">{el.nick}</p>
                        <p className="rev__data">
                          {new Date(el.date).toLocaleDateString('ru', {
                            year: `numeric`,
                            month: `long`,
                            day: `numeric`,
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="rev__text">{el.text}</p>
                  </div>
                ))}
            </div>
            <a onClick={() => loadMore()} className="rev__btn bttn">
              Загрузить больше
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
