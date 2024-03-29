import React from 'react';
import { motion, useAnimation } from 'framer-motion'
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSiteContext } from '../context/SiteContext'

import { MOTION_VARIANTS, PATH_VARIANTS, SVG_VARIANTS } from '../../variants/MOTION_VARIANTS'

const FooterComponent = (props) => {
    // Dark Mode logo
    const currentContext = useSiteContext()
    const [logoSrc, setLogoSrc] = useState(props.data.allImageSharp.nodes[1].gatsbyImageData)

    useEffect(() => {
        if (currentContext.darkMode) {
            setLogoSrc(props.data.allImageSharp.nodes[1].gatsbyImageData)
        } else {
            setLogoSrc(props.data.allImageSharp.nodes[0].gatsbyImageData)
        }
    }, [currentContext.darkMode])

    // Animation
    const motionControls = useAnimation()
    const [section, sectionInView] = useInView({ threshold: .2 })
    useEffect(() => {
        if (sectionInView) {
            motionControls.start('animate')
        }
    }, [motionControls, sectionInView])

    return (
        <motion.footer
            ref={section}
            variants={MOTION_VARIANTS.footer}
            initial="initial"
            animate={motionControls}
        >
            <div className="footer-links">
                <GatsbyImage image={logoSrc} alt='Zac Rogers Logo' />
                <div className="social-links">
                    <a href="https://github.com/ZacRogersWorks" title="Github" target="_blank">
                        <motion.svg
                            variants={SVG_VARIANTS}

                            xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <motion.path variants={PATH_VARIANTS} stroke="currentColor" fill="currentColor" id="Icon_awesome-github-square" data-name="Icon awesome-github-square" d="M28.571,2.25H3.429A3.429,3.429,0,0,0,0,5.679V30.821A3.429,3.429,0,0,0,3.429,34.25H28.571A3.429,3.429,0,0,0,32,30.821V5.679A3.429,3.429,0,0,0,28.571,2.25ZM19.807,29.657c-.6.107-.821-.264-.821-.571,0-.386.014-2.357.014-3.95a2.783,2.783,0,0,0-.807-2.193c2.643-.293,5.429-.657,5.429-5.221A3.667,3.667,0,0,0,22.4,14.936a4.467,4.467,0,0,0-.121-3.214C21.286,11.414,19.014,13,19.014,13a11.237,11.237,0,0,0-5.943,0S10.8,11.414,9.807,11.721a4.433,4.433,0,0,0-.121,3.214,3.587,3.587,0,0,0-1.114,2.786c0,4.543,2.664,4.929,5.307,5.221a2.589,2.589,0,0,0-.757,1.593,2.506,2.506,0,0,1-3.45-.993A2.488,2.488,0,0,0,7.85,22.321c-1.157-.014-.079.729-.079.729.771.357,1.314,1.729,1.314,1.729.693,2.121,4.007,1.407,4.007,1.407,0,.993.014,2.607.014,2.9s-.214.679-.821.571A11.85,11.85,0,0,1,4.271,18.35,11.335,11.335,0,0,1,15.843,6.814,11.589,11.589,0,0,1,27.714,18.35,11.741,11.741,0,0,1,19.807,29.657ZM12.8,25.293c-.136.029-.264-.029-.279-.121s.079-.2.214-.229.264.043.279.136S12.943,25.264,12.8,25.293Zm-.679-.064c0,.093-.107.171-.25.171s-.264-.064-.264-.171.107-.171.25-.171S12.121,25.121,12.121,25.229Zm-.979-.079c-.029.093-.171.136-.293.093s-.229-.136-.2-.229.171-.136.293-.107C11.086,24.95,11.179,25.057,11.143,25.15Zm-.879-.386c-.064.079-.2.064-.307-.043s-.136-.229-.064-.293.2-.064.307.043S10.329,24.707,10.264,24.764Zm-.65-.65c-.064.043-.186,0-.264-.107s-.079-.229,0-.279.2-.014.264.093a.209.209,0,0,1,0,.293Zm-.464-.693c-.064.064-.171.029-.25-.043-.079-.093-.093-.2-.029-.25s.171-.029.25.043C9.2,23.264,9.214,23.371,9.15,23.421Zm-.479-.529a.135.135,0,0,1-.2.029c-.093-.043-.136-.121-.107-.186a.168.168,0,0,1,.2-.029C8.657,22.757,8.7,22.836,8.671,22.893Z" transform="translate(0 -2.25)" />
                            <rect x="0" y="0" width="100%" height="100%" fill="none" />
                        </motion.svg>
                    </a>
                    <a href="https://www.linkedin.com/in/zac-s-rogers/" title="LinkedIn" target="_blank">
                        <motion.svg
                            variants={SVG_VARIANTS}

                            xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                            <motion.path variants={PATH_VARIANTS} stroke="currentColor" fill="currentColor" id="Icon_simple-linkedin" data-name="Icon simple-linkedin" d="M40.894,40.9H33.786V29.766c0-2.656-.054-6.074-3.7-6.074-3.706,0-4.272,2.89-4.272,5.878V40.9H18.7V18H25.53v3.122h.092a7.491,7.491,0,0,1,6.74-3.7c7.2,0,8.534,4.74,8.534,10.91V40.9ZM10.674,14.866a4.128,4.128,0,1,1,4.128-4.13A4.124,4.124,0,0,1,10.674,14.866ZM14.238,40.9H7.11V18h7.128ZM44.45,0H3.542A3.5,3.5,0,0,0,0,3.458V44.542A3.5,3.5,0,0,0,3.542,48h40.9A3.512,3.512,0,0,0,48,44.542V3.458A3.513,3.513,0,0,0,44.444,0Z" />
                            <rect x="0" y="0" width="100%" height="100%" fill="none" />
                        </motion.svg>
                    </a>
                    <a href="https://www.instagram.com/zac.s.rogers/" title="Instagram" target="_blank">
                        <motion.svg
                            variants={SVG_VARIANTS}

                            xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                            <motion.path variants={PATH_VARIANTS} stroke="currentColor" fill="currentColor" id="Icon_simple-instagram" data-name="Icon simple-instagram" d="M24,0c-6.52,0-7.334.03-9.894.144A17.7,17.7,0,0,0,8.28,1.26,11.753,11.753,0,0,0,4.028,4.028,11.71,11.71,0,0,0,1.26,8.28,17.645,17.645,0,0,0,.144,14.106C.024,16.666,0,17.48,0,24s.03,7.334.144,9.894A17.708,17.708,0,0,0,1.26,39.72a11.77,11.77,0,0,0,2.768,4.252A11.736,11.736,0,0,0,8.28,46.74a17.719,17.719,0,0,0,5.826,1.116c2.56.12,3.374.144,9.894.144s7.334-.03,9.894-.144A17.76,17.76,0,0,0,39.72,46.74a12.265,12.265,0,0,0,7.02-7.02,17.708,17.708,0,0,0,1.116-5.826C47.976,31.334,48,30.52,48,24s-.03-7.334-.144-9.894A17.749,17.749,0,0,0,46.74,8.28a11.779,11.779,0,0,0-2.768-4.252A11.693,11.693,0,0,0,39.72,1.26,17.656,17.656,0,0,0,33.894.144C31.334.024,30.52,0,24,0Zm0,4.32c6.406,0,7.17.032,9.7.142a13.223,13.223,0,0,1,4.454.83A7.9,7.9,0,0,1,42.71,9.846a13.251,13.251,0,0,1,.826,4.454c.114,2.532.14,3.292.14,9.7s-.03,7.17-.148,9.7a13.506,13.506,0,0,1-.842,4.454,7.62,7.62,0,0,1-1.8,2.764,7.487,7.487,0,0,1-2.76,1.792,13.348,13.348,0,0,1-4.47.826c-2.548.114-3.3.14-9.718.14s-7.172-.03-9.718-.148a13.609,13.609,0,0,1-4.472-.842,7.432,7.432,0,0,1-2.758-1.8,7.287,7.287,0,0,1-1.8-2.76,13.62,13.62,0,0,1-.84-4.47c-.09-2.52-.122-3.3-.122-9.688s.032-7.172.122-9.722a13.6,13.6,0,0,1,.84-4.468,7.114,7.114,0,0,1,1.8-2.762,7.1,7.1,0,0,1,2.758-1.8,13.283,13.283,0,0,1,4.442-.842c2.55-.09,3.3-.12,9.718-.12l.09.06Zm0,7.356A12.324,12.324,0,1,0,36.324,24,12.323,12.323,0,0,0,24,11.676ZM24,32a8,8,0,1,1,8-8A8,8,0,0,1,24,32ZM39.692,11.19a2.88,2.88,0,1,1-2.88-2.878A2.882,2.882,0,0,1,39.692,11.19Z" />
                            <rect x="0" y="0" width="100%" height="100%" fill="none" />
                        </motion.svg>
                    </a>
                </div>
            </div>
            <div>
                <p className="copyright">Designed & Developed by Zac Rogers <span>©</span> 2022</p>

            </div>
        </motion.footer>
    )
}

const Footer = () => {
    return (
        <StaticQuery
            query={graphql`
            query {
                allImageSharp(
                    filter: {fixed: {originalName: {regex: "/^zac_rogers_footer/"}}}
                    sort: {fields: fixed___originalName, order: ASC}
                  ) {
                    nodes {
                      gatsbyImageData(width: 80, placeholder: TRACED_SVG, formats: WEBP)
                    }
                  }
                }                
    `}
            render={data => <FooterComponent data={data} />}
        />
    )
}

export default Footer