/* ============================================
   ANIMATIONS.JS — skill bars animate on view
============================================ */
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target.querySelector('.skill-bar__fill');
        if (fill) fill.style.width = fill.dataset.pct + '%';
        barObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll('.skill-bar').forEach(bar => barObserver.observe(bar));
