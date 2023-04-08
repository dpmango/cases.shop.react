import { LegacyRef } from 'react'

export interface ICommonInterfaceProps {
  name?: string
  className?: string
  placeholder?: string
  label?: string
  helper?: string
  error?: string | boolean
  showError?: boolean
}

export interface IUiInput extends ICommonInterfaceProps {
  value: string | number
  onChange: (x: string | number, e?: InputEvent) => void
  type?: 'text' | 'number' | 'textarea' | 'tel' | 'email'
  inputRef?: LegacyRef<HTMLInputElement> | undefined
  variant?: 'default' | 'small'
  allowClear?: boolean
  min?: number
  max?: number
}

export interface IUiButton extends ICommonInterfaceProps {
  as?: string
  href?: string
  children: any | React.ReactElement | React.ReactElement[]
  theme?: 'primary' | 'secondary'
  size?: 'default' | 'small'
  type?: string
  block?: boolean
  loading?: boolean
  iconRight?: string
  iconLeft?: string
  rel?: string
  target?: string
  onClick?: () => void
}
