import React, { useContext } from 'react';
import context from '../context/context';

function NewsFeed() {
  const { data } = useContext(context);

  return (
    <div>
      {data.map((articles) =>
        <div key={articles.title}>
          <h3>{articles.title}</h3>
          <img src={articles.urlToImage} alt={articles.title} />
          <p>{articles.description}</p>
          <a target="blank" href={articles.url}>Ler Notícia</a>
          <h5>{articles.publishedAt}</h5>
        </div>
      )}
    </div>
  )
}

export default NewsFeed;
