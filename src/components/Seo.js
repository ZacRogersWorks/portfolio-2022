import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export const Seo = ({ description, keywords, title, image, url, author }) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                const metaAuthor = author || data.site.siteMetadata.author
                const metaImage = image || data.site.siteMetadata.image
                const metaUrl = url || data.site.siteMetadata.url
                const metaKeywords = keywords || ["web design for small businesses", "web development for small businesses", "threejs web development services", "interactive web development services", "seattle web developer", "web development packages"]
                return (
                    <Helmet title={title}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription
                            },
                            {
                                property: `og:title`,
                                content: metaTitle
                            },
                            {
                                property: `og:description`,
                                content: metaDescription
                            },
                            {
                                property: `og:type`,
                                content: `website`
                            },
                            {
                                property: `og:img`,
                                content: metaImage
                            },
                            {
                                property: `og:url`,
                                content: metaUrl
                            },
                            {
                                name: `twitter:card`,
                                content: `summary-large-image`
                            },
                            {
                                name: `twitter:creator`,
                                content: metaAuthor
                            },
                            {
                                name: `twitter:title`,
                                content: metaTitle
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription
                            },
                            {
                                name: `twitter:image`,
                                content: metaImage
                            }
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords.join(`, `)
                            } : []
                        )}
                    />
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query defaultSeo {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`