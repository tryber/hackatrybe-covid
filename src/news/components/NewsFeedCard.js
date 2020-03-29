import React, { useContext } from 'react';
import context from '../context/context';

function NewsFeed() {
  const { data } = useContext(context);

  return (
    <div>
      {data.map((article) =>
        <div key={article.title}>
          <h3>{article.title}</h3>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
          <a target="blank" href={article.url}>Ler Notícia</a>
          <h5>{article.publishedAt}</h5>
        </div>
      )}
    </div>
  )
}

export default NewsFeed;
