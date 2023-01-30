const pageLoad = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
        <img src="img/logo.jpg" id="logo" alt="logo" />
        <br />
        <ul>
          <a href="#home"><li class="home active">Home</li></a>
          <a href="#about-me"><li class="about-me">About Me</li></a>
          <a href="#skills"><li class="skills">Skills</li></a>
          <a href="#education"><li class="education">Education</li></a>
          <a href="#experience"><li class="experience">Experience</li></a>
          <a href="#projects"><li class="projects">Projects</li></a>
          <a href="#contact-me"><li class="contact-me">Contact Me</li></a>
        </ul>

        <!-- hamburger responsive menu -->
        <div class="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </nav>`;
  
      contentContainer.appendChild(header)
  })();