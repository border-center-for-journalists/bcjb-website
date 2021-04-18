import React from "react"

import { Box } from "./index.styled"
import tempImg from "../../theme/images/about.png"

export default ({
  audiencia,
  descripcion_corta,
  imagen_de_fondo,
  tipo,
  titulo,
  lang, 
  langCode,
  uid,
})=>(
  <Box href={`/${langCode}/oportunidades/${uid}`}>
    <img src={imagen_de_fondo.url || tempImg} alt="tempImg" />
    <div className="grad"></div>
    <div className="topHolder">
      <div className="topBar">
        <div className="col1">
          <span className="tipo">{lang.texts.type}: {tipo}</span>
          <span >{lang.texts.audience}: {audiencia}</span>
        </div>
        <div className="col2">
          <p></p>
        </div>
      </div>
      <h2>{titulo.text}</h2>
    </div>
    
    <div className="bottomBar">
      <p>{descripcion_corta.text}</p>
    </div>
  </Box>
);
