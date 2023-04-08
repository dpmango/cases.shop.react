import './_product.scss'

import { ProductReviews } from '@c/Product'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { PhotoView } from 'react-photo-view'
import { useParams } from 'react-router'
import remarkGfm from 'remark-gfm'

import { IProductDto } from '~/src/core/interface/Product'

interface IProductPageProps {
  product: IProductDto
}

const ProductPage: React.FC<IProductPageProps> = ({ product }) => {
  const { id: shopId, user } = useAppSelector((state) => state.sessionState)
  const { items, reviews } = useAppSelector((state) => state.productState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (reviews === null && shopId) {
      dispatch(getReviewsThunk({ shopId }))
    }
    if (items === null && shopId) {
      dispatch(getProductThunk({ shopId }))
    }
  }, [shopId])

  const generatePaymentLink = async () => {
    const { data } = await getPayment({ amount: +product.price - +(user?.balance || 0) })

    if (data) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      // @ts-ignore
      a.style = 'display: none'
      a.href = data.payment_link
      a.target = '_blank'
      a.click()
      document.body.removeChild(a)
    }
  }

  return (
    <div className="container">
      <h1 className="h1-title product__title">{product.name}</h1>
      <div className="product__box ">
        <div className="product__left">
          <div className="product__slider">
            <PhotoView src={product.images[2]}>
              <span className="product__pic" data-fancybox="gallery">
                <img src={product.images[2]} alt="" />
              </span>
            </PhotoView>
          </div>
        </div>
        <div className="product__content">
          <div className="product__el">
            <p className="product__name">Описание:</p>
            <p className="product__text markdown">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{product.description}</ReactMarkdown>
            </p>
          </div>
          <p className="product__sum">
            {product.salePrice} Р
            {product.price !== product.salePrice ? <sup>{product.price} P</sup> : ''}
          </p>
          <a
            onClick={() => {
              if (user) {
                if (user.balance >= +product.price) {
                  dispatch(setModal({ name: 'order' }))
                } else generatePaymentLink()
              } else {
                dispatch(setModal({ name: 'auth' }))
              }
            }}
            className={`product__btn button`}
          >
            КУПИТЬ
          </a>
        </div>
      </div>

      <ProductReviews />
    </div>
  )
}

export default ProductPage
