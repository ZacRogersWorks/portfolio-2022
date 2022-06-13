import React, { useEffect, forwardRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { MOTION_VARIANTS, SECTION_VARIANTS } from '../../variants/MOTION_VARIANTS'




const About = forwardRef((props, ref) => {

    const motionControls = useAnimation()
    const [motionRef, refInView] = useInView({ threshold: .8 })
    useEffect(() => {
        if (refInView) {
            motionControls.start("animate")
        }
    }, [motionControls, refInView])

    return (
        <section
            id="about"
            className="about-section"
            ref={ref}
        >
            <motion.div className="about-container"
                ref={motionRef}
                variants={MOTION_VARIANTS.about}
                initial="initial"
                animate={motionControls}
            >
                <motion.h2
                    variants={SECTION_VARIANTS.heading}

                >About</motion.h2>
                <motion.div className="about-vertical-rule"
                    variants={SECTION_VARIANTS.rule}
                ></motion.div>
                <motion.div
                    variants={SECTION_VARIANTS.p}
                >
                    <p className="about-text">
                        My time spent working at a world-renowned furniture design house taught me how
                        modernist craftspersons operate: distill the design to its most beautiful and basic utility,
                        consider every use case, and craft the product out of the highest quality 
                        materials available. This philosophy inspired me to craft my own products.
                        <br/>
                        Today I build my products out of code instead of wood and metal. I design every project to be
                        fast, easy to read, easy to use, and have a reference to nature.
                        <br/><br/>
                        In my free time, you can find me consuming mass amounts of science fiction or
                        playing with <a title="Zac plays synths" href="https://www.youtube.com/channel/UCDzr_UKG-sC-xKXjslkDEbw">synthesizers.</a>
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
})

export default About