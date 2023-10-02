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
