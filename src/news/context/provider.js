import React, { useState, useEffect } from 'react';
import NewsFeedContext from './context';
import GetNewsFeed from '../services/NewsFeedAPI';

const NewsFeedProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    GetNewsFeed(currentPage).then((data) => {
      setData(data);
      setIsFetching(false);
    });
  }, [currentPage]);

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
