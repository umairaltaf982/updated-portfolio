import React from "react";
import "../css/About.css";

const aboutData = [
  {
    heading: "Who I Am",
    content:
      "I’m a passionate software engineer who loves to build intuitive UIs and scalable systems. I focus on writing clean, maintainable code with strong problem-solving skills.",
    duration: "2020 - Present",
  },
  {
    heading: "My Philosophy",
    content:
      "I believe in continuous learning, growth, and adapting to new technologies. I emphasize collaboration and delivering quality over quantity.",
    duration: "Consistent Practice",
  },
  {
    heading: "Future Goals",
    content:
      "I aim to contribute to open-source, explore AI integration in web applications, and build products that make lives better.",
    duration: "Vision 2025+",
  },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-timeline">
        <div className="about-line" />
        {aboutData.map((item, index) => (
          <div key={index} className="about-item">
            <div className="about-card">
              <div className="about-content">
                <h3>{item.heading}</h3>
                <p>{item.content}</p>
              </div>
            </div>
            <div className="about-duration">{item.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
