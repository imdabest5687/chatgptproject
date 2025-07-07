document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    // prevent jump until effect ends
    e.preventDefault();
    btn.classList.add('clicked');
    const href = btn.getAttribute('href');

    setTimeout(() => {
      btn.classList.remove('clicked');
      if (href) {
        window.location.hash = href.substring(href.indexOf('#'));
      }
    }, 300);
  });
});
