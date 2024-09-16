import React from "react";


const Education = () => {
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
          <i className="fas fa-blog" /> <span>education</span>{" "}
        </a>
        <a href="contact">
          {" "}
          <i className="fas fa-address-book" /> <span>contact</span>{" "}
        </a>
      </nav>

      <section className="education">
        <h1 className="heading">
          {" "}
          <span>my</span> education{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap" />
            <span>2015 - 2016</span>
            <h3>SECONDARY SCHOOL CERTIFICATE</h3>
            <p>SSC from Vidya Mandir High School &amp; with 85.40%</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap" />
            <span>2017 - 2018</span>
            <h3>HIGHER SECONDARY CERTIFICATE</h3>
            <p>HSC from Vidya Mandir Jr. collage. &amp; with 71.08%</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap" />
            <span>2018 - 2021</span>
            <h3>GRADUATION DEGREE</h3>
            <p>
              Bachelors Degree In Computer Science From Shri Shivaji Science
              College Nagpur University. &amp; with 68%
            </p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap" />
            <span>2021 - 2023</span>
            <h3>POST GRADUATION DEGREE</h3>
            <p>
              Master Degree In Master Of Computer Application From VMV College
              Nagpur University. &amp; with 92%
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;