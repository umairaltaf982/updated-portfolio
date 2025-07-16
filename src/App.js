import './App.css';

import React from 'react';
import Header from './components/heroSection/Header';
import Hero from './components/heroSection/Hero';
import Skills from './components/skillSection/Skills';
import ExperienceSection from './components/experienceSection/Experience';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <ExperienceSection/>
    </>
  );
}

export default App;