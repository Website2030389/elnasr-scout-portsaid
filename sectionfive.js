const sliderImgs = document.querySelectorAll('.church-slider img');
let currentIndex5 = 0;

function showNextImage() {
  sliderImgs[currentIndex5].classList.remove('active');
  currentIndex5 = (currentIndex5 + 1) % sliderImgs.length;
  sliderImgs[currentIndex5].classList.add('active');
}

setInterval(showNextImage, 3000); // ⏳ كل 3 ثواني


function scrollMore() {
  const section = document.querySelector('.church-section');
  const moreText = document.getElementById('more-text');
  const moreBtn = document.getElementById('more-btn');

  // 👇 إظهار المحتوى
  moreText.classList.add('show');

  // 👇 إخفاء الزر
  moreBtn.style.display = 'none';

  // 👇 تفعيل الاسكرول داخل السيكشن نفسه
  section.scrollTo({
    top: section.scrollHeight,
    behavior: 'smooth'
  });
}
