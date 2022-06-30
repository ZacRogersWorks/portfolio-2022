module.exports = {
  siteMetadata: {
    title: `Zac Rogers | Front End Developer`,
    siteUrl: `https://www.zacrogers.works`,
    description: `Building keen, clean, & serene websites.`,
    author: `Zac Rogers`
  },
  plugins: ["gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "work",
        "path": "./src/work/"
      },
      __key: "work"
    },
    // 'gatsby-plugin-layout',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          
        }
      }
    },
    `gatsby-plugin-anchor-links`,
  ]
};