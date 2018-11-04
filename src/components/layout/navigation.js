import React, { Component } from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class Navigation extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasStyling: true,
      currentLink: "projects"
    }

    this.isActive = this.isActive.bind(this)
    //this.isBlog = this.isBlog.bind(this)
    this.isPage = this.isPage.bind(this)
    this.setActive = this.setActive.bind(this)
    this.setHome = this.setHome.bind(this)
  }

  componentDidMount() {
    //let lastPart = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    let urlEnding = window.location.pathname

    let isPage = (urlEnding != "/")? true : false
    let currentURL = isPage ? urlEnding.replace(/\//g, '') : "home"

    this.setState({
      currentLink: isPage? currentURL : "projects"
    })
  }
  isActive(linkName) {
   return((this.state.currentLink === linkName)? true : false)
  }
  /*
  isBlog() {
    let urlEnding = ''
    if (typeof window !== 'undefined') {
      urlEnding = window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    }
    let isBlog

    if (urlEnding.length == 0) {
      isBlog = false
    }
    else {
      switch(urlEnding) {
        case 'about':
          break;
        case 'insights':
          break;
        case 'services':
          break;
        case 'books':
          break;
        case 'contact':
          break;
        default:
          isBlog = true
      }
    }


    return isBlog
  }*/
  isPage() {
    return this.state.hasStyling
  }
  setActive(linkName) {
    this.setState({currentLink: linkName, hasStyling: true})
  }
  setHome() {
    this.setState({currentLink: "home", hasStyling: false })
  }
  render() {
    return (
        <ul className='nav navbar-nav'>
                {this.props.user && (
                <li className='nav-item'>
                  <span></span>
                  <a href='/admin' className='nav-link'>Admin</a>
                </li>
                )}

                <li className='nav-item'>
                  <span className={this.isActive("about")? "text-backdrop active" : "text-backdrop"}>
                    <Link to='/about' className="nav-link" onClick={() => this.setActive("about")}>About</Link>
                  </span>
                </li>
                <li className='nav-item'>
                  <span className={this.isActive("projects")? "text-backdrop active" : "text-backdrop"}>
                    <Link to='/' className="nav-link" onClick={() => this.setActive("projects")}>Projects</Link>
                  </span>
                </li>
                <li className='nav-item'>
                  <span className={this.isActive("photography")? "text-backdrop active" : "text-backdrop"}>
                    <Link to='/photography' className="nav-link" onClick={() => this.setActive("photography")}>Photography</Link>
                  </span>
                </li>
        </ul>
    )
  }
}
