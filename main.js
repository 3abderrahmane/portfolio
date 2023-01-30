/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAboutPage\": () => (/* binding */ renderAboutPage)\n/* harmony export */ });\nconst renderAboutPage = (() => {\r\n    //container\r\n    const contentContainer = document.querySelector(\"#content\");\r\n    const about = document.createElement(\"div\");\r\n    about.setAttribute(\"id\", \"menu\");\r\n    about.setAttribute(\"data-tab-content\", \"\");\r\n    about.innerHTML = `\r\n    <section class=\"about-me\" id=\"about-me\">\r\n          <div class=\"img-contain\"></div>\r\n          <div class=\"content\">\r\n            <h1>About me</h1>\r\n            <h2>I am <span class=\"auto-typed\"></span></h2>\r\n            <div class=\"details-container\">\r\n              <div class=\"summary\">\r\n                <h3>Summary</h3>\r\n                <p>\r\n                  I am an enthusiastic and self-motivated web designer. I am punctual in developing scalable web\r\n                  applications and working across the full stack development.\r\n                  I gained enough experience to build apps when I was a college student using\r\n                  HTML5, CSS3, JavaScript, Python and MySQL. I am eager and motivated to advance\r\n                  my web development, Machine Learning, Artificial\r\n                  Intelligence abilities, and knowledge in order to build a\r\n                  successful web development career.\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"information\">\r\n                <img\r\n                  src=\"img/me.jpg\"\r\n                  alt=\"profile picture\"\r\n                  width=\"150px\"\r\n                  height=\"150px\"\r\n                />\r\n                <div class=\"info-details\">\r\n                  <div class=\"fullname\">\r\n                    <h3>Abderrahmane Chagour</h3>\r\n                  </div>\r\n                  <div class=\"row mt-3 info-data\">\r\n                    <div class=\"col-sm-2 text-center\">\r\n                      <i class=\"fa-solid fa-envelope\"></i>\r\n                    </div>\r\n                    <div class=\"col-sm-10 test\">Technologva@gmail.com</div>\r\n                  </div>\r\n                  <div class=\"row mt-2\">\r\n                    <div class=\"col-sm-2 text-center\">\r\n                      <i class=\"fa-solid fa-phone\"></i>\r\n                    </div>\r\n                    <div class=\"col-sm-10 test\">+571-290-8056</div>\r\n                  </div>\r\n                  <div class=\"row mt-2\">\r\n                    <div class=\"col-sm-2 text-center\">\r\n                      <i class=\"fa-solid fa-map-location-dot\"></i>\r\n                    </div>\r\n                    <div class=\"col-sm-10 test\">\r\n                      Alexandria City, Virginia, USA\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"logo-container\">\r\n                    <a\r\n                      href=\"https://github.com/3abderrahmane?tab=repositories\"\r\n                      class=\"btn btn-info btn-round btn lg btn-icon\"\r\n                      target=\"_blank\"\r\n                    >\r\n                      <i class=\"fa-brands fa-github\"></i\r\n                    ></a>\r\n                    <a\r\n                      href=\"https://www.linkedin.com/in/abderrahmanChagor/\"\r\n                      class=\"btn btn-info btn-round btn lg btn-icon\"\r\n                      target=\"_blank\"\r\n                    >\r\n                      <i class=\"fa-brands fa-linkedin\"></i\r\n                    ></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>`;\r\n  \r\n    contentContainer.appendChild(about);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://port/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\r\n    //container\r\n    const contentContainer = document.querySelector(\"#content\");\r\n    const contact = document.createElement(\"div\");\r\n    contact.setAttribute(\"id\", \"colsntact\");\r\n    contact.setAttribute(\"data-tab-content\", \"\");\r\n    contact.innerHTML = `\r\n    <section class=\"contact-me\" id=\"contact-me\">\r\n      <h1>Contact Me</h1>\r\n      <div class=\"row1\">\r\n        <div class=\"col\">\r\n          <i class=\"fa-solid fa-location-crosshairs\"></i>\r\n          <h3>Location:</h3>\r\n          <h3 class=\"secondary-text\">Alexandria, Virginia, USA</h3>\r\n        </div>\r\n        <div class=\"col\">\r\n          <i class=\"fa-solid fa-phone\"></i>\r\n          <h3>Phone Number:</h3>\r\n          <h3 class=\"secondary-text\">+571-290-8056</h3>\r\n        </div>\r\n        <div class=\"col\">\r\n          <i class=\"fa-regular fa-envelope\"></i>\r\n          <h3>Email Address</h3>\r\n          <h3 class=\"secondary-text\">Technologva@gmail.com</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"row2\">\r\n        <div class=\"col1 formdata\">\r\n          <form>\r\n            <input type=\"text\" placeholder=\"Name\" id=\"name\" required=\"\">\r\n            <input type=\"text\" placeholder=\"Email\" id=\"email\" required=\"\"><br>\r\n            <input type=\"text\" placeholder=\"Subject\" id=\"subject\" required=\"\"><br>\r\n            <textarea rows=\"6\" cols=\"60\" placeholder=\"Message\" id=\"message\" required=\"\"></textarea>\r\n          </form>\r\n          <button id=\"submit\">Submit</button>\r\n        </div>\r\n        <div class=\"col1\" id=\"google-map\">\r\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.366503730401!2d-77.13387728515728!3d38.82406645886941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3b0a616b145%3A0xbb6d75be40796dd6!2s5555%20N%20Morgan%20St%2C%20Alexandria%2C%20VA%2022312!5e0!3m2!1sen!2sus!4v1674710299339!5m2!1sen!2sus\"\r\n            width=\"100%\" height=\"400\" style=\"border:0\" \r\n            allowfullscreen=\"\" \r\n            loading=\"lazy\"\r\n            referrerpolicy=\"no-referrer-when-downgrade\">\r\n          </iframe>\r\n        </div>\r\n      </div>\r\n      \r\n  </section>\r\n  <footer>\r\n         <span id=\"copyrightyear\">hhh</span>\r\n  </footer>`;\r\n  \r\n    contentContainer.appendChild(contact);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://port/./src/contact.js?");

