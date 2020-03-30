import React, { useContext } from 'react';
import context from '../context/context';
import NewsFeedCard from './NewsFeedCard';
import './NewsFeedCard.css';

function NewsFeed() {
  const { isFetching } = useContext(context);
  if (isFetching) return "Loading...";
  return (
    <div className="newsFeed">
      <NewsFeedCard />
    </div>
  )
}

export default NewsFeed;
