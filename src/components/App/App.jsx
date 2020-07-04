import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../Nav/NavBar';
import Projects from '../Projects/Projects';
import AboutContainer from '../About/AboutContainer';
import Contact from '../Contact/Contact';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import Loading from '../Loading/Loading';
import { useLoading, useTimeoutStatus } from '../../hooks/LoadingProvider';

export default function App() {
  const isLoading = useLoading();
  const timeoutStatus = useTimeoutStatus();

  if(isLoading) {
    return <Loading timeoutStatus={timeoutStatus} />;
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/project/:title' component={ProjectDetail} />
        <Route exact path='/'>
          <NavBar />
          <Home />
          <AboutContainer />
          <Projects />
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
