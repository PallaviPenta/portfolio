import React from 'react'
import './Sidecard.css';
import ResumeDownload from './ResumeDownload'
function Sidecard() {
  return (
    <div className="card">
      <img className="myimg" src="https://cdn.glitch.global/95362299-6bd0-4d89-86af-997363974038/myPicPortfoliocropped.jpg?v=1722366485900"></img>
      <div className='name'>
        <h1>Penta Pallavi</h1>
        <p>Student-VITB</p>
      </div>
      <p>A passionate student eager to share my projects and achievements. Explore my work, learn about my experiences, and see what I've been up to. Thank you for visiting!</p>
      <ResumeDownload />
    </div>
  )
}

export default Sidecard
