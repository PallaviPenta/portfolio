import React from 'react';
import './Skills.css'; // Import your CSS file for styling
import Stars from './Stars'
function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>Skills</h1>
      </div>
      <div className="skills-content">
        <div className="skill1">
          <h2>Programming Languages</h2>
          <ul>
            <li>Python
              <Stars rating={4}></Stars>
            </li>
            <li>Java
            <Stars rating={3}></Stars>
            </li>
            <li>C
            <Stars rating={3}></Stars>
            </li>
          </ul>
        </div>
        <div className="skill2">
          <h2>Web Development</h2>
          <ul>
            <li>HTML5 & CSS3
            <Stars rating={5}></Stars>
            </li>
            <li>React.js
            <Stars rating={4}></Stars>
            </li>
            <li>Node.js
            <Stars rating={3}></Stars>
            </li>
            <li>Express.js
            <Stars rating={2}></Stars>
            </li>
          </ul>
        </div>
        <div className="skill2">
          <h2>Databses&Datawarehouses</h2>
          <ul>
            <li>SQL
            <Stars rating={4}></Stars>
            </li>
            <li>Snowflake
            <Stars rating={3}></Stars>
            </li>
            <li>Redshift
            <Stars rating={2}></Stars>
            </li>
            <li>Firebase
            <Stars rating={2}></Stars>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
