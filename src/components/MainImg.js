import "./MainImgStyle.css";

import React from 'react'
import IntroImg from "../assests/img1.png";

const MainImg = () => {
  return (
    <div className="main">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>  
        <div className="content">
            <p> 
                HI, I'm <span className="highlight">Subhiksha</span>
            </p>
            <h1>Front-End Developer</h1>
        </div>
    </div>
  );
};

export default MainImg
