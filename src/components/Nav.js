import React from 'react'
import './Nav.css'

function Nav({onTabClick}) {
  return (
    <div>
      <ul>
        <li onClick={() => onTabClick('experience')}>Experience</li>
        <li onClick={() => onTabClick('projects')}>Projects</li>
        <li onClick={() => onTabClick('skills')}>Skills</li>
        <li onClick={() => onTabClick('education')}>Education</li>
        <li onClick={() => onTabClick('contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default Nav
