import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './backup.css'

const Backup = (props) => {
  const [isAtivo, setIsAtivo] = useState(false)
  return (
    <div className={`backup-container ${props.rootClassName} `}>
      <div className="backup-container1">
        <div onClick={() => setIsAtivo(!isAtivo)} className="backup-topo">
          <span className="backup-text Titulo-Extra-B">Cirurgia robótica</span>
          <div className="backup-botoes">
            {isAtivo && (
              <img
                alt="image"
                src="/Geral/icone%20acordeao%20aberto-200h.png"
                className="backup-icone-ativo"
              />
            )}
            {!isAtivo && (
              <img
                alt="image"
                src="/Geral/icone%20acordeao%20aberto-200h.png"
                className="backup-icone-inativo"
              />
            )}
          </div>
        </div>
        {isAtivo && (
          <div className="backup-container2">
            <div
              data-thq="slider"
              data-autoplay="true"
              data-navigation="true"
              data-pagination="false"
              className="backup-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="backup-slider-slide swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="backup-slider-slide1 swiper-slide"
                ></div>
                <div
                  data-thq="slider-slide"
                  className="backup-slider-slide2 swiper-slide"
                ></div>
              </div>
              <div
                data-thq="slider-pagination"
                className="backup-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="backup-slider-button-prev swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="backup-slider-button-next swiper-button-next"
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Backup.defaultProps = {
  rootClassName: '',
}

Backup.propTypes = {
  rootClassName: PropTypes.string,
}

export default Backup
