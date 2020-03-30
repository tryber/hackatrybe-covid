import React from 'react';
import CardsContent from './CardsContent';
import content from './contents';
import "./ListCardsContent.css";

const renderTitlePage = (type) => {
  if (type === "Ferramentas") return (
    <div className="header">
      <h1>Ferramentas</h1>
      <p>Como configurar as ferramentas de trabalho remoto, boas práticas e mais...</p>
    </div>
  )

  if (type === "Professores") return (
    <div className="header">
      <h1>Professores</h1>
      <p>Como dar aulas por meio das plataformas digitais, dicas de produtividade e mais...</p>
    </div>
  )

  if (type === "Estudantes") return (
    <div className="header">
      <h1>Estudantes</h1>
      <p>Dicas de produtividade, técnicas de estudo e mais...</p>
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
