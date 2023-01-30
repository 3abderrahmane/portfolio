const renderAboutPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const about = document.createElement("div");
    about.setAttribute("id", "menu");
    about.setAttribute("data-tab-content", "");
    about.innerHTML = `
    <section class="about-me" id="about-me">
          <div class="img-contain"></div>
          <div class="content">
            <h1>About me</h1>
            <h2>I am <span class="auto-typed"></span></h2>
            <div class="details-container">
              <div class="summary">
                <h3>Summary</h3>
                <p>
                  I am an enthusiastic and self-motivated web designer. I am punctual in developing scalable web
                  applications and working across the full stack development.
                  I gained enough experience to build apps when I was a college student using
                  HTML5, CSS3, JavaScript, Python and MySQL. I am eager and motivated to advance
                  my web development, Machine Learning, Artificial
                  Intelligence abilities, and knowledge in order to build a
                  successful web development career.
                </p>
              </div>

              <div class="information">
                <img
                  src="img/me.jpg"
                  alt="profile picture"
                  width="150px"
                  height="150px"
                />
                <div class="info-details">
                  <div class="fullname">
                    <h3>Abderrahmane Chagour</h3>
                  </div>
                  <div class="row mt-3 info-data">
                    <div class="col-sm-2 text-center">
                      <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="col-sm-10 test">Technologva@gmail.com</div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-sm-2 text-center">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="col-sm-10 test">+571-290-8056</div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-sm-2 text-center">
                      <i class="fa-solid fa-map-location-dot"></i>
                    </div>
                    <div class="col-sm-10 test">
                      Alexandria City, Virginia, USA
                    </div>
                  </div>
                  <div class="logo-container">
                    <a
                      href="https://github.com/3abderrahmane?tab=repositories"
                      class="btn btn-info btn-round btn lg btn-icon"
                      target="_blank"
                    >
                      <i class="fa-brands fa-github"></i
                    ></a>
                    <a
                      href="https://www.linkedin.com/in/abderrahmanChagor/"
                      class="btn btn-info btn-round btn lg btn-icon"
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;
  
    contentContainer.appendChild(about);
  })();
  
  export { renderAboutPage };