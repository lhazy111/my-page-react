import React from 'react';
import HeaderTop from './pages/home/HeaderTop';
import About from './pages/About/About';
import Certs from './pages/Certs/Certs';
import InProgress from './pages/InProgress/InProgress';
import Projects from './pages/projects/Projects';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <>
      <HeaderTop />
      <About />
      <Certs />
      <InProgress />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