/***/ }),

/***/ "./src/education.js":
/*!**************************!*\
  !*** ./src/education.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderEducationPage\": () => (/* binding */ renderEducationPage)\n/* harmony export */ });\nconst renderEducationPage = (() => {\r\n    //container\r\n    const contentContainer = document.querySelector(\"#content\");\r\n    const education = document.createElement(\"div\");\r\n    education.setAttribute(\"id\", \"menu\");\r\n    education.setAttribute(\"data-tab-content\", \"\");\r\n    education.innerHTML = `\r\n    <section id=\"education\">\r\n          <h1>Education</h1>\r\n          <div class=\"edu-timeline\">\r\n            <div class=\"edu-container left\">\r\n              <div class=\"data edu-colorone\">\r\n                <h3>2022</h3>\r\n                <h3>Frontend Development / Web Development</h3>\r\n                <p>Nucamp: An opportunity to enhance my skills</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"edu-container right riseup\">\r\n              <div class=\"data edu-colortwo\">\r\n                <h3>2020</h3>\r\n                <h3>Associate of Applied Science Degree of Information System Technology</h3>\r\n                <p>Northern Virginia College</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"edu-container left riseup\">\r\n              <div class=\"data edu-colorthree\">\r\n                <h3>2017</h3>\r\n                <h3>Web Design Specialist Certificate</h3>\r\n                <p>Northern Virginia College</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"edu-container right risehalf\">\r\n              <div class=\"data edu-colorfour\">\r\n                <h3>2015</h3>\r\n                <h3>Data Base Specialist Certificate</h3>\r\n                <p>Sanz School Technology</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"edu-container left riseup\">\r\n              <div class=\"data edu-colorfive\">\r\n                <h3>2013</h3>\r\n                <h3>Diploma of Computer Systems Technology</h3>\r\n                <p> International Institute of Business and Information Technology</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"edu-container right riseup\">\r\n              <div class=\"data edu-colorsix\">\r\n                <h3>2011</h3>\r\n                <h3>Bachelor of Accounting and Managment</h3>\r\n                <p>Ibn Zohr University</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>`;\r\n  \r\n    contentContainer.appendChild(education);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://port/./src/education.js?");

/***/ }),

