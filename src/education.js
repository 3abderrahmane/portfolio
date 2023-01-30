const renderEducationPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const education = document.createElement("div");
    education.setAttribute("id", "menu");
    education.setAttribute("data-tab-content", "");
    education.innerHTML = `
    <section id="education">
          <h1>Education</h1>
          <div class="edu-timeline">
            <div class="edu-container left">
              <div class="data edu-colorone">
                <h3>2022</h3>
                <h3>Frontend Development / Web Development</h3>
                <p>Nucamp: An opportunity to enhance my skills</p>
              </div>
            </div>
            <div class="edu-container right riseup">
              <div class="data edu-colortwo">
                <h3>2020</h3>
                <h3>Associate of Applied Science Degree of Information System Technology</h3>
                <p>Northern Virginia College</p>
              </div>
            </div>
            <div class="edu-container left riseup">
              <div class="data edu-colorthree">
                <h3>2017</h3>
                <h3>Web Design Specialist Certificate</h3>
                <p>Northern Virginia College</p>
              </div>
            </div>
            <div class="edu-container right risehalf">
              <div class="data edu-colorfour">
                <h3>2015</h3>
                <h3>Data Base Specialist Certificate</h3>
                <p>Sanz School Technology</p>
              </div>
            </div>
            <div class="edu-container left riseup">
              <div class="data edu-colorfive">
                <h3>2013</h3>
                <h3>Diploma of Computer Systems Technology</h3>
                <p> International Institute of Business and Information Technology</p>
              </div>
            </div>
            <div class="edu-container right riseup">
              <div class="data edu-colorsix">
                <h3>2011</h3>
                <h3>Bachelor of Accounting and Managment</h3>
                <p>Ibn Zohr University</p>
              </div>
            </div>
          </div>
        </section>`;
  
    contentContainer.appendChild(education);
  })();
  
  export { renderEducationPage };