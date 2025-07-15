import React from 'react';
import './css/Header.css'; // optional, if you're using separate CSS

const Header = () => {
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
            </nav>
        </header>
    );
};

export default Header;
