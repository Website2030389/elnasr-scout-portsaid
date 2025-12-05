const dropdownBtn = document.querySelector('.dropbtn');
const megaMenu = document.querySelector('.mega-menu');

// لما تضغط على الزر
dropdownBtn.addEventListener('click', (e) => {
  e.preventDefault(); // علشان مايروحش لرابط
  megaMenu.classList.toggle('show'); // فتح أو غلق
});

// لو ضغطت بره المنيو تقفل
document.addEventListener('click', (e) => {
  if (!dropdownBtn.contains(e.target) && !megaMenu.contains(e.target)) {
    megaMenu.classList.remove('show');

  }
});