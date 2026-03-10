/* ============================================================
   ACWATT POWER — PROYECTOS.JS
   ============================================================ */

(function () {

  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.proj-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.cat;
      cards.forEach(card => {
        const match = cat === 'todos' || card.dataset.cat === cat;
        card.classList.toggle('hidden', !match);
        // Quitar wide en cartas ocultas para no dejar huecos raros
        if (card.classList.contains('proj-card--wide') && !match) {
          card.style.gridColumn = '';
        } else if (card.classList.contains('proj-card--wide') && match) {
          card.style.gridColumn = 'span 2';
        }
      });
    });
  });

})();