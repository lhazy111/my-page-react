import React from 'react';
import NavbarTop from './components/NavbarTop';
import HeaderTop from './pages/home/HeaderTop';
import About from './pages/About/About';
import Certs from './pages/Certs/Certs';
import InProgress from './pages/InProgress/InProgress';
import Projects from './pages/projects/Projects';
import { Container, Row, Image, Col } from 'react-bootstrap'


function App() {
  return (
    <>
      <HeaderTop />
      <About />
      <Certs />
      <InProgress />
      <Projects />
    </>
  );
}

export default App;
