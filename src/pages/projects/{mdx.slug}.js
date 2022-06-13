import React, { useEffect } from 'react'
import { graphql, useScrollRestoration } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MOTION_VARIANTS, SECTION_VARIANTS, PROJECT_VARIANTS } from '../../variants/MOTION_VARIANTS'

import Layout from '../../layouts/Layout'

const Project = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.featuredImage.childImageSharp.gatsbyImageData)

  const motionControls = useAnimation();
  const [section, sectionInView] = useInView({ threshold: .8 });

  useEffect(() => {
    if (sectionInView) {
      motionControls.start('animate');
    }
  }, [motionControls, sectionInView])

  return (
    <Layout>
      <main>
        <article className="project">
          <motion.div
            className="project-section_frontmatter"
            variants={MOTION_VARIANTS.projects}
            initial="initial"
            animate="animate"
          >
            <button href="/" className="back-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24.047" height="24.047" viewBox="0 0 24.047 24.047">
                <path id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M30.023,16.5H11.763L20.18,8.081,18,5.977,5.977,18,18,30.023l2.1-2.1L11.763,19.5h18.26Z" transform="translate(-5.977 -5.977)" />
              </svg>
            </button>
            <div className="project-title">
              <motion.h1 variants={PROJECT_VARIANTS.heading}>{data.mdx.frontmatter.title}</motion.h1>
              <motion.p variants={PROJECT_VARIANTS.heading}>{data.mdx.frontmatter.date}</motion.p>
            </div>
            <motion.div className="project-vert-rule" variants={PROJECT_VARIANTS.rule}></motion.div>
            <motion.div className="project-links" variants={PROJECT_VARIANTS.links} >
              <a href={data.mdx.frontmatter.url} >Live Site</a>
              <a href={data.mdx.frontmatter.repo} >Repo</a>
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
      </main>
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