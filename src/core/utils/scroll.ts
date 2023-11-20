export const scrollToElement = (id: string, offsetOpt = true) => {
  const element = document.getElementById(id)
  if (!element) return

  let headerOffset = 0
  if (offsetOpt === true) {
    // применяется для десктопа
    const el = document.querySelector('.top-menu') as HTMLElement
    headerOffset = el?.offsetHeight + 16
  } else if (typeof offsetOpt === 'string') {
    // применяется с указанием селектора элемента шапки (или люббого другого элемента)
    const el = document.querySelector(offsetOpt as string) as HTMLElement
    headerOffset = el?.offsetHeight + 24
  } else if (typeof offsetOpt === 'number') {
    // либо указать оффсет числом
    headerOffset = offsetOpt
  }

  const targetTop = element.getBoundingClientRect().top + window.pageYOffset - headerOffset

  // window.scrollTo({ top: targetTop, behavior: 'smooth' })
  scrollWithSpeed(targetTop, 300)
}

export const scrollPageToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const scrollWithSpeed = (to: number, duration = 500, el = document.documentElement) => {
  const start = el.scrollTop
  const change = to - start
  const startDate = +new Date()

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2
    if (t < 1) {
      return (c / 2) * t * t + b
    }
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const animateScroll = () => {
    const currentDate = +new Date()
    const currentTime = currentDate - startDate

    el.scrollTop = easeInOutQuad(currentTime, start, change, duration)
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll)
    } else {
      el.scrollTop = to
    }
  }
  animateScroll()
}

/**
 * Returns Element placement information in Viewport
 * @typedef {object} ViewportInfo - Whether the element is…
 * @property {boolean} isInViewport - fully or partially in the viewport
 * @property {boolean} isPartiallyInViewport - partially in the viewport
 * @property {boolean} isInsideViewport - fully inside viewport
 * @property {boolean} isAroundViewport - completely covers the viewport
 * @property {boolean} isOnEdge - intersects the edge of viewport
 * @property {boolean} isOnTopEdge - intersects the top edge
 * @property {boolean} isOnRightEdge - intersects the right edge
 * @property {boolean} isOnBottomEdge - is intersects the bottom edge
 * @property {boolean} isOnLeftEdge - is intersects the left edge
 *
 * @param el Element
 * @return {Object} ViewportInfo
 */
export function getElementViewportInfo(el: any) {
  let result = {
    isInViewport: false,
    isPartiallyInViewport: false,
    isInsideViewport: false,
    isAroundViewport: false,
    isOnEdge: false,
    isOnTopEdge: false,
    isOnRightEdge: false,
    isOnBottomEdge: false,
    isOnLeftEdge: false,
  }

  let rect = el.getBoundingClientRect()
  let windowHeight = window.innerHeight || document.documentElement.clientHeight
  let windowWidth = window.innerWidth || document.documentElement.clientWidth

  let insideX = rect.left >= 0 && rect.left + rect.width <= windowWidth
  let insideY = rect.top >= 0 && rect.top + rect.height <= windowHeight

  result.isInsideViewport = insideX && insideY

  let aroundX = rect.left < 0 && rect.left + rect.width > windowWidth
  let aroundY = rect.top < 0 && rect.top + rect.height > windowHeight

  result.isAroundViewport = aroundX && aroundY

  let onTop = rect.top < 0 && rect.top + rect.height > 0
  let onRight = rect.left < windowWidth && rect.left + rect.width > windowWidth
  let onLeft = rect.left < 0 && rect.left + rect.width > 0
  let onBottom = rect.top < windowHeight && rect.top + rect.height > windowHeight

  let onY = insideY || aroundY || onTop || onBottom
  let onX = insideX || aroundX || onLeft || onRight

  result.isOnTopEdge = onTop && onX
  result.isOnRightEdge = onRight && onY
  result.isOnBottomEdge = onBottom && onX
  result.isOnLeftEdge = onLeft && onY

  result.isOnEdge =
    result.isOnLeftEdge || result.isOnRightEdge || result.isOnTopEdge || result.isOnBottomEdge

  let isInX = insideX || aroundX || result.isOnLeftEdge || result.isOnRightEdge
  let isInY = insideY || aroundY || result.isOnTopEdge || result.isOnBottomEdge

  result.isInViewport = isInX && isInY

  result.isPartiallyInViewport = result.isInViewport && result.isOnEdge

  return result
}
