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
              <h2>
                A Developer <br />
                <span>Full Stack</span>
              </h2>
              <a href="#">Hire me</a>
            </div>
          </div>
        </div>
        <div className="Mainpage-content">
          <h1>
            Hi, It's <span>Sarvil</span>
          </h1>
          <h3 className="typing-text">
            I'm a <span></span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus vitae architecto corrupti magni quae fugit perspiciatis
            hic at sit quas sunt iste animi quasi, similique laboriosam natus
            possimus, omnis fuga.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
