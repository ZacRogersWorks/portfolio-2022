import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

const svgVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    animate: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: .1,
            ease: "easeOut"
        }
    }
}


const MenuTest = () => {
    //Menu link refs
    const buttonRef = useRef(null);

    const home = document.querySelector(".menuHome")

    const about = document.querySelector(".menuAbout")

    const work = document.querySelector(".menuWork")

    const contact = document.querySelector(".menuContact")

    const [isOpen, setIsOpen] = useState(false)
    const [icon, setIcon] = useState(
        <motion.svg id="Menu_Button" data-name="Menu Button" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
            variants={svgVariants}
            initial="hidden"
            animate="animate"
        >
            <g id="Ellipse_1" data-name="Ellipse 1" fill="none" stroke="currentColor" strokeWidth="2">
                <motion.circle variants={svgVariants} cx="16" cy="16" r="16" stroke="none" />
                <motion.circle variants={svgVariants} cx="16" cy="16" r="15" fill="none" />
            </g>
            <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(5 5)" fill="none" stroke="currentColor" strokeWidth="2">
                <motion.circle variants={svgVariants} cx="11" cy="11" r="11" stroke="none" />
                <motion.circle variants={svgVariants} cx="11" cy="11" r="10" fill="none" />
            </g>
            <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(10.5 10.5)" fill="none" stroke="currentColor" strokeWidth="2">
                <motion.circle variants={svgVariants} cx="5.5" cy="5.5" r="5.5" stroke="none" />
                <motion.circle variants={svgVariants} cx="5.5" cy="5.5" r="4.5" fill="none" />
            </g>
        </motion.svg>
    )

    const handleOpen = () => {
        console.log('hi')
        if (!isOpen) {
            setIsOpen(true)
            setIcon(
                <motion.svg id="Menu_Button" xmlns="http://www.w3.org/2000/svg" width="17.414" height="17.414" viewBox="0 0 17.414 17.414"
                    variants={svgVariants}
                    initial="hidden"
                    animate="animate"
                >
                    <g id="Group_11" data-name="Group 11" transform="translate(-1639.793 -54.793)">
                        <line id="Line_4" data-name="Line 4" x2="16" y2="16" transform="translate(1640.5 55.5)" fill="none" stroke="currentColor" strokeWidth="2" />
                        <line id="Line_5" data-name="Line 5" x1="16" y2="16" transform="translate(1640.5 55.5)" fill="none" stroke="currentColor" strokeWidth="2" />
                    </g>
                </motion.svg>
            )
            home.setAttribute('style', 'transform: translate(-90px, -45px); opacity: 100%')
            about.setAttribute('style', 'transform: translate(-90px, 0px); opacity: 100%')
            work.setAttribute('style', 'transform: translate(-70px, 35px); opacity: 100%')
            contact.setAttribute('style', 'transform: translate(-25px, 50px); opacity: 100%')

        } else {
            setIsOpen(false)
            setIcon(
                <motion.svg id="Menu_Button" data-name="Menu Button" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                    variants={svgVariants}
                    initial="hidden"
                    animate="animate"
                >
                    <g id="Ellipse_1" data-name="Ellipse 1" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="16" cy="16" r="16" stroke="none" />
                        <circle cx="16" cy="16" r="15" fill="none" />
                    </g>
                    <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(5 5)" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="11" stroke="none" />
                        <circle cx="11" cy="11" r="10" fill="none" />
                    </g>
                    <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(10.5 10.5)" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
                        <circle cx="5.5" cy="5.5" r="4.5" fill="none" />
                    </g>
                </motion.svg>

            )

            home.setAttribute('style', 'transform: translate(0, 0); opacity: 0%')
            about.setAttribute('style', 'transform: translate(0,0); opacity: 0%')
            work.setAttribute('style', 'transform: translate(0,0); opacity: 0%')
            contact.setAttribute('style', 'transform: translate(0,0); opacity: 0%')
        }

    }

    const handleClose = () => {
        setIsOpen(false)
        setIcon(
            <motion.svg id="Menu_Button" data-name="Menu Button" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37"
                variants={svgVariants}
                initial="hidden"
                animate="animate"
            >
                <g id="Ellipse_1" data-name="Ellipse 1" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18.5" cy="18.5" r="18.5" stroke="none" />
                    <circle cx="18.5" cy="18.5" r="17.5" fill="none" />
                </g>
                <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(6 6)" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
                    <circle cx="12.5" cy="12.5" r="11.5" fill="none" />
                </g>
                <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(13 13)" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
                    <circle cx="5.5" cy="5.5" r="4.5" fill="none" />
                </g>
            </motion.svg>
        )
    }

    return (
        <div className="menu">
            <motion.button className="menu-icon"
                ref={buttonRef}
                tabIndex="1"
                variants={svgVariants}
                initial="hidden"
                animate="animate"
                onClick={handleOpen}
            >
                {icon}
            </motion.button>

            <AnchorLink to="/#home"
                className="menu-link2 menuHome"
            >
                Home
            </AnchorLink>
            <AnchorLink to="/#about"
                className="menu-link2 menuAbout"
            >
                About
            </AnchorLink>
            <AnchorLink to="/#work"
                className="menu-link2 menuWork"
            >
                Work
            </AnchorLink>
            <AnchorLink to="/#contact"
                className="menu-link2 menuContact"
            >
                Contact
            </AnchorLink>

        </div>
    )
}

export default MenuTest