import React from 'react';
import Home from '../Home/Home';
import NavBar from '../Nav/NavBar';
import Projects from '../Projects/Projects';
import Strengths from '../About/Strengths';
import AboutContainer from '../About/AboutContainer';

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutContainer />
      <Strengths />
      <Projects />
    </>
  );
}
