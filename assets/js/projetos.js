// =========================================================
// Projetos, ações e eventos - Instituto 61
// Base visual preservada; conteúdo atualizado com material final.
// =========================================================

const projetos = [
  {
    titulo: "Meu Caminho",
    categoria: "programa",
    etiqueta: "Educação e juventude",
    status: "Programa em parceria",
    capa: "assets/img/refino-final/meu-caminho-01.jpg",
    resumo: "Programa em parceria com Instituto CNP Brasil e Programa Jovens de Expressão, voltado a adolescentes do ensino médio público do DF.",
    descricao: "Há 5 anos participamos do Programa Meu Caminho, em parceria com Instituto CNP Brasil e Programa Jovens de Expressão, cujo objetivo é promover oportunidades e reduzir desigualdades entre adolescentes em situação de vulnerabilidade social, matriculados no ensino médio da rede pública do Distrito Federal. Realizamos psicoterapia individual com os jovens, suporte emocional para as famílias, encontros de psicoeducação, análise de perfil e orientação profissional.",
    fotos: [
      "assets/img/refino-final/meu-caminho-01.jpg",
      "assets/img/refino-final/meu-caminho-02.jpg",
      "assets/img/refino-final/meu-caminho-03.jpg",
      "assets/img/refino-final/meu-caminho-04.jpg",
      "assets/img/refino-final/meu-caminho-05.jpg"
    ]
  },
  {
    titulo: "PULSAR",
    categoria: "programa",
    etiqueta: "Governança preventiva",
    status: "Programa institucional",
    capa: "assets/img/refino-final/logo-pulsar-programa-custom.png",
    resumo: "Programa de governança preventiva escolar e empresarial com análise diagnóstica de dados e planejamento estratégico.",
    descricao: "O PULSAR é um programa de governança preventiva escolar e empresarial, focado no levantamento, gerenciamento e análise diagnóstica de dados, que possibilitam intervenções, encaminhamentos e planejamento estratégico de ações voltadas para a promoção de saúde integral, através de uma infraestrutura automatizada.",
    fotos: [
      "assets/img/refino-final/logo-pulsar-programa-custom.png"
    ]
  },
  {
    titulo: "ForteMente",
    categoria: "projeto",
    etiqueta: "Saúde mental e orientação de vida",
    status: "Projeto institucional",
    capa: "assets/img/refino-final/logo-fortemente.png",
    resumo: "Projeto voltado à saúde mental, convivência social e orientação de vida para jovens e crianças.",
    descricao: "O Projeto ForteMente fundamenta-se na necessidade urgente de fortalecimento das ações voltadas à saúde mental, convivência social e orientação de vida para jovens e crianças. Realizamos encontros de psicoeducação em escolas públicas de Ceilândia/DF, abordando temas como saúde mental, uso excessivo de telas, bullying e cyberbullying. Também aplicamos testes psicológicos para análise de perfil e orientação profissional em estudantes do 3º ano.",
    fotos: [
      "assets/img/refino-final/logo-fortemente.png"
    ]
  },
  {
    titulo: "Doação de Alimentos",
    categoria: "acao",
    etiqueta: "Ações sociais",
    status: "Ação institucional",
    capa: "assets/img/refino-final/acao-doacao-alimentos-01.jpg",
    resumo: "Arrecadação e entrega de alimentos para pessoas em situação de vulnerabilidade.",
    descricao: "Ação de arrecadação e destinação de alimentos para pessoas em situação de vulnerabilidade e instituições de acolhimento, fortalecendo cuidado, dignidade e apoio comunitário.",
    fotos: [
      "assets/img/refino-final/acao-doacao-alimentos-01.jpg",
      "assets/img/refino-final/acao-doacao-alimentos-02.jpg",
      "assets/img/refino-final/acao-doacao-alimentos-03.jpg",
      "assets/img/refino-final/acao-doacao-alimentos-04.jpg"
    ]
  },
  {
    titulo: "Bazar Beneficente",
    categoria: "acao",
    etiqueta: "Ações sociais",
    status: "Ação institucional",
    capa: "assets/img/refino-final/acao-bazar-01.jpg",
    resumo: "Ação beneficente de arrecadação, organização e disponibilização de roupas e itens diversos.",
    descricao: "Ação beneficente voltada à mobilização solidária, arrecadação de itens e apoio a pessoas e famílias atendidas por iniciativas sociais do Instituto 61.",
    fotos: [
      "assets/img/refino-final/acao-bazar-01.jpg",
      "assets/img/refino-final/acao-bazar-02.jpg",
      "assets/img/refino-final/acao-bazar-03.jpg"
    ]
  },
  {
    titulo: "Oficina de Segurança Alimentar",
    categoria: "acao",
    etiqueta: "Ações educativas",
    status: "Ação institucional",
    capa: "assets/img/refino-final/acao-seguranca-alimentar-01.jpg",
    resumo: "Oficina com foco em segurança alimentar, orientação e práticas de cuidado.",
    descricao: "Ação educativa voltada à segurança alimentar, orientação prática, cuidado comunitário e fortalecimento de hábitos relacionados à saúde e à dignidade.",
    fotos: [
      "assets/img/refino-final/acao-seguranca-alimentar-01.jpg",
      "assets/img/refino-final/acao-seguranca-alimentar-02.jpg",
      "assets/img/refino-final/acao-seguranca-alimentar-03.jpg"
    ]
  },
  {
    titulo: "Encontro de Talentos de Jovens Neurodivergentes",
    categoria: "acao",
    etiqueta: "Inclusão e talentos",
    status: "Ação institucional",
    capa: "assets/img/refino-final/acao-talentos-01.jpg",
    resumo: "Encontro voltado à valorização de talentos, inclusão e expressão de jovens neurodivergentes.",
    descricao: "Ação de valorização, inclusão, convivência e reconhecimento de talentos de jovens neurodivergentes, fortalecendo oportunidades de expressão e pertencimento.",
    fotos: [
      "assets/img/refino-final/acao-talentos-01.jpg",
      "assets/img/refino-final/acao-talentos-02.jpg",
      "assets/img/refino-final/acao-talentos-03.jpg",
      "assets/img/refino-final/acao-talentos-04.jpg",
      "assets/img/refino-final/acao-talentos-05.jpg"
    ]
  },
  {
    titulo: "Passeio com Guarda-Mirim",
    categoria: "acao",
    etiqueta: "Convivência e juventude",
    status: "Ação institucional",
    capa: "assets/img/refino-final/acao-guarda-mirim-01.jpg",
    resumo: "Ação de convivência, lazer e integração com jovens da Guarda-Mirim.",
    descricao: "Atividade de convivência e integração voltada a jovens, promovendo lazer, pertencimento, vínculos e experiências coletivas positivas.",
    fotos: [
      "assets/img/refino-final/acao-guarda-mirim-01.jpg",
      "assets/img/refino-final/acao-guarda-mirim-02.jpg",
      "assets/img/refino-final/acao-guarda-mirim-03.jpg"
    ]
  },
  {
    titulo: "Apoio ao esporte e atletas",
    categoria: "acao",
    etiqueta: "Esporte e desenvolvimento",
    status: "Ação institucional",
    capa: "assets/img/refino-final/acao-esporte-01.jpg",
    resumo: "Apoio a práticas esportivas, atletas e ações de desenvolvimento por meio do esporte.",
    descricao: "Ação de incentivo ao esporte, valorização de atletas e fortalecimento de práticas que contribuem para disciplina, convivência, saúde e desenvolvimento humano.",
    fotos: [
      "assets/img/refino-final/acao-esporte-01.jpg",
      "assets/img/refino-final/acao-esporte-02.jpg"
    ]
  },
  {
    titulo: "Aniversário do Adolescentro",
    categoria: "evento",
    etiqueta: "Eventos",
    status: "Evento realizado",
    capa: "assets/img/refino-final/evento-adolescentro-01.jpg",
    resumo: "Evento de celebração e integração institucional ligado à história do Adolescentro.",
    descricao: "Evento de celebração, integração e fortalecimento de vínculos com a comunidade atendida, reforçando a memória institucional e o compromisso com cuidado e acolhimento.",
    fotos: [
      "assets/img/refino-final/evento-adolescentro-01.jpg",
      "assets/img/refino-final/evento-adolescentro-02.jpg",
      "assets/img/refino-final/evento-adolescentro-03.jpg",
      "assets/img/refino-final/evento-adolescentro-04.jpg",
      "assets/img/refino-final/evento-adolescentro-05.jpg"
    ]
  },
  {
    titulo: "Rodeio PBR",
    categoria: "evento",
    etiqueta: "Eventos",
    status: "Evento realizado",
    capa: "assets/img/refino-final/evento-rodeio-01.jpg",
    resumo: "Evento institucional com participação e registro de ações vinculadas ao Rodeio PBR.",
    descricao: "Evento institucional com participação e registro de ações vinculadas ao Rodeio PBR, fortalecendo presença social, convivência e articulação com parceiros.",
    fotos: [
      "assets/img/refino-final/evento-rodeio-01.jpg",
      "assets/img/refino-final/evento-rodeio-02.jpg",
      "assets/img/refino-final/evento-rodeio-03.jpg",
      "assets/img/refino-final/evento-rodeio-04.jpg",
      "assets/img/refino-final/evento-rodeio-05.jpg"
    ]
  }
];

