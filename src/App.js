import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListCardsContent from './remote_work/ListCardsContent';
import PageRemoteWork from './remote_work/PageRemoteWork';
import BlogPage from './remote_work/BlogPage';
import Study from './pages/Study';
import Teach from './pages/Teach';
import News from './pages/News';
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
        <Route exact path="/remoteWork/:type/:id" component={BlogPage} />
        <Route exact path="/remoteWork/:type" component={ListCardsContent} />
        <Route exact path="/remoteWork/" component={PageRemoteWork} />
        <Route exact path="/" component={StatusPage} />
        <Route exact path="/news" component={News} />
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
