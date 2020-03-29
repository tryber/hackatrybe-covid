import React, { useState, useEffect } from 'react';
import NewsFeedContext from './context';
import GetNewsFeed from '../services/NewsFeedAPI';

const NewsFeedProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const api_data = GetNewsFeed();
    console.log(data);
    api_data.then((data) => {
      setData(data.articles);
      setIsFetching(false);
    });
  }, []);

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