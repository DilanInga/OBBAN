(async function () {
  // NAVBAR global
  const root = document.getElementById("navbar-root");
  if (root) {
    const res = await fetch("navbar.html");
    root.innerHTML = await res.text();

    // marcar activo
    const page = window.__PAGE__ || "";
    document.querySelectorAll(".ob-link").forEach(a => {
      if (a.dataset.page === page) a.classList.add("is-active");
    });

// Burger (abre/cierra menú)
const burger = document.querySelector(".ob-burger");
const navRight = document.querySelector(".ob-nav-right");
if (burger && navRight) {
  burger.addEventListener("click", () => navRight.classList.toggle("open"));
}

// Buscador (demo)
const sInp = document.getElementById("obSearch");
const sBtn = document.getElementById("obSearchBtn");
if (sInp && sBtn) {
  const runSearch = () => {
    const q = (sInp.value || "").trim();
    if (!q) return;
    alert("Búsqueda (demo): " + q);
    // luego lo conectamos a una página real: resultados.html?q=...
  };
  sBtn.addEventListener("click", runSearch);
  sInp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runSearch();
  });
}
  }

  // navbar scroll + toTop
  const nav = document.querySelector(".ob-navbar");
  const onScroll = () => {
    const y = window.scrollY || 0;
    if (nav) nav.classList.toggle("is-scrolled", y > 12);

    const toTop = document.getElementById("toTop");
    if (toTop) toTop.classList.toggle("show", y > 600);
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  // FOOTER global
const footerRoot = document.getElementById("footer-root");
if (footerRoot) {
  const resF = await fetch("footer.html");
  footerRoot.innerHTML = await resF.text();

  const yf = document.getElementById("yearFooter");
  if (yf) yf.textContent = new Date().getFullYear();
}

  // subir
  const btn = document.getElementById("toTop");
  if (btn) {
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // año
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();