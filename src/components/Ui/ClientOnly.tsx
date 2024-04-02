import { useEffect, useState } from 'react'

export const ClientOnly = ({ children }: { children: ReactSlot }) => {
  const [isMounted, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  return <>{isMounted ? children : null}</>
}
