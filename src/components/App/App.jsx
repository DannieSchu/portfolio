import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from '../Projects/Projects';
import AboutContainer from '../About/AboutContainer';
import Contact from '../Contact/Contact';
import Loading from '../Loading/Loading';
const Home = lazy(() => import('../Home/Home'));
const NavBar = lazy(() => import('../Nav/NavBar'));
const ProjectDetail = lazy(() => import('../ProjectDetail/ProjectDetail'));

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
