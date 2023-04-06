import React from 'react'
import { Helmet } from 'react-helmet'

export { Page }

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <>
        <Helmet>
          <title> 404</title>
        </Helmet>

        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </>
    )
  } else {
    return (
      <>
        <h1>500 Internal Server Error</h1>
        <p>Something went wrong.</p>
      </>
    )
  }
}
