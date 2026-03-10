/* ============================================================
   ACWATT POWER — CONTACTO.JS
   ============================================================ */

(function () {

  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('cfSuccess');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validación simple
    let valid = true;
    const required = form.querySelectorAll('[required]');
    required.forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
    });

    // Validar email
    const email = document.getElementById('email');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('error');
      valid = false;
    }

    if (!valid) {
      submitBtn.textContent = 'Revisa los campos requeridos';
      submitBtn.style.background = 'rgba(200,80,80,0.8)';
      submitBtn.style.color = '#fff';
      setTimeout(() => {
        submitBtn.innerHTML = 'Enviar solicitud <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }, 2500);
      return;
    }

    // Envío simulado
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.querySelectorAll('input, textarea, select').forEach(f => f.value = '');
      submitBtn.style.display = 'none';
      successMsg.classList.add('show');
    }, 1600);
  });

  // Quitar error al escribir
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });

})();