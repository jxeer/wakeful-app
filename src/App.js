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
           <div class="learnmore">
            <h1> Join a growing community of teachers, practicioners and creatives. </h1>
            <a href="#">Learn More</a>
           </div>
            <div class="modalities">
                Featured Modalities
                <br />
                <h2 id="meditation">
                MEDITATION
                </h2>
                <img src="/images/meditation.jpg"></img>
                <br />
                <h3> Cultivate clarity through mindfulness </h3>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
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
