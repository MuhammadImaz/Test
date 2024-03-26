import React from 'react'
import "./text.css"
import Vector2 from "../assets/Vector2.svg"

function Text() {
  return (
    <div className='Vector'>
        <h1 class="heading">Feature Fast Track Courses</h1>
        <img src={Vector2} alt = "vector" className="vector-image"/>
    </div>
  )
}

export default Text