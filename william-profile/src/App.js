import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import SkillSet from './components/SkillSet';
import Project from './components/Project';

function App() {
  return (
    <div className='container'>
        <Header />
        <main>
          <Home />
          <SkillSet />
          <Project />
          <About />
        </main>
        <footer>
          <Footer />
          </footer>
    </div>
  );
}

export default App;
