const dialog = document.getElementById('welcomeDialog');
const backdrop = document.getElementById('backdrop');
const form = document.getElementById('dataForm');

function openModal() {
  backdrop.classList.add('show-dim');
  dialog.showModal();
}

dialog.addEventListener('cancel', (ev) => ev.preventDefault());
dialog.addEventListener('close', (ev) => {
  if (!dialog.dataset.allowClose) {
    ev.preventDefault();
    setTimeout(openModal, 0);
  }
});

// ✅ لينك Google Form الصحيح بدون /u/0/
const GOOGLE_FORM_ENDPOINT = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRgVmWf8f4-hsF5YHyf6VY3MBEmhADGElT-nTSwmdne-geSw/formResponse";
const ENTRY_NAME = "entry.1889452457";
const ENTRY_AGE = "entry.1757497836";
const ENTRY_CHURCH = "entry.85911666";

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('nameInput').value.trim();
  const age = document.getElementById('ageInput').value.trim();
  const church = document.getElementById('churchInput').value.trim();

  if (!name || !age || !church) {
    alert('من فضلك املأ كل الحقول.');
    return;
  }

  const formData = new FormData();
  formData.append(ENTRY_NAME, name);
  formData.append(ENTRY_AGE, age);
  formData.append(ENTRY_CHURCH, church);

  try {
    await fetch(GOOGLE_FORM_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    dialog.dataset.allowClose = true;
    backdrop.classList.remove('show-dim');
    dialog.close();

    setTimeout(() => {
      alert('✅ تم تسجيل بياناتك بنجاح!');
    }, 1000);

  } catch (error) {
    console.error("❌ حدث خطأ أثناء الإرسال:", error);
    alert('حدث خطأ أثناء إرسال البيانات، حاول مرة أخرى.');
  }
}
);

// window.addEventListener('load', () => {
//   setTimeout(openModal, 4000); // ⏱️ يظهر بعد 5 ثواني
// });
// localstodg
document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('welcomeDialog');
  const backdrop = document.getElementById('backdrop');
  const form = document.getElementById('dataForm');

  // ✅ التحقق إذا كانت البيانات محفوظة مسبقًا
  const savedName = localStorage.getItem('user_name');
  const savedAge = localStorage.getItem('user_age');
  const savedChurch = localStorage.getItem('user_church');

  // لو البيانات موجودة، ما يفتحش الفورم
  if (savedName && savedAge && savedChurch) {
    console.log("✅ البيانات موجودة مسبقًا، لن يتم عرض النموذج مرة أخرى.");
    return;
  }

  // ✳️ لو البيانات مش موجودة، يفتح النموذج بعد ثانية
  setTimeout(() => {
    backdrop.classList.add('show-dim');
    dialog.showModal();
  }, 4000);

  // ✅ عند إرسال النموذج
  form.addEventListener('submit', () => {
    const name = document.getElementById('nameInput').value.trim();
    const age = document.getElementById('ageInput').value.trim();
    const church = document.getElementById('churchInput').value.trim();

    if (name && age && church) {
      // حفظ البيانات في Local Storage
      localStorage.setItem('user_name', name);
      localStorage.setItem('user_age', age);
      localStorage.setItem('user_church', church);

      // غلق النموذج بعد الحفظ
      dialog.dataset.allowClose = true;
      backdrop.classList.remove('show-dim');
      dialog.close();

      alert("✅ تم حفظ بياناتك بنجاح، ولن تظهر الرسالة مرة أخرى!");
    }
  });
});

