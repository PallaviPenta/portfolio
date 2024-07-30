import React from 'react';
import resume from '../utils/resume.pdf';
import './Sidecard.css';

const ResumeDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Penta_Pallavi_21PA1A1291.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center mt-10">
      <button 
        onClick={handleDownload} 
      >
        Download Resume
      </button>
    </div>
  );
};

export default ResumeDownload;