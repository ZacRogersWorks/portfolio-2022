import React, { useEffect, forwardRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useSiteContext } from '../context/SiteContext'
import { useInView } from 'react-intersection-observer'

import { MOTION_VARIANTS } from '../../variants/MOTION_VARIANTS'

const LOCAL_VARIANTS = {
    heading: {
        initial: {
            opacity: 0,
            y: -50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: .5,
                ease: "easeOut"
            }
        },
    },
    rule: {
        initial: {
            opacity:0,
            scaleY: .01
        },
        animate: {
            opacity:1,
            scaleY: 1,
            transition: {
                duration: 1,
                delay: 1,
                ease: "easeOut"
            }
        }
    },
    p: {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .8,
                delay: 1.5,
                ease: "easeOut"
            }
        },
    }
}


const About = forwardRef((props, ref) => {

    const motionControls = useAnimation()
    const [motionRef, refInView] = useInView({ threshold: .8 })
    useEffect(() => {
        console.log("ABOUT", 'animate')
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
                    variants={LOCAL_VARIANTS.heading}
                    // initial="initial"

                >About</motion.h2>
                <motion.div className="about-vertical-rule"
                    variants={LOCAL_VARIANTS.rule}
                    // initial={{ scaleY: .01 }}
                    // animate={{ scaleY: 1 }}

                ></motion.div>
                <motion.div
                    variants={LOCAL_VARIANTS.p}
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: .5, delay: 5 }}
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