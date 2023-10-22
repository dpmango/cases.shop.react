import { CaretSvg } from '@c/Ui/Icons'
import { animated, useSpring } from '@react-spring/web'
import cns from 'classnames'
import { useEffect, useMemo, useRef, useState } from 'react'

import { useClickOutside } from '@/core/hooks'

// import './select.sass';

interface ISelectProps {
  className?: string
  value: string
  options: ISelectOption[]
  disabled?: boolean
  placeholder?: any
  position?: 'top' | 'bottom'
  onSelect?: (x: ISelectOption) => void
}

export interface ISelectOption {
  value: any
  label: string
  disabled?: boolean
  modifier?: string
}

export const Select: React.FC<ISelectProps> = ({
  className,
  value,
  options,
  disabled,
  placeholder,
  position = 'bottom',
  onSelect,
}) => {
  const [opened, setOpened] = useState<boolean>(false)
  const [springs, api] = useSpring(() => ({
    from: { height: 0, opacity: 0 },
  }))

  const wrapperRef = useRef(null)

  useClickOutside(wrapperRef, () => setOpened(false))

  const currentTitle = useMemo(() => {
    return options?.find((x) => x.value === value)?.label || placeholder
  }, [value, options, placeholder])

  const handleSelect = (option: ISelectOption) => {
    onSelect && onSelect(option)
    setOpened(false)
  }

  // spring
  useEffect(() => {
    const closedStyle = {
      height: 0,
      opacity: 0,
    }
    const openedStyle = {
      height: 150,
      opacity: 1,
    }
    if (opened) {
      api.start({
        from: { ...closedStyle },
        to: { ...openedStyle },
      })
    } else {
      api.start({
        from: { ...openedStyle },
        to: { ...closedStyle },
      })
    }
  }, [opened])

  return (
    <div
      className={cns(
        'block-sidebar__select block-select',
        disabled && 'select--disabled',
        `block-select--${position}`,
        className,
      )}
      ref={wrapperRef}
    >
      {/* <input className="block-select__inp" type="hidden" /> */}
      <div
        className={cns('block-select__top', opened && '_active')}
        onClick={() => setOpened(!opened)}
      >
        <div className="block-select__text block-select__val">{currentTitle}</div>
        <CaretSvg />
      </div>
      <animated.ul
        className={cns('block-select__dropdown', opened && '_active')}
        style={{
          ...springs,
        }}
      >
        {options?.length ? (
          options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className={cns(
                'block-select__dropdown-el block-select__text',
                option.disabled && '_disabled',
                option.label === currentTitle && 'active',
                option.modifier && `_${option.modifier}`,
              )}
            >
              {option.label}
            </div>
          ))
        ) : (
          <span>{'Пусто'}</span>
        )}
      </animated.ul>
    </div>
  )
}
