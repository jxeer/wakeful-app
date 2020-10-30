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
           <h3>Featured Modalities</h3>
            <div class="modalities">
                <br />
                <div class="container-1">
                  <img id="meditationImg" src="/images/meditation.jpg"></img>
                  <br />
                  <div class="container-1.5">
                  <h4 id="meditationTitle">
                  M E D I T A T I O N
                  </h4>
                  <h2 id="meditationSubTitle"> Cultivate clarity through daily mindfulness </h2>
                  <p id="meditationBlurb">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  <br />
                  <a id="readmore" href="#">Read More...</a>
                  </p>
                  </div>
                </div>
            </div>
            <h3>Featured Instructors</h3>
            <div class="container-2">
              <img src="/images/grey.png"></img>
              <img src="/images/grey.png"></img>
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
