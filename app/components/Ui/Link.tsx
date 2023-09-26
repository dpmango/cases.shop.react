import { Link } from 'react-router-dom'

import { usePageContext } from '@/components/Layout'

interface ILinkWrapper {
  href?: string
  className?: string
  children: ReactSlot
  style?: any
  title?: any
}

function LinkWrapper(props: ILinkWrapper) {
  const pageContext = usePageContext()
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active']
    .filter(Boolean)
    .join(' ')

  return <Link {...props} to={props.href || '#'} className={className} />
}

export default LinkWrapper
