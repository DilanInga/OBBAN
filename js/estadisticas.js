/* ============================================================
   ACWATT POWER — ESTADISTICAS.JS
   ============================================================ */

(function () {

  /* ── CONTADORES ─────────────────────────────────────────── */
  function animateCount(el) {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const start = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(easeOut(p) * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const numbersObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-count]').forEach(animateCount);
        numbersObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  const bnGrid = document.querySelector('.bn-grid');
  if (bnGrid) numbersObs.observe(bnGrid);

  /* ── BARRAS ─────────────────────────────────────────────── */
  const barsObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.cb-fill').forEach(fill => {
          fill.style.width = fill.dataset.w + '%';
        });
        barsObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  const compBars = document.querySelector('.comp-bars');
  if (compBars) barsObs.observe(compBars);

})();