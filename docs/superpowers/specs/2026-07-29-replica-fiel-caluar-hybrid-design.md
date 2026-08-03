# Réplica fiel do caluar_hybrid.html

**Data:** 2026-07-29
**Status:** Aprovado para planejamento

## Problema

O site em produção divergiu do design de referência `docs/caluar_hybrid.html`. A divergência é
sistemática, não pontual: a referência é um CSS próprio e enxuto (370 linhas, tokens `--nv`/`--am`,
container 1140px, `.sec{padding:5rem 0}`), enquanto o app foi construído traduzindo esse design para
utilitários Tailwind ad-hoc (`text-5xl md:text-6xl lg:text-7xl`, `rounded-3xl`, `gap-1.5`). Nenhum
valor bate. Além disso a página ganhou 5 seções que não existem na referência e perdeu 2 que existem,
e a ordem dos blocos difere.

## Objetivo

Layout visual idêntico ao `caluar_hybrid.html`, preenchido com o conteúdo da versão publicada em
produção (deploy `6cafbab8`, commit `218e282` da branch `develop`), que o cliente validou como correto.

## Regra fundamental

**A referência manda na forma. A versão publicada manda no conteúdo.**

- Forma = CSS, markup, estrutura, ordem dos blocos, comportamento de interação → `docs/caluar_hybrid.html`
- Conteúdo = textos, listas, números, contatos, fotos, depoimentos → componentes atuais em `src/`

Nada de informação é inventado. Onde a referência tem um slot que o conteúdo atual não preenche, o
slot é preenchido com informação real reformatada (ver "Casos de borda"), nunca com dado fictício.

## Decisões tomadas

| Decisão | Escolha |
|---|---|
| Nível de fidelidade | Réplica fiel — HTML é fonte da verdade do visual |
| Estratégia de CSS | Portar o `<style>` da referência literalmente, sem traduzir. Tailwind é removido |
| Seções extras do app | Removidas; o conteúdo delas é absorvido nos blocos da referência |
| Painel admin e PromoPopup | Removidos |
| Números | Da versão publicada: 24 anos, 4.6★, 131 avaliações, 7mil+ aprovados |
| WhatsApp de todos os CTAs | `553135633619` |
| Imagens | Mapeadas a partir de `/public/images` já existente; cliente ajusta no preview |

Motivo de portar o CSS em vez de traduzir para Tailwind: o passo de tradução é exatamente onde a
divergência atual nasceu. Sem esse passo, não há oportunidade de drift, e a fidelidade é conferível
lendo o diff lado a lado com o arquivo de referência.

## Arquitetura

### Camada de estilo

O bloco `<style>` da referência (linhas 9–377) é dividido por responsabilidade, **sem reescrever
nenhuma regra**:

```
src/styles/
  tokens.css      ← :root da referência (--nv, --nv2, --am, --ad, --wh, --bg, --bd, --tx, --mt, --r, --sh)
  base.css        ← reset, html, body, img, a  (linhas 16–20)
  layout.css      ← .c, .sec, .sec-sm, .t-disp, .t-head, .chip, .btn* , .rv/.d1-d4  (23–42, 320–323)
  sections/
    nav.css     (45–56)     hero.css   (59–86)     ticker.css (89–93)
    stats.css   (96–104)    dor.css    (107–119)   serv.css   (122–135)
    sobre.css   (138–149)   proc.css   (152–165)   avs.css    (168–199)
    gal.css     (203–243)   faq.css    (244–260)   form.css   (263–283)
    map.css     (286–292)   footer.css (295–312)   waf.css    (315–318)
  responsive.css  ← os 4 blocos @media  (327–377)
```

`responsive.css` fica inteiro e é importado **por último**: as media queries da referência
sobrescrevem regras de várias seções, e quebrá-las por seção mudaria a ordem da cascata.

O `src/styles/tokens.css` atual (tokens genéricos `--color-primary`, `--spacing-*`) é substituído pelo
`:root` da referência. `src/index.css` perde as diretivas `@tailwind` e passa a ser só a cadeia de
imports. `tailwind.config.js`, `postcss.config.js` e as dependências `tailwindcss`/`autoprefixer` saem
do projeto — nenhuma regra da referência depende delas.

### Camada de componentes

Um componente por bloco, cada um reproduzindo o markup da referência com as mesmas classes. Sem
estado, exceto cinco:

