import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Study from './pages/Study';
import Teach from './pages/Teach';
import News from './pages/News';
import Prevention from './pages/Prevention';
import Header from './components/header';
import './App.css';
import StatusPage from './status/statusPage'

function App() {
  return (
    <Router>
      <div><Header></Header></div>
      <Switch>
        <Route exact path="/" component={StatusPage} />
        <Route exact path="/news" component={News} />
        <Route exact path="/how-to-teach" component={Teach} />
        <Route exact path="/how-to-study" component={Study} />
        <Route path="/prevention" component={Prevention} />
      </Switch>
    </Router>
  );
}

export default App;
