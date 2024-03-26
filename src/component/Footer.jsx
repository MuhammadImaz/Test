import React from "react";
import "./Footer.css";
import Footerlogo from "../assets/Footerlogo.svg";
import location from "../assets/location.svg";
import Message from "../assets/Message.svg";
import Time from "../assets/Time.svg";
import calling from "../assets/calling.svg";

function Footer() {
  return (
    <>
      <footer class="footerz">
        <img src={Footerlogo} alt="footer-logo" />
        <div class="footer-container">
          <div class="footer-row1">
            <div className="last">
              <img src={location} />

              <div class="footer-column1">
                58-1-B/1Maulana Shaukat Ali road, Lahore
              </div>
            </div>

            <div className="last">
              <img src={calling} />
              <div class="footer-column1">Tel :+923445131310</div>
            </div>

            <div className="last">
              <img src={Time} />
              <div class="footer-column1">Response hours: 8 to 20</div>
            </div>

            <div className="last">
              <img src={Message} />
              <div class="footer-column1">Email: contact@reinforcecamp.com</div>
            </div>
          </div>

          <div class="footer-row2">
            <div class="footer-column-heading">Categories</div>
            <div class="footer-column2">Counseling</div>
            <div class="footer-column2">Health and fitness</div>
            <div class="footer-column2">Individual development</div>
            <div class="footer-column2">more</div>
          </div>

          <div class="footer-row3">
            <div class="footer-column-heading">Links</div>
            <div class="footer-column3">About us</div>
            <div class="footer-column3">blog</div>
          </div>

          <div class="footer-row4">
            <div class="search-containerzz">
              <input type="text" class="search-inputsz" placeholder="Search..." />
              <button type="submit" className="search-buttonzz">
                Send
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
