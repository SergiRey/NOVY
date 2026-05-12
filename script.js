const body = document.body;
const themeBtn = document.getElementById('themeToggle');
const iconMoon = document.getElementById('iconMoon');
const iconSun = document.getElementById('iconSun');
const aboutLogo = document.getElementById('aboutLogo');
const footerLogo = document.getElementById('footerLogo');

function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
    iconMoon.style.display = 'none';
    iconSun.style.display = 'block';
    aboutLogo.src = 'assets/novy-logo.png';
    footerLogo.src = 'assets/novy-logo-white.png';
  } else {
    body.classList.remove('dark');
    iconMoon.style.display = 'block';
    iconSun.style.display = 'none';
    aboutLogo.src = 'assets/novy-logo-blue.png';
    footerLogo.src = 'assets/novy-logo-black.png';
  }
  localStorage.setItem('novy-theme', theme);
}

const saved = localStorage.getItem('novy-theme') || 'light';
applyTheme(saved);

themeBtn.addEventListener('click', () => {
  applyTheme(body.classList.contains('dark') ? 'light' : 'dark');
});

document.getElementById('year').textContent = new Date().getFullYear();