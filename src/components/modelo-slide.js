import React from 'react'

import PropTypes from 'prop-types'

import './modelo-slide.css'

const ModeloSlide = (props) => {
  return (
    <div className={`modelo-slide-container ${props.rootClassName} `}>
      <div className="modelo-slide-interno">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="modelo-slide-image"
        />
        <div className="modelo-slide-frame1000003600">
          <img
            alt={props.iconeAlt}
            src={props.icone}
            className="modelo-slide-image1"
          />
          <span className="modelo-slide-text Titulo">
            {props.titulo ?? (
              <fragment>
                <span className="modelo-slide-text02 Titulo">
                  Mais de 27 mil cirurgias robóticas são realizadas no Brasil
                  todos os anos
                </span>
              </fragment>
            )}
          </span>
          <span className="modelo-slide-text01">
            {props.conteudo ?? (
              <fragment>
                <span className="Texto">
                  <span>
                    <span>
                      O número de cirurgias realizadas com o auxílio da
                      plataforma robótica no Brasil saltou de 24 mil (2021),
                      para 27 mil (2022).
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span className="modelo-slide-text07">
                    Foi um crescimento de 12,5% em um ano, segundo
                    representantes do setor no mercado.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Desde 2008, quando iniciou a operação do primeiro sistema no
                    país, até o final de 2022 foram feitos cerca de 100 mil
                    procedimentos.
                  </span>
                  <br></br>
                </span>
              </fragment>
            )}
          </span>
          <div className="modelo-slide-indicaes">
            <img
              alt="DJCTQL16141"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db61e60f-f9a6-4cef-be27-22ed7a9fc1e8/ab89358c-b2da-4b38-86bb-9989e669fcf6?org_if_sml=1394&amp;force_format=original"
              className="modelo-slide-djctql1"
            />
            <img
              alt="Vector9161"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db61e60f-f9a6-4cef-be27-22ed7a9fc1e8/e6918395-74e0-4cfd-8da7-32c352697497?org_if_sml=11575&amp;force_format=original"
              className="modelo-slide-vector"
            />
            <img
              alt="Vector9161"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db61e60f-f9a6-4cef-be27-22ed7a9fc1e8/0ef987e4-143a-40b0-87f4-c59b78e01046?org_if_sml=1672&amp;force_format=original"
              className="modelo-slide-vector1"
            />
            <img
              alt="Vector9161"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/db61e60f-f9a6-4cef-be27-22ed7a9fc1e8/36a7d173-7d51-4b57-89be-75cd3b112c6a?org_if_sml=11045&amp;force_format=original"
              className="modelo-slide-vector2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

ModeloSlide.defaultProps = {
  icone: '0159c693-fac1-4521-9112-4d9e5b00d3fb',
  imageAlt: 'image',
  titulo: undefined,
  iconeAlt: 'icone',
  conteudo: undefined,
  rootClassName: '',
  imageSrc: '24089cec-bf7e-49dc-ae3e-b8201890ba2c',
}

ModeloSlide.propTypes = {
  icone: PropTypes.string,
  imageAlt: PropTypes.string,
  titulo: PropTypes.element,
  iconeAlt: PropTypes.string,
  conteudo: PropTypes.element,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default ModeloSlide
