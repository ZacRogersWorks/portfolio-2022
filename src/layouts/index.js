import React from 'react'

import Background from '../components/three/Background'
import Nav from '../components/sections/Nav'
import Contact from '../components/sections/Contact'
import { useSiteContext } from '../components/context/SiteContext'
import '../styles/styles.scss'

const Layout = ({ children }) => {
  const { section } = useSiteContext()

  return (
    <>
      <Background />
      <div className="page-container">
        <Nav />
        <main>{children}</main>
        <Contact ref={section.refs.contact} />
      </div>
    </>
  )
}

export default Layout