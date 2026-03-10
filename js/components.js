/* ============================================================
   ACWATT POWER — COMPONENTS.JS
   Universal: navbar scroll, hamburger, active link,
   scroll progress bar. Incluir en TODAS las páginas.
   ============================================================ */

(function () {

  /* ── SCROLL PROGRESS BAR ───────────────────────────────── */
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });


  /* ── NAVBAR SCROLL ─────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });


  /* ── HAMBURGER MENU ────────────────────────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Cerrar al hacer click en link
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }


  /* ── ACTIVE LINK según página actual ───────────────────── */
  const current = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === current) {
      link.classList.add('active');
    }
  });


  /* ── REVEAL ON SCROLL (Intersection Observer) ──────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Observar todos los elementos con data-reveal
  document.querySelectorAll('[data-reveal]').forEach((el, i) => {
    if (!el.dataset.delay) {
      // Auto-delay para hijos en grupo
      const parent = el.closest('[data-reveal-group]');
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll('[data-reveal]'));
        el.dataset.delay = siblings.indexOf(el) * 100;
      }
    }
    revealObserver.observe(el);
  });


  /* ── SMOOTH HOVER en cards ─────────────────────────────── */
  document.querySelectorAll('.hover-lift').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

})();