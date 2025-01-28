import React from 'react'
import Navigationbar from '../components/Navigationbar';
import Footer from '../components/Footer';
import MainImg2 from '../components/MainImg2';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
      <Navigationbar/>
      <MainImg2 heading="PROJECTS" text="Some of my more recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;
