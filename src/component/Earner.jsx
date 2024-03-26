import React from "react";
import "./earner.css";
import vector1 from "../assets/vector.svg";
import girl from "../assets/girl.svg";
import world from "../assets/world.svg";

function Earner() {
  return (
    <>
      <div className="Vectorzzz" style={{ "margin-top": "20px" }}>
        <h1 class="headingzzz">Our Top Earning studnet Success Stories</h1>
        <img src={vector1} alt="vector" className="vector-imagezzz" />
      </div>

      <div class="imag-container">
        <img src={world} alt="Image 1 description" />
        <img src={girl} alt="Image 2 description" />
      </div>
    </>
  );
}

export default Earner;
