import React from 'react';
import NavbarTop from './components/NavbarTop';
import HeaderTop from './pages/home/HeaderTop';
import About from './pages/About/About';
import Certs from './pages/Certs/Certs';
import InProgress from './pages/InProgress/InProgress';

function App() {
  return (
    <>
      <NavbarTop />
      <HeaderTop />
      <About />
      <Certs />
      <InProgress />
    </>
  );
}

export default App;
