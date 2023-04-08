import './_heading.scss'

import cns from 'classnames'
import React from 'react'

import { SvgIcon, UiLink } from '@/components/Ui'

export interface IHeadingProps {
  className: string
  children: ReactSlot
  useBack?: boolean
  backRoute?: string
  backTitle?: string
}

const AtomHeading: React.FC<IHeadingProps> = ({
  className,
  children,
  backRoute = '/',
  backTitle = 'На главную',
  useBack = true,
}) => {
  return (
    <div className={cns('heading', className)}>
      {useBack && (
        <UiLink href={backRoute} className="heading__back">
          <SvgIcon name="caret-left" />
          <span className="h5-title">{backTitle}</span>
        </UiLink>
      )}

      <div className="heading__title">{children}</div>
    </div>
  )
}

export default AtomHeading
