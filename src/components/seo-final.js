import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './seo-final.css'

const SeoFinal = (props) => {
  return (
    <div className="seo-final-seo-final">
      <div className="seo-final-container thq-section-max-width">
        <div className="seo-final-container1">
          <div className="seo-final-container2">
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="seo-final-image"
            />
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="seo-final-image1"
            />
          </div>
          <Link
            to="/formulario"
            className="seo-final-navlink Pointer Botao HoverScale"
          >
            {props.button}
          </Link>
        </div>
        <div className="seo-final-robo">
          <img
            src={props.imageSrc5}
            alt={props.imageAlt5}
            className="seo-final-image2"
          />
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="seo-final-image3"
          />
        </div>
        <a href="#navbar" className="seo-final-link">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="seo-final-image4"
          />
        </a>
        <img
          alt={props.imageAlt2}
          src={props.imageSrc2}
          className="seo-final-image5"
        />
      </div>
    </div>
  )
}

SeoFinal.defaultProps = {
  button: 'Quero o MIRT pertinho de mim',
  imageAlt2: 'image',
  imageSrc1: '/seção final/secao%20final%20flecha-800h.png',
  imageAlt4: 'image',
  imageSrc3: '/seção final/secao%20final%20sesc-800h.png',
  imageAlt: 'image',
  imageSrc4: '/seção final/secao%20final%20mostra-800h.png',
  imageSrc: '/seção final/secao%20final%20robo-800h.png',
  imageAlt3: 'image',
  imageSrc2: '/seção final/secao%20final%20grid-800h.png',
  imageAlt1: 'image',
  imageSrc5: '/seção final/secao%20final%20sombra%20robo-800h.png',
  imageAlt5: 'image',
}

SeoFinal.propTypes = {
  button: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt5: PropTypes.string,
}

export default SeoFinal
