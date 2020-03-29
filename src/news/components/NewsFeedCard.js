import React, { useContext } from 'react';
import context from '../context/context';

function NewsFeed() {
  const { data } = useContext(context);

  return (
    <div>
      {data.map((article) =>
        <div key={article.title}>
          <h3>{article.title}</h3>
          <img src={article.url_to_image} alt={article.title} />
          <p>{article.description}</p>
          <a target="blank" href={article.url_to_link}>Ler Notícia</a>
          <h5>{article.published_at}</h5>
        </div>
      )}
    </div>
  )
}

export default NewsFeed;
