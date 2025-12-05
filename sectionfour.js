const cards5 = document.querySelectorAll('.card4');
const section5 = document.getElementById('section3');

function showCards() {
  const sectionTop = section.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.8;

  if (sectionTop < trigger) {
    cards5.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200); // تأخير بسيط بين كل كارت
    });
    window.removeEventListener('scroll', showCards);
  }
}
window.addEventListener('scroll', showCards);

// ✨ Overlay
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlayImg');
const overlayTitle = document.getElementById('overlayTitle');
const overlayText = document.getElementById('overlayText');
const closeBtn5 = document.getElementById('closeBtn');

cards5.forEach(card => {
  card.addEventListener('click', () => {
    overlayImg.src = card.querySelector('img').src;
    overlayTitle.textContent = card.dataset.title;
    overlayText.textContent = card.dataset.text;
    overlay.classList.add('open');
  });
});

closeBtn5.addEventListener('click', () => {
  overlay.classList.remove('open');
});