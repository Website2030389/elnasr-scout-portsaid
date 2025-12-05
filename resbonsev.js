// // *****************************hooome content************************
// --------------------
// Navbar Toggle (للأجهزة الصغيرة فقط)
// --------------------
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const dropdowns = document.querySelectorAll(".dropdown, .dropdown1");
const navLinks = document.querySelector(".nav-links");

function toggleNavbar() {
  if (window.innerWidth <= 1321) {
    // ✅ يظهر فقط للموبايل
    navbar.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }
}

if (hamburger) {
  hamburger.addEventListener("click", toggleNavbar);
}

// --------------------
// Dropdowns behavior
// --------------------
dropdowns.forEach((drop) => {
  const btn = drop.querySelector(
    ":scope > .dropbtn, :scope > .dropbtn1, :scope > a"
  );
  const mega =
    drop.querySelector(".mega-menu") || drop.querySelector(".mega-menu1");

  if (!btn || !mega) return;

  let backBtn = mega.querySelector(".back-btn");
  if (!backBtn) {
    backBtn = document.createElement("span");
    backBtn.className = "back-btn";
    backBtn.textContent = "◀ رجوع";
    mega.insertBefore(backBtn, mega.firstChild);
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.innerWidth <= 1321) {
      // ✅ dropdownات تشتغل بس على الموبايل
      Array.from(navLinks.children).forEach((li) => {
        if (li !== drop) li.style.display = "none";
      });
      mega.classList.add("show");
      if (navbar) navbar.scrollTop = 0;
    }
  });

  backBtn.addEventListener("click", () => {
    if (window.innerWidth <= 1321) {
      mega.classList.remove("show");
      Array.from(navLinks.children).forEach((li) => (li.style.display = ""));
      if (navbar) navbar.scrollTop = 0;
    }
  });
});

// --------------------
// Menu Button (مخصص فقط للشاشات الصغيرة)
// --------------------
const menuBtn = document.querySelector(".menu-btn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    if (window.innerWidth <= 1321) {
      navLinks.classList.toggle("active");
    }
  });
}
const backBtns = document.querySelectorAll(".back-btn");
const megaMenus = document.querySelectorAll(".mega-menu, .mega-menu1");

backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (window.innerWidth <= 1321) {
      // ✅ فقط للموبايل
      // اغلق أي mega menu مفتوحة
      megaMenus.forEach((menu) => menu.classList.remove("show"));

      // ارجع كل اللينكات للوضع الطبيعي
      Array.from(navLinks.children).forEach((li) => {
        li.style.display = "";
      });

      // اقفل الناف بار الجانبي لو مفتوح
      if (navbar) navbar.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
});
//
