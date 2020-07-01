import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../Nav/NavBar';
import Projects from '../Projects/Projects';
import AboutContainer from '../About/AboutContainer';
import Contact from '../Contact/Contact';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

export default function App() {
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
