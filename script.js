document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const menuButton = document.querySelector('[data-menu-button]');
  const reveals = document.querySelectorAll('.reveal');
  const mobileBuy = document.querySelector('[data-mobile-buy]');
  const bookScene = document.querySelector('[data-book-scene]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Année automatique dans le footer.
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Header + CTA mobile selon le scroll.
  const updateChrome = () => {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 24);
    mobileBuy?.classList.toggle('is-visible', y > 560 && window.innerWidth <= 620);
  };
  updateChrome();
  window.addEventListener('scroll', updateChrome, { passive: true });
  window.addEventListener('resize', updateChrome);

  // Menu mobile accessible.
  const closeMenu = () => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  // Apparitions au défilement.
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -35px' });

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // Halo subtil qui suit le pointeur, desktop uniquement.
  if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('pointermove', (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    }, { passive: true });
  }

  // Léger effet 3D sur le livre sans bibliothèque externe.
  if (!reduceMotion && bookScene && window.matchMedia('(pointer:fine)').matches) {
    const book = bookScene.querySelector('.book-frame');
    bookScene.addEventListener('pointermove', (event) => {
      const rect = bookScene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      book.style.transform = `rotateY(${x * 7 - 2}deg) rotateX(${y * -5 + 1}deg) translate3d(${x * 4}px, ${y * 4}px, 0)`;
    });
    bookScene.addEventListener('pointerleave', () => {
      book.style.transform = 'rotateY(-2deg) rotateX(1deg) translateZ(0)';
    });
  }
});
