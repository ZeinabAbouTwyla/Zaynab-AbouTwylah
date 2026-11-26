/* ============================================
   MAIN.JS — runs on every page
============================================ */

// ---- Scroll reveal (sequential: items that appear together come in one after another) ----
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealObserver = new IntersectionObserver(
  (entries) => {
    let n = 0;
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = REDUCED ? '0ms' : (n++ * 110) + 'ms';
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
// Heading blocks and the Home intro text come in one by one as well.
document.querySelectorAll('.page > .page__hi, .page > .page__title, .page > .page__sub, .home-hero__text > *')
  .forEach(el => el.classList.add('reveal'));
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- Active nav link ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar__links a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPage) link.classList.add('active');
});
