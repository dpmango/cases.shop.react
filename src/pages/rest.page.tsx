/* eslint-disable react/no-unknown-property */
import { useNavigate, useParams } from 'react-router'

import { CustomPage } from '@/components/Content'
import { PageDecoration } from '@/components/Layout'
import { UiLoader } from '@/components/Ui'

export const documentProps = {
  title: 'Текстовая',
  description: 'Описание страницы',
}

export const Page: React.FC = () => {
  const [content, setContent] = useState<string>('')

  const { id: shopId } = useAppSelector((state) => state.sessionState)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const getPage = async () => {
      const { data } = await getStaticPage({
        shopId,
        id: params['*'] || '',
      })

      if (data) {
        setContent(data)
      } else {
        navigate('/', { replace: true })
      }
    }

    getPage()
  }, [params])

  return (
    <PageDecoration documentProps={documentProps} sectionClassName={'custom-page'}>
      <UiLoader theme="page" loading={!content} />

      <div className="container">
        <CustomPage content={content} />
      </div>
    </PageDecoration>
  )
}
