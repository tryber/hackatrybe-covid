import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Study from './pages/Study';
import Teach from './pages/Teach';
import NewsFeed from './news/components/NewsFeed';
import PreventionPage from './pages/Prevention';
import StatusPage from './status/statusPage'
import AboutUs from './about_us/SobreNos';
import { Header, Footer } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={StatusPage} />
        <Route exact path="/news" component={NewsFeed} />
        <Route exact path="/how-to-teach" component={Teach} />
        <Route exact path="/how-to-study" component={Study} />
        <Route path="/prevention" component={PreventionPage} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
