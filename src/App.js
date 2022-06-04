import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Navbar from './component/Navbar'
import Bannner from './component/Bannner'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Team from './component/Team'
import Progress from './component/Progress'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  return (
  <>
      <>
      
      <Navbar />

      <Bannner />

      <Skills />

      <Projects />

      <Team />

      <Progress />

      <Contact />

      <Footer />
    </>
  </>
  );
}

export default App;
