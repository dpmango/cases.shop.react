const clearHex = (hex: string) => {
  if (hex.length === 4) {
    const [hash, r, g, b] = hex
    return `#${r}${r}${g}${g}${b}${b}`
  }
  return hex
}

export function hexToRgb(hex: string) {
  const clearedHex = clearHex(hex)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(clearedHex)
  let rgbString = { r: 0, g: 0, b: 0 }

  if (result) {
    rgbString = {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
  }

  return result ? `${rgbString.r}, ${rgbString.g}, ${rgbString.b}` : null
}