| Componente | Estado | Origem na referência |
|---|---|---|
| `Navbar` | menu mobile aberto/fechado; fundo muda após 40px de scroll | linhas 792–802 |
| `Testimonials` | índice do carousel; itens-por-view 3 (>960px) / 1 | 820–846 |
| `Gallery` | índice do carousel (3 / 2 / 1 por breakpoint) | 865–892 |
| `Lightbox` | índice do slide, teclado (Esc, ←, →), trava de `body.overflow` | 894–930 |
| `Faq` | qual item está aberto — accordion exclusivo | 811–818 |

`ContactForm` monta a mensagem e abre `wa.me/553135633619` (linhas 848–855) — sem estado de submit,
igual à referência. As animações de entrada `.rv` usam o hook `useIntersectionObserver` já existente
(threshold 0.1, `unobserve` após entrar). Os ícones SVG inline da referência viram
`src/components/icons/`.

Componentes de UI atuais (`Button`, `Card`, `Carousel`, `OptimizedImage`) não sobrevivem como estão:
suas variantes são baseadas em Tailwind. `Button` é substituído pelas classes `.btn`/`.btn-am`/
`.btn-nv`/`.btn-ot`/`.btn-lg` da referência aplicadas direto em `<a>`/`<button>`.

### Camada de dados

Conteúdo repetitivo sai para `src/data/*.ts` tipado, extraído dos componentes atuais:

```
dores.ts         6 cards      ← Dores.tsx
categorias.ts    6 cards      ← Services.tsx + CnhBrasil.tsx + CoursesSpecialized.tsx
processo.ts      5 etapas     ← Process.tsx
depoimentos.ts   6 reviews    ← Testimonials.tsx
faq.ts           6 perguntas  ← Faq.tsx
galeria.ts       9 fotos      ← Gallery.tsx
stats.ts         4 números    ← CredentialsBar.tsx / Hero.tsx
ticker.ts        itens        ← referência (bloco novo, conteúdo decorativo)
contato.ts       telefones, e-mail, endereço, horários, redes ← Footer + LocationInfo
```

`24 anos` é derivado de `FUNDACAO = 2002` em vez de literal, para não envelhecer de novo.

## Estrutura final da página

14 blocos, na ordem da referência:

| # | Bloco | Forma (referência) | Conteúdo |
|---|---|---|---|
| 1 | Navbar | `nav` + `.mob` | links atuais (Sobre, Serviços, Galeria, Avaliações, Contato) |
| 2 | Hero | `.hero` + `.hero-card` | Hero.tsx — 24 / 4.6★ / 7mil+ / 100% DETRAN-MG |
| 3 | Ticker | `.ticker` | referência — faixa decorativa, **bloco novo no site** |
| 4 | StatsBar | `.stats-bar` | CredentialsBar.tsx — anos, condutores formados, nota Google, credenciada |
| 5 | Dores | `.dor` (6 cards + `.dor-cta`) | Dores.tsx |
| 6 | Categorias | `.serv` (6 cards) | Services + CnhBrasil + CoursesSpecialized |
| 7 | Sobre | `.sobre` (2 fotos + `.spill`) | About + Differentials |
| 8 | Processo | `.proc`, grid ampliado para 5 colunas | Process.tsx — 5 etapas |
| 9 | Avaliações | `.avs` + carousel `.rev` | Testimonials.tsx — 6 depoimentos, 4.6★, 131 avaliações |
| 10 | Galeria | `.gal` + lightbox `.lb` | Gallery.tsx — 9 fotos |
| 11 | FAQ | `.faq` | Faq.tsx — 6 perguntas atuais |
| 12 | Contato | `.form-sec` | ContactForm.tsx |
| 13 | Mapa | `.map-sec` | Map + LocationInfo |
| 14 | Footer + WA float | `footer`, `.waf` | Footer.tsx |

### Arquivos removidos

`HighlightsCarousel.tsx`, `Differentials.tsx`, `CnhBrasil.tsx`, `CoursesSpecialized.tsx`,
`LocationInfo.tsx`, `PromoPopup.tsx`, `AdminToggle.tsx`, `AdminPanel.tsx`, `AdminContext.tsx` — depois
de extrair o conteúdo deles para `src/data/`. Também os 30 scripts de screenshot e teste soltos na
raiz (`screenshot-*.js/mjs`, `test-*.mjs`, `verify-page.mjs`), que estão versionados e são lixo de
sessões antigas. Os artefatos `.js`/`.d.ts`/`.map` ao lado dos `.tsx` são build local não versionado —
saem do disco junto com os componentes, e o `.gitignore` passa a cobri-los.

