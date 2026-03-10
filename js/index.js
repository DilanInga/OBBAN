/* ============================================================
   ACWATT POWER — INICIO.JS
   ============================================================ */

(function () {

  /* ── CONTADORES ANIMADOS ─────────────────────────────────── */
  function animateCount(el) {
    const target = parseInt(el.dataset.count);
    const duration = 1800;
    const start = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(easeOut(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(animateCount);
        metricsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const metrics = document.querySelector('.hero-metrics');
  if (metrics) metricsObserver.observe(metrics);

})();