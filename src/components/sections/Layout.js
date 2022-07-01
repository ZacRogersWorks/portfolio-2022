import React from 'react'
import { useScrollRestoration } from 'gatsby'

import Background from '../three/Background'
import Nav from './Nav'
import '../../styles/styles.scss'

const Layout = ({ children }) => {
  const scrollRestoration = useScrollRestoration(`page-component-main`)

  return (
    <div className="wrapper">
      <Background />
      <div className="page-container">
        <Nav />
        <main {...scrollRestoration}>{children}</main>
      </div>
    </div >
  )
}

export default Layout