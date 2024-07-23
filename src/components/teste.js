import React, { useState } from 'react'

import PropTypes from 'prop-types'

import ModeloSlide from './modelo-slide'
import './teste.css'

const Teste = (props) => {
  const [isAtivo, setIsAtivo] = useState(false)
  return (
    <div
      className={`teste-container AcordeaoContainer ${props.rootClassName} `}
    >
      <div onClick={() => setIsAtivo(!isAtivo)} className="teste-topo">
        <span className="teste-text Titulo-Extra-B">Cirurgia robótica</span>
        <div className="teste-botoes">
          {isAtivo && (
            <img
              alt="image"
              src="/Geral/icone%20acordeao%20aberto-200h.png"
              className="teste-icone-ativo"
            />
          )}
          {!isAtivo && (
            <img
              alt="image"
              src="/Geral/icone%20acordeao%20aberto-200h.png"
              className="teste-icone-inativo"
            />
          )}
        </div>
      </div>
      <div className="teste-container1">
        <div
          data-thq="slider"
          data-navigation="false"
          data-pagination="true"
          className="teste-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="teste-slider-slide swiper-slide"
            >
              <ModeloSlide
                icone="/Página 1/pagina%201%20slide%201%20icone-700h.png"
                titulo={
                  <fragment>
                    <span className="teste-text01 Titulo">
                      <span>
                        Mais de 27 mil cirurgias robóticas são realizadas no
                        Brasil todos os anos
                      </span>
                      <br></br>
                    </span>
                  </fragment>
                }
                conteudo={
                  <fragment>
                    <span className="Texto">
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
                      <span className="teste-text06">
                        Foi um crescimento de 12,5% em um ano, segundo
                        representantes do setor no mercado.
                      </span>
                      <br className="Texto"></br>
                      <br className="Texto"></br>
                      <span>
                        Desde 2008, quando iniciou a operação do primeiro
                        sistema no país, até o final de 2022 foram feitos cerca
                        de 100 mil procedimentos.
                      </span>
                      <br className="Texto"></br>
                    </span>
                  </fragment>
                }
                imageSrc="/Página 1/pagina%201%20slide%201%20imagem%201-600w.png"
                rootClassName="modelo-slide-root-class-name6"
              ></ModeloSlide>
            </div>
            <div
              data-thq="slider-slide"
              className="teste-slider-slide1 swiper-slide"
            >
              <ModeloSlide
                icone="/Página 1/pagina%201%20slide%201%20icone-700h.png"
                titulo={
                  <fragment>
                    <span className="teste-text11 Titulo">
                      Mais de 27 mil cirurgias robóticas são realizadas no
                      Brasil todos os anos
                    </span>
                  </fragment>
                }
                conteudo={
                  <fragment>
                    <span className="Texto">
                      <span>
                        No vídeo falamos que o
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="teste-text14">
                        primeiro robô foi criado por Leonardo da Vinci
                      </span>
                      <span>, certo? O Autômato.</span>
                      <br className="Texto"></br>
                      <span>
                        É esse
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="teste-text18">
                        mesmo nome que foi dado a um dos robôs mais avançados de
                        cirurgia
                      </span>
                      <span>.</span>
                      <br className="Texto"></br>
                      <br className="Texto"></br>
                      <span>
                        Ao todo mais de 13 milhões de procedimentos já foram
                        realizados ao redor do mundo com robôs da Vinci.
                      </span>
                      <br className="Texto"></br>
                    </span>
                  </fragment>
                }
                imageSrc="/Página 1/pagina%201%20slide%201%20imagem%202-600w.png"
                rootClassName="modelo-slide-root-class-name7"
              ></ModeloSlide>
            </div>
            <div
              data-thq="slider-slide"
              className="teste-slider-slide2 swiper-slide"
            >
              <ModeloSlide
                icone="/Página 1/pagina%201%20slide%201%20icone-700h.png"
                titulo={
                  <fragment>
                    <span className="teste-text24 Titulo">
                      Mais de 27 mil cirurgias robóticas são realizadas no
                      Brasil todos os anos
                    </span>
                  </fragment>
                }
                conteudo={
                  <fragment>
                    <span className="Texto">
                      <span className="teste-text26">
                        O da Vinci ajuda os médicos a realizarem cirurgias com
                        maior precisão.
                      </span>
                      <span>
                        {' '}
                        Mas, para isso, além de ser médico é necessário saber
                        operar o robô.
                      </span>
                      <br className="Texto"></br>
                      <br className="Texto"></br>
                      <span>
                        A robótica e a tecnologia vão transformar bastante o
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="teste-text31">
                        mercado de trabalho do futuro.
                      </span>
                      <br className="Texto"></br>
                      <br className="Texto"></br>
                      <span>
                        Que tal dar uma pesquisada sobre esse assunto no Google?
                      </span>
                      <br className="Texto"></br>
                    </span>
                  </fragment>
                }
                imageSrc="/Página 1/pagina%201%20slide%201%20imagem%203-600w.png"
                rootClassName="modelo-slide-root-class-name8"
              ></ModeloSlide>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="teste-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
            className="teste-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="teste-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Teste.defaultProps = {
  rootClassName: '',
}

Teste.propTypes = {
  rootClassName: PropTypes.string,
}

export default Teste
