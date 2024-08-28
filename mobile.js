const header = document.getElementsByClassName("header");
const btnMobileNav = document.getElementsByClassName("btn-mobile-nav");
console.log(btnMobileNav);
btnMobileNav[0].addEventListener("click", function () {
  if (header[0].classList.contains("nav-open")) {
    header[0].classList.remove("nav-open");
  } else {
    header[0].classList.add("nav-open");
  }
});
