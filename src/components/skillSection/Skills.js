import React, { useState, useEffect } from 'react';
import '../css/Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const mainSkills = [
    { name: 'HTML', icon: 'fab fa-html5', level: 90 },
    { name: 'CSS', icon: 'fab fa-css3-alt', level: 85 },
    { name: 'JavaScript', icon: 'fab fa-js', level: 80 },
    { name: 'React', icon: 'fab fa-react', level: 88 },
    { name: 'Node.js', icon: 'fab fa-node-js', level: 75 },
    { name: 'Next.js', icon: 'fab fa-node', level: 70 },
    { name: 'Tailwind', icon: 'fas fa-wind', level: 85 },
    { name: 'MongoDB', icon: 'fas fa-database', level: 78 },
    { name: 'Git', icon: 'fab fa-git-alt', level: 80 },
    { name: 'Figma', icon: 'fab fa-figma', level: 75 },
    { name: 'Firebase', icon: 'fas fa-fire', level: 72 },
    { name: 'MongoDB', icon: 'fas fa-database', level: 78 },
    { name: 'Figma', icon: 'fab fa-figma', level: 75 },
    { name: 'Firebase', icon: 'fas fa-fire', level: 72 },
    { name: 'MongoDB', icon: 'fas fa-database', level: 78 },
    
];
const otherSkills = [
    { name: 'TypeScript', icon: 'fas fa-code', level: 70 },
    { name: 'Redux', icon: 'fas fa-sync-alt', level: 75 },
    { name: 'Express', icon: 'fas fa-server', level: 74 },
    { name: 'Jest', icon: 'fas fa-vial', level: 65 },
    { name: 'Docker', icon: 'fab fa-docker', level: 60 },
    { name: 'GraphQL', icon: 'fas fa-project-diagram', level: 68 },
    { name: 'TypeScript', icon: 'fas fa-code', level: 70 },
    { name: 'Redux', icon: 'fas fa-sync-alt', level: 75 },
    { name: 'Express', icon: 'fas fa-server', level: 74 },
    { name: 'Jest', icon: 'fas fa-vial', level: 65 },
    { name: 'Docker', icon: 'fab fa-docker', level: 60 },
];

const getVisibleCount = (width) => {
    if (width > 1200) return 14;  // 2 rows of 6 with 1 slot for "More"
    if (width > 992) return 9;
    if (width > 768) return 7;
    if (width > 480) return 5;
    return 3;
};

const Skills = () => {
    const [showMore, setShowMore] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [visibleCount, setVisibleCount] = useState(getVisibleCount(window.innerWidth));
    const visibleSkills = mainSkills.slice(0, visibleCount);
    const hiddenSkills = mainSkills.slice(visibleCount);



    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setVisibleCount(getVisibleCount(window.innerWidth));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="skills-section" id="skills">
            <h2 className="skills-heading">My Skills</h2>
            <div className="skills-grid">
                {[...visibleSkills, { name: 'More Skills', icon: 'fas fa-angle-right', isMore: true }].map((skill, index) => (
                    <div
                        key={index}
                        className="skill-card"
                        data-aos="zoom-in"
                        onClick={() => skill.isMore && setShowMore(true)}
                        style={{ cursor: skill.isMore ? 'pointer' : 'default' }}
                    >
                        <i className={`${skill.icon} skill-icon`}></i>
                        <p>{skill.name}</p>
                        {!skill.isMore && (
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {showMore && (
                <div className="modal-overlay" onClick={() => setShowMore(false)}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <h3 className="modal-heading">Other Skills</h3>
                        <div className="modal-grid">
                            {[...hiddenSkills, ...otherSkills].map((skill, index) => (
                                <div className="skill-card" key={index} data-aos="fade-up">
                                    <i className={`${skill.icon} skill-icon`}></i>
                                    <p>{skill.name}</p>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
        </section>
    );
};

export default Skills;
