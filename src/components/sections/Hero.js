import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

import Toggle from '../elements/Toggle'
import { titleVariants } from '../../variants/heroVariants'


const Hero = forwardRef((props, ref) => {
    return (
        <section className="hero-section" ref={ref}>

            <motion.div
                id="home"
                className="darkmode-toggle"
                initial={{ x: -80 }}
                animate={{ x: 0 }}
                transition={{ duration: .5, delay: .7, ease: "easeOut"}}
            >
                <Toggle />
            </motion.div>
            <motion.div className="hero"
                variants={titleVariants}
                initial="initial"
                animate="animate"
            >
                <motion.h1
                    variants={titleVariants}
                >
                    Zac Rogers
                </motion.h1>
                <motion.span className='tagline'
                    variants={titleVariants}
                >
                    Creative Developer
                </motion.span>
                <motion.div className="hero-rule"
                    initial={{ opacity: .01, scaleY: .01 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ ease: "easeOut", duration: 1.5, delay: .7 }}
                ></motion.div>
            </motion.div>
        </section>
    )
})

export default Hero