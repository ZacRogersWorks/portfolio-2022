//Libraries
import React, { useEffect, useState, useContext } from "react"
import { useInView, InView } from 'react-intersection-observer'
import { motion } from "framer-motion";

//Context
import { useSiteContext } from "../components/context/SiteContext";

//Styles
import '../styles/styles.scss'

//Components
import Layout from '../layouts/Layout'
import Hero from '../components/sections/Hero'
import TransitionOverlay from "../components/elements/TransitionOverlay";
import About from '../components/sections/About'
import Work from '../components/sections/Work'

const Home = () => {
  const { section } = useSiteContext()

  return (
    <div>
      <Layout>
        <TransitionOverlay />
        <Hero ref={section.refs.hero} />
        <About ref={section.refs.about} />
        <Work ref={section.refs.work} />
      </Layout>
    </div>
  )
}

export default Home