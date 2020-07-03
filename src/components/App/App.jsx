import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../Nav/NavBar';
import Projects from '../Projects/Projects';
import AboutContainer from '../About/AboutContainer';
import Contact from '../Contact/Contact';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import Loading from '../Loading/Loading';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [timeoutStatus, setTimeoutStatus] = useState(null);

  useEffect(() => {
    setTimeoutStatus('initating');
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeoutStatus('completed');
  }, []);

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
