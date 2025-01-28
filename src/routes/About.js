import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';
import MainImg2 from '../components/MainImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navigationbar/>
      <MainImg2 heading="ABOUT" text="Im a Front-End Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;
