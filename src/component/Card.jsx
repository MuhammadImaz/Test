import React from "react";
import "./card.css";
import course1 from "../assets/course1.svg";
import card1 from "../assets/card1.svg";
import course2 from "../assets/course2.svg";
import card2 from "../assets/card2.svg";
import course3 from "../assets/course3.svg";
import card3 from "../assets/card3.svg";

function Card() {
  return (
    <>
    <div className="main">
      <div className="course-card">
        <img src={course1} alt="Course Images" className="course-image" />
        <img src={card1} alt="rating" className="Ratings" />
        <h4>1-28 july 2024</h4>
        <div className="course-content">
          <h3 className="course-title">Machine Learning and Data Science with Python</h3>
          <p className="course-description">
            Master the fundamentals of Machine Learning with Python. Learn about
            classification, regression, and more!
          </p>
          <div className="end">
            <div className="course-info">
              <span className="course-price">$380</span>
              <span className="strikethrough">$500</span>
            </div>
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
        </div>

        <div className="course-card">
        <img src={course2} alt="Course Images" className="course-image" />
        <img src={card2} alt="rating" className="Ratings" />
        <h4>15-30 August 2024</h4>
        <div className="course-content">
          <h3 className="course-title">
            Machine Learning and Deep Learning with scikit-learn and TensorFlow
          </h3>
          <p className="course-description">
            Product Management Masterclass, you will learn with Sarah Johnson -
            Head of Product Customer Platform Gojek Indonesia
          </p>
          <div className="end">
            <div className="course-info">
              <span className="course-price">$678</span>
              <span className="strikethrough">$600</span>
            </div>
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
        </div>

        <div className="course-card"> 
        <img src={course3} alt="Course Images" className="course-image" />
        <img src={card3} alt="rating" className="Ratings" />
        <h4>10-25 September 2024</h4>
        <div className="course-content">
          <h3 className="course-title">
            Computer Vision, NLP, Time Series Analysis, and Audio Processing
          </h3>
          <p className="course-description">
            Product Management Masterclass, you will learn with Sarah Johnson -
            Head of Product Customer Platform Gojek Indonesia.
          </p>
          <div className="end">
            <div className="course-info">
              <span className="course-price">$123</span>
              <span className="strikethrough">$700</span>
            </div>
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;
