import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router'
import remarkGfm from 'remark-gfm'

export const Page: React.FC = () => {
  const { id: shopId } = useAppSelector((state) => state.sessionState)

  const params = useParams()

  const [content, setContent] = useState<string>('')

  const getPage = async () => {
    const { data } = await api(`pages/${shopId}${params['*']}`, {})

    if (data) {
      setContent(data.data.content)
    } else {
      window.location.href = '/'
    }
  }

  useEffect(() => {
    getPage()
  }, [])

  return (
    <div className={'custom-page'}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}
