/* ============================================
   CONTACT.JS - sends the message to Zaynab's inbox through Web3Forms.
   The public access key goes in the hidden #access_key field in contact.html.
   Until a key is there, the form falls back to opening the visitor's email app.
============================================ */
const form = document.getElementById('contact-form');
const FALLBACK_TO = 'zeinababutwyla@gmail.com';

if (form) {
  const keyEl = form.querySelector('#access_key');
  const btn = form.querySelector('button[type="submit"]');
  const note = form.querySelector('#form-note');
  const live = !!(keyEl && keyEl.value.trim());
  const set = (el, t) => { if (el) el.textContent = t; };
  if (live) {
    set(btn, 'Send message');
    set(note, 'Your message goes straight to my inbox.');
  }
  const v = (id) => (form.querySelector('#' + id).value || '').trim();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!live) {
      const subject = v('subject') || ('Message from ' + v('name'));
      const body = v('message') + '\n\n' + v('name') + '\n' + v('email');
      window.location.href = 'mailto:' + FALLBACK_TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      return;
    }
    const bot = form.querySelector('#botcheck');
    if (bot && bot.checked) return; /* honeypot: a bot ticked the hidden box */
    btn.disabled = true;
    set(btn, 'Sending...');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: keyEl.value.trim(),
          name: v('name'),
          email: v('email'),
          subject: v('subject') || ('Message from ' + v('name') + ' (portfolio)'),
          message: v('message'),
          from_name: 'Portfolio contact form',
          botcheck: ''
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        form.reset();
        set(note, 'Message sent. Thank you, I will reply soon.');
        note.classList.add('is-ok'); note.classList.remove('is-err');
      } else { throw new Error('fail'); }
    } catch (err) {
      set(note, 'Could not send the message. Please try again, or email me directly.');
      note.classList.add('is-err'); note.classList.remove('is-ok');
    }
    btn.disabled = false;
    set(btn, 'Send message');
  });
}
