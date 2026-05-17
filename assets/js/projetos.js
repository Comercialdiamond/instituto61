// =========================================================
// Projetos institucionais - Dados editáveis
// Ajuste textos, categorias, status e fotos conforme a versão oficial.
// =========================================================

const projetos = [
  {
    titulo: "Meu Caminho",
    categoria: "educacao",
    etiqueta: "Educação e juventude",
    status: "Projeto institucional",
    resumo: "Projeto voltado à orientação, desenvolvimento humano e preparação de adolescentes para novas etapas da vida educacional.",
    descricao: "Iniciativa orientada ao desenvolvimento de jovens, apoio à construção de projeto de vida, educação socioemocional, orientação e preparação para novas etapas da trajetória educacional.",
    fotos: [
      "assets/img/hero-instituto61.png",
      "assets/img/referencia-missao.png",
      "assets/img/hero-instituto61-horizontal.png"
    ]
  },
  {
    titulo: "CENTEA",
    categoria: "saude",
    etiqueta: "Saúde e inclusão",
    status: "Projeto institucional",
    resumo: "Projeto de construção de um Centro de Atendimento especializado em Transtorno do Espectro Autista.",
    descricao: "Frente voltada à estruturação de atendimento especializado, inclusão, acolhimento e suporte a pessoas com Transtorno do Espectro Autista e suas famílias.",
    fotos: [
      "assets/img/hero-instituto61-horizontal.png",
      "assets/img/referencia-visao.png",
      "assets/img/hero-instituto61.png"
    ]
  },
  {
    titulo: "Florescer",
    categoria: "protecao",
    etiqueta: "Proteção social",
    status: "Projeto institucional",
    resumo: "Projeto de acolhimento, proteção e empregabilidade de mulheres em situação de violência e vulnerabilidade social.",
    descricao: "Iniciativa com foco em acolhimento, fortalecimento, autonomia e geração de oportunidades para mulheres em situação de vulnerabilidade.",
    fotos: [
      "assets/img/referencia-missao.png",
      "assets/img/referencia-valores.png",
      "assets/img/hero-instituto61-horizontal.png"
    ]
  },
  {
    titulo: "Amarelo de Setembro a Setembro",
    categoria: "saude",
    etiqueta: "Saúde mental",
    status: "Projeto institucional",
    resumo: "Projeto de prevenção ao suicídio e promoção permanente de saúde mental.",
    descricao: "Ação de conscientização e cuidado contínuo voltada à valorização da vida, saúde emocional e prevenção de situações de risco.",
    fotos: [
      "assets/img/referencia-visao.png",
      "assets/img/referencia-missao.png",
      "assets/img/hero-instituto61.png"
    ]
  },
  {
    titulo: "Motoparque",
    categoria: "cultura",
    etiqueta: "Cultura, esporte e lazer",
    status: "Realizado em edições",
    resumo: "Projeto voltado ao fortalecimento de eventos para praticantes e apreciadores do motociclismo.",
    descricao: "Iniciativa que integra lazer, convivência, turismo, esporte, cultura e desenvolvimento econômico local.",
    fotos: [
      "assets/img/hero-instituto61.png",
      "assets/img/referencia-valores.png",
      "assets/img/referencia-visao.png"
    ]
  },
  {
    titulo: "Bloco Pais e Filhos",
    categoria: "cultura",
    etiqueta: "Cultura e família",
    status: "Realizado",
    resumo: "Bloco de rua com proposta familiar, inclusiva e comunitária, unindo tradição e convivência.",
    descricao: "Projeto cultural que promove a união entre gerações, valorização do carnaval de rua, convivência familiar e integração comunitária.",
    fotos: [
      "assets/img/hero-instituto61-horizontal.png",
      "assets/img/hero-instituto61.png",
      "assets/img/referencia-valores.png"
    ]
  },
  {
    titulo: "São João de Águas Claras",
    categoria: "cultura",
    etiqueta: "Cultura popular",
    status: "Evento comunitário",
    resumo: "Evento tradicional voltado à cultura popular, convivência e fortalecimento comunitário.",
    descricao: "Iniciativa de valorização das tradições juninas, integração social, cultura popular e lazer comunitário.",
    fotos: [
      "assets/img/referencia-valores.png",
      "assets/img/hero-instituto61-horizontal.png",
      "assets/img/referencia-missao.png"
    ]
  }
];

