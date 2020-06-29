import React from 'react';
//import './App.css';
import NavbarTop from './components/NavbarTop';
import HeaderTop from './components/HeaderTop';
import About from './components/About';
import { Certs } from './components/Certs';

function App() {
  return (
    <>
      <NavbarTop />
      <HeaderTop />
      <About />
      <Certs />
    </>
  );
}

export default App;
