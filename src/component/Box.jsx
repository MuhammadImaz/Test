import React from 'react'
import "./box.css"
import bi from "../assets/bi.svg"
import gpt from "../assets/gpt.svg"
import python from "../assets/python.svg"
import postgres from "../assets/postgres.svg"

function Box() {
  return (
    <div className="custom-bar">
  <div className="bar-content">
    <span className="bar-text">
        <img src= {bi} alt = "Power Bi"/>
    </span>
    <span className="bar-text"><img src = {gpt} alt =  "ChatGPT" /></span>
    <span className="bar-text"><img src= {python} alt = " Python" /></span>
    <span className="bar-text"><img src={postgres} alt = "PostgreSQL" /></span>
  </div>
</div>
  )
}

export default Box