const renderProjectsPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const projects = document.createElement("div");
    projects.setAttribute("id", "menu");
    projects.setAttribute("data-tab-content", "");
    projects.innerHTML = `
    <section class="projects" id="projects">
        <h1>Projects</h1>
        <div class="project-bg">
          <div class="project-container">
            <div class="proj-image">
              <img src="img/rockgame.jpg" alt="Rock Game">
              <div class="button-container">
                <a href="https://3abderrahmane.github.io/theRockGame/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>The Roshambo Game</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/Thenuts.jpg" alt="The Nuts">
              <div class="button-container">
                <a href="https://3abderrahmane.github.io/Flex/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>The Nuts Benefits Site</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/signupform.jpg" alt="Simple Sign up Form">
              <div class="button-container">
                <a href="https://3abderrahmane.github.io/form/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>A Simple Sign up Form</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/painttheboard.jpg" alt="Paint the Board Game">
              <div class="button-container">
                <a href="https://3abderrahmane.github.io/Etch/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>"Painting the Board" Game</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/calculator.jpg" alt="The Calculator">
              <div class="button-container">
                <a href="https://3abderrahmane.github.io/calculator/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>A Real Calculator to Use</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/theBakery.jpg" alt="The Bakery Cookies">
              <div class="button-container">
                <a href="http://www.technologwebdesign.com/ComputerBusniss-lance2/OptionCSS/sweet.html" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>The Fancy Bakery Website</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/technologywebsite.jpg" alt="The Technology Company">
              <div class="button-container">
                <a href="http://www.technologwebdesign.com/ComputerBusniss-lance2/Bootstrap/design.html" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>The Web Technology Website</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/dashboard.jpg" alt="The Dashboard Applications">
              <div class="button-container">
                <a href="https://3abderrahmane.github.io/Dashboard/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>The Dashboard Applications</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/thelibrary.jpg" alt="The library Application">
              <div class="button-container">
                <a href="https://3abderrahmane.github.io/thelibrary/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>The Library List of Books</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/theliongame.jpg" alt="The Tic-Tac-Toe Game">
              <div class="button-container">
                <a href="https://3abderrahmane.github.io/TicTacToe/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>The Lion/Alligator Tic-Tac-Toe Game</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/sweetsite.jpg" alt="Cookies">
              <div class="button-container">
                <a href="https://3abderrahmane.github.io/Mysweets/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>The Sweet Site</h3></div>
          </div>
          <div class="project-container">
            <div class="proj-image">
              <img src="img/innotecpro.jpg" alt="Ecommerce Site">
              <div class="button-container">
                <a href="https://www.innotecpro.com/" target="_blank">
                  <button>Live Preview</button></a>
              </div>
            </div>
            <div class="proj-title"><h3>The Ecommerce Site</h3></div>
          </div>
        </div>
      </section>`;
  
    contentContainer.appendChild(projects);
  })();
  
  export { renderProjectsPage };