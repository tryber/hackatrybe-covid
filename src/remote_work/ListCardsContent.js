import React from 'react';
import CardsContent from './CardsContent';
import content from './contents';
import "./ListCardsContent.css";

const renderTitlePage = (type) => {
  if (type === "Ferramenta") return (
    <div className="header">
      <h1>Ferramenta</h1>
      <p>Dicas para Ferramenta super show</p>
    </div>

  )
  if (type === "Professor") return (
    <div className="header">
      <h1>Professor</h1>
      <p>Dicas para Professor super show</p>
    </div>

  )
  if (type === "Estudante") return (
    <div className="header">
      <h1>Estudante</h1>
      <p>Dicas para estudantes super show</p>
    </div>
  )
}

function ListCardsContent({ match: { params: { type } } }) {
  const contentFilter = content.filter((obj) => obj.type === type);
  return (
    <div className="List-Cards-Content">
      {renderTitlePage(type)}
      <div className="content">
        {contentFilter.map((obj) => <CardsContent key={obj.title} type={type} obj={obj} />)}
      </div>
    </div>
  );
}

export default ListCardsContent;
