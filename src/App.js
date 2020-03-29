import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ListCardsContent from './remote_work/ListCardsContent';
import PageRemoteWork from './remote_work/PageRemoteWork';

function App(props) { 
  return (
    <Router>
      <Switch>
        <Route exact path="/remoteWork/:type" component={ListCardsContent} />
        <Route exact path="/" component={PageRemoteWork} />
      </Switch>
    </Router>
  );
}

export default App;
