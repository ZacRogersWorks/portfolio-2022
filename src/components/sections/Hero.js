import React, { forwardRef } from "react";
import { motion } from "framer-motion";

import Toggle from "../elements/Toggle";
import { MOTION_VARIANTS } from "../../variants/MOTION_VARIANTS";

const Hero = forwardRef((props, ref) => {
  return (
    <section className="hero-section" ref={ref}>
      <motion.div
        id="home"
        className="darkmode-toggle"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <Toggle />
      </motion.div>
      <motion.div
        className="hero"
        variants={MOTION_VARIANTS.hero}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={MOTION_VARIANTS.hero}>ZacRogers.works LLC</motion.h1>
        <motion.p className="tagline" variants={MOTION_VARIANTS.hero}>
          A full-service studio for web design and development. I'll turn your
          ideas into reality by creating custom designs and builds that make
          your web presence tangible and beautiful. Whether you need a marketing
          site, an e-commerce solution, or a web app, I have the expertise to
          bring your vision to life.
          
        </motion.p>
        <motion.div
          className="hero-rule"
          initial={{ opacity: 0.01, scaleY: 0.01 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
        ></motion.div>
      </motion.div>
    </section>
  );
});

export default Hero;
