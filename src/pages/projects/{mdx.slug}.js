import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Project = ({ data }) => {
  return (
    <main>
      <button href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24.047" height="24.047" viewBox="0 0 24.047 24.047">
          <path id="Icon_ionic-md-arrow-back" data-name="Icon ionic-md-arrow-back" d="M30.023,16.5H11.763L20.18,8.081,18,5.977,5.977,18,18,30.023l2.1-2.1L11.763,19.5h18.26Z" transform="translate(-5.977 -5.977)" />
        </svg>

      </button>
      <section className="project">
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </section>
    </main>
  )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        body
    }
  }
  
`

export default Project