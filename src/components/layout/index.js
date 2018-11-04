import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Navigation from './navigation.js'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

const TemplateWrapper = ({ children, data }) => {
  let user
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />
        <div className='navbar navbar-expand-lg'>
          <Container className="main-header">
            <div className="flex-wrapper">
              <div className="title-container">
                <span className="title-backdrop"><Link to='/' className='text-title'>{data.site.siteMetadata.title}</Link></span>
                <p className="text-roles padding-left-small margin-top-xsmall">UX thinker <br></br> Web developer <br></br> Hobby photographer</p>
                <p className="text-body padding-left-small margin-top-small"> hej@hellgren.space <br></br>+46730573037</p>
              </div>

              <div className="nav-wrapper">
              <Navigation user={user}/>
              {/*<ul className='nav navbar-nav'>
                {user && (
                <li className='nav-item'>
                  <span></span>
                  <a href='/admin' className='nav-link'>Admin</a>
                </li>
                )}

                <li className='nav-item'>
                  <span className="text-backdrop">
                    <Link to='/about' className='nav-link'>About</Link>
                  </span>
                </li>
                <li className='nav-item'>
                  <span className="text-backdrop">
                    <Link to='/' className='nav-link'>Projects</Link>
                  </span>
                </li>
                <li className='nav-item'>
                  <span className="text-backdrop">
                    <Link to='/photography' className='nav-link'>Photography</Link>
                  </span>
                </li>
                </ul>*/}

              </div>
            </div>
            
          </Container>
        </div>
        <div className='pageContent'>{children}</div>
      </div>
    )} />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.object
}

const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper