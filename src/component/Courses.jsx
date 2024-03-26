import React from "react";
import "./courses.css";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";
import img7 from "../assets/img7.svg";
import img8 from "../assets/img8.svg";
import vector1 from "../assets/vector.svg"

function Courses() {
  return (
    <>
        <div className='Vectorzz'>
        <h1 class="headingzz">Learn and Earn to Reinforce</h1>
        <img src={vector1} alt = "vector" className="vector-imagezz"/>
    </div>

    <div className="paragraph">Dive into a world of continuous learning where each lesson becomes a stepping stone towards personal and professional growth</div> 

      <div className="courses-main">
        <div className="courses-card">
          <div className="course-image-wrapper">
            <img
              src={img1}
              alt="Online & On Campus Classes"
              className="courses-image"
            />
          </div>
          <div className="courses-content">
            <div className="courses-info">
              <h3>Online & On Campus Classes</h3>
            </div>
            <p className="courses-description">
              One powerful online software suite that combines
            </p>
            <button className="enrolled-button">Enroll Now</button>
          </div>
        </div>

        <div className="courses-card">
          <div className="course-image-wrapper2">
            <img
              src={img2}
              alt="Online & On Campus Classes"
              className="courses-image"
            />
          </div>
          <div className="courses-content">
            <div className="courses-info">
              <h3>Lab Training Sessions</h3>
            </div>
            <p className="courses-description">
              One powerful online software suite that combines
            </p>
            <button className="more-button">more</button>
          </div>
        </div>

        <div className="courses-card">
          <div className="course-image-wrapper3">
            <img
              src={img3}
              alt="Online & On Campus Classes"
              className="courses-image"
            />
          </div>
          <div className="courses-content">
            <div className="courses-info">
              <h3>Dual Certification Program</h3>
            </div>
            <p className="courses-description">
              One powerful online software suite that combines
            </p>
            <button className="enrolled-button">Enroll Now</button>
          </div>
        </div>

        <div className="courses-card">
          <div className="course-image-wrapper4">
            <img
              src={img4}
              alt="Online & On Campus Classes"
              className="courses-image"
            />
          </div>
          <div className="courses-content">
            <div className="courses-info">
              <h3>Live Instructor Classes</h3>
            </div>
            <p className="courses-description">
              One powerful online software suite that combines
            </p>
            <button className="more-button">more</button>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="courses-card">
          <div className="course-image-wrapper5">
            <img
              src={img5}
              alt="Online & On Campus Classes"
              className="courses-image"
            />
          </div>
          <div className="courses-content">
            <div className="courses-info">
              <h3>90 Days Earning Program</h3>
            </div>
            <p className="courses-description">
              One powerful online software suite that combines
            </p>
            <button className="more-button">Enroll Now</button>
          </div>
        </div>

        <div className="courses-card">
          <div className="course-image-wrapper6">
            <img
              src={img6}
              alt="Online & On Campus Classes"
              className="courses-image"
            />
          </div>
          <div className="courses-content">
            <div className="courses-info">
              <h3>30 Mins Q&A Session</h3>
            </div>
            <p className="courses-description">
              One powerful online software suite that combines
            </p>
            <button className="enrolled-button">more</button>
          </div>
        </div>

        <div className="courses-card">
          <div className="course-image-wrapper7">
            <img
              src={img7}
              alt="Online & On Campus Classes"
              className="courses-image"
            />
          </div>
          <div className="courses-content">
            <div className="courses-info">
              <h3>Internship Program Offering</h3>
            </div>
            <p className="courses-description">
              One powerful online software suite that combines
            </p>
            <button className="more-button">Enroll Now</button>
          </div>
        </div>

        <div className="courses-card">
          <div className="course-image-wrapper8">
            <img
              src={img8}
              alt="Online & On Campus Classes"
              className="courses-image"
            />
          </div>
          <div className="courses-content">
            <div className="courses-info">
              <h3>Industry Based Skill Knowledge</h3>
            </div>
            <p className="courses-description">
              One powerful online software suite that combines
            </p>
            <button className="more-button">more</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
