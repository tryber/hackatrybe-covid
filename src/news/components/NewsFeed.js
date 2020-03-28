import React, { useContext } from 'react';
import context from '../context/context';
import NewsFeedCard from './NewsFeedCard';

function NewsFeed() {

  const { isFetching } = useContext(context);

  if (isFetching) return "Loading...";

  return (
    <div>
      <NewsFeedCard />
    </div>
  )
}

export default NewsFeed;
