import React from 'react';
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'
import { useSiteContext } from '../context/SiteContext'

import Menu from '../elements/Menu'

const Nav = (props) => {
    const currentContext = useSiteContext()
    const [showLogo, setShowLogo] = useState('block')
    const [logoSrc, setLogoSrc] = useState(props.data.allImageSharp.nodes[currentContext.darkMode ? 1 : 0].gatsbyImageData)
    
    useEffect(() => {
        if (currentContext.darkMode) {
            setLogoSrc(props.data.allImageSharp.nodes[1].gatsbyImageData)
        } else {
            setLogoSrc(props.data.allImageSharp.nodes[0].gatsbyImageData)
        }
    }, [currentContext.darkMode])

    useEffect(()=> {
        if (currentContext.section.visibleSection == 'hero') {
            setShowLogo('block');
        } else {
            setShowLogo('none');
        }
    }, [currentContext.section.visibleSection])

    return (
        <nav>
                <div>
                    <div style={{display: showLogo }}>
                        <GatsbyImage className="nav-logo" image={logoSrc} alt='Zac Rogers Logo' ></GatsbyImage>
                    </div >
                </div>
                    <div className="menu-container">
                        <Menu />
                    </div>
        </nav>
    )
}

const NavWithLogo = (props) => {
    return (
        <StaticQuery
            query={graphql`
            query {
                allImageSharp(
                    filter: {fixed: {originalName: {regex: "/^zac_rogers_nav/"}}}
                    sort: {fields: fixed___originalName, order: ASC}
                  ) {
                    nodes {
                      gatsbyImageData(width: 64, placeholder: TRACED_SVG, formats: WEBP)
                    }
                  }
                }
              
    `}
            render={data => <Nav data={data}/>}
        />
    )
}

export default NavWithLogo