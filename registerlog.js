const LOCALSTORAGE_KEY = "registered_badge_form_v3";
const badgeLink = document.getElementById('badgeLink');
const slideWrap = document.getElementById('slideWrap');
const slide = document.getElementById('slide');
const closeSlide = document.getElementById('closeSlide');
const regForm = document.getElementById('regForm');
const hiddenIframe = document.querySelector('iframe[name="hidden_iframe"]');

// التحقق إذا المستخدم مسجل
function isAlreadyRegistered() {
  const saved = localStorage.getItem(LOCALSTORAGE_KEY);
  if (!saved) return false;
  const data = JSON.parse(saved);
  return !!data.registered;
}

// حفظ البيانات في LocalStorage
function markAsRegistered(info = {}) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ registered:true, info }));
}

// تحديث واجهة المستخدم
function updateUI() {
  if(isAlreadyRegistered()){
    badgeLink.textContent = 'تم التسجيل من قبل  ';
    badgeLink.style.pointerEvents = 'none';
    badgeLink.style.opacity = '0.6';
  }
}

// فتح وإغلاق Slide
badgeLink.addEventListener('click', function(e){
  if(!isAlreadyRegistered()){
    e.preventDefault();
    slideWrap.style.display='flex';
  }
});

closeSlide.addEventListener('click', function(){
  slideWrap.style.display='none';
});

// التعامل مع إرسال الفورم باستخدام iframe
hiddenIframe.addEventListener('load', function(){
  if(!regForm) return;
  const info = {};
  new FormData(regForm).forEach((v,k)=> info[k]=v);
  markAsRegistered(info);

  // تحويل المستخدم بعد التسجيل
  window.location.href = "Homescout.html";
});
regForm.addEventListener('submit', function(){
  // حفظ البيانات مباشرة في LocalStorage
  const info = {};
  new FormData(regForm).forEach((v,k)=> info[k]=v);
  localStorage.setItem("registered_badge_form_v3", JSON.stringify({registered:true, info}));

  // تحويل المستخدم بعد 1 ثانية للسماح بالإرسال
  setTimeout(()=>{
    window.location.href = "Homescout.html";
  }, 1000); // 1000ms = ثانية
});

// تحديث الواجهة عند التحميل
updateUI();