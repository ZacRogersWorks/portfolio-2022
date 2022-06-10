import React, { useEffect } from 'react'
import { graphql, useScrollRestoration } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../../layouts/Layout'

const Project = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.featuredImage.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <main>
        <article className="project">
          <button href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24.047" height="24.047" viewBox="0 0 24.047 24.047">
              <path id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M30.023,16.5H11.763L20.18,8.081,18,5.977,5.977,18,18,30.023l2.1-2.1L11.763,19.5h18.26Z" transform="translate(-5.977 -5.977)" />
            </svg>
          </button>
          <div className="project-section_frontmatter">
            <div className="project-title">
              <h1>{data.mdx.frontmatter.title}</h1>
              <p>{data.mdx.frontmatter.date}</p>
            </div>
            <div className="project-vert-rule"></div>
            <div className="project-links">
              <a href={data.mdx.frontmatter.url}>Live Site</a>
              <a href={data.mdx.frontmatter.repo}>Repo</a>
            </div>
            <GatsbyImage className="project-image" image={image} alt="Product mockups" />
          </div>
          <div className="project-section_body">
            <h2>details</h2>
            <div className="project-body-vert-rule"></div>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </div>
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