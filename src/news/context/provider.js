import React, { useState } from 'react';
import NewsFeedContext from './context'

const NewsFeedProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function GetSubreddit() {
    setIsFetching(true)
    await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY`)
      .then((response) => (response.json()))
      .then(data => setData(data.data.children))
    setIsFetching(false)
  };
  
  const context = {
    data,
    isFetching,
    GetSubreddit,
    setData,
  };

  return (
    <NewsFeedContext.Provider value={context}>
      {children}
    </NewsFeedContext.Provider>
  );
}

export default NewsFeedProvider;
