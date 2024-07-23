import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import SeoFinal from '../components/seo-final'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>MIRT</title>
        <meta property="og:title" content="MIRT" />
      </Helmet>
      <Navbar></Navbar>
      <div className="home-hero-banner">
        <div className="home-fundo"></div>
        <div className="home-inner thq-section-max-width">
          <div className="home-interno">
            <img
              alt="Ellipse921078"
              src="/external/ellipse921078-ro08.svg"
              className="home-ellipse92"
            />
            <div className="home-frame2">
              <span className="home-text Titulo-Banner">
                <span>Interativa e itinerante</span>
              </span>
              <span className="home-text02 Texto">
                <span>
                  A MIRT chegou para levar experiências imersivas em realidade
                  virtual até você.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <Link to="/formulario" className="home-navlink">
              <div className="home-frame1000003354 Pointer HoverScale">
                <span className="home-text04 Botao">
                  <span>Quero a MIRT pertinho de mim</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-seo-1">
        <div className="home-fundo1"></div>
        <div className="home-container01">
          <div className="home-interno1 thq-section-max-width">
            <div className="home-group1000003551">
              <span className="home-text06 Titulo-A-Semibold">
                <span>Sobre</span>
              </span>
              <span className="home-text08 Titulo-Banner-2">
                <span>MIRT</span>
              </span>
            </div>
            <span className="home-text10 Texto">
              <span className="home-text11">
                A Mostra Interativa de Robótica e Tecnologia (MIRT) é um projeto
                idealizado e mantido pelo Sesc Santa Catarina.
              </span>
              <br></br>
              <br></br>
              <span>
                Interativa e itinerante, a MIRT leva
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text15">
                experiências imersivas em Realidade Virtual para escolas e
                eventos
              </span>
              <span>
                {' '}
                de Santa Catarina, além de distribuir conteúdos educativos
                online em audiovisual e outros formatos.
              </span>
              <br></br>
              <br></br>
              <span>
                Ao todo são 40 óculos Meta Quest 2 que funcionam sincronizados,
                permitindo que turmas escolares ou participantes de eventos
                façam um mergulho no mundo da robótica, da tecnologia e da
                sustentabilidade.
              </span>
            </span>
          </div>
          <div className="home-textura"></div>
        </div>
      </div>
      <div className="home-seo-2">
        <div className="home-interno2 MaxWidthMenor">
          <div className="home-texto-ei">
            <span className="home-text20 Titulo-A-Semibold">
              <span>Experiências imersivas</span>
            </span>
            <span className="home-text22 Texto">
              <span className="Texto">
                São 3 experiências imersivas disponíveis dentro dos óculos Meta
                Quest 2. 
              </span>
              <span className="Texto">
                Turmas de até 40 pessoas por vez podem participar da
                experiência. 
              </span>
              <span className="home-text25 Texto">
                Quer solicitar uma visita do MIRT à sua escola, cidade ou
                evento?
              </span>
              <span className="Texto">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text27">Clique aqui.</span>
            </span>
          </div>
          <div className="home-container02">
            <img
              alt="image"
              src="/Página Home/secao3%20elemento%20fundo-400h.png"
              className="home-fundo2"
            />
            <img
              alt="image"
              src="/Página Home/secao3%20elemento%20oculos-600w.png"
              className="home-oculos"
            />
          </div>
        </div>
      </div>
      <div className="home-seo-3">
        <div className="home-interno3">
          <img
            alt="image"
            src="/Página Home/slider%20imagem%201-700h.png"
            className="home-image"
          />
          <div className="home-frame1000003600">
            <span className="home-text28 Titulo">
              O mundo sem sair do lugar: cidades digitais
            </span>
            <span className="home-text29 Texto">
              <span>
                Nessa experiência imersiva os participantes vão conhecer mais
                sobre os
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text31">
                desafios de sustentabilidade do planeta e como a robótica e a
                tecnologia são importantes
              </span>
              <span>
                {' '}
                para ajudar os humanos na preservação da vida e do planeta. O
                conteúdo também aborda os Objetivos de Desenvolvimento
                Sustentável.
              </span>
              <br></br>
            </span>
            <span className="home-text34 Texto">Duração: 00min</span>
            <div className="home-indicaes">
              <img
                alt="DJCTQL16141"
                src="/Geral/livre-200w.png"
                className="home-djctql1"
              />
              <img
                alt="Vector9161"
                src="/Geral/sinais-200w.png"
                className="home-vector"
              />
              <img
                alt="Vector9161"
                src="/Geral/ingles-200w.png"
                className="home-vector1"
              />
              <img
                alt="Vector9161"
                src="/Geral/descricao-200w.png"
                className="home-vector2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-seo-4">
        <div className="home-interno4 MaxWidthMenor">
          <div className="home-texto-ei1">
            <span className="home-text35 Titulo-A-Semibold">
              Conteúdos online
            </span>
            <span className="home-text36 Texto">
              <span className="home-text37">
                Assista vídeos-colagem, navegue nas páginas de conteúdo e acesse
                os roteiros pedagógicos. 
              </span>
              <span>
                Os conteúdos do MIRT foram desenvolvidos para aprender se
                divertindo em casa ou na escola. Os materiais online são
                complementares às experiências imersivas presenciais.
              </span>
            </span>
          </div>
          <div className="home-container03">
            <img
              alt="image"
              src="/Página Home/home%20s4%20lego-400h.png"
              className="home-fundo3"
            />
            <img
              alt="image"
              src="/Página Home/secao%204%20computador-500w.png"
              className="home-oculos1"
            />
          </div>
        </div>
      </div>
      <div className="home-seo-5">
        <div className="home-container04 MaxWidthMenor">
          <Link to="/pgina-1">
            <div className="home-container05">
              <img
                alt="image"
                src="/Página Home/secao%206%20banner%201-1200w.png"
                className="home-image1 BoxShadow"
              />
              <div className="home-container06">
                <div className="home-container07 Titulo">
                  <span className="home-text39">01</span>
                </div>
                <span className="home-text40 Texto-Extra">
                  <span>De onde viemos? Para onde vamos?</span>
                  <br></br>
                  <span className="home-text43">
                    Uma breve história da Robótica
                  </span>
                </span>
              </div>
            </div>
          </Link>
          <div className="home-container08">
            <img
              alt="image"
              src="/Página Home/secao%206%20banner%202-1200w.png"
              className="home-image2 BoxShadow"
            />
            <div className="home-container09">
              <div className="home-container10 Titulo">
                <span className="home-text44">02</span>
              </div>
              <span className="home-text45 Texto-Extra">
                <span className="home-text46">Salve a Robótica:</span>
                <span> Ferramentas</span>
                <br></br>
                <span>para um futuro sustentável</span>
              </span>
            </div>
          </div>
          <div className="home-container11">
            <img
              alt="image"
              src="/Página Home/secao%206%20banner%203-1200w.png"
              className="home-image3 BoxShadow"
            />
            <div className="home-container12">
              <div className="home-container13 Titulo">
                <span className="home-text50">03</span>
              </div>
              <span className="home-text51 Texto-Extra">
                <span className="home-text52">
                  Sim, tem um robô perto de você
                </span>
                <br></br>
                <span>(ou terá muito em breve)</span>
              </span>
            </div>
          </div>
          <div className="home-container14">
            <img
              alt="image"
              src="/Página Home/secao%206%20banner%204-1200w.png"
              className="home-image4 BoxShadow"
            />
            <div className="home-container15">
              <div className="home-container16 Titulo">
                <span className="home-text55">04</span>
              </div>
              <span className="home-text56 Texto-Extra">
                <span className="home-text57">Batalha de robôs:</span>
                <span> Quando a educação</span>
                <br></br>
                <span>e o lúdico caminham juntos</span>
              </span>
            </div>
          </div>
          <div className="home-container17">
            <img
              alt="image"
              src="/Página Home/secao%206%20banner%205-1200w.png"
              className="home-image5 BoxShadow"
            />
            <div className="home-container18">
              <div className="home-container19 Titulo">
                <span className="home-text61">05</span>
              </div>
              <span className="home-text62 Texto-Extra">
                <span className="home-text63">Games + robótica:</span>
                <span> Muito além do entretenimento</span>
              </span>
            </div>
          </div>
          <div className="home-container20">
            <img
              alt="image"
              src="/Página Home/secao%206%20banner%206-1200w.png"
              className="home-image6 BoxShadow"
            />
            <div className="home-container21">
              <div className="home-container22 Titulo">
                <span className="home-text65">06</span>
              </div>
              <span className="home-text66 Texto-Extra">
                Prazer, humano, eu sou um robô!
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-seo-6">
        <div className="home-container23 MaxWidthMenor">
          <div className="home-container24">
            <h1 className="home-text67 Subtitulo-A">
              Olá, professor e professora
            </h1>
            <span className="Texto">
              <span className="home-text69">
                Quer trabalhar os conteúdos do MIRT com seus alunos?
              </span>
              <span>
                {' '}
                Além dos conteúdos acima, você também pode baixar roteiros
                pedagógicos com sugestões de atividades vinculadas à BNCC. Assim
                você trabalha os conteúdos do MIRT de forma alinhada ao seu
                plano de ensino.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <form className="home-form">
              <input
                type="text"
                placeholder="Nome completo"
                className="home-textinput Texto"
              />
              <div className="home-container25">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="home-textinput1 Texto"
                />
                <select className="home-select Texto">
                  <option value="UF">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="E-mail"
                className="home-textinput2 Texto"
              />
              <input
                type="text"
                placeholder="Nome da escola"
                className="home-textinput3 Texto"
              />
              <input
                type="text"
                placeholder="Tipo de instituição"
                className="home-textinput4 Texto"
              />
              <input
                type="text"
                placeholder="O que você leciona"
                className="home-textinput5 Texto"
              />
              <div className="home-container26">
                <div className="home-container27">
                  <input
                    type="checkbox"
                    name="aceite_termos"
                    className="home-checkbox"
                  />
                </div>
                <span className="home-text71 Observacao">
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
              <button type="button" className="home-button Botao">
                Baixar conteúdo
              </button>
            </form>
          </div>
        </div>
        <img
          alt="image"
          src="/Página Home/secao%206%20imagem-600w.png"
          className="home-image7"
        />
      </div>
      <SeoFinal></SeoFinal>
    </div>
  )
}

export default Home
