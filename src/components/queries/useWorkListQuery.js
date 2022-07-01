import { useStaticQuery, graphql } from "gatsby";

export const useWorkListQuery = () => {
    const workListData = useStaticQuery(graphql`
    query Myquery {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            frontmatter {
              description
              date
              title
            }
            slug
            id
          }
        }
      }
    `)
    return workListData
}