const hambarger = document.querySelector(".hambarger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");
const Bar = document.querySelector(".bar");

hambarger.addEventListener("click", () =>{
  hambarger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
  Bar.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hambarger.classList.remove("active");
  navMenu.classList.remove("active");
}))
