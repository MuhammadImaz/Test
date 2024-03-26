import React from "react";
import "./blogs.css";
import Blog1 from "../assets/Blog1.svg";
import Blog2 from "../assets/Blog2.svg";
import card1 from "../assets/card1.svg";
import vector1 from "../assets/vector.svg"

function Blogs() {
  return (
    <>

<div className='Vectorzzz'>
        <h1 class="headingzzz">Featured Blogs</h1>
        <img src={vector1} alt = "vector" className="vector-imagezzz"/>
    </div>

      <div class="carousel-container">
        <div className="carousel-track">
          <div className="carousel-slide">
            <img src={Blog1} alt="Image 1" />
            <div className="infoz">
              <p className="price">$49.99</p>
              <p className="cut-price">
                <strike>$79.99</strike>
              </p>
            </div>
            <div className="detailsz">
              <h3>Product Management Basic - Course</h3>
              <p>
                Product Management Masterclass, you will learn with Sarah
                Johnson - Head of Product Customer Platform Gojek Indonesia.
              </p>
              <img src={card1} alt="rating" className="Ratings" />
            </div>
          </div>
        </div>

        <div className="carousel-track">
          <div className="carousel-slide">
            <img src={Blog2} alt="Image 1" />
            <div className="infoz">
              <p className="price">$49.99</p>
              <p className="cut-price">
                <strike>$79.99</strike>
              </p>
            </div>
            <div className="detailsz">
              <h3>Product Management Basic - Course</h3>
              <p>
                Product Management Masterclass, you will learn with Sarah
                Johnson - Head of Product Customer Platform Gojek Indonesia.
              </p>
              <img src={card1} alt="rating" className="Ratings" />
            </div>
          </div>
          <div style={{ flex: '0 0 1.5' }}></div>
        </div>  
      </div>
      <div class="wrapper">
  <button type="button" class="dot active" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
  <button type="button" class="dot" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
  
</div>
    </>
  );
}

export default Blogs;
