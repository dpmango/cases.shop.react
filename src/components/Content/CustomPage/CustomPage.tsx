import './_custom-page.scss'

import { SvgIcon, UiLink } from '@/components/Ui'

const CustomPage = ({ content }: { content: string }) => {
  return (
    <>
      <UiLink href={'/'} className="heading__back custom-page__back">
        <SvgIcon name="caret-left" />
        <span className="h5-title">На главную</span>
      </UiLink>
      <div className="custom-page__body wysiwyg" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default CustomPage
