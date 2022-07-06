import React from 'react';
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useEffect } from 'react'
import { useSiteContext } from '../../components/context/SiteContext'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MOTION_VARIANTS, PROJECT_VARIANTS, SECTION_VARIANTS } from '../../variants/MOTION_VARIANTS'

import Layout from '../../components/sections/Layout'
import Contact from '../../components/sections/Contact';
import { Seo } from '../../components/Seo'

const Project = ({ data }) => {
  const currentContext = useSiteContext();
  const image = getImage(data.mdx.frontmatter.featuredImage.childImageSharp.gatsbyImageData)
  const seoImage = data.mdx.frontmatter.featuredImage.publicURL

  const motionControls = useAnimation();
  const [section, sectionInView] = useInView({ threshold: .8 });

  useEffect(() => {
    if (sectionInView) {
      motionControls.start('animate');
    }
  }, [motionControls, sectionInView])

  return (
    <Layout>
      <Seo 
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.description}
      />
      <Link className="back-button" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24.047" height="24.047" viewBox="0 0 24.047 24.047">
          <path fill="currentColor" id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M30.023,16.5H11.763L20.18,8.081,18,5.977,5.977,18,18,30.023l2.1-2.1L11.763,19.5h18.26Z" transform="translate(-5.977 -5.977)" />
        </svg>
      </Link>
      <article className="project" ref={currentContext.section.refs.project}>
        <motion.div
          className="project-section_frontmatter"
          variants={MOTION_VARIANTS.projects}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="project-title">
            <motion.h1 variants={PROJECT_VARIANTS.heading}>{data.mdx.frontmatter.title}</motion.h1>
            <motion.p variants={PROJECT_VARIANTS.heading}>{data.mdx.frontmatter.date}</motion.p>
          </div>
          <motion.div className="project-vert-rule" variants={PROJECT_VARIANTS.rule}></motion.div>
          <motion.div className="project-links" variants={PROJECT_VARIANTS.links} >
            <a href={data.mdx.frontmatter.url} title="Live Site">Live Site
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 40.5 36">
                <path fill="currentColor" id="Icon_awesome-external-link-alt" data-name="Icon awesome-external-link-alt" d="M40.5,1.688v9a1.689,1.689,0,0,1-2.881,1.193L35.109,9.369,17.986,26.492a1.687,1.687,0,0,1-2.386,0L14.008,24.9a1.687,1.687,0,0,1,0-2.386L31.131,5.391l-2.51-2.511A1.689,1.689,0,0,1,29.814,0h9A1.687,1.687,0,0,1,40.5,1.688ZM28.619,19.04l-1.125,1.125A1.687,1.687,0,0,0,27,21.358V31.5H4.5V9H23.063a1.688,1.688,0,0,0,1.193-.494l1.125-1.125A1.688,1.688,0,0,0,24.188,4.5H3.375A3.375,3.375,0,0,0,0,7.875v24.75A3.375,3.375,0,0,0,3.375,36h24.75A3.375,3.375,0,0,0,31.5,32.625V20.233A1.687,1.687,0,0,0,28.619,19.04Z" />
              </svg>
            </a>
            <a href={data.mdx.frontmatter.repo} title="Repo">Repo
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 40.5 36">
                <path fill="currentColor" id="Icon_awesome-external-link-alt" data-name="Icon awesome-external-link-alt" d="M40.5,1.688v9a1.689,1.689,0,0,1-2.881,1.193L35.109,9.369,17.986,26.492a1.687,1.687,0,0,1-2.386,0L14.008,24.9a1.687,1.687,0,0,1,0-2.386L31.131,5.391l-2.51-2.511A1.689,1.689,0,0,1,29.814,0h9A1.687,1.687,0,0,1,40.5,1.688ZM28.619,19.04l-1.125,1.125A1.687,1.687,0,0,0,27,21.358V31.5H4.5V9H23.063a1.688,1.688,0,0,0,1.193-.494l1.125-1.125A1.688,1.688,0,0,0,24.188,4.5H3.375A3.375,3.375,0,0,0,0,7.875v24.75A3.375,3.375,0,0,0,3.375,36h24.75A3.375,3.375,0,0,0,31.5,32.625V20.233A1.687,1.687,0,0,0,28.619,19.04Z" />
              </svg>
            </a>
          </motion.div>
          <motion.div variants={PROJECT_VARIANTS.image}>
            <GatsbyImage className="project-image" image={image} alt="Product mockups" />
          </motion.div>
        </motion.div>
        <motion.div
          className="project-section_body"
          ref={section}
          variants={MOTION_VARIANTS.about}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={SECTION_VARIANTS.heading}>details</motion.h2>
          <motion.div className="project-body-vert-rule" variants={SECTION_VARIANTS.rule}></motion.div>
          <motion.div variants={SECTION_VARIANTS.p}>
            <MDXRenderer variants={SECTION_VARIANTS.p}>
              {data.mdx.body}
            </MDXRenderer>
          </motion.div>
        </motion.div>
      </article>
      <Contact ref={currentContext?.section.refs.contact} dataId={"projectContact"} snap={false} />
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        repo
        url
        date(formatString: "YYYY")
        description
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 1080)
          }
        }
      }
      body
      slug
    }
  }
  
`

export default Project