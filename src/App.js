import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <img src="/images/logo.png" alt=""></img>
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
                <br />
                <div class="container-1">
                  <img id="meditationImg" src="/images/meditation.jpg" alt=""></img>
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
              <img src="/images/grey.png" alt=""></img>
              <img src="/images/grey.png" alt=""></img>
            </div>
          </main>
          <br />
          <br />
          <footer>
            <h2>Get updates about new workshops, instructors and events.</h2><br />
            <input type="text" id="email" name="email"></input>
            <div class="footer-links">
             <div class="fcolumn1">
              <ul>ABOUT US</ul>
              <ul>FAQ</ul>
              <ul>PRESS</ul>
            </div>
            <div class="fcolumn2">
              <ul>CONTACT</ul>
              <ul>PRIVACY POLICY</ul>
              <ul>TERMS & CONDITIONS</ul>
              </div>
            <div class="fcolumn3">
              <ul>Connect With Us</ul>
              <ul>Social media buttons</ul>
            </div>
          </div>
          <p class="copyright">Copyright (c)</p>
          </footer>
    </div>
  );

}


export default App;
