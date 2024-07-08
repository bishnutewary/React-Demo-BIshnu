// import React, { memo } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// export default memo(function Navbar(props) {
  export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode } bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.pageTitle}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn  btn-primary" type="submit">Search</button>
      </form> */}

<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMOde}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
// })
  }
  Navbar.propTypes = {
    pageTitle: PropTypes.string.isRequired, homeText: PropTypes.string, aboutText: PropTypes.string
}

Navbar.defaultProps = {
    pageTitle: 'Page Title here', homeText: 'Home nav text', aboutText: 'About nav text'
  }

