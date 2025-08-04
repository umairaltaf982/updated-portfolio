// BlogPopup.js
import React from "react";
import "../css/Blog.css";

const BlogPopup = ({ blog, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-overlay" onClick={onClose} />
      <div className="popup-content">
        <h2>{blog.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
};

export default BlogPopup;
