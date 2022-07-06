import React from 'react';

//Context
import { useSiteContext } from "../components/context/SiteContext";

//Styles
import '../styles/styles.scss';

//Components
import TransitionOverlay from "../components/elements/TransitionOverlay";
import About from '../components/sections/About';
import Hero from '../components/sections/Hero';
import Layout from '../components/sections/Layout';
import Work from '../components/sections/Work';
import Contact from '../components/sections/Contact';
import { Seo } from "../components/Seo";

const Home = () => {
  const { section } = useSiteContext()

  return (
    <div>
      <Layout>
        <Seo />
        <TransitionOverlay />
        <Hero ref={section.refs.hero} />
        <About ref={section.refs.about} />
        <Work ref={section.refs.work} />
        <Contact ref={section.refs.contact} dataId={"contact"} snap={true} />
      </Layout>
    </div>
  )
}

export default Home