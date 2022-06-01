import React, { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useElementScroll, useViewportScroll, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TransitionOverlay = () => {
    const { scrollYProgress } = useViewportScroll();
    const yValue = useTransform(
        scrollYProgress, 
        [0, .1, .2, .25, .33, .44, .56, .6], 
        [0, 1, 1, 0, 0, 1, 1, 0]
        )


    return (
        <motion.div className="transition-overlay"
            style={{ opacity: yValue }}
        ></motion.div>
    )
}

export default TransitionOverlay