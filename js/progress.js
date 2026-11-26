/* Scroll-linked progress for the Experience timeline: the bar fills and the </> badge travels down. */
(function () {
  var tl = document.querySelector('.tl');
  if (!tl) return;
  function update() {
    var r = tl.getBoundingClientRect();
    var line = window.innerHeight * 0.5;               // reading line = middle of the screen
    var p = (line - r.top) / r.height;
    p = Math.max(0, Math.min(1, p));
    tl.style.setProperty('--p', p.toFixed(4));
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
