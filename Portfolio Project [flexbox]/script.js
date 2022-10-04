document.querySelector(".nav__btn").addEventListener("click", showNav);

function showNav() {
  document.querySelector(".nav__links").classList.toggle("show__links");
}
