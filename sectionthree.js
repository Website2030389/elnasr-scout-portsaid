const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
let w, h, stars = [], starCount = 400, speed = 1.00;

// تظبيط الحجم حسب حجم السكشن div1
function resize() {
  const section = document.querySelector('.div1');
  w = canvas.width = section.clientWidth;
  h = canvas.height = section.clientHeight;
}
window.addEventListener('resize', resize);
resize();

for (let i = 0; i < starCount; i++) {
  stars.push({
    x: (Math.random() - 0.5) * w,
    y: (Math.random() - 0.5) * h,
    z: Math.random() * w

    // z: Math.random() * (w / 3)
  });
}

function animate() {
  ctx.fillStyle = "rgba(0,0,10,0.35)";
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < starCount; i++) {
    let s = stars[i];
    s.z -= speed;
    if (s.z <= 0) s.z = w;

    let k = 128.0 / s.z;
    let px = s.x * k + w / 2;
    let py = s.y * k + h / 2;

    if (px >= 0 && px < w && py >= 0 && py < h) {
      let size = (1 - s.z / w) * 3;
      let alpha = (1 - s.z / w);
      // if (size < 0) size = 0.1;  // أقل قيمة لمنع الخطأ

      ctx.beginPath();
      ctx.fillStyle = `rgba(0,255,255,${alpha})`;
      // ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  requestAnimationFrame(animate);
}
animate();









// ************************************

const cards1 = document.querySelectorAll(".card");

cards1.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
});

// /////////////////////////
const cards2 = document.querySelectorAll('.card');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 400); // ⏳ تأخير بسيط بين كل كارت والتاني
    }
  });
}, { threshold: 0.2 });

cards2.forEach(card => observer2.observe(card));
