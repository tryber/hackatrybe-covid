import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Study from './pages/Study';
import Teach from './pages/Teach';
import NewsFeed from './news/components/NewsFeed';
import PreventionPage from './pages/Prevention';
import Header from './components/header';
import './App.css';
import StatusPage from './status/statusPage'
import AboutUs from './about_us/SobreNos';

function App() {
  return (
    <Router>
      <div><Header/></div>
      <Switch>
        <Route exact path="/" component={StatusPage} />
        <Route exact path="/news" component={NewsFeed} />
        <Route exact path="/how-to-teach" component={Teach} />
        <Route exact path="/how-to-study" component={Study} />
        <Route path="/prevention" component={PreventionPage} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </Router>
  );
}

export default App;