/***/ "./src/experience.js":
/*!***************************!*\
  !*** ./src/experience.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderExperiencePage\": () => (/* binding */ renderExperiencePage)\n/* harmony export */ });\nconst renderExperiencePage = (() => {\r\n    //container\r\n    const contentContainer = document.querySelector(\"#content\");\r\n    const experience = document.createElement(\"div\");\r\n    experience.setAttribute(\"id\", \"menu\");\r\n    experience.setAttribute(\"data-tab-content\", \"\");\r\n    experience.innerHTML = `\r\n    <section class=\"experience\" id=\"experience\">\r\n          <h1>Experience</h1>\r\n          <div class=\"exp-bg\">\r\n            <div class=\"exp\">\r\n              <h3>Intern Web Designer:</h3>\r\n              <h3 class=\"secondary-text\">\r\n              Delta Resources, Inc   ---- Washington DC<br>\r\n              March 2020 - Dec 2021\r\n              </h3>\r\n              <p>\r\n                Participated in designing the front end of scalable and fully functional applications.\r\n              </p>\r\n              <h5>Frequent Tasks</h5>\r\n              <ul>\r\n                <li>\r\n                 Involved in a full Stack web development using HTML, JavaScript, CSS, Node.js,\r\n                  MySQL, and MongoDB\r\n                </li>\r\n                <li>Communicated with the project manager and clients to design custom web applications</li>\r\n                <li>Created wire-frames for sites using Sketch and Figma</li>\r\n                <li>Designed and tested websites to work on both computers and mobiles platforms</li>\r\n                <li>Reviewed and enhanced designs trough developing the HTML markup and styling sites\r\n                pages’ using Flex-box and Media Queries resulting in responsive pages</li>\r\n                <li>Implemented smooth CSS transitions and animations to emphasize the UI and UX of\r\n                applications</li>\r\n                <li>Created components and employed JavaScript, jQuery, React, and CSS to optimize the use of\r\n                the components</li>\r\n              </ul>\r\n              <h5>Achievements</h5>\r\n              <ul>\r\n                <li>\r\n                Ensured requests were met efficiently and the lead was proud of my contribution.\r\n                </li>\r\n                <li>\r\n                Worked with back end developers to Integrate back-end code into the sites and learend the process.\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"exp\">\r\n              <h3>Senior Team Store Specialist</h3>\r\n              <h3 class=\"secondary-text\">\r\n              Whole Foods Markets ---- Falls Church, Virginia<br>\r\n              Dec 2014 - Current\r\n              </h3>\r\n              <h5>Key Responsibilities</h5>\r\n              <ul>\r\n                <li>Developed new Action Plans to organize and restructure the Support Team for\r\n                maximum efficiency, product availability, and revenue</li>\r\n                <li>Created a different merchandising plan to accommodate the sales and the competition in\r\n                the area</li>\r\n                <li>Conducted a research on the customers’ interest and addressed the previous encountered\r\n                issues</li>\r\n                <li>Created executive briefs for store meetings to address financial management policies\r\n                and the companies’ plans to increase its profit and meet high customer satisfaction</li>\r\n                <li>Earned strong analytical ability in all inventory functions in daily, weekly and monthly\r\n                reports</li>\r\n                <li>Developed comprehensive reports and customized charts to present data and guide\r\n                investment strategies in a monthly basis using Power Pivot, graphs and charts which\r\n                gives detailed vision of all financial expectations</li>\r\n                <li>Help in seasonal menu development and costing</li>\r\n                <li>Provide training to other staff</li>\r\n              </ul>\r\n              <h5>Achievements</h5>\r\n              <ul>\r\n                <li>Promoted within the company in a short time</li>\r\n                <li>Recognized as a top performing employee of the year | January 2018</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </section>`;\r\n  \r\n    contentContainer.appendChild(experience);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://port/./src/experience.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() => {\r\n    //container\r\n    const contentContainer = document.querySelector(\"#content\");\r\n  \r\n    const home = document.createElement(\"div\");\r\n    home.classList.add(\"tab-content\")\r\n    home.innerHTML = `\r\n    <section class=\"home\" id=\"home\">\r\n          <a href=\"#contact-me\">\r\n            <button type=\"button\" class=\"hire-me\">Hire me</button>\r\n          </a>\r\n          <div class=\"img-holder\">\r\n            <img src=\"img/me.jpg\" alt=\"profile picture\" width=\"200px\" height=\"200px\">\r\n          </div>\r\n          <a href=\"files/resume.pdf\" download=\"\"><button class=\"download\">Download Resume</button></a>\r\n    </section>`;\r\n  \r\n    contentContainer.appendChild(home);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://port/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageload__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills */ \"./src/skills.js\");\n/* harmony import */ var _education__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education */ \"./src/education.js\");\n/* harmony import */ var _experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience */ \"./src/experience.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst tabs = document.querySelectorAll(\"[data-tab-target]\");\r\nconst tabContents = document.querySelectorAll(\"[data-tab-content]\");\r\nconst burger = document.querySelector(\".hamburger\");\r\n\r\n//Haburger menu\r\nburger.addEventListener(\"click\", () => {\r\n  document.querySelector(\"ul\").classList.toggle(\"active\");\r\n  burger.classList.toggle(\"toggle\");\r\n});\r\n// Navigation tabs\r\ntabs.forEach((tab) =>\r\n  tab.addEventListener(\"click\", () => {\r\n    const target = document.querySelector(tab.dataset.tabTarget);\r\n    tabContents.forEach((tabContent) => {\r\n      tabContent.classList.remove(\"active\");\r\n    });\r\n    tabs.forEach((tab) => {\r\n      tab.classList.remove(\"silver\");\r\n    });\r\n    tab.classList.add(\"silver\");\r\n    target.classList.add(\"active\");\r\n  })\r\n);\r\n\r\n//Makes sure that menu navigation tab is colored after clicking button\r\ndocument.querySelector(\".order-now\").addEventListener(\"click\", () => {\r\n  document.querySelector(`[data-tab-target=\"#menu\"]`).classList.add(\"silver\");\r\n});\r\n\r\n//Make sure page doesn't refresh on form submit\r\ndocument.querySelector(`[type=\"submit\"]`).addEventListener(\"click\", () => {\r\n  document.querySelector(\"form\").reset();\r\n});\n\n//# sourceURL=webpack://port/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ (() => {

eval("const pageLoad = (() => {\r\n    //container\r\n    const contentContainer = document.querySelector(\"#content\");\r\n  \r\n    const header = document.createElement(\"header\");\r\n    header.innerHTML = `\r\n    <nav>\r\n        <img src=\"img/logo.jpg\" id=\"logo\" alt=\"logo\" />\r\n        <br />\r\n        <ul>\r\n          <a href=\"#home\"><li class=\"home active\">Home</li></a>\r\n          <a href=\"#about-me\"><li class=\"about-me\">About Me</li></a>\r\n          <a href=\"#skills\"><li class=\"skills\">Skills</li></a>\r\n          <a href=\"#education\"><li class=\"education\">Education</li></a>\r\n          <a href=\"#experience\"><li class=\"experience\">Experience</li></a>\r\n          <a href=\"#projects\"><li class=\"projects\">Projects</li></a>\r\n          <a href=\"#contact-me\"><li class=\"contact-me\">Contact Me</li></a>\r\n        </ul>\r\n\r\n        <!-- hamburger responsive menu -->\r\n        <div class=\"hamburger\">\r\n          <div class=\"bar\"></div>\r\n          <div class=\"bar\"></div>\r\n          <div class=\"bar\"></div>\r\n        </div>\r\n      </nav>`;\r\n  \r\n      contentContainer.appendChild(header)\r\n  })();\n\n//# sourceURL=webpack://port/./src/pageload.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjectsPage\": () => (/* binding */ renderProjectsPage)\n/* harmony export */ });\nconst renderProjectsPage = (() => {\r\n    //container\r\n    const contentContainer = document.querySelector(\"#content\");\r\n    const projects = document.createElement(\"div\");\r\n    projects.setAttribute(\"id\", \"menu\");\r\n    projects.setAttribute(\"data-tab-content\", \"\");\r\n    projects.innerHTML = `\r\n    <section class=\"projects\" id=\"projects\">\r\n        <h1>Projects</h1>\r\n        <div class=\"project-bg\">\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/rockgame.jpg\" alt=\"Rock Game\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://3abderrahmane.github.io/theRockGame/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>The Roshambo Game</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/Thenuts.jpg\" alt=\"The Nuts\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://3abderrahmane.github.io/Flex/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>The Nuts Benefits Site</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/signupform.jpg\" alt=\"Simple Sign up Form\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://3abderrahmane.github.io/form/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>A Simple Sign up Form</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/painttheboard.jpg\" alt=\"Paint the Board Game\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://3abderrahmane.github.io/Etch/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>\"Painting the Board\" Game</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/calculator.jpg\" alt=\"The Calculator\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://3abderrahmane.github.io/calculator/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>A Real Calculator to Use</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/theBakery.jpg\" alt=\"The Bakery Cookies\">\r\n              <div class=\"button-container\">\r\n                <a href=\"http://www.technologwebdesign.com/ComputerBusniss-lance2/OptionCSS/sweet.html\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>The Fancy Bakery Website</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/technologywebsite.jpg\" alt=\"The Technology Company\">\r\n              <div class=\"button-container\">\r\n                <a href=\"http://www.technologwebdesign.com/ComputerBusniss-lance2/Bootstrap/design.html\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>The Web Technology Website</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/dashboard.jpg\" alt=\"The Dashboard Applications\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://3abderrahmane.github.io/Dashboard/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>The Dashboard Applications</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/thelibrary.jpg\" alt=\"The library Application\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://3abderrahmane.github.io/thelibrary/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>The Library List of Books</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/theliongame.jpg\" alt=\"The Tic-Tac-Toe Game\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://3abderrahmane.github.io/TicTacToe/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>The Lion/Alligator Tic-Tac-Toe Game</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/sweetsite.jpg\" alt=\"Cookies\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://3abderrahmane.github.io/Mysweets/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>The Sweet Site</h3></div>\r\n          </div>\r\n          <div class=\"project-container\">\r\n            <div class=\"proj-image\">\r\n              <img src=\"img/innotecpro.jpg\" alt=\"Ecommerce Site\">\r\n              <div class=\"button-container\">\r\n                <a href=\"https://www.innotecpro.com/\" target=\"_blank\">\r\n                  <button>Live Preview</button></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"proj-title\"><h3>The Ecommerce Site</h3></div>\r\n          </div>\r\n        </div>\r\n      </section>`;\r\n  \r\n    contentContainer.appendChild(projects);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://port/./src/projects.js?");

/***/ }),

