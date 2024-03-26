import React from 'react'
import arrow from "../assets/arrow.svg"
import Image1 from "../assets/Image1.svg"
import Image2 from "../assets/Image2.svg"
import Image3 from "../assets/Image3.svg"
import Image4 from "../assets/Image4.svg"
import "./bootcamp.css"


function Bootcamp() {
  return (
<>
    <div className='Vectorz'>
    <h1 class="headingz">Industry Experienced Mentors</h1>
   </div>


    <div className="cardz-container">
    <div className="cardz">
      <img src={Image1} alt="Image 1" />
      <div className="info">
        <h3>2024-03-16/By Admin</h3>
        <h2>Canva Boot Camp</h2>
        <p>Promotion World has once placed PageTraffic among the top.</p>
        <div className="buttonz">
          Read More
          <button><img src= {arrow} alt="Arrow"/></button>
        </div>
      </div>
    </div>

    <div className="cardz1">
      <img src={Image2} alt="Image 1" />
      <div className="info">
        <h3>2024-03-16/By Admin</h3>
        <h2>Improve your Boot Camp</h2>
        <p>Promotion World has once placed PageTraffic among the top.</p>
        <div className="buttonz">
          Read More
          <button><img src= {arrow} alt="Arrow"/></button>
        </div>
      </div>
    </div>

    <div className="cardz2">
      <img src={Image3} alt="Image 1" />
      <div className="info">
        <h3>2024-03-16/By Admin</h3>
        <h2>Advance UI/UX with Figma</h2>
        <p>Promotion World has once placed PageTraffic among the top.</p>
        <div className="buttonz">
          Read More
          <button><img src= {arrow} alt="Arrow"/></button>
        </div>
      </div>
    </div>

    <div className="cardz3">
      <img src={Image4} alt="Image 1" />
      <div className="info">
        <h3>2024-03-16/By Admin</h3>
        <h2>Instagram Marketing Expert</h2>
        <p>Promotion World has once placed PageTraffic among the top.</p>
        <div className="buttonz">
          Read More
          <button><img src= {arrow} alt="Arrow"/></button>
        </div>
      </div>
    </div>
    
  </div>
  </>
  )
}

export default Bootcamp