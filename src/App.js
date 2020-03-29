import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListCardsContent from './remote_work/ListCardsContent';
import PageRemoteWork from './remote_work/PageRemoteWork';
import BlogPage from './remote_work/BlogPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/remoteWork/:type/:id" component={BlogPage} />
        <Route exact path="/remoteWork/:type" component={ListCardsContent} />
        <Route exact path="/remoteWork/" component={PageRemoteWork} />
      </Switch>
    </Router>
  );
}

export default App;
