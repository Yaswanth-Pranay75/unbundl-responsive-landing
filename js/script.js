// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn && menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  menuBtn.classList.toggle('open');
  navMenu.classList.toggle('show');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({behavior:'smooth', block:'start'});
    // close menu on mobile
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded','false');
    }
  });
});