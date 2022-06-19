import React from 'react'
import { useScrollRestoration } from 'gatsby'

import Background from '../three/Background'
import Nav from './Nav'
import Contact from './Contact'
import { useSiteContext } from '../context/SiteContext'
import '../../styles/styles.scss'

const Layout = ({ children }) => {
  const currentContext = useSiteContext()
  const scrollRestoration = useScrollRestoration(`page-component-main`)

  return (
    <div className="wrapper">
      <Background />
      <div className="page-container">
        <Nav />
        <main {...scrollRestoration}>{children}</main>
        <Contact ref={currentContext?.section.refs.contact} />
      </div>
    </div >
  )
}

export default Layout