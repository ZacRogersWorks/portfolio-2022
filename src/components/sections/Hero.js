import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'

import Toggle from '../elements/Toggle'
import { MOTION_VARIANTS } from '../../variants/MOTION_VARIANTS'


const Hero = forwardRef((props, ref) => {
    return (
            <section className="hero-section" ref={ref}>
                <motion.div
                    id="home"
                    className="darkmode-toggle"
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: .8, delay: 1, ease: "easeOut" }}
                >
                    <Toggle />
                </motion.div>
                <motion.div className="hero"
                    variants={MOTION_VARIANTS.hero}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h1
                        variants={MOTION_VARIANTS.hero}
                    >
                        Zac Rogers
                    </motion.h1>
                    <motion.span className='tagline'
                        variants={MOTION_VARIANTS.hero}
                    >
                        Front-End Developer
                    </motion.span>
                    <motion.div className="hero-rule"
                        initial={{ opacity: .01, scaleY: .01 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ ease: "easeOut", duration: 1.5, delay: .5 }}
                    ></motion.div>
                </motion.div>
            </section>

    )
})

export default Hero