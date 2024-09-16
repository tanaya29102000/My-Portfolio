import React from 'react'


function Home() {
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
    <section className="home">
        <div className="image">
            <img src="Assets/Hero.jpeg" alt="profile"/>
        </div>
        <div className="content">
            <h3>Hi, I'm</h3>
            <h3>Tanaya</h3>
            <span>front-end developer</span>
            <p>I am an experienced front-end developer with expertise in ReactJS, Redux hooks, and other state management libraries. I have a strong understanding of HTML5, CSS, Bootstrap, and JavaScript, along with backend skills in Node.js, ExpressJS, and Microsoft SQL Database. I am also familiar with ES6, Webpack, Git, and GitHub. As a quick learner with excellent communication skills, I am adept at building responsive, modern web applications.</p>
            <a href="about" class="btn"> About Me <i class="fas fa-user"></i> </a>
        </div>
    </section>
    </div>
  )
}

export default Home;