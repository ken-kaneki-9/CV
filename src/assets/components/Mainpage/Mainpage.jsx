import React from "react";
import Header from "../Header/Header";
import "./Mainpage.css";
import sarvilImage from "../../images/sarvil (2).jpg";

function Mainpage() {
  return (
    <div>
      <Header />
      <div className="Mainpage">
        <div className="animation">
          <div className="box">
            <div className="content">
              <img src={sarvilImage} alt="myphoto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
