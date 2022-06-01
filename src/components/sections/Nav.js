import React, { useEffect, useState } from 'react'
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useSiteContext } from '../context/SiteContext'

import Menu from '../elements/Menu'

const Nav = (props) => {

    const currentContext = useSiteContext()

    const [showLogo, setShowLogo] = useState('block')
    const [logoSrc, setLogoSrc] = useState(props.data.allImageSharp.nodes[1].gatsbyImageData)
    
    useEffect(() => {
        console.log(props.data)
        if (currentContext.darkMode) {
            setLogoSrc(props.data.allImageSharp.nodes[0].gatsbyImageData)
        } else {
            setLogoSrc(props.data.allImageSharp.nodes[1].gatsbyImageData)
        }
    }, [currentContext.darkMode])

    useEffect(()=> {
        if (currentContext.section.visibleSection !== 'hero') {
            setShowLogo('none');
        } else {
            setShowLogo('block');
        }
    }, [currentContext.section.visibleSection])

    useEffect(()=> {
        console.log('NAV', props.data)
    })

    return (
        <nav>
                <div>
                    <div style={{display: showLogo }}>
                        <GatsbyImage className="nav-logo" image={logoSrc} alt='Logo' ></GatsbyImage>
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
                allImageSharp {
                  nodes {
                    gatsbyImageData(width: 64, placeholder: TRACED_SVG, formats: WEBP)   
                  }
                }
              }
              
    `}
            render={data => <Nav data={data} darkMode={props} />}
        />
    )
}

export default NavWithLogo