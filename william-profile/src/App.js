import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Homepage';
import Footer from './components/Footer';


function App() {
  return (
    <div className='container'>
      <header className='maxContainer'>
        <Header />
        </header>
        <main className='maxContainer'>
          <Home />
        </main>
        <footer className='maxContainer'>
          <Footer />
          </footer>
    </div>
  );
}

export default App;
