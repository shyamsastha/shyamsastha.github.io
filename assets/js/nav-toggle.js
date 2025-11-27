// assets/js/nav-toggle.js
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  function closeNav() {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    nav.querySelectorAll('.nav-more').forEach(d => d.setAttribute('aria-hidden', 'true'));
  }
  function openNav() {
    nav.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    nav.querySelectorAll('.nav-more').forEach(d => d.setAttribute('aria-hidden', 'false'));
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (nav.classList.contains('open')) closeNav(); else openNav();
  });

  nav.querySelectorAll('.nav-link').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !btn.contains(e.target)) closeNav();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });
});
