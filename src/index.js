import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    let lastScrollTop = 0;
  
    window.addEventListener("scroll", function () {
      let scrollTop = window.scrollY;
  
      if (scrollTop > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
  
      if (scrollTop > lastScrollTop) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }
  
      lastScrollTop = scrollTop;
    });
  });