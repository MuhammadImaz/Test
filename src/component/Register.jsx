import React from "react";
import registerpic from "../assets/registerpic.svg";
import captcha from "../assets/captcha.svg";
import "./Register.css";
import vector1 from "../assets/vector.svg";

function Register() {
  return (
    <>
      <div className="Vectorzzz" style={{ "margin-top": "20px" }}>
        <h1 class="headingzzz">Enroll to Start Coding for Free</h1>
        <img src={vector1} alt="vector" className="vector-imagezzz" />
      </div>

      <div className="Mainzz">
        <div className="Leftzzz">
          <div className="body">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input large"
                  placeholder="Name"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  className="form-input medium"
                  placeholder="Age"
                />
                <input
                  type="text"
                  className="form-input small"
                  placeholder="Contact Number"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-input large"
                  placeholder="Enter Your Email Id"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  className="form-input medium"
                  placeholder="City"
                />
                <input
                  type="text"
                  className="form-input small"
                  placeholder="Intrested Course"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="Rights">
          <img src={registerpic} alt="Picture" className="Pic" />
        </div>
      </div>

      <div class="image-button-container">
        <img src={captcha} alt="description" />
        <button>Submit</button>
      </div>
    </>
  );
}

export default Register;
