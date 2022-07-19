const hambarger = document.querySelector('.hambarger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');
const Bar = document.querySelector('.bar');
const page = document.querySelector('.page-1');

hambarger.addEventListener('click', () => {
  hambarger.classList.toggle('active');
  navMenu.classList.toggle('active');
  header.classList.toggle('active');
  page.classList.toggle('blur-bg');
  Bar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hambarger.classList.remove('active');
  navMenu.classList.remove('active');
  page.classList.remove('blur-bg');
  header.classList.remove('active');
  Bar.classList.remove('active');
}));
