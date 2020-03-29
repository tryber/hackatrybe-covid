import React, { useState, useEffect } from 'react';
import NewsFeedContext from './context';
import GetNewsFeed from '../services/NewsFeedAPI';

const NewsFeedProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if(isFetching) return 
    setIsFetching(true);
    GetNewsFeed(1).then((data) => {
      setData(data);
      setIsFetching(false);
    });
  },[]);

  const context = {
    data,
    isFetching,
  };

  return (
    <NewsFeedContext.Provider value={context}>
      {children}
    </NewsFeedContext.Provider>
  );
};

export default NewsFeedProvider;
