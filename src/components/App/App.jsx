import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from '../Loading/Loading';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

const Projects = lazy(() => import('../Projects/Projects'));
const AboutContainer = lazy(() => import('../About/AboutContainer'));
const Contact = lazy(() => import('../Contact/Contact'));
const Home = lazy(() => import('../Home/Home'));
const NavBar = lazy(() => import('../Nav/NavBar'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading background="fullscreen" />}>
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
      </Suspense>
    </Router>
  );
}
