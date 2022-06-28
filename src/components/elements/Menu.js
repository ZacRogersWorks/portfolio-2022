import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Planet } from 'react-planet'

import { AnchorLink } from 'gatsby-plugin-anchor-links'


const svgVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    animate: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: .8,
            ease: 'easeOut',
            staggerChildren: .1,
        }
    }
}


const Menu = () => {
    //Menu link refs
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const contactRef = useRef(null);

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
        if (!isOpen) {
            setIsOpen(true)
            setIcon(
                <motion.svg id="Menu_Button" xmlns="http://www.w3.org/2000/svg" width="17.414" height="17.414" viewBox="0 0 17.414 17.414"
                    variants={svgVariants}
                    initial="hidden"
                    animate="animate"
                >
                    <g id="Group_11" data-name="Group 11" transform="translate(-1639.793 -54.793)">
                        <motion.line variants={svgVariants} id="Line_4" data-name="Line 4" x2="16" y2="16" transform="translate(1640.5 55.5)" fill="none" stroke="currentColor" strokeWidth="2" />
                        <motion.line variants={svgVariants} id="Line_5" data-name="Line 5" x1="16" y2="16" transform="translate(1640.5 55.5)" fill="none" stroke="currentColor" strokeWidth="2" />
                    </g>
                </motion.svg>
            )
        } else {
            setIsOpen(false)
            setIcon(
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
        }

    }

    const handleClose = () => {
        setIsOpen(false)
        setIcon(
            <motion.svg id="Menu_Button" data-name="Menu Button" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                variants={svgVariants}
                initial="hidden"
                animate="animate"
            >
                <g id="Ellipse_1" data-name="Ellipse 1" fill="none" stroke="currentColor" strokeWidth="2">
                    <motion.circle variants={svgVariants} cx="18.5" cy="18.5" r="18.5" stroke="none" />
                    <motion.circle variants={svgVariants} cx="18.5" cy="18.5" r="17.5" fill="none" />
                </g>
                <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(6 6)" fill="none" stroke="currentColor" strokeWidth="2">
                    <motion.circle variants={svgVariants} cx="12.5" cy="12.5" r="12.5" stroke="none" />
                    <motion.circle variants={svgVariants} cx="12.5" cy="12.5" r="11.5" fill="none" />
                </g>
                <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(13 13)" fill="none" stroke="currentColor" strokeWidth="2">
                    <motion.circle variants={svgVariants} cx="5.5" cy="5.5" r="5.5" stroke="none" />
                    <motion.circle variants={svgVariants} cx="5.5" cy="5.5" r="4.5" fill="none" />
                </g>
            </motion.svg>
        )
    }

    return (
        <div id="planet">
            <Planet centerContent={
                <motion.button className="menu-icon"
                    tabIndex="1"
                    variants={svgVariants}
                    initial="hidden"
                    animate="animate"
                >
                    {icon}
                </motion.button>
            }
                className="whatever"
                open={isOpen}
                hideOrbit
                autoClose
                orbitRadius={80}
                rotation={-20}
                tension={200}
                friction={35}
                onClick={handleOpen}
                onClose={handleClose}
            >
                <AnchorLink to="/#contact" className="menu-link contact" ref={contactRef} tabIndex="-4">
                    Contact
                </AnchorLink>
                <AnchorLink to="/#work" className="menu-link work" ref={workRef} tabIndex="-3">
                    Work
                </AnchorLink>
                <AnchorLink to="/#about" className="menu-link about" ref={aboutRef} tabIndex="-2">
                    About
                </AnchorLink>
                <AnchorLink to="/#home" className="menu-link home" style={{ marginTop: '1rem' }} ref={homeRef} tabIndex="-1">
                    Home
                </AnchorLink>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Planet>
        </div>
    )
}

export default Menu