import './_button.scss'

import cns from 'classnames'
import { memo } from 'react'

import { SvgIcon, UiLoader } from '@/components/Ui'
import { IUiButton } from '~/src/core/interface/Ui'

const Button = ({
  as = 'button',
  className,
  theme = 'primary',
  size = 'default',
  type = 'button',
  block,
  loading,
  iconLeft,
  iconRight,
  disabled,
  children,
  ...props
}: IUiButton) => {
  const classStyle = cns(
    'button',
    theme && `_${theme}`,
    size && `_${size}`,
    block && '_block',
    (iconLeft || iconRight) && '_iconed',
    loading && '_loading',
    iconLeft && '_iconLeft',
    iconRight && '_iconRight',
    className,
  )

  const ButtonComponentName = `${as}` as any

  return (
    <ButtonComponentName
      className={classStyle}
      type={as !== 'span' ? type : ''}
      disabled={disabled}
      {...props}
    >
      {iconLeft && <SvgIcon name={iconLeft} />}

      {children}

      {loading && (
        <span className="button__loader">
          <SvgIcon name="loader" />
        </span>
      )}

      {iconRight && <SvgIcon name={iconRight} />}
    </ButtonComponentName>
  )
}

export default memo(Button)
