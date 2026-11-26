/* Project galleries: laptop/phone toggle, prev/next, dots. */
document.querySelectorAll('[data-gallery]').forEach(function (g) {
  var slides = g.querySelectorAll('.gal__slide'), dots = g.querySelectorAll('.gal__dot'), cap = g.querySelector('.gal__cap'), cnt = g.querySelector('.gal__count'), i = 0;
  function show(n, dir) {
    var prev = i;
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
    dots.forEach(function (d, k) { d.classList.toggle('is-on', k === i); });
    cap.textContent = slides[i].getAttribute('data-cap');
    if (cnt) cnt.textContent = (i + 1) + ' / ' + slides.length;
    if (i !== prev) {
      var d = dir || (i > prev ? 1 : -1), rtl = document.documentElement.dir === 'rtl';
      slides[i].style.setProperty('--gdir', rtl ? -d : d);
      slides[i].classList.remove('is-anim'); void slides[i].offsetWidth; slides[i].classList.add('is-anim');
    }
  }
  g.querySelectorAll('.gal__nav').forEach(function (b) { b.addEventListener('click', function () { show(i + Number(b.dataset.dir), Number(b.dataset.dir)); }); });
  dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); }); });
  g.querySelectorAll('.gal__toggle button').forEach(function (b) {
    b.addEventListener('click', function () {
      g.setAttribute('data-device', b.dataset.dev);
      g.querySelectorAll('.gal__toggle button').forEach(function (x) { x.classList.toggle('is-on', x === b); });
    });
  });
});

// Detail pages: left/right arrow keys flip through the screenshots (wraps around).
document.querySelectorAll('[data-gallery][data-keys]').forEach(function (g) {
  window.addEventListener('keydown', function (e) {
    var rt = document.documentElement.dir === 'rtl';
    if (e.key === (rt ? 'ArrowRight' : 'ArrowLeft')) g.querySelector('.gal__nav[data-dir="-1"]').click();
    if (e.key === (rt ? 'ArrowLeft' : 'ArrowRight')) g.querySelector('.gal__nav[data-dir="1"]').click();
  });
});
