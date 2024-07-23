import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Teste from '../components/teste'
import './pgina-1.css'

const Pgina1 = (props) => {
  return (
    <div className="pgina1-container">
      <Helmet>
        <title>Pgina-1 - MIRT</title>
        <meta property="og:title" content="Pgina-1 - MIRT" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="pgina1-hero">
        <img
          alt="image"
          src="/Geral/fundo%20topo%20pa%C3%AC%C2%81gina-1500w.png"
          className="pgina1-image"
        />
        <div className="pgina1-container1">
          <div className="pgina1-container2">
            <span className="pgina1-text">01</span>
            <div className="pgina1-container3">
              <span className="pgina1-text01 Subtitulo-A">
                <span className="pgina1-text02">
                  De onde viemos? Para onde vamos?
                </span>
                <br></br>
                <span>Uma breve história da Robótica</span>
              </span>
              <div className="pgina1-container4">
                <div className="pgina1-boto">
                  <span className="pgina1-text05 Botao">
                    Clique para abrir a versão acessível
                  </span>
                </div>
                <div className="pgina1-indicaes">
                  <img
                    alt="Vector9161"
                    src="/Geral/sinais-200w.png"
                    className="pgina1-vector"
                  />
                  <img
                    alt="Vector9161"
                    src="/Geral/ingles-200w.png"
                    className="pgina1-vector1"
                  />
                  <img
                    alt="Vector9161"
                    src="/Geral/descricao-200w.png"
                    className="pgina1-vector2"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/Página 1/banner%20video%201-1400w.png"
            className="pgina1-image1"
          />
          <div className="pgina1-container5">
            <img
              alt="Vector1068"
              src="/external/vector1068-4e2.svg"
              className="pgina1-vector3"
            />
            <span>
              <span className="pgina1-text07">Vá além e aprenda mais</span>
              <span> a partir dos</span>
              <br></br>
              <span>conteúdos que você assistiu no vídeo</span>
            </span>
          </div>
        </div>
      </div>
      <div className="pgina1-container6">
        <Teste rootClassName="teste-root-class-name"></Teste>
      </div>
    </div>
  )
}

export default Pgina1
