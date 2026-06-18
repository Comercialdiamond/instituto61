// =========================================================
// Layout compartilhado: Header, Footer e WhatsApp flutuante
// =========================================================

const pages = [
  { href: "index.html", label: "Início" },
  { href: "quem-somos.html", label: "Quem somos" },
  { href: "projetos.html", label: "Projetos" },
  { href: "parceiros.html", label: "Parceiros" },
  { href: "transparencia.html", label: "Transparência" },
  { href: "doacao.html", label: "Doação" },
  { href: "contato.html", label: "Contato" }
];

// IMPORTANTE:
// Substitua abaixo pelo número oficial do WhatsApp no formato internacional.
// Exemplo para Brasília: 5561999999999
const WHATSAPP_NUMBER = "5561982206222";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá, Instituto 61! Gostaria de mais informações.");

function currentPage() {
  return location.pathname.split("/").pop() || "index.html";
}

function renderHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const current = currentPage();
  const menu = pages.map(page => `
    <li><a class="${page.href === current ? "active" : ""}" href="${page.href}">${page.label}</a></li>
  `).join("");

  header.innerHTML = `
    <div class="container nav">
      <a class="logo" href="index.html" aria-label="Instituto 61">
        <img src="assets/img/logo-instituto61-color.png" alt="Instituto 61">
      </a>

      <ul class="nav-menu" id="nav-menu">${menu}</ul>

      <a class="btn btn-primary nav-cta" href="doacao.html">Doe agora</a>

      <button class="mobile-toggle" id="mobile-toggle" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="logo logo-footer" href="index.html">
            <img src="assets/img/logo-instituto61-white.png" alt="Instituto 61">
          </a>
          <p>Organização da Sociedade Civil sem fins lucrativos dedicada ao desenvolvimento humano, cidadania, saúde, cultura, educação, esporte, lazer e fortalecimento comunitário.</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <a href="quem-somos.html">Quem somos</a>
          <a href="projetos.html">Projetos</a>
          <a href="parceiros.html">Parceiros</a>
          <a href="transparencia.html">Transparência</a>
        </div>
        <div>
          <h4>Apoie</h4>
          <a href="doacao.html">Faça uma doação</a>
          <a href="contato.html">Proponha uma parceria</a>
          <a href="contato.html">Fale conosco</a>
        </div>
      </div>
      <div class="footer-bottom">
        © ${new Date().getFullYear()} Instituto 61. Todos os direitos reservados.
      </div>
    </div>
  `;
}

function renderFloatingWhatsApp() {
  if (document.querySelector('.floating-whatsapp')) return;

  const link = document.createElement('a');
  link.className = 'floating-whatsapp';
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Falar com o Instituto 61 pelo WhatsApp');

  link.innerHTML = `
    <span class="floating-whatsapp-label">Fale conosco</span>
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M19.11 17.24c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.89 1.11-.16.19-.33.22-.62.08-.29-.14-1.21-.44-2.3-1.41-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.5h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.36 0 1.39 1.01 2.73 1.15 2.92.14.19 1.98 3.02 4.79 4.24.67.29 1.19.46 1.59.59.67.21 1.27.18 1.75.11.53-.08 1.69-.69 1.93-1.35.24-.67.24-1.24.17-1.35-.07-.11-.26-.18-.55-.32z"/>
      <path d="M27.2 4.78A15.74 15.74 0 0 0 16.05.13C7.45.13.44 7.14.44 15.74c0 2.75.72 5.43 2.09 7.79L.24 31.87l8.55-2.24a15.55 15.55 0 0 0 7.26 1.85h.01c8.6 0 15.61-7.01 15.61-15.61 0-4.17-1.62-8.08-4.47-11.09zm-11.15 24c-2.33 0-4.61-.63-6.6-1.82l-.47-.28-5.07 1.33 1.35-4.94-.31-.51a12.93 12.93 0 0 1-1.97-6.82c0-7.16 5.82-12.98 12.99-12.98 3.46 0 6.71 1.35 9.15 3.79 2.44 2.45 3.79 5.7 3.79 9.16 0 7.16-5.82 12.98-12.96 12.98z"/>
    </svg>
  `;

  document.body.appendChild(link);
}

renderHeader();
renderFooter();
renderFloatingWhatsApp();
