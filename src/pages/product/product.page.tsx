import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { PhotoView } from 'react-photo-view'
import remarkGfm from 'remark-gfm'

import { getProducts } from '@/core/api/product.api'
import { getReviews } from '@/core/api/review.api'

export const Page: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const {
    id: shopId,
    settings,
    user,
    items,
    reviews,
  } = useAppSelector((state) => state.sessionState)
  const dispatch = useAppDispatch()

  // const params = useParams()
  const params = ''

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

  useEffect(() => {
    if (items === null && shopId) {
      const fetchData = async () => {
        const { data } = await getProducts({ shopId })
        if (data) {
          dispatch(updateAnyState({ key: 'items', data }))
        }
      }
      fetchData()
    }
  }, [shopId])

  const generatePaymentLink = async () => {
    const { data } = await getPayment({ amount: +selectedItem.price - +user?.balance })

    if (data) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style = 'display: none'
      a.href = data.payment_link
      a.target = '_blank'
      a.click()
      document.body.removeChild(a)
    }
  }

  useEffect(() => {
    if (items !== null) {
      const allItems = Object.values(items).flat()

      const item = allItems.find((el) => el.id === params.id)

      window.item_id = params.id

      setSelectedItem(item)

      if (!item) window.location.href = '/'
    }
  }, [items, params]) // route id change

  return selectedItem ? (
    <div
      style={{
        background: settings.background_site_color ? settings.background_site_color : '#000000',
      }}
    >
      <img src={settings.item_right_footer_image} alt="" className="fire55" />
      <section className="item" id="item">
        <div className="container">
          <h1>{selectedItem.name}</h1>
          <div className="item__box d-flex">
            <div className="item__left">
              <div className="item__slider">
                <PhotoView src={selectedItem.images[2]}>
                  <span className="item__pic" data-fancybox="gallery">
                    <img src={selectedItem.images[2]} alt="" />
                  </span>
                </PhotoView>
              </div>
            </div>
            <div className="item__content">
              <div className="item__el">
                <p className="item__name">Описание:</p>
                <p className="item__text markdown">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedItem.description}
                  </ReactMarkdown>
                </p>
              </div>
              <p className="item__sum">
                {selectedItem.salePrice} Р{' '}
                {selectedItem.price !== selectedItem.salePrice ? (
                  <sup>{selectedItem.price} P</sup>
                ) : (
                  ''
                )}
              </p>
              <a
                onClick={() => {
                  if (user) {
                    if (user.balance >= +selectedItem.price) {
                      window.openModal('a3')
                    } else generatePaymentLink()
                  } else {
                    window.openModal('a1')
                  }
                }}
                className={`item__btn bttn`}
              >
                КУПИТЬ
              </a>
            </div>
          </div>
          <div className="item-rev">
            <p className="item-rev__title">Отзывы</p>
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
            <p className="item-rev__info">Отзывы загружаются автоматически из телеграм-канала</p>
          </div>
        </div>
      </section>
    </div>
  ) : (
    <></>
  )
}
