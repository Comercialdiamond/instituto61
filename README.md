# Instituto 61 - Site institucional moderno V2

Versão ajustada com os arquivos enviados: logos, identidade visual, missão, visão, valores e conselho de gestão.

## Como testar

1. Extraia a pasta.
2. Abra `index.html` no navegador.

Opção recomendada:
1. Abra a pasta no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html`.
4. Selecione **Open with Live Server**.

## Estrutura

```
instituto61-site/
├── index.html
├── quem-somos.html
├── projetos.html
├── parceiros.html
├── transparencia.html
├── doacao.html
├── contato.html
├── assets/
│   ├── css/style.css
│   ├── js/layout.js
│   ├── js/main.js
│   ├── js/projetos.js
│   ├── img/
│   └── docs/
└── README.md
```

## Principais ajustes da V2

- Paleta ajustada para teal + laranja + branco.
- Header e rodapé usando a logo real do Instituto 61.
- Hero com imagem institucional enviada.
- Página Quem Somos com missão, visão, valores e equipe.
- Conselho de Gestão em cards modernos.
- Projetos mantidos em cards e filtros JS.
- Referências visuais enviadas preservadas em `assets/img/`.

## Onde editar

- Cores e layout: `assets/css/style.css`
- Menu e rodapé: `assets/js/layout.js`
- Projetos: `assets/js/projetos.js`
- Textos institucionais: `index.html` e `quem-somos.html`
- Documentos públicos: coloque PDFs em `assets/docs/` e atualize `transparencia.html`


## Ajustes V4
- Home simplificada conforme feedback visual do usuário.
- Hero sem logo/imagem lateral.
- Quem somos centralizado.
- Remoção dos blocos de missão/visão/valores, conselho e Ubuntu da home.


## V5 - Padronização de fonte

Esta versão padroniza a fonte de todas as páginas para **Montserrat**.

Arquivos alterados:
- Todos os arquivos `.html`, com import do Google Fonts atualizado.
- `assets/css/style.css`, com `font-family` global para Montserrat.


## V6 - Ajustes da página Quem Somos

A página `quem-somos.html` foi ajustada conforme solicitado:

- Removida a imagem grande da logo no topo da página.
- O título "Quem somos" passou para o topo com linha horizontal.
- Texto principal centralizado e texto menor justificado.
- Removido o marcador "História".
- Texto institucional substituído pelo conteúdo fornecido.
- Imagem lateral trocada por imagem relacionada à educação/cidadania.
- Removido o marcador "Direcionamento institucional".
- Inserido texto sobre atuação institucional antes dos cards.
- Cards de Missão, Visão e Valores ajustados para ficar na mesma linha e com tamanho uniforme.
- Removido o marcador "Conselho de Gestão".
- Título alterado para "Gestão Administrativa".
- Removida a seção Ubuntu da página.


## V7 - Refinamento da página Quem Somos

A página `quem-somos.html` foi refinada conforme solicitado:

- Removido o nome "Quem somos" com linha horizontal do topo.
- Mantido o hero interno centralizado e com fonte menor.
- Criada seção com título "Sobre Nós".
- Removida a imagem lateral da seção de apresentação.
- Texto "Promovemos..." colocado de forma horizontal, com fonte menor.
- Textos inferiores centralizados.
