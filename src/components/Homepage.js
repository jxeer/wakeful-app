import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function Homepage() {
  return (
    <div>
    <div className="learnmore">
     <h1> Join a growing community of teachers, practicioners and creatives. </h1>
     <a href="#">Learn More</a>
     </div>
      <div className="modalities">
         <br />
         <div className ="container-1">
           <img id="meditationImg" src="/images/meditation.jpg" alt=""></img>
           <br />
           <div className ="container-1.5">
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
     <div className ="container-2">
       <img src="/images/grey.png" alt=""></img>
       <img src="/images/grey.png" alt=""></img>
     </div>
   <br />
  <br />
   </div>
  )
}

export default Homepage
