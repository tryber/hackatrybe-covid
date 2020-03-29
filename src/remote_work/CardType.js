import React from 'react';
import { Link } from 'react-router-dom';

function CardType({ item: { type = 'Professores', text = 'TEXTINHO SHOW DE BOLA' } }) {
  return (
    <div className="Cards-Content">
      <h2>{type}</h2>
      <p>{text}</p>
      <Link class="button-card" to={`remoteWork/${type}`}>Acessar</Link>
    </div>
  );
}

export default CardType;
