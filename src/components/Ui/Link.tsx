import { Link } from 'react-router-dom'

import { usePageContext } from '@/components/Layout'

function LinkWrapper(props: { href?: string; className?: string; children: ReactSlot }) {
  const pageContext = usePageContext()
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active']
    .filter(Boolean)
    .join(' ')

  return <Link {...props} to={props.href || '#'} className={className} />
}

export default LinkWrapper
