import React from 'react'
import "./button.css"

function Button() {
  return (
    <div className="button-container">
    <button className='All-Courses' style={{backgroundColor: "blue"}}>All Courses</button>
    <button>Module 1</button>
    <button>Module 2</button>
    <button>Module 3</button>
  </div>
  )
}

export default Button