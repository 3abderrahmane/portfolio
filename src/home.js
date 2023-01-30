const renderHomePage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const home = document.createElement("div");
    home.classList.add("tab-content")
    home.innerHTML = `
    <section class="home" id="home">
          <a href="#contact-me">
            <button type="button" class="hire-me">Hire me</button>
          </a>
          <div class="img-holder">
            <img src="img/me.jpg" alt="profile picture" width="200px" height="200px">
          </div>
          <a href="files/resume.pdf" download=""><button class="download">Download Resume</button></a>
    </section>`;
  
    contentContainer.appendChild(home);
  })();
  
  export { renderHomePage };