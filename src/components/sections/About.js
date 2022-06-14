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
                        consider every use case, and then use the highest quality
                        materials available. This philosophy inspired me to craft my own products.
                        <br />
                        Today I build my products out of code. I design every project to be
                        fast, easy to read, easy to use, and have a reference to nature.
                        <br /><br />
                        In my free time, you can find me consuming mass amounts of science fiction or
                        playing with <a title="Zac plays synths" href="https://www.youtube.com/channel/UCDzr_UKG-sC-xKXjslkDEbw" target="_blank" >
                            synthesizers
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 40.5 36">
                                <path fill="currentColor" id="Icon_awesome-external-link-alt" data-name="Icon awesome-external-link-alt" d="M40.5,1.688v9a1.689,1.689,0,0,1-2.881,1.193L35.109,9.369,17.986,26.492a1.687,1.687,0,0,1-2.386,0L14.008,24.9a1.687,1.687,0,0,1,0-2.386L31.131,5.391l-2.51-2.511A1.689,1.689,0,0,1,29.814,0h9A1.687,1.687,0,0,1,40.5,1.688ZM28.619,19.04l-1.125,1.125A1.687,1.687,0,0,0,27,21.358V31.5H4.5V9H23.063a1.688,1.688,0,0,0,1.193-.494l1.125-1.125A1.688,1.688,0,0,0,24.188,4.5H3.375A3.375,3.375,0,0,0,0,7.875v24.75A3.375,3.375,0,0,0,3.375,36h24.75A3.375,3.375,0,0,0,31.5,32.625V20.233A1.687,1.687,0,0,0,28.619,19.04Z" />
                            </svg>

                        </a>
                        .
                    </p>
                </motion.div>
            </motion.div>
        </section>
    )
})

export default About