const navBar = document.getElementById("navBar");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

navBar.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
});