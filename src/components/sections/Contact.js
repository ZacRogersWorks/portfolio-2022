import React, { useEffect, forwardRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import ContactForm from '../elements/ContactForm'
import Footer from './Footer'

import { MOTION_VARIANTS, SECTION_VARIANTS } from '../../variants/MOTION_VARIANTS'

const Contact = forwardRef((props, ref) => {
    const motionControls = useAnimation()
    const [section, sectionInView] = useInView()

    useEffect(()=> {
        if (sectionInView) {
            motionControls.start('animate')
        }
    },[motionControls, sectionInView])

    return (
        <section id="contact" className="contact-section" ref={ref}>
            <motion.div className="contact-container"
            ref={section}
            variants={MOTION_VARIANTS.about}
            initial="initial"
            animate={motionControls}
            >
                <motion.h2
                variants={SECTION_VARIANTS.headingWork}
                >Contact</motion.h2>
                <ContactForm />
                <Footer />
            </motion.div>
        </section>
    )
})

export default Contact