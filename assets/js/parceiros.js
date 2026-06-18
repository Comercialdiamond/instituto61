// =========================================================
// Parceiros institucionais - Instituto 61
// Atualização v30
// =========================================================
const parceiros = [
  {
    id: "cnp",
    nome: "Instituto CNP Brasil",
    logo: "assets/img/parceiros/logo-cnp-brasil.png",
    descricao: "Parceiro em projeto educacional e de desenvolvimento de adolescentes.",
    textoDetalhe: "Parceria voltada ao fortalecimento de iniciativas educacionais, desenvolvimento humano e ampliação de oportunidades para adolescentes e jovens.",
    projetos: [
      {
        nome: "Meu Caminho",
        andamento: "Projeto institucional",
        resumo: "Orientação, desenvolvimento humano, projeto de vida e preparação de adolescentes para novas etapas da trajetória educacional."
      }
    ]
  },
  {
    id: "ministerio-direitos-humanos",
    nome: "Ministério dos Direitos Humanos e Cidadania",
    logo: "assets/img/parceiros/logo-governo-federal-mdhc.png",
    descricao: "Parceiro institucional vinculado a iniciativas de direitos humanos, cidadania, proteção social e desenvolvimento humano.",
    textoDetalhe: "Parceria institucional com o Ministério dos Direitos Humanos e Cidadania, voltada ao fortalecimento de ações sociais, proteção de direitos, cidadania e projetos de impacto coletivo.",
    projetos: [
      {
        nome: "Ações institucionais e sociais",
        andamento: "Em andamento",
        resumo: "Iniciativas desenvolvidas em cooperação institucional, com foco em cidadania, proteção social, cuidado e desenvolvimento humano."
      },
      {
        nome: "Termos de fomento",
        andamento: "Conforme instrumentos firmados",
        resumo: "Projetos e ações executados mediante instrumentos de parceria, conforme documentos publicados na área de Transparência."
      }
    ]
  },
  {
    id: "secretaria-educacao-df",
    nome: "Secretaria de Educação do Distrito Federal",
    logo: "assets/img/parceiros/logo-secretaria-educacao-df.png",
    descricao: "Parceira em ações educacionais, formação humana, juventude, inclusão e fortalecimento de oportunidades.",
    textoDetalhe: "Parceria voltada à promoção de iniciativas educacionais, ações formativas, apoio a jovens, desenvolvimento humano e fortalecimento de oportunidades no território.",
    projetos: [
      {
        nome: "Educação, juventude e desenvolvimento",
        andamento: "Em articulação",
        resumo: "Ações voltadas à educação, orientação, desenvolvimento socioemocional, projeto de vida e fortalecimento de vínculos."
      }
    ]
  },
  {
    id: "diamond",
    nome: "Diamond Corporate",
    logo: "assets/img/parceiros/logo-diamond-corporate-custom.jpg",
    descricao: "Parceira em soluções estratégicas, tecnologia e fortalecimento institucional.",
    textoDetalhe: "Parceria voltada ao fortalecimento institucional do Instituto 61, com apoio em estruturação, comunicação, tecnologia e expansão de iniciativas de impacto social.",
    projetos: [
      {
        nome: "PULSAR",
        andamento: "Em desenvolvimento e expansão",
        resumo: "Programa de governança preventiva e saúde integral com apoio estratégico e tecnológico."
      },
      {
        nome: "Apoio institucional",
        andamento: "Em andamento",
        resumo: "Apoio à organização, comunicação e estruturação de iniciativas sociais do Instituto 61."
      }
    ]
  }
];

function renderParceiros() {
  const grid = document.getElementById("partners-grid");
  if (!grid) return;

  grid.innerHTML = parceiros.map(parceiro => `
    <article class="card partner-card-v22 reveal">
      <div class="partner-logo-box-v22">
        <img src="${parceiro.logo}" alt="Logo ${parceiro.nome}">
      </div>
      <h3>${parceiro.nome}</h3>
      <p>${parceiro.descricao}</p>
      <a class="text-link" href="parceiro-detalhes.html?parceiro=${parceiro.id}">Ver detalhes →</a>
    </article>
  `).join("");
}

function getParceiroAtual() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("parceiro") || "cnp";
  return parceiros.find(parceiro => parceiro.id === id) || parceiros[0];
}

function renderParceiroDetalhes() {
  const parceiro = getParceiroAtual();

  const heading = document.getElementById("partner-detail-heading");
  const card = document.getElementById("partner-detail-card");
  const list = document.getElementById("partner-project-list");

  if (heading) {
    heading.innerHTML = `
      <h1 class="title-xl page-title-centered">${parceiro.nome}</h1>
      <p class="lead page-lead-justified">${parceiro.textoDetalhe}</p>
    `;
  }

  if (card) {
    card.innerHTML = `
      <div class="partner-detail-logo-box-v22">
        <img src="${parceiro.logo}" alt="Logo ${parceiro.nome}">
      </div>
      <h3>${parceiro.nome}</h3>
      <p>${parceiro.descricao}</p>
    `;
  }

  if (list) {
    list.innerHTML = parceiro.projetos.map(projeto => `
      <article class="card partner-project-item-v22">
        <div class="eyebrow">${projeto.andamento}</div>
        <h3>${projeto.nome}</h3>
        <p>${projeto.resumo}</p>
      </article>
    `).join("");
  }
}
