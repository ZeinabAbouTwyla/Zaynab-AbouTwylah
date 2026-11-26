/* Certificate viewer: same behaviour as the reference's screenshot viewer. Arrows (and the arrow keys) go to the previous/next certificate and wrap around. */
(function () {
  var v = document.querySelector('[data-cview]'); if (!v) return;
  var slides = v.querySelectorAll('.cview__slide'), dots = v.querySelectorAll('.cview__dot'), count = v.querySelector('.cview__n'), i = 0;
  function show(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
    dots.forEach(function (d, k) { d.classList.toggle('is-on', k === i); });
    count.textContent = (i + 1) + ' / ' + slides.length;
  }
  v.querySelector('.cview__arrow--prev').addEventListener('click', function () { show(i - 1); });
  v.querySelector('.cview__arrow--next').addEventListener('click', function () { show(i + 1); });
  dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); }); });
  window.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') show(i - 1); if (e.key === 'ArrowRight') show(i + 1); });
  show(0);
})();
