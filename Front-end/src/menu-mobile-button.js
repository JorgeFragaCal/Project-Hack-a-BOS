const butttonmobile = document.querySelector("#menu-button");
const menu = document.querySelector(".menu ul");
const overflow = document.querySelector(".site-overlay-active");

butttonmobile.addEventListener("click", e => {
  menu.classList.toggle("hidden");
  overflow.classList.toggle("hidden");
});
