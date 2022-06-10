import React, { useEffect, forwardRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import WorkItems from '../elements/WorkItems'

import { MOTION_VARIANTS, SECTION_VARIANTS } from '../../variants/MOTION_VARIANTS'


const Work = forwardRef((props, ref) => {
    const motionControls = useAnimation()
    const [section, sectionInView] = useInView({ threshold: .8 })

    useEffect(() => {
        if (sectionInView) {
            motionControls.start('animate')
        }
    }, [motionControls, sectionInView])

    return (
        <section id="work" className="work-section" ref={ref}>
            <motion.div className="work-container"
                ref={section}
                variants={MOTION_VARIANTS.work}
                initial="initial"
                animate={motionControls}
                exit="exit"
            >
                <motion.h2 variants={SECTION_VARIANTS.headingWork}>Selected <br /> Works</motion.h2>
                <motion.div className="about-vertical-rule" variants={SECTION_VARIANTS.rule}></motion.div>
                <motion.div className="work-items-container" variants={SECTION_VARIANTS.p}>
                    <WorkItems />
                </motion.div>
            </motion.div>
        </section>
    )
})

export default Work