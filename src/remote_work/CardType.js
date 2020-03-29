import React from 'react';
import { Link } from 'react-router-dom';

function CardType({ item: { type, text } }) {
  return (
    <div className="Card-Type">
      <h2>{type}</h2>
      <p>{text}</p>
      <Link class="button-card" to={`/remoteWork/${type}`}>Acessar</Link>
    </div>
  );
}

export default CardType;
