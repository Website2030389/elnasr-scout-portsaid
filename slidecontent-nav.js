const correctUsername = "elnasrscout"; // ← اسم الدخول الصحيح
const correctPassword = "71125"; // ← كلمة المرور الصحيحة

const link6 = document.getElementById("protected-link");
const slide = document.getElementById("login-slide");
const loginBtn = document.getElementById("login-btn");
const closeBtn = document.getElementById("close-btn");
const errorMsg = document.getElementById("error-msg");

// عند الضغط على اللينك
link6.addEventListener("click", function (e) {
  e.preventDefault();
  slide.style.display = "flex";
});

// زر الدخول
loginBtn.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    window.location.href = "arodT8dmya.html"; // ← غير الرابط هنا
  } else {
    errorMsg.textContent = "❌ اسم المستخدم أو كلمة المرور غير صحيحة";
  }
});

// زر الإغلاق
closeBtn.addEventListener("click", function () {
  slide.style.display = "none";
  errorMsg.textContent = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});
