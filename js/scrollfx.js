/* ============================================
   SCROLLFX.JS — scroll-linked tilt-in for project cards and images
   Motion idea taken from omgcode.com: the element is driven by scroll position (not a timed jump).
   It starts slightly tilted in 3D, lower and faded, and settles flat as it reaches its place.
   Restrained on purpose: small angles, short distance, alternating sides. Off for reduced motion.
============================================ */
(function () {
  var els = [].slice.call(document.querySelectorAll('[data-fx]'));
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var ticking = false;
  function side(el, i) {
    var v = el.getAttribute('data-fx');
    if (v === 'l') return -1; if (v === 'r') return 1;
    return i % 2 === 0 ? -1 : 1;
  }
  function update() {
    ticking = false;
    var vh = window.innerHeight, rtl = document.documentElement.dir === 'rtl';
    els.forEach(function (el, i) {
      var r = el.getBoundingClientRect();
      var p = (vh * 0.98 - r.top) / (vh * 0.42);
      p = Math.max(0, Math.min(1, p));
      var e = 1 - Math.pow(1 - p, 3);              /* ease-out */
      var s = side(el, i) * (rtl ? -1 : 1);
      el.style.setProperty('--fx-o', (0.15 + 0.85 * e).toFixed(3));
      el.style.setProperty('--fx-y', ((1 - e) * 42).toFixed(1) + 'px');
      el.style.setProperty('--fx-rx', ((1 - e) * 9).toFixed(2) + 'deg');
      el.style.setProperty('--fx-ry', ((1 - e) * 7 * s).toFixed(2) + 'deg');
    });
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', req);
  window.addEventListener('load', req);
  update();
})();
