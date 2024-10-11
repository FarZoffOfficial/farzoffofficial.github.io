import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
// JavaScript for Dark Mode Toggle
// JavaScript for Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
  
    // Check if dark mode is already enabled in local storage
    if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark-mode");
      darkModeToggle.textContent = "Light Mode";
    }
  
    // Toggle dark mode on button click
    darkModeToggle.addEventListener("click", function () {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        darkModeToggle.textContent = "Dark Mode";
        localStorage.setItem("dark-mode", "disabled");
      } else {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Light Mode";
        localStorage.setItem("dark-mode", "enabled");
      }
    });
  });
  
  