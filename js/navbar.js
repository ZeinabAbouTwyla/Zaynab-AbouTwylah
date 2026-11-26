/* ============================================
   NAVBAR.JS — mobile hamburger toggle (+ language switch inside the menu)
============================================ */
const hamburger = document.querySelector('.navbar__hamburger');
const navLinks  = document.querySelector('.navbar__links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    syncLang();
  });
}

function syncLang() {
  const main = document.querySelector('.navbar > .navbar__lang');
  const li = navLinks && navLinks.querySelector('.navbar__langli');
  
}
window.addEventListener('load', () => {
  if (!navLinks || navLinks.querySelector('.navbar__langli')) return;
  const main = document.querySelector('.navbar > .navbar__lang');
  if (!main) return;
  const li = document.createElement('li'); li.className = 'navbar__langli';
  const b = document.createElement('button'); b.type = 'button'; b.className = 'navbar__lang'; 
  b.addEventListener('click', () => { main.click(); setTimeout(syncLang, 60); });
  li.appendChild(b); navLinks.appendChild(li);
});
