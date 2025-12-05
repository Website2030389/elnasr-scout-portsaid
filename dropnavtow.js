const dropdownBtn1 = document.querySelector('.dropbtn1');
const megaMenu1 = document.querySelector('.mega-menu1');

// لما تضغط على الزر
dropdownBtn1.addEventListener('click', (e) => {
  e.preventDefault(); // علشان مايروحش لرابط
  megaMenu1.classList.toggle('show'); // فتح أو غلق
});

// لو ضغطت بره المنيو تقفل
document.addEventListener('click', (e) => {
  if (!dropdownBtn1.contains(e.target) && !megaMenu1.contains(e.target)) {
    megaMenu1.classList.remove('show');

  }
});