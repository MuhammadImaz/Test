import React from 'react'
import logo from "../assets/logo.svg"
import whatsapp from '../assets/whatsapp.svg'
import testimonial from '../assets/testimonial.svg'
import Group from '../assets/Group.svg'
import './header.css'
function Header() {
  return (
    <div className='container'>
    <div className='left-section'>
      <header className="header">
        {/* Logo */}
        <div className="logo">
          {/* Replace with your logo image */}
          <img src={logo} alt="Your Logo" />
        </div>

        {/* Navigation */}
        <nav className="nav">
          {/* Add your navigation links here */}
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Media</a>
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </nav>

        {/* Action Buttons */}
        <div className="actions">
          <div className='enroll-btn'>
          Enroll Now
          </div>
          <a href="#" className="whatsapp-btn">
            <img src={whatsapp} alt="whatsapp" />  {/* Assuming you have FontAwesome */}
          </a>
        </div>
      </header>

      <div className='writing'>

      {/* Optional: Heading/Subheading */}
      <h2>Grow Up Your </h2>
      <h2>Skills</h2>
      <h2>By Online Courses with </h2>
      <h2>Reinforce</h2>
      </div>

            {/* Optional: Testimonial Section */}
            <div className="testimonial">
              
            <a href="#" className="explore-btn">Explore Path</a>
            
        <span className="star-rating">
          <img src={testimonial} alt="testimonial" />
        </span>
       
      </div>
    </div>

    <div className='right-section'>
      {/* Form */}
      <form style={{ backgroundColor: 'rgba(141, 174, 247, 0.08)' }}>
        
        <input type="text" id="name" name="name"  placeholder="Enter your Name" />
        <div style={{ display: 'flex' }}>
        <input type="age" id="Age" name="Age" placeholder="Age" />
        
        <input type="contact" id="contact" name="contact" placeholder="Contact" />
        </div>
        <input type="email" id="Email" name="Age" placeholder="Enter your Email ID" />
        <div style={{ display: 'flex' }}>
        <input type="city" id="city" name="city" placeholder="City" />
       
        <input type="intrested Course" id="intrested Course" name="intrested Course" placeholder="Intrested Course" />
        </div>
        
        <button type="submit" className='Submiter'>Submit</button>
        
      </form>
    </div>
    <div class="circle-container">
    <div class="circle">
    <img src={Group} alt="group" />
    </div>
  </div>
  </div>
  )
}

export default Header