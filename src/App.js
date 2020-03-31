import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListCardsContent from './remote_work/ListCardsContent';
import PageRemoteWork from './remote_work/PageRemoteWork';
import BlogPage from './remote_work/BlogPage';
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
        <Route path="/prevention" component={PreventionPage} />
        <Route exact path="/remote-work/" component={PageRemoteWork} />
        <Route exact path="/remote-work/:type" component={ListCardsContent} />
        <Route exact path="/remote-work/:type/:id" component={BlogPage} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
