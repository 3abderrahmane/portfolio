const renderExperiencePage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const experience = document.createElement("div");
    experience.setAttribute("id", "menu");
    experience.setAttribute("data-tab-content", "");
    experience.innerHTML = `
    <section class="experience" id="experience">
          <h1>Experience</h1>
          <div class="exp-bg">
            <div class="exp">
              <h3>Intern Web Designer:</h3>
              <h3 class="secondary-text">
              Delta Resources, Inc   ---- Washington DC<br>
              March 2020 - Dec 2021
              </h3>
              <p>
                Participated in designing the front end of scalable and fully functional applications.
              </p>
              <h5>Frequent Tasks</h5>
              <ul>
                <li>
                 Involved in a full Stack web development using HTML, JavaScript, CSS, Node.js,
                  MySQL, and MongoDB
                </li>
                <li>Communicated with the project manager and clients to design custom web applications</li>
                <li>Created wire-frames for sites using Sketch and Figma</li>
                <li>Designed and tested websites to work on both computers and mobiles platforms</li>
                <li>Reviewed and enhanced designs trough developing the HTML markup and styling sites
                pages’ using Flex-box and Media Queries resulting in responsive pages</li>
                <li>Implemented smooth CSS transitions and animations to emphasize the UI and UX of
                applications</li>
                <li>Created components and employed JavaScript, jQuery, React, and CSS to optimize the use of
                the components</li>
              </ul>
              <h5>Achievements</h5>
              <ul>
                <li>
                Ensured requests were met efficiently and the lead was proud of my contribution.
                </li>
                <li>
                Worked with back end developers to Integrate back-end code into the sites and learend the process.
                </li>
              </ul>
            </div>
            <div class="exp">
              <h3>Senior Team Store Specialist</h3>
              <h3 class="secondary-text">
              Whole Foods Markets ---- Falls Church, Virginia<br>
              Dec 2014 - Current
              </h3>
              <h5>Key Responsibilities</h5>
              <ul>
                <li>Developed new Action Plans to organize and restructure the Support Team for
                maximum efficiency, product availability, and revenue</li>
                <li>Created a different merchandising plan to accommodate the sales and the competition in
                the area</li>
                <li>Conducted a research on the customers’ interest and addressed the previous encountered
                issues</li>
                <li>Created executive briefs for store meetings to address financial management policies
                and the companies’ plans to increase its profit and meet high customer satisfaction</li>
                <li>Earned strong analytical ability in all inventory functions in daily, weekly and monthly
                reports</li>
                <li>Developed comprehensive reports and customized charts to present data and guide
                investment strategies in a monthly basis using Power Pivot, graphs and charts which
                gives detailed vision of all financial expectations</li>
                <li>Help in seasonal menu development and costing</li>
                <li>Provide training to other staff</li>
              </ul>
              <h5>Achievements</h5>
              <ul>
                <li>Promoted within the company in a short time</li>
                <li>Recognized as a top performing employee of the year | January 2018</li>
              </ul>
            </div>
          </div>
        </section>`;
  
    contentContainer.appendChild(experience);
  })();
  
  export { renderExperiencePage };