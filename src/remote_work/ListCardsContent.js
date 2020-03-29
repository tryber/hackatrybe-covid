import React from 'react';
import CardsContent from './CardsContent';
import content from './contents';

function ListCardsContent({ match: { params: { type } } }) {
  console.log(content)
  const contentFilter = content.filter((obj) => obj.type === type);
  return (
    <div className="List-Cards-Content">
      {contentFilter.map((obj) => <CardsContent type={type} obj={obj} />)}
    </div>
  );
}

export default ListCardsContent;
