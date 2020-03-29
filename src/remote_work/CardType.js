import React from 'react';
import { Link } from 'react-router-dom';
import './CardType.css';

function CardType({ item: { type, text } }) {
  return (
    <div className="Card-Type">
      <h3>{type}</h3>
      <p>{text}</p>
      <Link class="button-card" to={`/remoteWork/${type}`}>Acessar</Link>
    </div>
  );
}

export default CardType;
