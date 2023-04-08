import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router'
import remarkGfm from 'remark-gfm'

export const documentProps = {
  title: 'Текстовая1',
  description: 'Описание страницы',
}

export const Page: React.FC = () => {
  const [content, setContent] = useState<string>('')

  const { id: shopId } = useAppSelector((state) => state.sessionState)

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const getPage = async () => {
      const { data } = await api(`pages/${shopId}${params['*']}`, {})

      if (data) {
        setContent(data.data.content)
      } else {
        navigate('/', { replace: true })
      }
    }

    getPage()
  }, [params])

  return (
    <div className={'custom-page'}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}