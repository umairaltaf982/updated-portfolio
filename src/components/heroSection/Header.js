import React from 'react';
import '../css/Header.css'; // optional, if you're using separate CSS
import ResumeModal from './ResumeModal';
import { useState } from 'react';


const Header = () => {
    const [isResumeOpen, setResumeOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo"> {/* Logo inside a circle */}
                <img src="/img/portfolio_logo.png" alt="Logo" />
            </div>

            <h1 className="heading">My Portfolio</h1>
            <h2>

            </h2>

            <nav className="navbar">
                <button>Home</button>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
                <button onClick={() => setResumeOpen(true)}>CV / Resume</button>
                <ResumeModal isOpen={isResumeOpen} onClose={() => setResumeOpen(false)} />

            </nav>
        </header>
    );
};

export default Header;
