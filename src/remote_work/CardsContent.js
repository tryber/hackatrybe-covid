import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

function CardsContent({obj}) {
  return (
    <div className="Card-Type">
      <ReactMarkdown
        source={obj.briefing}
      />
    <Link class="button-card"to={`/remote-work/${obj.type}/${obj.title}`}>Acessar</Link>
    </div>
  );
}

export default CardsContent;
