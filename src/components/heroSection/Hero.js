import React, { useState } from 'react';
import GitHubStats from './GitHubStats';
import '../css/Hero.css';
import { ReactTyped } from 'react-typed';
import ReactDOM from 'react-dom';


const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    const modal = (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                <h2 className="modal-heading">🎯 Objective</h2>
                <div className="modal-content">
                    <p>
                        I'm a results-driven developer aiming to create elegant digital solutions. <br /><br />
                        My objective is to continuously grow as a developer while contributing to impactful projects
                        that make a real difference. I have a strong foundation in frontend technologies and a deep
                        passion for creating engaging and user-friendly interfaces. <br /><br />
                        I enjoy solving real-world problems with clean code and continuously learning new tools,
                        frameworks, and patterns to improve my work. I thrive in collaborative environments where
                        innovation and user experience are at the center.
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="text-content">
                    <h2>Hi, I'm Umair</h2>
                    <h2>
                        <span className="typing-gradient">
                            <ReactTyped
                                strings={['Frontend Developer', 'Java Developer']}
                                typeSpeed={80}
                                backSpeed={50}
                                loop
                            />
                        </span>
                    </h2>
                    <p>
                        I'm a passionate software engineer who loves turning ideas into clean, efficient, and scalable code. <br />
                        My focus is on building responsive web applications with modern UI/UX design. <br />
                        Constantly learning and growing with each project I take on.
                    </p>
                    <button className="learn-more-btn" onClick={() => setShowModal(true)}>
                        Learn More &gt;
                    </button>
                    <GitHubStats />

                </div>
                <div className="image-container">
                    <img src="/img/portfolio_img.jpg" alt="Umair" />
                     <div className="social-bar">
      <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-medium"></i>
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
                </div>
            </div>
            {showModal && ReactDOM.createPortal(modal, document.body)}

        </section>
        
    );
};

export default Hero;
