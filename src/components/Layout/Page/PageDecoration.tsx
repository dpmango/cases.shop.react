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
    switch (page) {
      case '':
        return [
          {
            image: settings.footer_image,
            className: 'fire _bottom',
          },
        ]
      case 'faq':
        return [
          {
            image: settings.faq_left_footer_image,
            className: 'fire fire2 _bottom_left',
          },
          {
            image: settings.faq_right_footer_image,
            className: 'fire fire3 _bottom_right',
          },
        ]
      case 'product':
        return [
          {
            image: settings.item_right_footer_image,
            className: 'fire fire55 _bottom_right',
          },
        ]
      case 'reviews':
        return [
          {
            image: settings.reviews_footer_image,
            className: 'fire _bottom_left',
          },
        ]

      default:
        return []
    }
  }, [page])

  return (
    <main data-shop={shopId}>
      {decorImages.length &&
        decorImages.map((img, idx) => (
          <img key={idx} src={img.image} alt="decor" className={img.className} />
        ))}

      <section
        className={sectionClassName}
        style={{
          background: settings.background_site_color,
        }}
      >
        {children}
      </section>

      {/* <ScrollRestoration /> */}
    </main>
  )
}

export default PageDecoration
