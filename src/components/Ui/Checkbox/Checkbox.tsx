import './_checkbox.scss'

import cns from 'classnames'
import { memo, useCallback, useMemo } from 'react'

import { SvgIcon } from '@/components/Ui'

interface ICheckboxProps {
  className?: string
  isChecked: boolean
  variant: 'default' | 'muted'
  error?: boolean | string
  onChange: () => void
  children: React.ReactElement
}

const Checkbox = ({
  className,
  isChecked = false,
  variant = 'default',
  error,
  onChange,
  children,
  ...props
}: ICheckboxProps) => {
  const handleChange = useCallback(
    (e: any) => {
      if (onChange) {
        onChange()
      }
    },
    [onChange],
  )

  return (
    <div className={cns('checkbox', variant && `_${variant}`, className, error && '_withError')}>
      <input type="checkbox" className={cns('checkbox_input')} checked={isChecked} {...props} />

      <label className={'checkbox_wrapper'} onClick={handleChange}>
        <div className={cns('checkbox_box', isChecked && '_isChecked')}>
          <SvgIcon name="checkmark" />
        </div>

        <div className={'checkbox_label'}>{children}</div>
      </label>
    </div>
  )
}

export default memo(Checkbox)
