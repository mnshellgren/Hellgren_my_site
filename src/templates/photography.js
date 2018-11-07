import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { basename } from 'path'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

// find a post title by path
const findNode = (path, data) => data.allMarkdownRemark.edges
  .map(edge => edge.node.frontmatter)
  .filter(r => r.path === path)
  .pop()

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div>
        <Helmet title={`Blog | ${post.frontmatter.title}`}>
        </Helmet>
        <Container>
          <h1 className='display-3'>{post.frontmatter.title}</h1>
        </Container>

        <Container dangerouslySetInnerHTML={{ __html: post.html }} />

        {/*post.frontmatter.related && (<Container><h4>Related</h4><CardGroup>
          {related.map((r, i) => (
            <Card key={i}>
              <CardBody>
                <CardTitle>
                  <Link to={r.path}>{r.title}</Link>
                </CardTitle>
              </CardBody>
            </Card>
          ))}
          </CardGroup></Container>)*/}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PhotoPostByPath($path: String!) {
     markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        related {
          post
        }
      }
    }

    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            path
          }
        }
      }
    }
  }
`
