(function () {
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('nav');
  const navWrap = header?.querySelector('.nav-wrap');
  const year = document.querySelector('#year');

  if (year) year.textContent = new Date().getFullYear();
  if (!header || !nav || !navWrap) return;

  if (!nav.id) nav.id = 'main-nav';

  let menuButton = header.querySelector('.menu-button');
  if (!menuButton) {
    menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-controls', nav.id);
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Apri il menu');
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    navWrap.insertBefore(menuButton, nav);
  }

  function closeMenu() {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Apri il menu');
  }

  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeMenu();
  });

  function scrollToCurrentHash() {
    if (!location.hash) return;

    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target) return;

    const headerHeight = header.getBoundingClientRect().height;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
    window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
  }

  window.addEventListener('hashchange', () => {
    window.setTimeout(scrollToCurrentHash, 0);
  });

  window.addEventListener('load', () => {
    window.setTimeout(scrollToCurrentHash, 0);
  });

  window.setTimeout(scrollToCurrentHash, 0);
})();
