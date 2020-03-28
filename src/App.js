import React from 'react';
import './App.css';
import NewsFeedProvider from './news/context/provider';
import NewsFeed from './news/components/NewsFeed';

function App() {
  return (
    <div>
      <NewsFeedProvider>
        <NewsFeed />
      </NewsFeedProvider>
    </div>
  );
}

export default App;
