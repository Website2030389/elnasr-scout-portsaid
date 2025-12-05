// window.addEventListener('load', () => {
//   const intro = document.getElementById('introScene');
//   setTimeout(() => {
//     intro.style.display = 'none'; 
//   }, 3800); 
// });
  const slider = document.getElementById('slider');
  const slides = slider.children;
  const totalSlides = slides.length;
  let index = 0;

  function nextSlide() {
    index++;
    if (index >= totalSlides) index = 0;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(nextSlide, 10000); // كل 3 ثواني

  // book**//
  const gallery = document.querySelector('.image-container');
const mainImage = document.getElementById('mainImage');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const openSlide = document.getElementById('openSlide');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');


// ✅ تغيير الصورة بالرابط
document.querySelectorAll('a[data-img]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const imgSrc = link.getAttribute('data-img');
    if (imgSrc) {
      mainImage.src = imgSrc;
      scale = 1;
      mainImage.style.transform = 'scale(1)';
      gallery.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  });
});

// ✅ تكبير وتصغير
zoomIn.onclick = () => {
  scale += 0.2;
  mainImage.style.transform = `scale(${scale})`;
};
zoomOut.onclick = () => {
  scale = Math.max(0.5, scale - 0.2);
  mainImage.style.transform = `scale(${scale})`;
};

// ✅ فتح السلايد
openSlide.onclick = () => {
  lightboxImg.src = mainImage.src;
  lightbox.classList.add('active');
};
closeLightbox.onclick = () => {
  lightbox.classList.remove('active');
};

// ✅ حفظ النص في LocalStorage
const textBox = document.getElementById('userText');
textBox.innerHTML = localStorage.getItem('userText') || '';
textBox.addEventListener('input', () => {
  localStorage.setItem('userText', textBox.innerHTML);
});
const innerWrapper = document.querySelector('.inner-wrapper');
let scale = 1;

// الزوم
zoomIn.onclick = () => {
  scale += 0.2;
  innerWrapper.style.transform = `scale(${scale})`;
};
zoomOut.onclick = () => {
  scale = Math.max(0.5, scale - 0.2);
  innerWrapper.style.transform = `scale(${scale})`;
};

// السحب لكل الاتجاهات
let isDragging = false, startX, startY, scrollLeft, scrollTop;
gallery.addEventListener('mousedown', (e) => {
  isDragging = true;
  gallery.style.cursor = 'grabbing';
  startX = e.pageX - gallery.offsetLeft;
  startY = e.pageY - gallery.offsetTop;
  scrollLeft = gallery.scrollLeft;
  scrollTop = gallery.scrollTop;
});
gallery.addEventListener('mouseup', () => { isDragging = false; gallery.style.cursor = 'grab'; });
gallery.addEventListener('mouseleave', () => { isDragging = false; gallery.style.cursor = 'grab'; });
gallery.addEventListener('mousemove', (e) => {
  if(!isDragging) return;
  const x = e.pageX - gallery.offsetLeft;
  const y = e.pageY - gallery.offsetTop;
  gallery.scrollLeft = scrollLeft - (x - startX);
  gallery.scrollTop = scrollTop - (y - startY);
});

// نفس الشيء للـ touch على الموبايل
// *****************************************************section2

const zoomGallery = document.getElementById('zoomGallery');
const zoomInner = document.getElementById('zoomInner');
const zoomImage = document.getElementById('zoomImage');
const zoomInNew = document.getElementById('zoomInNew');
const zoomOutNew = document.getElementById('zoomOutNew');
const openSlideNew = document.getElementById('openSlideNew');
const lightboxNew = document.getElementById('lightboxNew');
const lightboxImgNew = document.getElementById('lightboxImgNew');
const closeLightboxNew = document.getElementById('closeLightboxNew');
const boardText = document.getElementById('boardText');

let scaleNew = 1;
document.querySelectorAll('a[data-imgs]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const imgSrc = link.getAttribute('data-imgs');
    if (imgSrc) {
      zoomImage.src = imgSrc;         // الصورة الرئيسية
      scaleNew = 1;                   // إعادة الزوم للوضع الطبيعي
      zoomInner.style.transform = 'scale(1)';
      zoomGallery.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  });
});

// حفظ النص في localStorage
boardText.innerHTML = localStorage.getItem('boardText') || '';
boardText.addEventListener('input', () => {
  localStorage.setItem('boardText', boardText.innerHTML);
});

// الزوم
zoomInNew.onclick = () => {
  scaleNew += 0.2;
  zoomInner.style.transform = `scale(${scaleNew})`;
};
zoomOutNew.onclick = () => {
  scaleNew = Math.max(0.5, scaleNew - 0.2);
  zoomInner.style.transform = `scale(${scaleNew})`;
};

// فتح السلايد
openSlideNew.onclick = () => {
  lightboxImgNew.src = zoomImage.src;
  lightboxNew.classList.add('active');
};
closeLightboxNew.onclick = () => {
  lightboxNew.classList.remove('active');
};

// السحب لكل الاتجاهات
let isDraggingNew = false, startXNew, startYNew, scrollLeftNew, scrollTopNew;
zoomGallery.addEventListener('mousedown', (e) => {
  isDraggingNew = true;
  zoomGallery.style.cursor = 'grabbing';
  startXNew = e.pageX - zoomGallery.offsetLeft;
  startYNew = e.pageY - zoomGallery.offsetTop;
  scrollLeftNew = zoomGallery.scrollLeft;
  scrollTopNew = zoomGallery.scrollTop;
});
zoomGallery.addEventListener('mouseup', () => { isDraggingNew = false; zoomGallery.style.cursor = 'grab'; });
zoomGallery.addEventListener('mouseleave', () => { isDraggingNew = false; zoomGallery.style.cursor = 'grab'; });
zoomGallery.addEventListener('mousemove', (e) => {
  if(!isDraggingNew) return;
  const x = e.pageX - zoomGallery.offsetLeft;
  const y = e.pageY - zoomGallery.offsetTop;
  zoomGallery.scrollLeft = scrollLeftNew - (x - startXNew);
  zoomGallery.scrollTop = scrollTopNew - (y - startYNew);
});

// دعم اللمس
let touchStartXNew, touchStartYNew;
zoomGallery.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  touchStartXNew = touch.clientX;
  touchStartYNew = touch.clientY;
  scrollLeftNew = zoomGallery.scrollLeft;
  scrollTopNew = zoomGallery.scrollTop;
}, { passive: true });
zoomGallery.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  zoomGallery.scrollLeft = scrollLeftNew - (touch.clientX - touchStartXNew);
  zoomGallery.scrollTop = scrollTopNew - (touch.clientY - touchStartYNew);
}, { passive: true });
