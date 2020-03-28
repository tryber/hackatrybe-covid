import React, { useContext } from 'react';
import context from '../context/context';

function NewsFeed() {

  const { data, isFetching } = useContext(context);
  console.log(data);

  if (isFetching) return "Loading...";

  return (
    <div>
      <ul>
        {data.map((nomeAutores) => <li>{nomeAutores.author}</li>)}
      </ul>
    </div>
  )
}

export default NewsFeed;
