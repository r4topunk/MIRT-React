import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './formulario.css'

const Formulario = (props) => {
  return (
    <div className="formulario-container">
      <Helmet>
        <title>Formulario - MIRT</title>
        <meta property="og:title" content="Formulario - MIRT" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="formulario-seo-1">
        <div className="formulario-container1">
          <div className="formulario-container2">
            <span className="formulario-text Titulo-Banner">
              <span>Quero a MIRT</span>
              <br></br>
              <span>pertinho de mim</span>
            </span>
            <span className="formulario-text4 Texto">
              <span>
                Leve a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="formulario-text6">
                MIRT para a sua escola, evento ou qualquer atividade com
                tecnologia.
              </span>
              <span>
                {' '}
                Preencha o formulário para solicitar uma visita à MIRT.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <form className="formulario-form BoxShadow">
              <select className="formulario-select Texto">
                <option value="Option 1">Atividade</option>
              </select>
              <textarea
                placeholder="Descrição da atividade"
                className="formulario-textarea Texto"
              ></textarea>
              <div className="formulario-container3">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="formulario-textinput Texto"
                />
                <select className="formulario-select1 Texto">
                  <option>UF</option>
                </select>
              </div>
              <input
                type="date"
                placeholder="Data"
                className="formulario-textinput1 Texto"
              />
              <input
                type="text"
                placeholder="Nome completo"
                className="formulario-textinput2 Texto"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="formulario-textinput3 Texto"
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="formulario-textinput4 Texto"
              />
              <input
                type="text"
                placeholder="Nome da instituição"
                className="formulario-textinput5 Texto"
              />
              <input
                type="text"
                placeholder="Tipo de instituição"
                className="formulario-textinput6 Texto"
              />
              <input
                type="text"
                placeholder="O que você leciona?"
                className="formulario-textinput7 Texto"
              />
              <input
                type="text"
                placeholder="Informações adicionais"
                className="formulario-textinput8 Texto"
              />
              <div className="formulario-container4">
                <div className="formulario-container5">
                  <input
                    type="checkbox"
                    name="aceite_termos"
                    className="formulario-checkbox"
                  />
                </div>
                <span className="formulario-text8 Observacao">
                  Aceito receber novos conteúdos do MIRT e do Sesc Santa
                  Catarina e estou de acordo com os termos de uso dos meus
                  dados.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <button type="button" className="formulario-button Botao">
                Enviar solicitação
              </button>
            </form>
          </div>
          <img
            alt="image"
            src="/Página Formulário/submarino-900h.png"
            className="formulario-image FloatAnimation"
          />
        </div>
      </div>
    </div>
  )
}

export default Formulario
