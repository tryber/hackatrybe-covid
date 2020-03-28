import React, { useContext } from 'react';
import context from '../context/context';

function NewsFeed() {

  const { data } = useContext(context);

  return (
    <div>
      {data.map((articles) =>
        <h3>{articles.title}</h3>
        <p>{articles.description}</p>
      )}





      {/* {data.map((articles) => )} */}
    </div>
  )
}

export default NewsFeed;
