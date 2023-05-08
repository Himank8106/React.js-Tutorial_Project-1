import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >{props.aboutTitle}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode Toggle</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Setting PropType ensures that the same type of prop gets passed in the field. isRequired tells us to to give the input in prop if no input is given in the prop
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired
}

// defaultProp sets these values in the prop if user does not give any input in the prop
Navbar.defaultProps = {
  title: "Set title here",
  aboutTitle: "Set about here"
}