import "./FooterStyle.css";
import React from 'react';

import { 
    FaHome, 
    FaMailBulk,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div> 
                        <p> Chennai</p>
                        <p> Tamil Nadu, India</p>
                    </div>
                </div>
                
                
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    rsubhiksha20@gmail.com</h4> 
                </div> 
                <div className="social">
                    <FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <a
                        href="https://www.linkedin.com/in/subhiksha20/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >Click to open
                    </a>
                           
                </div>      
            </div>

            <div className="right">
                <h4>About me</h4>
                <p> Passionate Software Engineer with experience specializing in React.js, JavaScript, CSS, and HTML. 
                    My expertise extends to Java full-stack development, gained during an internship. 
                    I am seeking a dynamic role to apply my skills, contribute to impactful projects, and drive organizational growth.
                </p>   
            </div>
        </div>
    </div>
  );
};

export default Footer;
