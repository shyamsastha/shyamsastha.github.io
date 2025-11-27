// assets/js/toggle-profile.js
document.addEventListener('DOMContentLoaded', function () {
  let img = document.querySelector('img.profile-photo[data-images]');
  if (!img) img = document.querySelector('img[alt="Logo"]');
  if (!img) return;

  let pool = [];
  const data = img.getAttribute('data-images');
  if (data && data.trim().length) {
    pool = data.split(',').map(s => s.trim()).filter(Boolean);
  } else {
    pool = [
      '/assets/images/profile/1000027231.jpg',
      '/assets/images/profile/DSC_0039.jpg',
      '/assets/images/profile/PXL_20250425_004018099_PORTRAIT.jpg',
      '/assets/images/profile/portrait_2.jpeg'
    ];
  }

  if (!pool.includes(img.src)) pool.unshift(img.src);
  let idx = pool.indexOf(img.src); if (idx < 0) idx = 0;

  img.style.cursor = 'pointer';
  img.setAttribute('tabindex', '0');
  img.addEventListener('click', function () { idx = (idx + 1) % pool.length; this.src = pool[idx]; });
  img.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); img.click(); }});
});
