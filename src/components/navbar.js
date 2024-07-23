import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div id="navbar" className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-container">
        <div className="navbar-container1">
          <img
            alt={props.vectorAlt1}
            src={props.vectorSrc1}
            className="navbar-vector"
          />
          <Link to="/" className="navbar-navlink">
            <img
              alt={props.vectorAlt2}
              src={props.vectorSrc2}
              className="navbar-vector1"
            />
          </Link>
        </div>
        <img
          alt={props.vectorAlt}
          src={props.vectorSrc}
          className="navbar-vector2"
        />
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  vectorAlt: 'Vector9162',
  vectorSrc1: '/external/vector6161-5zuf.svg',
  vectorAlt1: 'Vector6161',
  vectorAlt2: 'Vector9163',
  vectorSrc2: '/external/vector9163-i6fw.svg',
  rootClassName: '',
  vectorSrc: '/external/vector9162-jefm.svg',
}

Navbar.propTypes = {
  vectorAlt: PropTypes.string,
  vectorSrc1: PropTypes.string,
  vectorAlt1: PropTypes.string,
  vectorAlt2: PropTypes.string,
  vectorSrc2: PropTypes.string,
  rootClassName: PropTypes.string,
  vectorSrc: PropTypes.string,
}

export default Navbar
