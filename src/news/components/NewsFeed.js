import React, { useContext } from 'react';
import context from '../context/context';
import NewsFeedCard from './NewsFeedCard';

function NewsFeed() {

  const { data, isFetching } = useContext(context);
  console.log(data);

  if (isFetching) return "Loading...";

  return (
    <div>
      <NewsFeedCard />
    </div>
  )
}

export default NewsFeed;
