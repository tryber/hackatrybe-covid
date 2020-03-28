import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MapInfo from './pages/MapInfo';
import Study from './pages/Study';
import Teach from './pages/Teach';
import News from './pages/News';
import Prevention from './pages/Prevention';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <Router>
      <div><Header></Header></div>
      <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/how-to-teach" component={Teach} />
        <Route exact path="/how-to-study" component={Study} />
        <Route path="/mapInfo" component={MapInfo} />
        <Route path="/prevention" component={Prevention} />
      </Switch>
    </Router>
  );
}

export default App;