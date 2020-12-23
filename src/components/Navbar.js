import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function Navbar (){
  return(
    <div>
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
    </div>
  )
}

export default Navbar;
