import React from 'react';
import Home from '../Home/Home';
import NavBar from '../Nav/NavBar';
import Projects from '../Projects/Projects';
import AboutContainer from '../About/AboutContainer';
import Contact from '../Contact/Contact';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutContainer />
      <Projects />
      <Contact />
      <ProjectDetail />
    </>
  );
}
