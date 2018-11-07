import React from 'react'
import { Container, Card, CardTitle, CardGroup, CardBody } from 'reactstrap'
import Helmet from 'react-helmet'
import { basename } from 'path'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'


// find a post title by path
const findNode = (path, data) => data.allMarkdownRemark.edges
  .map(edge => edge.node.frontmatter)
  .filter(r => r.path === path)
  .pop()

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  const related = post.frontmatter.related ? post.frontmatter.related.map(r => findNode(r.post, data)) : []
  return (
    <Layout>
      <div>
        <Helmet title={`Blog | ${post.frontmatter.title}`}>
        </Helmet>
        <Container>
          <div className="post-container">
            {/*<Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes}/>*/}
            <h1 className='display-3 post-heading'>{post.frontmatter.title}</h1>
          </div>
        </Container>

        <Container className="post-container" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        disqus
      }
    }
    
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        featuredColor
        featuredImage {
          childImageSharp{
            sizes(maxWidth: 1000) {
                ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            path
            featuredColor
            featuredImage {
              childImageSharp{
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
