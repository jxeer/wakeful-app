import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <img src="/images/logo.png"></img>
              <li>
                <a href="#">COMMUNITY</a>
                <a href="#">CLASSES</a>
                <a href="#">WHO WE ARE</a>
                <a href="#">BLOG</a>
                <a href="#">SIGN IN</a>
                <a href="#">SEARCH</a>
                <a href="#">FREE TRIAL</a>
              </li>
            </nav>
          </header>
          <br />
          <br />
          <br />
          <main>
            <div class="modalities">
                Featured Modalities
                <br />
                <img src="/images/meditation.jpg"></img>
                <br />
            </div>
            <div class="teachers">
              Featured Teachers
            </div>
            <div class="practicioners">
              Featured Practicioners
            </div>
          </main>
          <br />
          <br />
          <footer>
            Join newsletter <br />
            links <br />
            Social media <br />
            Copyright <br />
          </footer>
    </div>
  );

}


export default App;
