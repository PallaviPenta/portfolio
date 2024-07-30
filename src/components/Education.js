import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <div className="education-header">
        <h1>My Education</h1>
      </div>
      <div className='timeline'>
        <div className='container'>
          <img src=''/>
          <div className='text-box'>
            <h2>Bachelor of Technology</h2>
            <h3>Vishnu Institute of Technology, Bhimavaram</h3>
            <small>November 2021 - April 2025</small>
            <p>Currently graduating from Vishnu Institute of Technology with a major degree in Information Technology</p>
            <span className='arrow'></span>
          </div>
        </div>
        <div className='container'>
          <div className='text-box'>
            <h2>Intermediate</h2>
            <h3>Sri Chaitamya Junior College, Tuni</h3>
            <small>June 2019 - April 2021</small>
            <p>Completed my Intermediate in Sri Chaitanya Junior College in Maths, physics, Chemistry tream</p>
            <span className='arrow'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
