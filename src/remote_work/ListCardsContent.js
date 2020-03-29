import React from 'react';
import CardsContent from './CardsContent';
import content from './contents';

function ListCardsContent({ match: { params: { type } } }) {
  const contentFilter = content.filter((obj) => obj.type === type);
  return (
    <div className="List-Cards-Content">
      <div>ListCardsContent</div>
      {contentFilter.map((obj) => <CardsContent key={obj.title} type={type} obj={obj} />)}
    </div>
  );
}

export default ListCardsContent;
