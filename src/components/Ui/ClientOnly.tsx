import React from 'react'
import { Fragment, lazy, useEffect, useState } from 'react'

const ClientOnly = ({ children }: { children: ReactSlot }) => {
  const [isMounted, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  return <>{isMounted ? children : null}</>
}

export default ClientOnly
