import React, { useState } from 'react';
import './Content.css';
import Nav from './Nav';
import Experience from './Experience'; 
import Projects from './Projects';  
import Skills from './Skills';  
import Education from './Education';  
import Contact from './Contact';    

function Content() {
  const [activeTab, setActiveTab] = useState('experience');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='content'>
      <Nav onTabClick={handleTabClick} />
      <div className='content1'>
      {activeTab === 'experience' && <Experience />}
      {activeTab === 'projects' && <Projects />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'education' && <Education />}
      {activeTab === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default Content;