let galleryTimer = null;

function renderProjetos(limit = null) {
  const grid = document.getElementById("projetos-grid");
  if (!grid) return;

  const list = limit ? projetos.slice(0, limit) : projetos;

  grid.innerHTML = list.map((p, index) => `
    <article class="card project-card reveal" data-category="${p.categoria}">
      <div class="project-cover project-cover-with-image">
        ${p.capa ? `<img class="project-cover-img" src="${p.capa}" alt="${p.titulo}">` : ""}
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

  clearInterval(galleryTimer);
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
        <small class="gallery-helper">Carrossel automático • clique na imagem para ampliar</small>
      </div>

      <div class="gallery-frame gallery-frame-zoom">
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

  dots.forEach(dot => {
    dot.addEventListener("click", () => setPhoto(Number(dot.dataset.galleryDot)));
  });

  image.addEventListener("click", () => openProjectLightbox(image.src, image.alt));

  if (photos.length > 1) {
    galleryTimer = setInterval(() => setPhoto(Number(gallery.dataset.current) + 1), 3500);
  }
}

function openProjectLightbox(src, alt) {
  let lightbox = document.getElementById("project-lightbox");

  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "project-lightbox";
    lightbox.className = "project-lightbox";
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Fechar imagem ampliada">×</button>
      <img src="" alt="">
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.classList.contains("lightbox-close")) {
        lightbox.classList.remove("open");
      }
    });
  }

  lightbox.querySelector("img").src = src;
  lightbox.querySelector("img").alt = alt;
  lightbox.classList.add("open");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) modal.classList.remove("open");
  clearInterval(galleryTimer);
}

document.addEventListener("click", (event) => {
  const modal = document.getElementById("project-modal");
  if (event.target === modal) closeProjectModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
    const lightbox = document.getElementById("project-lightbox");
    if (lightbox) lightbox.classList.remove("open");
  }
});
