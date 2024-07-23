import React, { useState } from 'react'

import './indicaes.css'

const Indicaes = (props) => {
  const [sinais, setSinais] = useState(true)
  const [descricao, setDescricao] = useState(true)
  const [livre, setLivre] = useState(true)
  const [ingles, setIngles] = useState(true)
  return (
    <div className="indicaes-indicaes">
      {livre && (
        <img
          alt="DJCTQL16141"
          src="/external/djctql16141-mf4r-200w.png"
          className="indicaes-djctql1"
        />
      )}
      {sinais && (
        <img
          alt="Vector9161"
          src="/external/vector9161-azn.svg"
          className="indicaes-vector"
        />
      )}
      {ingles && (
        <img
          alt="Vector9161"
          src="/external/vector9161-t2dc.svg"
          className="indicaes-vector1"
        />
      )}
      {descricao && (
        <img
          alt="Vector9161"
          src="/external/vector9161-z5fa.svg"
          className="indicaes-vector2"
        />
      )}
    </div>
  )
}

export default Indicaes