## Casos de borda

**Processo com 5 etapas, referência com 4.** `.proc-steps` passa de `repeat(4,1fr)` para
`repeat(5,1fr)`; a linha conectora `.proc-steps::before` tem os offsets `calc(12.5% + 16px)`
recalculados para `calc(10% + 16px)`. No breakpoint ≤960px a referência já quebra para 2 colunas e
esconde a linha — comportamento preservado.

**Card de depoimento tem slots sem dado correspondente.**
- `.rdate` (referência: "há 2 meses") — os depoimentos atuais não têm data, têm `role`
  ("Aluno"/"Aluna"). O `role` ocupa esse slot. Nenhuma data é inventada.
- `.rav` (referência: 2 letras) — os atuais têm 1 letra. As 2 iniciais são derivadas do nome
  (`Pedro Henrique` → `PH`). Informação real, só reformatada.
- Cores de avatar: a referência usa `background` inline variado por card. Mantida a mesma paleta de
  6 cores da referência, aplicada na ordem dos 6 depoimentos.

**Galeria sem legendas.** A referência mostra `.gs-cap` em cada item e um rótulo no lightbox; as 9
fotos atuais têm `alt="Gallery"`. Usadas as legendas da referência adaptadas ("Turma aprovada", "Aula
prática de moto", …). O cliente revisa e corrige no preview, junto com o mapeamento das imagens.

**Imagens.** 15 posições precisam de foto: fundo do hero, 2 no card do hero, 2 em Sobre, 1 no FAQ, 9
na galeria. As já definidas na versão publicada são herdadas (`img2.jpeg` no hero, `img1.JPG` e
`img3.jpeg` em Sobre, as 9 `IMG_*.jpg` na galeria). Só a do FAQ é posição nova e precisa de escolha.
Nenhuma imagem é extraída do base64 da referência — o cliente confirmou que todas já estão em
`/public/images`.

## Defeitos na referência

A referência tem dois problemas reais. Copiá-la literalmente propagaria ambos, então as correções
abaixo são deliberadas e são as **únicas** divergências permitidas em relação ao arquivo.

**1. A seção de galeria não tem regra de fundo.** Não existe `.gal{...}` no CSS (linhas 9–377), mas
todos os filhos assumem fundo escuro: `.gs-item{background:rgba(255,255,255,.05)}`,
`.gs-lbl{color:rgba(255,255,255,.65)}`, `.gc-btn` com borda branca. Sobre o fundo branco do `body`
isso renderiza texto branco sobre branco. Correção: adicionar `.gal{background:var(--nv)}`, o mesmo
tom escuro que `.proc` já usa e que os valores dos filhos pressupõem.

**2. CSS morto de uma versão anterior da galeria.** As media queries referenciam `.gal-grid`, `.gi`,
`.gi.r2` e `.gi.c2` (linhas 343–345, 351–352, 368), que não existem em nenhum lugar do markup — a
galeria virou o carousel `.gs-*` e as regras antigas ficaram para trás. Não são portadas.

Fora esses dois pontos, qualquer diferença em relação ao arquivo é bug de implementação.

## Critério de aceite

1. `npm run build` conclui sem erro e sem warning de TypeScript.
2. Comparação visual lado a lado: screenshot do `docs/caluar_hybrid.html` aberto no browser contra
   screenshot do `npm run dev`, nas larguras **1440px, 960px e 390px**. Divergência de layout nessas
   três larguras é falha — "parece parecido" não conta.
3. Todo CTA aponta para `wa.me/553135633619`.
4. Os 5 comportamentos da referência funcionam: nav muda de fundo após 40px; accordion do FAQ é
   exclusivo; os dois carousels reconstroem os dots no resize; lightbox fecha com Esc e clique no
   fundo, navega com setas; o form abre o WhatsApp com a mensagem montada.
5. Nenhuma referência a `tailwind` resta no projeto.

## Fora de escopo

- SEO, meta tags, Open Graph
- Otimização de imagens (formatos modernos, `srcset`)
- Testes automatizados — o projeto não tem suíte e criar uma não serve a este objetivo
- Qualquer mudança de conteúdo além do que já está em produção
