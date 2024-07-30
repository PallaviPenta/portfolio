import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1>My Experience</h1>
      </div>
      <div className='timeline'>
        <div className='container'>
          <img src=''/>
          <div className='text-box'>
            <h2>Swecha Virtual Internship</h2>
            <h3>AI Summer Internship</h3>
            <small>May 2024 - June 2024</small>
            <p> In this Internship I worked as a Team Lead and our project is towards building a language corpus by collecting data
            through surveys.</p>
            <span className='arrow'></span>
          </div>
        </div>
        <div className='container'>
          <div className='text-box'>
            <h2>AICTE Virtual Internship</h2>
            <h3>ML Summer Internship</h3>
            <small>May 2023 - June 2023</small>
            <p>Learnt AWS cloud computing and AWS Machine learning through this Virtual Summer Internship</p>
            <span className='arrow'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
