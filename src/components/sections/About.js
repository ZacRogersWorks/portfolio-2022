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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna id volutpat. Elementum integer enim neque volutpat ac tincidunt vitae semper. Porta nibh venenatis cras sed felis. Hac habitasse platea dictumst vestibulum rhoncus est. Facilisis magna etiam tempor orci eu. Condimentum id venenatis a condimentum vitae sapien. Ullamcorper morbi tincidunt ornare massa eget egestas.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
})

export default About