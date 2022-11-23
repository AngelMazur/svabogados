import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>SV ABOGADOS</title>
      </Head>

      {children}
    </>
  )
}

export default Layout
