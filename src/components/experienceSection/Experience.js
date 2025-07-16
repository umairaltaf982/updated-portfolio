import React, { useState, useEffect } from "react";
import "../css/Experience.css";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CertificateModal from "./CertificateModal";

const experiences = [
  {
    title: "Frontend Developer - XYZ Tech",
    duration: "Jan 2023 - May 2023",
    description: "Worked on modern UI components using React, Tailwind, and GSAP. Collaborated with designers to deliver responsive and optimized features.",
    certificate: "/img/certificate1.png"
  },
  // Add more as needed
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextExp = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExp = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    const timer = setInterval(() => nextExp(), 8000); // Auto-play every 8 sec
    return () => clearInterval(timer);
  }, []);

  const { title, duration, description, certificate } = experiences[currentIndex];

  return (
    <section className="experience-section" id="experience">
      <motion.h2
        className="exp-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Experience
      </motion.h2>

      <div className="exp-container">
        <button className="exp-arrow" onClick={prevExp}><FaArrowLeft /></button>

        <motion.div
          key={currentIndex}
          className="exp-card"
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="exp-top">
            <h3>{title}</h3>
            <span className="exp-duration">{duration}</span>
          </div>
          <div className="exp-body">
            <p className="exp-description">{description}</p>
            <img
              src={certificate}
              alt="Certificate"
              className="exp-cert"
              onClick={() => setShowModal(true)}
            />
          </div>
        </motion.div>

        <button className="exp-arrow" onClick={nextExp}><FaArrowRight /></button>
      </div>

      {showModal && (
        <CertificateModal
          image={certificate}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
