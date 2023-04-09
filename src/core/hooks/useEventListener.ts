import { useEffect, useRef } from 'react'

export const useEventListener = (
  eventName: string,
  handler: (...args: any[]) => any,
  element?: HTMLElement,
) => {
  const savedHandler = useRef<any>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const tElement = element || window
    const isSupported = tElement && tElement.addEventListener
    if (!isSupported) return

    const eventListener = (event: Event) => savedHandler.current(event)

    tElement.addEventListener(eventName, eventListener)

    return () => {
      tElement.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}
