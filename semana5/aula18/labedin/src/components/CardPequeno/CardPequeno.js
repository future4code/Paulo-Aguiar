import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
  return (
  <div className="cardPequeno">
    <img src={props.icone} />
    <p>{props.nomeInformacao}</p>
    <p>{props.informacao}</p>
  </div>
  )
}

export default CardPequeno
