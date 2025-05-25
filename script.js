# Here is the code for script.js

console.log("Welcome to my portfolio!");

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a.nav-link");

  links.forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".navbar-collapse").classList.remove("show");
    });
  });
});
