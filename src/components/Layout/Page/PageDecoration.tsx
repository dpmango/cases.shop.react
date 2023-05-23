import { ScrollRestoration, useLocation } from 'react-router-dom'

interface IPageDecorationProps {
  sectionClassName?: string
  children: React.ReactElement | React.ReactElement[]
}

export const PageDecoration: React.FC<IPageDecorationProps> = ({ sectionClassName, children }) => {
  const { id: shopId, settings } = useAppSelector((state) => state.sessionState)

  const location = useLocation()
  const page = location.pathname.split('/')[1]

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
            className: 'fire _faq-left _bottom_left',
          },
          // {
          //   image: settings.faq_right_footer_image,
          //   className: 'fire _faq-right _bottom_right',
          // },
        ]
        break
      case 'product':
        images = [
          {
            image: settings.product_footer_image,
            className: 'fire _product _bottom_right',
          },
        ]
        break
      case 'reviews':
        images = [
          {
            image: settings.reviews_footer_image,
            className: 'fire _bottom_left',
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
      style={{
        background: settings.background_site_color,
      }}
    >
      {decorImages.length > 0 &&
        decorImages.map((img, idx) => (
          <img key={idx} src={img.image} alt="decor" className={img.className} />
        ))}

      <section className={sectionClassName}>{children}</section>

      {/* <ScrollRestoration /> */}
    </main>
  )
}

export default PageDecoration
