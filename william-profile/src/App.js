import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';
import { BrowserRouter } from "react-router-dom";

import Router from './components/Router';

function App() {
  return (
    <LanguageProvider>
    <div className='container'>
      <Header />
      <main>
        <BrowserRouter>
        <Router />
        </BrowserRouter>
      </main>
      <Footer />
    </div>
    </LanguageProvider>

  );
}

export default App;
