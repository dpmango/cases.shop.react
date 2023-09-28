import cns from 'classnames'

// import { ScrollRestoration, useLocation } from 'react-router-dom'

interface IPageDecorationProps {
  sectionClassName?: string
  documentProps?: { title?: string; description?: string }
  children: React.ReactElement | React.ReactElement[]
}

export const PageDecoration: React.FC<IPageDecorationProps> = ({
  sectionClassName,
  documentProps,
  children,
}) => {
  const { id: shopId, settings } = useAppSelector((state) => state.sessionState)

  // const location = useLocation()
  // const page = location.pathname.split('/')[1]
  const page = '' as any
  const decorImages = useMemo(() => {
    let images = []

    switch (page) {
      case '':
        images = [
          {
            image: settings.footer_image,
            className: 'fire _bottom',
          },
        ]
        break
      case 'faq':
        images = [
          {
            image: settings.faq_left_footer_image,
            className: 'fire _bottom',
          },
        ]
        break
      case 'product':
        images = [
          {
            image: settings.product_footer_image,
            className: 'fire _product _bottom',
          },
        ]
        break
      case 'reviews':
        images = [
          {
            image: settings.reviews_footer_image,
            className: 'fire _bottom',
          },
        ]
        break

      default:
        images = [
          {
            image: settings.footer_image,
            className: 'fire _bottom',
          },
        ]
        break
    }

    return images.filter((x) => x.image)
  }, [page, settings])

  return (
    <main
      data-shop={shopId}
      className="main-wrapper"
      style={{
        background: `${settings.background_site_color} url(${settings.background_main}) repeat center`,
      }}
    >
      {/* <Helmet>
        {documentProps?.title && <title>{documentProps?.title}</title>}
        {documentProps?.description && (
          <meta name="description" content={documentProps?.description} />
        )}
      </Helmet> */}

      {decorImages.length > 0 &&
        decorImages.map((img, idx) => (
          <div key={idx} className={cns('fire', img.className)}>
            <img src={img.image} alt="decor" />{' '}
          </div>
        ))}

      <section className={sectionClassName}>{children}</section>

      {/* <ScrollRestoration /> */}
    </main>
  )
}

export default PageDecoration
