// 1000.00 -> 1 000.00
export const formatPrice = (num: number, digits = 0, showRub = true) => {
  const spacesRegex = /\B(?=(\d{3})+(?!\d))/g
  let value = ''
  if (num === null || num === undefined) {
    return '0.00'
  }

  let rubSign = showRub ? '₽' : ''

  if (typeof num === 'number') {
    value = num.toFixed(digits).replace(spacesRegex, ' ')
  } else if (typeof num === 'string') {
    value = parseFloat(num).toFixed(digits).replace(spacesRegex, ' ')
  }

  return `${value} ${rubSign}`
}

export const pad = (v: number | string, size = 2) => {
  let s = String(v)
  while (s.length < size) {
    s = '0' + s
  }
  return s
}

export const minutesToTimestamp = (min = 0) => {
  const hours = Math.floor(+min / 60)
  const hh = hours || '00'
  const mm = `${+min - hours * 60}`

  return `${pad(hh)}:${pad(mm)}`
}

export const secondsToStamp = (sec: number) => {
  const minutes = pad(Math.floor(sec / 60), 1)
  const seconds = pad(sec % 60)

  return `${minutes}:${seconds}`
}

export const Plurize = (number: number, one: string, two: string, five: string) => {
  let n = Math.abs(number)
  n %= 100
  if (n >= 5 && n <= 20) {
    return five
  }
  n %= 10
  if (n === 1) {
    return one
  }
  if (n >= 2 && n <= 4) {
    return two
  }
  return five
}
