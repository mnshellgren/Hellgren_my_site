module.exports = {
  siteMetadata: {
    title: 'Måns Hellgren',
    author: 'Mans Hellgren',
    authorLink: 'https://github.com/konsumer',
    disqus: 'gatsby-starter-blog'// put your disqus ID here
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/examples`,
        name: 'examples'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/`],
        precision: 8
      }
    }
  ]
}
