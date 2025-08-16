import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Navbar from'./components/Navbar';
import CARD  from './components/CARD.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>

    <Navbar
    />
      <Home />
      <CARD />
            <Services />

      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Testimonials />
      <ContactUs />
    </>
  );
}


export default App;
