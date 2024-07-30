import React from 'react';
import './Projects.css'; // Import your CSS file for styling

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
      </div>
      <div className='timeline'>
        <div className='container'>
          <div className='text-box'>
            <h2>QA-Crafters</h2>
            <h3>NLP and web Project</h3>
            <small> Python-Django, ReactJS, Tailwind CSS</small>
            <p> To reduce the struggle of searching for questions and answers in large paragraphs or pdfs we developed this intelligent web
 application that takes input as text or pdf from user and generates questions and answers based on given data.
We have used NLP for backend purpose and python Django framework for connection establishment with ReactJS
 frontend.</p>
            <span className='arrow'></span>
          </div>
        </div>
        <div className='container'>
          <div className='text-box'>
            <h2>Smart Notice Board</h2>
            <h3>Web development Project</h3>
            <small> HTML, CSS, JavaScript, Node JS, Express JS, FireBase</small>
           <p>This project is done as a group project as a part of Fullstack course.
           This smart notice board provides an interface for both students and faculty to interact with each other easily</p>
            <span className='arrow'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
