

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
  const next = curr === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

  // 🔥 reload particles based on theme
  loadParticles(next);
}

// On load, keep last theme
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', theme);

  // 🔥 load particles with correct theme
  loadParticles(theme);
});
if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

function loadParticles(theme) {

  let bgColor = theme === "dark" ? "#0a0f2c" : "#f6f8fb";
  // let particleColor = theme === "dark" ? "#00bfff" : "#007bff";
  let particleColor = theme === "dark" ? "#00bfff" : "#3b82f6";


  // change background
  document.getElementById("particles-js").style.background = bgColor;

  particlesJS("particles-js", {
    particles: {
      number: { value: 70 },
      color: { value: particleColor },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: particleColor,
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    },
    retina_detect: true
  });
}
