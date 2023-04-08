import './_input.scss'

import cns from 'classnames'
import { nanoid } from 'nanoid'
import React, { memo, useCallback, useMemo, useState } from 'react'

import { SvgIcon } from '@/components/Ui'
import { useEventListener } from '@/core/hooks/useEventListener'
import { IUiInput } from '@/core/interface/Ui'

const Input: React.FC<IUiInput> = ({
  className,
  label,
  inputRef,
  variant = 'default',
  allowClear,
  value,
  onChange,
  helper,
  error,
  showError = true,
  ...props
}) => {
  const [focused, setFocused] = useState(false)

  const id = useMemo(() => {
    return nanoid()
  }, [])

  const onInputChange = useCallback(
    (e: InputEvent) => {
      if (onChange) {
        const target = e.target as HTMLInputElement
        onChange(target.value, e)
      }
    },
    [onChange],
  )

  const onCLearInput = useCallback(() => {
    if (onChange) {
      onChange('')
    }
  }, [onChange])

  const clearIcon = useMemo(() => {
    if (allowClear && value) {
      return (
        <button type="button" onClick={onCLearInput} className={'input_clear'} title="Очистить">
          <SvgIcon name="close" />
        </button>
      )
    }

    return null
  }, [value, allowClear])

  const isFocusedOrNotBlank = useMemo(() => {
    if (value && value.toString().trim().length > 0) {
      return true
    }

    return focused
  }, [value, focused])

  const handleAutocompleate = useCallback(
    (e: InputEvent) => {
      const target = e.target as HTMLInputElement

      // @ts-ignore
      if (parseInt(target.getAttribute('id')) === id) {
        if (target.hasAttribute('autocompleted')) {
          setFocused(true)
        }
      }
    },
    [id],
  )

  const inputProps = {
    id,
    ref: inputRef,
    className: cns('input_input', allowClear && '_withClear', error && '_withError'),
    value,
    onChange: onInputChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    ...props,
  }

  useEventListener('onautocomplete', handleAutocompleate)

  return (
    <div
      className={cns(
        'input',
        variant && `_${variant}`,
        isFocusedOrNotBlank && '_focused',
        className,
      )}
    >
      {label && (
        <label className={'ui-label'} htmlFor={id} dangerouslySetInnerHTML={{ __html: label }} />
      )}

      <div className={'input_wrapper'}>
        {/* @ts-ignore */}
        <input {...inputProps} />

        {clearIcon}

        {error && showError && <div className={'ui-error'}>{error}</div>}
        {helper && <p className={'ui-helper'}>{helper}</p>}
      </div>
    </div>
  )
}
export default memo(Input)
