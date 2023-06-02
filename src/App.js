import React from 'react';
import {Cta ,Navbar } from './components';
import { Features, Footer, Header } from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='gradient__nh'>
          <Navbar />
          <Header />
        </div>
        <Features />
        <Cta />
        <Footer />
    </div>
  );
}

export default App;
