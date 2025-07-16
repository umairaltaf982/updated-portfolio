import React from 'react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-box" onClick={e => e.stopPropagation()}>
        <h2 className="resume-heading">My Resume</h2>
        
        <iframe
          src="https://drive.google.com/viewerng/viewer?embedded=true&url=${window.location.origin}/Hands_On_Machine_Learning_with_Scikit_Learn_and_TensorFlow.pdf"
          title="My Resume"
          width="100%"
          height="500px"
        ></iframe>

        <div className="resume-buttons">
          <a href="/resume.pdf" download className="download-resume">Download CV</a>
          <button className="close-resume" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
