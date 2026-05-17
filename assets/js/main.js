// =========================================================
// Interações gerais
// =========================================================

function setupHeader() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("mobile-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => menu.classList.remove("open"));
    });
  }

  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal:not(.visible)");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(item => observer.observe(item));
}

function setupForms() {
  document.querySelectorAll("form[data-demo-form]").forEach(form => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const msg = form.querySelector(".form-message");
      if (msg) msg.style.display = "block";
      form.reset();
    });
  });
}

setupHeader();
setupReveal();
setupForms();
