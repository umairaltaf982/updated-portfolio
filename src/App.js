import './App.css';

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Skills from './components/Skills';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
    </>
  );
}

export default App;