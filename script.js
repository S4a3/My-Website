// Typewriter effect for your role
const roles = [
  'Java Full Stack Developer',
  'Spring Boot & REST API Developer',
  'Angular Frontend Developer',
  'Backend Developer (Java + Spring)'
  
];
let currentRole = 0, currentChar = 0, typewriterTarget = document.getElementById('typewriter');

function typeRole() {
  if (!typewriterTarget) typewriterTarget = document.getElementById('typewriter');
  if (!typewriterTarget) return;
  let role = roles[currentRole];
  typewriterTarget.textContent = role.slice(0, currentChar + 1);
  if (currentChar < role.length - 1) {
    currentChar++;
    setTimeout(typeRole, 70);
  } else {
    setTimeout(() => {
      eraseRole();
    }, 1400);
  }
}

function eraseRole() {
  let role = roles[currentRole];
  typewriterTarget.textContent = role.slice(0, currentChar - 1);
  if (currentChar > 0) {
    currentChar--;
    setTimeout(eraseRole, 40);
  } else {
    currentRole = (currentRole + 1) % roles.length;
    setTimeout(typeRole, 350);
  }
}
document.addEventListener('DOMContentLoaded', typeRole);

// Skill bar animation
function animateSkillBars() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    let pct = bar.getAttribute('data-width');
    bar.style.width = pct + '%';
  });
}
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Slide/fade-in for elements on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.fade-in, .slide-in');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 48) {
      el.classList.add('show');
      el.style.opacity = 1;
      el.style.transform = 'none';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
});

// Year auto-update in footer
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Dark/Light toggle
const themeBtn = document.getElementById('themeToggle');
function toggleTheme() {
  const curr = document.documentElement.getAttribute('data-theme');
  const next = curr === 'dark' ? null : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next ? 'dark' : 'light');
}
// On load, keep last theme
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
});
if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
