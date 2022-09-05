import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className={'bg-hint-of-red'}>
      <div className={'flex flex-col h-screen bg-white drop-shadow'}>
        <Header />
        <main className={'flex-auto overflow-hidden mx-40'}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Layout
