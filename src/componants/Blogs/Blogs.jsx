import React from "react";


const Blogs = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/">
          {" "}
          <i className="fas fa-home" /> <span>home</span>{" "}
        </a>
        <a href="about">
          {" "}
          <i className="fas fa-user" /> <span>about</span>{" "}
        </a>
        <a href="projects">
          {" "}
          <i className="fas fa-briefcase" /> <span>Projects</span>{" "}
        </a>
        <a href="blogs">
          {" "}
          <i className="fas fa-blog" /> <span>blogs</span>{" "}
        </a>
        <a href="contact">
          {" "}
          <i className="fas fa-address-book" /> <span>contact</span>{" "}
        </a>
      </nav>

      <section className="blogs">
        <h1 className="heading">
          {" "}
          <span>my</span> blogs{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="Images/blog1.png" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> 21st sep, 2024{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
              Stay updated with breaking news in technology, software, and hardware advancements.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link" />{" "}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="Images/Blog2 (1).png" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> 20 may, 2024{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
              In-depth reviews of the latest gadgets, software tools, and development environments.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link" />{" "}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="Images/blog3.png" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> 21st may, 2024{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
              Articles on emerging trends like AI, cloud computing, cybersecurity, and blockchain.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link" />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;