import React from 'react';
import NewsFeedProvider from './context/provider';
import NewsFeed from './components/NewsFeed';

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
