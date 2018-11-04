import React from 'react'
import { Container, Card} from 'reactstrap'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.filter(post => !post.node.frontmatter.hidden && post.node.frontmatter.contentType === 'blog')
  //let color = "background: "
  return (
    <Layout>
      <Container className="grid-base">
        {posts.map(({ node: post }) => (
          <Card key={post.id} className="post-card">
            <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes}/>
            <Link to={post.frontmatter.path}>
              <div className="post-hover-info" style={{backgroundColor: '#'+post.frontmatter.featuredColor}}>
                <h3>{post.frontmatter.title}</h3>
              </div>
            </Link>
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
            featuredColor
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
