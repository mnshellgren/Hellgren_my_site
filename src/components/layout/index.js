import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Navigation from './navigation.js'
import Particles from 'react-particles-js'

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

const TemplateWrapper = ({ children, data }) => {
  let user
  let particlestyles = {
    position: 'fixed',
    zIndex: '-1'
  }
  if (typeof window !== 'undefined') {
    user = window.netlifyIdentity && window.netlifyIdentity.currentUser()
  }
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet title={data.site.siteMetadata.title} />
        <Particles params={{
          "particles": {
            "number": {
              "value": 43,
              "density": {
                "enable": false,
                "value_area": 252
              }
            },
            "color": {
              "value": "#e1e1e1"
            },
            "shape": {
              "type": "triangle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 3
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 8,
                "size_min": 8.7,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#fff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1.6,
              "direction": "left",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": false
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 170,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
          }}
        style={particlestyles} 
        />
        <div className='navbar navbar-expand-lg'>
          <Container className="main-header">
            <div className="flex-wrapper">
              
              <div className="title-container">
                <span className="title-backdrop"><Link to='/' className='text-title'>{data.site.siteMetadata.title}</Link></span>
                <p className="text-roles padding-left-small margin-top-xsmall">UX thinker <br></br> Web developer <br></br> Hobby photographer</p>
                <p className="text-roles padding-left-small margin-top-small"> hej@hellgren.space <br></br>+46730573037</p>
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
