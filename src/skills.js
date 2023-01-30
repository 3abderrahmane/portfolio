const renderSkillsPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const skills = document.createElement("div");
    skills.setAttribute("id", "menu");
    skills.setAttribute("data-tab-content", "");
    skills.innerHTML = `
    <section class="skills" id="skills">
          <div class="bg">
            <h1>Skills</h1>
            <div class="wrapper">
              <div class="each-skill">
                <h3>HTML</h3>
                <h3>90%</h3>
              </div>
              <div class="bar-container">
                <div class="skill-bar html"></div>
              </div>
              <div class="each-skill">
                <h3>CSS - Responsive Design</h3>
                <h3>80%</h3>
              </div>
              <div class="bar-container">
                <div class="skill-bar css"></div>
              </div>
              <div class="each-skill">
                <h3>JavaScript</h3>
                <h3>65%</h3>
              </div>
              <div class="bar-container">
                <div class="skill-bar js"></div>
              </div>
              <div class="each-skill">
                <h3>C++</h3>
                <h3>65%</h3>
              </div>
              <div class="bar-container">
                <div class="skill-bar cplusplus"></div>
              </div>
              <div class="each-skill">
                <h3>Git - GitHub</h3>
                <h3>65%</h3>
              </div>
              <div class="bar-container">
                <div class="skill-bar github"></div>
              </div>
              <div class="each-skill">
                <h3>Python - Bash</h3>
                <h3>60%</h3>
              </div>
              <div class="bar-container">
                <div class="skill-bar php"></div>
              </div>
              <div class="each-skill">
                <h3>React JS</h3>
                <h3>55%</h3>
              </div>
              <div class="bar-container">
                <div class="skill-bar react"></div>
              </div>
              <div class="each-skill">
                <h3>MySQL-MangoDB</h3>
                <h3>55%</h3>
              </div>
              <div class="bar-container">
                <div class="skill-bar mysql"></div>
              </div>
            </div>
          </div>
        </section>`;
  
    contentContainer.appendChild(skills);
  })();
  
  export { renderSkillsPage };