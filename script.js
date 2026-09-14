const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => {
  observer.observe(el);
});

document.getElementById('year').textContent = new Date().getFullYear();

const navLinks = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

const setActive = () => {
  const y = window.scrollY + 140;
  let current = sections[0]?.id;

  sections.forEach((section) => {
    if (y >= section.offsetTop) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#f4f7fb' : '';
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();
