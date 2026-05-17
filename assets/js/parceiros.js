// =========================================================
// Parceiros institucionais - Dados editáveis
// Altere nomes, logos, descrições, projetos e andamento conforme necessário.
// =========================================================

const parceiros = [
  {
    id: "cnp",
    nome: "Instituto CNP Brasil",
    logo: "assets/img/parceiros/logo-cnp-brasil.svg",
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
    id: "caixa",
    nome: "Caixa Seguradora",
    logo: "assets/img/parceiros/logo-caixa-seguradora.svg",
    descricao: "Apoiadora/parceira em iniciativa voltada ao novo Ensino Médio e preparação de adolescentes.",
    textoDetalhe: "Apoio institucional relacionado a ações de educação, orientação e preparação de adolescentes para desafios escolares, sociais e profissionais.",
    projetos: [
      {
        nome: "Meu Caminho",
        andamento: "Em estruturação/execução institucional",
        resumo: "Ação voltada à preparação de adolescentes, construção de perspectivas e desenvolvimento socioeducacional."
      }
    ]
  },
  {
    id: "orgaos-publicos",
    nome: "Órgãos públicos e secretarias",
    logo: "assets/img/parceiros/logo-orgaos-publicos.svg",
    descricao: "Espaço para listar parcerias formais, termos de fomento, colaboração e execução de eventos.",
    textoDetalhe: "Relações institucionais voltadas à execução de projetos, ações comunitárias, eventos, termos de colaboração e iniciativas de interesse público.",
    projetos: [
      {
        nome: "Eventos comunitários",
        andamento: "Conforme termos e parcerias vigentes",
        resumo: "Ações culturais, comunitárias, sociais e de desenvolvimento local executadas em cooperação com instituições públicas."
      },
      {
        nome: "Projetos sociais e culturais",
        andamento: "Sob demanda institucional",
        resumo: "Iniciativas organizadas conforme planejamento, capacidade operacional e objetivos de cada parceria."
      }
    ]
  }
];

function renderParceiros() {
  const grid = document.getElementById("partners-grid");
  if (!grid) return;

  grid.innerHTML = parceiros.map(parceiro => `
    <article class="card partner-card partner-card-modern reveal">
      <div>
        <div class="partner-card-head">
          <img class="partner-logo" src="${parceiro.logo}" alt="Logo ${parceiro.nome}">
          <h3>${parceiro.nome}</h3>
        </div>
        <p>${parceiro.descricao}</p>
      </div>

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
      <img src="${parceiro.logo}" alt="Logo ${parceiro.nome}">
      <div>
        <h1 class="title-xl page-title-centered">${parceiro.nome}</h1>
        <p class="lead page-lead-justified">${parceiro.textoDetalhe}</p>
      </div>
    `;
  }

  if (card) {
    card.innerHTML = `
      <img class="partner-detail-logo" src="${parceiro.logo}" alt="Logo ${parceiro.nome}">
      <h3>${parceiro.nome}</h3>
      <p>${parceiro.descricao}</p>
    `;
  }

  if (list) {
    list.innerHTML = parceiro.projetos.map(projeto => `
      <article class="partner-project-item">
        <div class="project-status-pill">${projeto.andamento}</div>
        <h3>${projeto.nome}</h3>
        <p>${projeto.resumo}</p>
      </article>
    `).join("");
  }
}