function renderProjetos(limit = null) {
  const grid = document.getElementById("projetos-grid");
  if (!grid) return;

  const list = limit ? projetos.slice(0, limit) : projetos;

  grid.innerHTML = list.map((p, index) => `
    <article class="card project-card reveal" data-category="${p.categoria}">
      <div class="project-cover">
        <span class="project-tag">${p.etiqueta}</span>
      </div>
      <div class="project-body">
        <h3>${p.titulo}</h3>
        <p>${p.resumo}</p>
        <button class="text-link" data-project-index="${index}">Ver detalhes →</button>
      </div>
    </article>
  `).join("");

  setupProjectButtons();
}

function setupProjectFilters() {
  const buttons = document.querySelectorAll("[data-filter]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;
      const cards = document.querySelectorAll(".project-card");

      cards.forEach(card => {
        card.style.display = filter === "todos" || card.dataset.category === filter ? "block" : "none";
      });
    });
  });
}

function setupProjectButtons() {
  document.querySelectorAll("[data-project-index]").forEach(button => {
    button.addEventListener("click", () => {
      const project = projetos[Number(button.dataset.projectIndex)];
      openProjectModal(project);
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  const content = document.getElementById("project-modal-body");
  if (!modal || !content) return;

  const fotos = project.fotos && project.fotos.length ? project.fotos : ["assets/img/hero-instituto61.png"];

  content.innerHTML = `
    <button class="modal-close" id="modal-close">×</button>

    <span class="eyebrow">${project.etiqueta}</span>
    <h2 class="title-lg">${project.titulo}</h2>
    <p class="lead">${project.descricao}</p>

    <div class="grid-2 project-detail-grid">
      <div class="card project-detail-card">
        <h3>Status</h3>
        <p>${project.status}</p>
      </div>
      <div class="card project-detail-card">
        <h3>Categoria</h3>
        <p>${project.etiqueta}</p>
      </div>
    </div>

    <div class="project-gallery" data-current="0">
      <div class="project-gallery-head">
        <h3>Fotos do projeto</h3>
        <div class="gallery-controls">
          <button type="button" class="gallery-btn" id="gallery-prev" aria-label="Foto anterior">‹</button>
          <button type="button" class="gallery-btn" id="gallery-next" aria-label="Próxima foto">›</button>
        </div>
      </div>

      <div class="gallery-frame">
        <img id="gallery-image" src="${fotos[0]}" alt="Foto do projeto ${project.titulo}">
      </div>

      <div class="gallery-dots">
        ${fotos.map((_, i) => `<button type="button" class="gallery-dot ${i === 0 ? "active" : ""}" data-gallery-dot="${i}" aria-label="Ver foto ${i + 1}"></button>`).join("")}
      </div>
    </div>
  `;

  modal.dataset.galleryPhotos = JSON.stringify(fotos);
  modal.classList.add("open");

  document.getElementById("modal-close").addEventListener("click", closeProjectModal);
  setupGalleryControls(project.titulo);
}

function setupGalleryControls(projectTitle) {
  const modal = document.getElementById("project-modal");
  const gallery = modal.querySelector(".project-gallery");
  const image = document.getElementById("gallery-image");
  const dots = modal.querySelectorAll("[data-gallery-dot]");
  const photos = JSON.parse(modal.dataset.galleryPhotos || "[]");

  if (!gallery || !image || photos.length === 0) return;

  function setPhoto(index) {
    const safeIndex = (index + photos.length) % photos.length;
    gallery.dataset.current = String(safeIndex);
    image.src = photos[safeIndex];
    image.alt = `Foto ${safeIndex + 1} do projeto ${projectTitle}`;

    dots.forEach(dot => {
      dot.classList.toggle("active", Number(dot.dataset.galleryDot) === safeIndex);
    });
  }

  const prev = document.getElementById("gallery-prev");
  const next = document.getElementById("gallery-next");

  if (prev) prev.addEventListener("click", () => setPhoto(Number(gallery.dataset.current) - 1));
  if (next) next.addEventListener("click", () => setPhoto(Number(gallery.dataset.current) + 1));

  dots.forEach(dot => {
    dot.addEventListener("click", () => setPhoto(Number(dot.dataset.galleryDot)));
  });
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) modal.classList.remove("open");
}

document.addEventListener("click", (event) => {
  const modal = document.getElementById("project-modal");
  if (event.target === modal) closeProjectModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProjectModal();
});
