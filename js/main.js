/* ============================================
   MAIN.JS — runs on every page
============================================ */

// ---- Favicon (ZA monogram), added on every page. Paths follow this script's own location. ----
(function () {
  var base = document.currentScript && document.currentScript.src ? document.currentScript.src.replace(/js\/main\.js.*$/, '') : '';
  [['icon', 'image/x-icon', 'assets/favicon/favicon.ico', ''],
   ['icon', 'image/png', 'assets/favicon/favicon-32.png', '32x32'],
   ['apple-touch-icon', '', 'assets/favicon/apple-touch-icon.png', '180x180']].forEach(function (a) {
    var l = document.createElement('link'); l.rel = a[0]; if (a[1]) l.type = a[1]; if (a[3]) l.sizes = a[3]; l.href = base + a[2]; document.head.appendChild(l);
  });
})();

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
