import { usePageContext } from '@c/Layout'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Page: React.FC = () => {
  const { id: shopId } = useAppSelector((state) => state.sessionState)

  const page = usePageContext()
  const params = page?.routeParams

  const [content, setContent] = useState(null)

  const getPage = async () => {
    const { data } = await api(`pages/${shopId}${params}`, {})

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
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> */}
    </div>
  )
}
