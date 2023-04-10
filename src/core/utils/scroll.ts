export const scrollToElement = (id: string, offsetOpt = true) => {
  const element = document.getElementById(id)
  if (!element) return

  let headerOffset = 0
  if (offsetOpt === true) {
    // применяется для десктопа
    const el = document.querySelector('.header') as HTMLElement
    headerOffset = el?.offsetHeight
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
