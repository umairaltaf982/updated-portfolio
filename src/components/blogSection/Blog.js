// Blog.js
import React, { useEffect, useState } from "react";
import "../css/Blog.css";
import BlogPopup from "./BlogPopup";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showAllPopup, setShowAllPopup] = useState(false);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@your-medium-username") // Replace with your Medium RSS
      .then(res => res.json())
      .then(data => setBlogs(data.items || []));
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setShowPopup(true);
  };

  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-title">My Blogs</h2>
      <div className="blog-grid">
        {blogs.slice(0, 3).map((blog, index) => (
          <div className="blog-card" key={index} onClick={() => handleBlogClick(blog)}>
            <img src={blog.thumbnail} alt="thumbnail" className="blog-thumb" />
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: blog.description.substring(0, 120) + "..." }} />
            </div>
          </div>
        ))}
        <div className="blog-card show-more" onClick={() => setShowAllPopup(true)}>
          <h3>Show More</h3>
          <p>View all blogs</p>
        </div>
      </div>

      {showPopup && <BlogPopup blog={selectedBlog} onClose={() => setShowPopup(false)} />}
      {showAllPopup && (
        <div className="blog-all-popup">
          <div className="popup-overlay" onClick={() => setShowAllPopup(false)} />
          <div className="popup-box">
            <h3>All Blogs</h3>
            <div className="all-blogs-list">
              {blogs.map((blog, index) => (
                <div className="all-blog-item" key={index} onClick={() => {
                  setSelectedBlog(blog);
                  setShowPopup(true);
                  setShowAllPopup(false);
                }}>
                  {blog.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
