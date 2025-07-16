import React from "react";
import "../css/Experience.css";

export default function CertificateModal({ image, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-heading">Certificate</h3>
        <img src={image} alt="Certificate" className="popup-cert-img" />
      </div>
    </div>
  );
}
