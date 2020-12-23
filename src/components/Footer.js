import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function Footer() {
  return(
   <div>
    <footer>
      <h2>Get updates about new workshops, instructors and events.</h2><br />
      <input type="text" id="email" name="email"></input>
      <div className="footer-links">
       <div className="fcolumn1">
        <ul>ABOUT US</ul>
        <ul>FAQ</ul>
        <ul>PRESS</ul>
      </div>
      <div className="fcolumn2">
        <ul>CONTACT</ul>
        <ul>PRIVACY POLICY</ul>
        <ul>TERMS & CONDITIONS</ul>
        </div>
      <div className="fcolumn3">
        <ul>Connect With Us</ul>
        <ul>Social media buttons</ul>
      </div>
    </div>
    <p className="copyright">Copyright (c)</p>
    </footer>
   </div>
  )
}

export default Footer
