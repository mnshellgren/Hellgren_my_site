import React from 'react'
import { Container, Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  return (
    <Layout>
      <Container className="grid-base">
        {posts.map(({ node: post }) => (
          <Card key={post.id}>
            <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes}/>
            {/*<CardBody>
              <CardTitle><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></CardTitle>
              <CardSubtitle style={{marginBottom: 10}}>{post.frontmatter.date}</CardSubtitle>
        <CardText>{post.excerpt}</CardText>
            </CardBody>*/}
          </Card>
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            contentType
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
            path
            hidden
          }
        }
      }
    }
  }
`
