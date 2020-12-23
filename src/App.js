import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Homepage from './components/Homepage.js'

function App() {
  return (
    <div className="App">
          <Navbar />
          <Homepage />
          <Footer />
    </div>
  );
}
export default App;
