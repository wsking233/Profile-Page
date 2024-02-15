import React from 'react';
import './App.css';
import Header from './components/Header';
import Router from './Router';
import Footer from './components/Footer';


function App() {
  return (
    <div className='container'>
      <header className='maxContainer'>
        <Header />
        </header>
        <main className='maxContainer'>
          <Router />
        </main>
        <footer className='maxContainer'>
          <Footer />
          </footer>
    </div>
  );
}

export default App;