/***/ "./src/skills.js":
/*!***********************!*\
  !*** ./src/skills.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderSkillsPage\": () => (/* binding */ renderSkillsPage)\n/* harmony export */ });\nconst renderSkillsPage = (() => {\r\n    //container\r\n    const contentContainer = document.querySelector(\"#content\");\r\n    const skills = document.createElement(\"div\");\r\n    skills.setAttribute(\"id\", \"menu\");\r\n    skills.setAttribute(\"data-tab-content\", \"\");\r\n    skills.innerHTML = `\r\n    <section class=\"skills\" id=\"skills\">\r\n          <div class=\"bg\">\r\n            <h1>Skills</h1>\r\n            <div class=\"wrapper\">\r\n              <div class=\"each-skill\">\r\n                <h3>HTML</h3>\r\n                <h3>90%</h3>\r\n              </div>\r\n              <div class=\"bar-container\">\r\n                <div class=\"skill-bar html\"></div>\r\n              </div>\r\n              <div class=\"each-skill\">\r\n                <h3>CSS - Responsive Design</h3>\r\n                <h3>80%</h3>\r\n              </div>\r\n              <div class=\"bar-container\">\r\n                <div class=\"skill-bar css\"></div>\r\n              </div>\r\n              <div class=\"each-skill\">\r\n                <h3>JavaScript</h3>\r\n                <h3>65%</h3>\r\n              </div>\r\n              <div class=\"bar-container\">\r\n                <div class=\"skill-bar js\"></div>\r\n              </div>\r\n              <div class=\"each-skill\">\r\n                <h3>C++</h3>\r\n                <h3>65%</h3>\r\n              </div>\r\n              <div class=\"bar-container\">\r\n                <div class=\"skill-bar cplusplus\"></div>\r\n              </div>\r\n              <div class=\"each-skill\">\r\n                <h3>Git - GitHub</h3>\r\n                <h3>65%</h3>\r\n              </div>\r\n              <div class=\"bar-container\">\r\n                <div class=\"skill-bar github\"></div>\r\n              </div>\r\n              <div class=\"each-skill\">\r\n                <h3>Python - Bash</h3>\r\n                <h3>60%</h3>\r\n              </div>\r\n              <div class=\"bar-container\">\r\n                <div class=\"skill-bar php\"></div>\r\n              </div>\r\n              <div class=\"each-skill\">\r\n                <h3>React JS</h3>\r\n                <h3>55%</h3>\r\n              </div>\r\n              <div class=\"bar-container\">\r\n                <div class=\"skill-bar react\"></div>\r\n              </div>\r\n              <div class=\"each-skill\">\r\n                <h3>MySQL-MangoDB</h3>\r\n                <h3>55%</h3>\r\n              </div>\r\n              <div class=\"bar-container\">\r\n                <div class=\"skill-bar mysql\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </section>`;\r\n  \r\n    contentContainer.appendChild(skills);\r\n  })();\r\n  \r\n  \n\n//# sourceURL=webpack://port/./src/skills.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;