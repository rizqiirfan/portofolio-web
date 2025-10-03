// FADE IN saat scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.75;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.querySelector('h2').classList.add('show');
      section.querySelector('p')?.classList.add('show');
      section.querySelector('.profile-photo')?.classList.add('show');
    }
  });
});

// DARK MODE
const toggle = document.querySelector('.toggle-theme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// POPUP GALERI
const popup = document.getElementById('popup');
const popupImg = popup.querySelector('img');
const galleryImgs = document.querySelectorAll('.gallery-container img');
galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    popup.classList.add('active');
    popupImg.src = img.src;
  });
});
popup.querySelector('span').addEventListener('click', () => {
  popup.classList.remove('active');
});
