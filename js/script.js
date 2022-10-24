const navToggleBtn = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

navToggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
