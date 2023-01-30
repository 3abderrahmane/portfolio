import { pageLoad } from "./pageload";
import { renderHomePage } from "./home";
import { renderAboutPage } from "./about";
import { renderSkillsPage } from "./skills";
import { renderEducationPage } from "./education";
import { renderExperiencePage } from "./experience";
import { renderProjectsPage } from "./projects";
import { renderContactPage } from "./contact";

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const burger = document.querySelector(".hamburger");

//Haburger menu
burger.addEventListener("click", () => {
  document.querySelector("ul").classList.toggle("active");
  burger.classList.toggle("toggle");
});
// Navigation tabs
tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("silver");
    });
    tab.classList.add("silver");
    target.classList.add("active");
  })
);

//Makes sure that menu navigation tab is colored after clicking button
document.querySelector(".order-now").addEventListener("click", () => {
  document.querySelector(`[data-tab-target="#menu"]`).classList.add("silver");
});

//Make sure page doesn't refresh on form submit
document.querySelector(`[type="submit"]`).addEventListener("click", () => {
  document.querySelector("form").reset();
});