# Réplica fiel do caluar_hybrid.html — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deixar o site visualmente idêntico a `docs/caluar_hybrid.html`, preenchido com o conteúdo já validado em produção.

**Architecture:** O CSS da referência é portado literalmente (sem tradução) para `src/styles/`, dividido por seção e importado globalmente. Cada bloco da página vira um componente React que reproduz o markup da referência com as mesmas classes, alimentado por módulos de dados extraídos dos componentes atuais. Tailwind sai do projeto ao final, quando nenhum componente depender mais dele.

**Tech Stack:** React 18, TypeScript 5.3 (strict), Vite 5, Playwright 1.61 (só para verificação visual). Sem Tailwind ao final.

**Spec:** `docs/superpowers/specs/2026-07-29-replica-fiel-caluar-hybrid-design.md`

## Global Constraints

- **A referência manda na forma; a versão publicada manda no conteúdo.** Forma = CSS, markup, estrutura, ordem, interação → `docs/caluar_hybrid.html`. Conteúdo = textos, listas, números, contatos, fotos → componentes atuais em `src/`.
- **Nunca redigitar copy em português.** Todo texto é movido por recorte-e-cola do componente atual para o módulo de dados. Retranscrever à mão introduz erros de acentuação.
- **Nenhuma informação inventada.** Slot da referência sem dado correspondente é preenchido com informação real reformatada (ver Task 12 e Task 13), nunca com dado fictício.
- **WhatsApp de todo CTA:** `553135633619`.
- **Números:** 24 anos (derivado de `FUNDACAO = 2002`), 4.6★, 131 avaliações, 7mil+ aprovados, 100% DETRAN-MG.
- **Duas — e apenas duas — divergências permitidas em relação ao arquivo de referência:** adicionar `.gal{background:var(--nv)}` (a referência não tem regra de fundo na galeria e renderiza texto branco sobre branco); e não portar o CSS morto de `.gal-grid`/`.gi`/`.gi.r2`/`.gi.c2` (linhas 343–345, 351–352, 368), que não tem markup correspondente.
- **`tsconfig.json` tem `noUnusedLocals` e `noUnusedParameters` ligados.** Import ou parâmetro não usado quebra `npm run build`. Ao remover um componente, remova o import no mesmo commit.
- **Dev server roda na porta 3000** (`vite.config.ts`), não 5173.
- **Fora de escopo:** SEO/meta tags, otimização de imagens, testes automatizados, qualquer mudança de conteúdo além do que já está em produção.

## Estrutura de arquivos ao final

```
src/
  main.tsx                 (inalterado)
  App.tsx                  ← 14 blocos na ordem da referência
  index.css                ← só a cadeia de imports
  styles/
    tokens.css  base.css  layout.css  responsive.css
    sections/  nav hero ticker stats dor serv sobre proc avs gal faq form map footer waf (.css)
  data/
    types.ts  contato.ts  stats.ts  ticker.ts  dores.ts  categorias.ts
    sobre.ts  processo.ts  depoimentos.ts  galeria.ts  faq.ts
  components/
    layout/    Navbar.tsx  Footer.tsx
    sections/  Hero.tsx  Ticker.tsx  StatsBar.tsx  Dores.tsx  Categorias.tsx  Sobre.tsx
               Processo.tsx  Avaliacoes.tsx  Galeria.tsx  Faq.tsx  Contato.tsx  Mapa.tsx
    ui/        Lightbox.tsx  WhatsAppFloat.tsx
    icons/     index.tsx
  hooks/
    useIntersectionObserver.ts  (mantido)  useCarousel.ts  (reescrito na Task 12)
scripts/
  compare-visual.mjs       ← ferramenta de verificação
```

---

### Task 1: Higiene do repositório e configuração de build

Limpa o lixo versionado e corrige a causa dos artefatos `.js`/`.d.ts` dentro de `src/`: o `tsc` do script de build emite porque `declaration`/`sourceMap` estão ligados e `noEmit` não está. Para um app (não biblioteca), declarações não servem para nada.

**Files:**
- Modify: `tsconfig.json`
- Modify: `.gitignore`
- Delete: 30 scripts versionados na raiz (`screenshot*.js`, `screenshot*.mjs`, `test-*.mjs`, `test.cjs`, `verify-page.mjs`, `final-screenshot*.mjs`, `check-updates.mjs`, `optimize-images.sh`)
- Delete: PNGs soltos na raiz (`carousel.png`, `full-page.png`, `hero-*.png`, `navbar-*.png`, `page-*.png`, `stats-section.png`, `whatsapp-button.png`, `favicon-tab.png`), `build.log`
- Delete: artefatos locais `src/**/*.js`, `src/**/*.d.ts`, `src/**/*.js.map`, `src/**/*.d.ts.map`

- [ ] **Step 1: Confirmar que os artefatos em `src/` não estão versionados**

```bash
git ls-files src | grep -cE '\.(js|d\.ts|map)$'
```

Esperado: `0`. Se for diferente de 0, use `git rm --cached` neles antes de seguir.

- [ ] **Step 2: Corrigir o `tsconfig.json`**

Remover as três linhas `"declaration": true,`, `"declarationMap": true,`, `"sourceMap": true,` e acrescentar no lugar:

```json
    "noEmit": true,
```

- [ ] **Step 3: Apagar os artefatos e o lixo da raiz**

```bash
find src -name '*.js' -o -name '*.d.ts' -o -name '*.map' | xargs rm -f
git rm -q screenshot*.js screenshot*.mjs test-*.mjs test.cjs verify-page.mjs final-screenshot*.mjs check-updates.mjs optimize-images.sh
git rm -q carousel.png full-page.png hero-cards.png hero-full.png navbar-hover.png navbar-mobile.png navbar-mobile-open.png navbar-white.png page-complete.png page-with-carousel.png stats-section.png whatsapp-button.png favicon-tab.png build.log
rm -rf .next dist
```

- [ ] **Step 4: Cobrir os artefatos no `.gitignore`**

Acrescentar ao final:

```gitignore
# Artefatos de build TypeScript (não devem existir; ver noEmit no tsconfig)
src/**/*.js
src/**/*.d.ts
src/**/*.map

# Screenshots de verificação visual
docs/superpowers/screenshots/
```

- [ ] **Step 5: Verificar que o build passa e não gera mais artefatos**

```bash
npm run build && find src -name '*.js' -o -name '*.d.ts' | head
```

Esperado: build conclui sem erro e o `find` não retorna nada.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: Remover lixo versionado e parar emissao de artefatos do tsc"
```

---

### Task 2: Ferramenta de comparação visual

Sem isso, "idêntico à referência" não é verificável. Este script tira o mesmo recorte da referência e do app rodando, nas três larguras do critério de aceite. Toda task de seção daqui para frente termina usando-o.

**Files:**
- Create: `scripts/compare-visual.mjs`

**Interfaces:**
- Produces: `node scripts/compare-visual.mjs <nome> <seletor-referência> [seletor-app]` — grava `docs/superpowers/screenshots/<nome>-<largura>-{ref,app}.png` em 1440, 960 e 390px. Se o seletor for `page`, tira a página inteira. O seletor do app cai no da referência quando omitido (o markup é o mesmo, então quase sempre é omitido).

- [ ] **Step 1: Instalar o browser do Playwright**

```bash
npx playwright install chromium
```

- [ ] **Step 2: Criar o script**

```javascript
// scripts/compare-visual.mjs
import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const [nome, seletorRef, seletorApp] = process.argv.slice(2)

if (!nome || !seletorRef) {
  console.error('uso: node scripts/compare-visual.mjs <nome> <seletor-ref> [seletor-app]')
  console.error('     use "page" como seletor para capturar a pagina inteira')
  process.exit(1)
}

const LARGURAS = [1440, 960, 390]
const SAIDA = resolve('docs/superpowers/screenshots')
const REFERENCIA = 'file://' + resolve('docs/caluar_hybrid.html')
const APP = 'http://localhost:3000'

// As animacoes de entrada (.rv) deixam blocos invisiveis ou deslocados no
// momento do screenshot. Neutralizadas nos dois lados para a comparacao ser justa.
const CONGELA_ANIMACOES = `
  .rv { opacity: 1 !important; transform: none !important; transition: none !important; }
  *, *::before, *::after { animation: none !important; transition: none !important; }
`

const alvos = [
  ['ref', REFERENCIA, seletorRef],
  ['app', APP, seletorApp || seletorRef],
]

await mkdir(SAIDA, { recursive: true })
const browser = await chromium.launch()

for (const [lado, url, seletor] of alvos) {
  for (const width of LARGURAS) {
    const page = await browser.newPage({ viewport: { width, height: 900 } })
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.addStyleTag({ content: CONGELA_ANIMACOES })
    await page.waitForTimeout(300)

    const caminho = `${SAIDA}/${nome}-${width}-${lado}.png`
    if (seletor === 'page') {
      await page.screenshot({ path: caminho, fullPage: true })
    } else {
      const alvo = page.locator(seletor).first()
      await alvo.waitFor({ state: 'visible', timeout: 10000 })
      await alvo.screenshot({ path: caminho })
    }
    await page.close()
    console.log(`  ${lado} ${width}px -> ${caminho}`)
  }
}

await browser.close()
console.log(`\nCompare os pares em ${SAIDA}/${nome}-*`)
```

- [ ] **Step 3: Verificar que o script funciona contra a referência**

Com o dev server rodando (`npm run dev` em outro terminal):

```bash
node scripts/compare-visual.mjs smoke nav
```

Esperado: seis arquivos gravados. Os `-ref` mostram a navbar escura da referência; os `-app` mostram a navbar atual (ainda diferente — é esperado nesta altura, o que se verifica aqui é que a ferramenta captura os dois lados).

- [ ] **Step 4: Commit**

```bash
git add scripts/compare-visual.mjs
git commit -m "chore: Script de comparacao visual com a referencia"
```

---

### Task 3: Camada de estilo portada da referência

Copia o `<style>` da referência para `src/styles/`, **sem reescrever nenhuma regra**. Nesta task o Tailwind continua instalado: os componentes antigos ainda dependem dele e só saem de cena na Task 18. Os dois conjuntos convivem porque não compartilham nomes de classe.

**Files:**
- Create: `src/styles/tokens.css`, `base.css`, `layout.css`, `responsive.css`
- Create: `src/styles/sections/{nav,hero,ticker,stats,dor,serv,sobre,proc,avs,gal,faq,form,map,footer,waf}.css`
- Modify: `src/index.css` (vira só a cadeia de imports)
- Delete: `src/styles/animations.css` (as animações vêm da referência agora)

**Interfaces:**
- Produces: classes globais que todas as tasks seguintes usam — `.c`, `.sec`, `.sec-sm`, `.t-disp`, `.t-head`, `.chip`, `.btn`/`.btn-am`/`.btn-nv`/`.btn-ot`/`.btn-lg`, `.rv`/`.d1`–`.d4`, e as classes específicas de cada seção.

- [ ] **Step 1: Copiar cada faixa de linhas da referência para seu arquivo**

Abra `docs/caluar_hybrid.html` e copie **literalmente** (sem editar valores) as faixas abaixo. Os comentários `/* === X === */` da referência vêm junto.

| Arquivo | Linhas de `docs/caluar_hybrid.html` |
|---|---|
| `src/styles/tokens.css` | 10–15 (o bloco `:root{...}`) |
| `src/styles/base.css` | 16–20 |
| `src/styles/layout.css` | 22–42 **e** 320–323 (bloco `/* === FADE === */`) |
| `src/styles/sections/nav.css` | 44–56 |
| `src/styles/sections/hero.css` | 58–86 |
| `src/styles/sections/ticker.css` | 88–93 |
| `src/styles/sections/stats.css` | 95–104 |
| `src/styles/sections/dor.css` | 106–119 |
| `src/styles/sections/serv.css` | 121–135 |
| `src/styles/sections/sobre.css` | 137–149 |
| `src/styles/sections/proc.css` | 151–165 |
| `src/styles/sections/avs.css` | 167–199 |
| `src/styles/sections/gal.css` | 203–243 |
| `src/styles/sections/faq.css` | 244–260 |
| `src/styles/sections/form.css` | 262–283 |
| `src/styles/sections/map.css` | 285–292 |
| `src/styles/sections/footer.css` | 294–312 |
| `src/styles/sections/waf.css` | 314–318 |
| `src/styles/responsive.css` | 327–377 (os quatro blocos `@media`, inteiros) |

- [ ] **Step 2: Aplicar as duas correções autorizadas**

Em `src/styles/sections/gal.css`, acrescentar como **primeira** regra do arquivo:

```css
/* === GALERIA === */
/* A referencia nao tem regra de fundo para .gal, mas todos os filhos assumem
   fundo escuro (.gs-lbl e branco a 65%, .gs-item e branco a 5%). Sem isto,
   a secao renderiza texto branco sobre branco. Mesmo tom que .proc usa. */
.gal{background:var(--nv)}
```

Em `src/styles/responsive.css`, **não** copiar as linhas que citam `.gal-grid`, `.gi`, `.gi.r2` ou `.gi.c2` (dentro das faixas 343–345, 351–352 e 368) — são resquícios de uma galeria em grid que virou carousel `.gs-*`. Todas as outras regras dos mesmos blocos `@media` vêm normalmente.

- [ ] **Step 3: Substituir `src/index.css` pela cadeia de imports**

A ordem importa: `responsive.css` **por último**, porque as media queries da referência sobrescrevem regras de várias seções.

```css
@import './styles/tokens.css';
@import './styles/base.css';
@import './styles/layout.css';

@import './styles/sections/nav.css';
@import './styles/sections/hero.css';
@import './styles/sections/ticker.css';
@import './styles/sections/stats.css';
@import './styles/sections/dor.css';
@import './styles/sections/serv.css';
@import './styles/sections/sobre.css';
@import './styles/sections/proc.css';
@import './styles/sections/avs.css';
@import './styles/sections/gal.css';
@import './styles/sections/faq.css';
@import './styles/sections/form.css';
@import './styles/sections/map.css';
@import './styles/sections/footer.css';
@import './styles/sections/waf.css';

@import './styles/responsive.css';
```

- [ ] **Step 4: Remover o `animations.css` e o antigo `tokens.css`**

O `src/styles/tokens.css` antigo (tokens genéricos `--color-primary`, `--spacing-*`) foi sobrescrito no Step 1. Confirme que ele agora contém o `:root` da referência e não o antigo. E:

```bash
rm src/styles/animations.css
grep -rn "animations.css" src || echo "sem referencias pendentes"
```

- [ ] **Step 5: Verificar**

```bash
npm run build
```

Esperado: build limpo.

**A página vai ficar feia a partir daqui, e isso é esperado.** Remover as diretivas `@tailwind` do `index.css` derruba o estilo dos componentes antigos, que ainda dependem delas. Cada seção volta ao normal — já no visual da referência — na sua própria task, entre a 6 e a 17. Não tente consertar as seções ainda não migradas; elas serão substituídas inteiras.

- [ ] **Step 6: Commit**

```bash
git add -A src/styles src/index.css
git commit -m "feat: Portar CSS da referencia para src/styles"
```

---

### Task 4: Camada de dados

Move o conteúdo validado dos componentes atuais para módulos tipados. **Recorte e cole os arrays**; não redigite os textos. Nesta task os componentes antigos passam a importar dos módulos novos, então nada quebra e nada muda visualmente.

**Files:**
- Create: `src/data/types.ts`, `contato.ts`, `stats.ts`, `ticker.ts`, `dores.ts`, `categorias.ts`, `sobre.ts`, `processo.ts`, `depoimentos.ts`, `galeria.ts`, `faq.ts`
- Modify: `src/components/sections/{Dores,Services,Process,Faq,Testimonials,Gallery,CredentialsBar}.tsx` — passam a importar os dados em vez de declará-los

**Interfaces:**
- Produces: os tipos e constantes abaixo. Todas as tasks 5–17 consomem daqui.

- [ ] **Step 1: Criar `src/data/types.ts`**

```typescript
export type IconName =
  | 'documento' | 'relogio' | 'pessoas' | 'carro' | 'cartao' | 'livro'
  | 'telefone' | 'whatsapp' | 'email' | 'local' | 'instagram' | 'facebook'
  | 'seta-esq' | 'seta-dir' | 'estrela' | 'mais' | 'fechar'

export interface Dor {
  icone: IconName
  titulo: string
  texto: string
}

export interface Categoria {
  /** Vai no .serv-cat da referencia: "A", "B", "AB", "D", "R", "S" */
  sigla: string
  titulo: string
  itens: string[]
}

export interface Etapa {
  numero: string
  titulo: string
  texto: string
}

export interface Depoimento {
  nome: string
  /** Ocupa o slot .rdate da referencia. Os depoimentos nao tem data. */
  papel: string
  texto: string
  /** Duas letras derivadas do nome, para o .rav da referencia */
  iniciais: string
  corAvatar: string
}

export interface Pergunta {
  pergunta: string
  resposta: string
}

export interface Foto {
  src: string
  legenda: string
}

export interface Stat {
  valor: string
  sufixo: string
  rotulo: string
}

export interface Pill {
  valor: string
  rotulo: string
}
```

- [ ] **Step 2: Criar `src/data/contato.ts`**

Os valores vêm de `src/components/layout/Footer.tsx` e `src/components/sections/LocationInfo.tsx`.

```typescript
export const FUNDACAO = 2002

/** 24 em 2026. Derivado para nao envelhecer junto com o site. */
export const anosDeTradicao = (): number => new Date().getFullYear() - FUNDACAO

export const CONTATO = {
  whatsapp: '553135633619',
  telefone: '(31) 3563-3619',
  telefoneHref: 'tel:3135633619',
  email: 'cfccaluar@hotmail.com',
  endereco: 'Rua Domingos Michel, 120',
  bairroCidade: 'Praia, Itabirito/MG',
  horarioSemana: '7h às 20h',
  horarioSabado: '9h às 12h',
  instagram: 'https://www.instagram.com/autoescolacaluar/',
  facebook: 'https://www.facebook.com/autoescolacaluarcfc/',
} as const

export const waLink = (texto: string): string =>
  `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`
```

- [ ] **Step 3: Criar `src/data/stats.ts`**

Valores de `src/components/sections/CredentialsBar.tsx:1-3` e `src/components/sections/Hero.tsx:70-87`.

```typescript
import type { Stat } from './types'
import { anosDeTradicao } from './contato'

/** Barra .stats-bar, abaixo do ticker */
export const STATS: Stat[] = [
  { valor: String(anosDeTradicao()), sufixo: '+', rotulo: 'Anos de tradição' },
  { valor: '7mil', sufixo: '+', rotulo: 'Condutores formados' },
  { valor: '4.6', sufixo: '★', rotulo: 'Nota Google' },
  { valor: '100', sufixo: '%', rotulo: 'Credenciada DETRAN-MG' },
]

/**
 * Card do hero (.hc-stat). Mesmos numeros, rotulos curtos.
 * `destaque` corresponde a classe .ac da referencia (fundo ambar).
 */
export const STATS_HERO: (Stat & { destaque: boolean })[] = [
  { valor: String(anosDeTradicao()), sufixo: '+', rotulo: 'Anos de tradição', destaque: false },
  { valor: '4.6', sufixo: '★', rotulo: 'Nota Google', destaque: true },
  { valor: '7mil', sufixo: '+', rotulo: 'Aprovados', destaque: false },
  { valor: '100', sufixo: '%', rotulo: 'DETRAN-MG', destaque: true },
]

export const NOTA_GOOGLE = '4.6'
export const TOTAL_AVALIACOES = 131
```

- [ ] **Step 4: Criar `src/data/ticker.ts`**

Bloco novo no site; conteúdo decorativo vindo da referência (linha 438). Abra essa linha e copie os `<span>` na ordem.

```typescript
/**
 * Faixa animada .ticker. Bloco que so existe na referencia (linha 438).
 * `destaque` marca o trecho que a referencia poe em <b> (cor ambar).
 */
export const TICKER: { destaque: string; texto?: string }[] = [
  { destaque: 'Habilitação A' },
  { destaque: 'Habilitação B' },
  { destaque: 'Habilitação AB' },
  { destaque: 'Adição de categoria' },
  { destaque: 'Reciclagem' },
  { destaque: 'CNH Brasil' },
]
```

Se os itens da linha 438 divergirem desta lista, os da referência prevalecem — este bloco é forma, não conteúdo de produção.

- [ ] **Step 5: Criar `src/data/dores.ts`**

Recorte o array de `src/components/sections/Dores.tsx:3-34` e renomeie os campos para `icone`/`titulo`/`texto`. São 6 itens; os textos ficam **exatamente** como estão (inclusive as quebras `\n\n`).

```typescript
import type { Dor } from './types'

export const DORES: Dor[] = [
  // 6 itens recortados de Dores.tsx:3-34, campos renomeados para icone/titulo/texto.
  // Icones na ordem: documento, relogio, pessoas, carro, cartao, livro.
]
```

- [ ] **Step 6: Criar `src/data/categorias.ts`**

Seis cards, para os seis slots de `.serv-grid`. Os quatro primeiros e o quinto vêm de `src/components/sections/Services.tsx:3-81`; o sexto reúne `CoursesSpecialized.tsx:2-8` (a lista de cursos) com o título de `CnhBrasil.tsx`.

```typescript
import type { Categoria } from './types'

export const CATEGORIAS: Categoria[] = [
  // 1. sigla 'A'  — 'Categoria A — Moto'                    (Services.tsx)
  // 2. sigla 'B'  — 'Categoria B — Carro'                   (Services.tsx)
  // 3. sigla 'AB' — 'Categoria AB — Moto e Carro'           (Services.tsx)
  // 4. sigla 'D'  — 'Categoria D — Ônibus e Transporte...'  (Services.tsx)
  // 5. sigla 'R'  — 'Renovação e Reciclagem de CNH'         (Services.tsx)
  // 6. sigla 'S'  — 'Cursos Especializados' com os 5 itens de CoursesSpecialized.tsx
  //                 (MOPP, Transporte Coletivo, Transporte Escolar, Veículos de
  //                  Emergência, Carga Indivisível)
]
```

O conteúdo de `CnhBrasil.tsx` ("CNH Brasil — Gratuita para quem precisa", "Programa de habilitação subsidiada para pessoas em vulnerabilidade") entra como **item da lista** do card 5 ou 6, o que couber melhor no texto existente — não vira card próprio, porque só há seis slots e as seis categorias acima são as reais.

- [ ] **Step 7: Criar `src/data/sobre.ts`**

Parágrafos de `src/components/sections/About.tsx` (os `<p>` e a lista de itens com check), mais os quatro diferenciais de `Differentials.tsx:3-8`, que viram itens da mesma lista. As pills `.spill` da referência recebem os quatro pares já presentes no About atual.

```typescript
import type { Pill } from './types'

/** Chip do topo, recortado de About.tsx */
export const SOBRE_CHIP = ''
/** O h2 tem uma parte em italico ambar (.sobre-txt h2 em). Dividido em dois
 *  para a Task 11 montar <h2>{INICIO} <em>{ENFASE}</em></h2> sem innerHTML. */
export const SOBRE_TITULO_INICIO = ''
export const SOBRE_TITULO_ENFASE = ''
export const SOBRE_PARAGRAFOS: string[] = [
  // paragrafos recortados de About.tsx
]
export const SOBRE_ITENS: string[] = [
  // itens com check de About.tsx + os 4 titulos de Differentials.tsx
]
export const SOBRE_PILLS: Pill[] = [
  // 4 pares valor/rotulo recortados de About.tsx
]
```

- [ ] **Step 8: Criar `src/data/processo.ts`**

Cinco etapas, recortadas de `src/components/sections/Process.tsx:2-33`. A referência tem quatro; o grid é ampliado na Task 11.

```typescript
import type { Etapa } from './types'

export const PROCESSO: Etapa[] = [
  // 5 etapas de Process.tsx:2-33, numeradas '01'..'05'
]
```

- [ ] **Step 9: Criar `src/data/depoimentos.ts`**

Os seis depoimentos reais de `src/components/sections/Testimonials.tsx:3-10`. Duas adaptações de forma, exigidas pelo card `.rev` da referência e registradas na spec:

- `papel` recebe o `role` atual ("Aluno"/"Aluna") e ocupa o slot `.rdate`. Nenhuma data é inventada.
- `iniciais` são as duas primeiras letras do nome (`Pedro Henrique` → `PH`), porque `.rav` mostra duas.
- `corAvatar` usa a paleta de avatares da própria referência (linhas 596–614).

```typescript
import type { Depoimento } from './types'

export const DEPOIMENTOS: Depoimento[] = [
  // Pedro Henrique   -> PH, '#1B2B5E'
  // Josilene Barreto -> JB, '#1a5276'
  // Daiane Mara      -> DM, '#2e4a8c'
  // Cristiane Silva  -> CS, '#922b21'
  // Isaah neves      -> IN, '#1b5e20'
  // Aline Raquel     -> AR, '#0F1F45'
  // textos recortados de Testimonials.tsx:3-10
]
```

- [ ] **Step 10: Criar `src/data/galeria.ts`**

As nove fotos de `src/components/sections/Gallery.tsx:9-19`. As legendas não existem hoje (`alt="Gallery"`) e vêm das legendas da referência (linha 900), a serem revistas pelo cliente no preview.

```typescript
import type { Foto } from './types'

export const GALERIA: Foto[] = [
  { src: '/images/IMG_0334.jpg', legenda: 'Turma aprovada' },
  { src: '/images/IMG_0345.jpg', legenda: 'Aprovação categoria B' },
  { src: '/images/IMG_0367.jpg', legenda: 'Aprovação categoria A' },
  { src: '/images/IMG_0373.jpg', legenda: 'Instrutores dedicados' },
  { src: '/images/IMG_0380.jpg', legenda: 'Aula prática de moto' },
  { src: '/images/IMG_1550.jpg', legenda: 'Centro de Formação Caluar' },
  { src: '/images/IMG_1558.jpg', legenda: 'Aula prática de carro' },
  { src: '/images/IMG_2314.jpg', legenda: 'Estrutura da autoescola' },
  { src: '/images/IMG_9122.jpg', legenda: 'Fui aprovado na Caluar' },
]
```

- [ ] **Step 11: Criar `src/data/faq.ts`**

As seis perguntas de `src/components/sections/Faq.tsx:3-10`, recortadas com as respostas inteiras.

```typescript
import type { Pergunta } from './types'

export const FAQ: Pergunta[] = [
  // 6 itens de Faq.tsx:3-10, campos renomeados para pergunta/resposta
]
```

- [ ] **Step 12: Apontar os componentes antigos para os módulos novos**

Em cada um de `Dores`, `Services`, `Process`, `Faq`, `Testimonials`, `Gallery`, `CredentialsBar`: apagar o array local e importar do módulo correspondente, ajustando os nomes de campo usados no JSX. Objetivo aqui é só provar que os dados migraram intactos — o visual não muda.

- [ ] **Step 13: Verificar**

```bash
npm run build
```

Esperado: build limpo. Com `npm run dev`, a página renderiza igual a antes: mesmos textos, mesmos números, nenhuma diferença visual.

- [ ] **Step 14: Commit**

```bash
git add -A src/data src/components
git commit -m "refactor: Extrair conteudo dos componentes para src/data"
```

---

### Task 5: Ícones

Os SVGs inline da referência viram componentes, para as tasks seguintes não carregarem `path`s gigantes no meio do markup.

**Files:**
- Create: `src/components/icons/index.tsx`

**Interfaces:**
- Produces: `export function Icone({ nome }: { nome: IconName }): JSX.Element` — devolve o `<svg>` da referência para aquele nome, sem wrapper, para herdar `width`/`height`/`color` do CSS da seção (é assim que `.dor-ic svg`, `.btn svg` e `.ci-ic svg` dimensionam).

- [ ] **Step 1: Criar o módulo**

Os `path`s vêm da referência: dores (linhas 457–482), botões WhatsApp (419), contato (698–701), setas de carousel (617–618), estrela (585), redes sociais (755–757), `+` do FAQ e `×` do lightbox. Copie cada `<svg>` inteiro, convertendo os atributos para camelCase do JSX (`stroke-width` → `strokeWidth`, `stroke-linecap` → `strokeLinecap`, `fill-rule` → `fillRule`, `clip-rule` → `clipRule`).

```typescript
import type { IconName } from '../../data/types'

const ICONES: Record<IconName, JSX.Element> = {
  // documento: <svg .../>  (referencia linha 457)
  // relogio:   <svg .../>  (referencia linha 462)
  // ...
}

export function Icone({ nome }: { nome: IconName }) {
  return ICONES[nome]
}
```

- [ ] **Step 2: Verificar**

```bash
npm run build
```

Esperado: build limpo. `noUnusedLocals` reclama se algum nome do `IconName` ficar sem uso no `Record` — o `Record` obriga todos a existirem, então preencha os 17.

- [ ] **Step 3: Commit**

```bash
git add src/components/icons
git commit -m "feat: Icones SVG extraidos da referencia"
```

---

### Tasks 6–17: as seções

**As doze tasks a seguir têm a mesma forma.** Para cada uma:

1. Criar o componente reproduzindo o markup da faixa indicada de `docs/caluar_hybrid.html`, com **as mesmas classes**, trocando o conteúdo estático pelo módulo de dados.
2. Converter atributos para JSX (`class` → `className`, `for` → `htmlFor`, atributos de SVG em camelCase).
3. Manter as classes de animação `rv`, `d1`–`d4` exatamente onde a referência as põe, e aplicar `useIntersectionObserver` no elemento raiz da seção.
4. Trocar o componente antigo pelo novo em `src/App.tsx`, **removendo o import antigo no mesmo commit** (`noUnusedLocals`).
5. `npm run build` — esperado: limpo.
6. `node scripts/compare-visual.mjs <nome> <seletor>` com o dev server no ar, e **abrir os seis PNGs** para comparar. Divergência de layout em qualquer uma das três larguras é falha da task.
7. Commit.

Os passos 1 e 6 mudam por seção; os demais são idênticos e não se repetem abaixo.

---

### Task 6: Navbar

**Files:**
- Modify: `src/components/layout/Navbar.tsx` (reescrito), `src/App.tsx`

**Interfaces:**
- Consumes: `waLink` de `src/data/contato.ts`
- Produces: `export default function Navbar()`

- [ ] **Step 1: Reescrever a partir das linhas 382–403 da referência**

Estrutura: `<nav><div class="nav-w">` com logo, `<ul class="nav-ul">` de links e `<button class="bur">` de três `<span>`; fora do `<nav>`, a `<div class="mob">` que ganha `.on` quando aberta.

Comportamento (referência 792–802), como estado React:

```typescript
const [aberto, setAberto] = useState(false)
const [rolou, setRolou] = useState(false)

useEffect(() => {
  const onScroll = () => setRolou(window.scrollY > 40)
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)
}, [])
```

O `<nav>` recebe `style={{ background: rolou ? 'rgba(15,31,69,1)' : 'rgba(15,31,69,.96)' }}`. Clicar num link do menu mobile fecha o menu (`setAberto(false)`).

Links, de `Navbar.tsx` atual: Sobre `#sobre`, Serviços `#servicos`, Galeria `#galeria`, Avaliações `#avaliacoes`, Contato `#contato`. O último item da `.nav-ul` é o botão `.btn.btn-am` com `style={{padding:'9px 20px',fontSize:'.875rem'}}`, como na referência.

O logo é `/logos/logo_caluar.jpeg` (a referência usa base64; o arquivo local é o mesmo logo) com a classe `.nav-logo`, que já aplica `filter:brightness(0) invert(1)`.

**Atenção ao id da âncora:** a referência usa `#categorias` e o site usa `#servicos`. Mantenha `#servicos` — âncora é conteúdo/URL, não forma, e mudá-la quebraria links existentes. A seção da Task 9 recebe `id="servicos"`.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs nav nav
```

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Navbar conforme referencia"
```

---

### Task 7: Hero

**Files:**
- Modify: `src/components/sections/Hero.tsx` (reescrito), `src/App.tsx`

**Interfaces:**
- Consumes: `STATS_HERO` de `src/data/stats.ts`, `waLink` de `src/data/contato.ts`
- Produces: `export default function Hero()`

- [ ] **Step 1: Reescrever a partir das linhas 405–437 da referência**

Estrutura: `.hero` > `.hero-bg` (img de fundo) + `.hero-ov` (overlay) + `.c` > `.hero-in` > `.hero-l` (chip, h1, sub, `.hero-cats`, `.hero-btns`) e `.hero-card` (`.hc-top` com quatro `.hc-stat` + `.hc-imgs` com duas `.hc-img`).

Conteúdo, do Hero atual:
- chip: "Credenciada DETRAN-MG desde 2002"
- h1: "Sua CNH pode estar muito mais perto do que você imagina."
- subtítulo e categorias: `Cat. A`, `Cat. B`, `Cat. AB`, `Cat. D` (quatro, não seis — o site não oferece C e E)
- botões: `.btn.btn-am.btn-lg` "Quero minha CNH" apontando para `waLink('Oi Caluar, quero minha CNH.')`, e `.btn.btn-ot.btn-lg` "Conhecer a escola" para `#sobre`
- imagem de fundo `/images/img2.jpeg`; miniaturas `/images/img3.jpeg` ("Equipe Caluar") e `/images/img13.jpeg` ("Turma aprovada")

Os quatro `.hc-stat` vêm de `STATS_HERO`; `destaque: true` acrescenta a classe `ac`. O sufixo vai dentro de `<small>`, como na referência.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs hero .hero
```

Confira em 960px que o `.hero-card` desaparece (a referência o esconde nesse breakpoint) e o conteúdo centraliza.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Hero conforme referencia"
```

---

### Task 8: Ticker e StatsBar

Dois blocos pequenos e adjacentes, com um único ciclo de verificação.

**Files:**
- Create: `src/components/sections/Ticker.tsx`, `src/components/sections/StatsBar.tsx`
- Delete: `src/components/sections/CredentialsBar.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `TICKER` de `src/data/ticker.ts`, `STATS` de `src/data/stats.ts`
- Produces: `export default function Ticker()`, `export default function StatsBar()`

- [ ] **Step 1: Ticker, a partir da linha 438 da referência**

`.ticker` > `.t-track` com os `<span>`. A animação `@keyframes tk` translada `-50%`, então **a lista precisa estar duplicada** no DOM — senão a faixa some na metade do ciclo. Renderize `[...TICKER, ...TICKER]`.

- [ ] **Step 2: StatsBar, a partir das linhas 439–446 da referência**

`.stats-bar` > `.c` > `.stats-grid` com quatro `.stat-item`, cada um com `.stat-num` (valor + `<b>` do sufixo) e `.stat-lbl`.

A referência tem um defeito de conteúdo no segundo item (linha 442: o rótulo "Condutores formados" ficou dentro do `.stat-num` e o `.stat-lbl` ficou vazio). Não reproduza: valor e rótulo nos seus lugares, como nos outros três.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs ticker .ticker
node scripts/compare-visual.mjs stats .stats-bar
```

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Ticker e barra de estatisticas conforme referencia"
```

---

### Task 9: Dores

**Files:**
- Modify: `src/components/sections/Dores.tsx` (reescrito), `src/App.tsx`

**Interfaces:**
- Consumes: `DORES` de `src/data/dores.ts`, `waLink`, `Icone`
- Produces: `export default function Dores()`

- [ ] **Step 1: Reescrever a partir das linhas 448–493 da referência**

`.sec.dor` > `.c` > `.dor-head` (chip + h2 + p) + `.dor-grid` com seis `.dor-card` (`.dor-ic` com o ícone, h3, p) + `.dor-cta` (chip, p, botão WhatsApp).

Os textos das dores têm `\n\n` no conteúdo atual. Renderize cada parágrafo separado — a referência usa um `<p>` só, então quebre em `<p>` irmãos dentro do mesmo card em vez de imprimir `\n` cru.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs dor .dor
```

Confira o grid: 3 colunas em 1440px, 2 em 960px, 1 em 390px.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Secao de dores conforme referencia"
```

---

### Task 10: Categorias

**Files:**
- Create: `src/components/sections/Categorias.tsx`
- Delete: `src/components/sections/Services.tsx`, `CoursesSpecialized.tsx`, `CnhBrasil.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `CATEGORIAS` de `src/data/categorias.ts`, `waLink`
- Produces: `export default function Categorias()`

- [ ] **Step 1: Reescrever a partir das linhas 495–538 da referência**

`.sec.serv` com **`id="servicos"`** (não `categorias` — ver a nota da Task 6) > `.c` > `.serv-head` (chip + h2 + p) + `.serv-grid` com seis `.serv-card` (`.serv-cat` com a sigla, h3, `.serv-list`) + o `div` centralizado com o botão WhatsApp.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs serv .serv
```

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Secao de categorias conforme referencia"
```

---

### Task 11: Sobre

**Files:**
- Create: `src/components/sections/Sobre.tsx`
- Delete: `src/components/sections/About.tsx`, `Differentials.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `SOBRE_*` de `src/data/sobre.ts`
- Produces: `export default function Sobre()`

- [ ] **Step 1: Reescrever a partir das linhas 540–561 da referência**

`.sec.sobre` com `id="sobre"` > `.c` > `.sobre-grid` com `.sobre-imgs` (duas imagens sobrepostas, `.sim` e `.sis`) e `.sobre-txt` (chip, h2 com `<em>`, parágrafos `.sobre-p`, `.sobre-pills` com quatro `.spill`).

Imagens, do About atual: `.sim` = `/images/img1.JPG`, `.sis` = `/images/img3.jpeg`.

O h2 tem uma parte em itálico âmbar (`.sobre-txt h2 em`). Marque no dado, não com `dangerouslySetInnerHTML`:

```tsx
<h2 className="t-head">{SOBRE_TITULO_INICIO} <em>{SOBRE_TITULO_ENFASE}</em></h2>
```

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs sobre .sobre
```

Em 960px as duas imagens encolhem (`.sobre-imgs{height:300px}`) e a grid vira uma coluna.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Secao sobre conforme referencia"
```

---

### Task 12: Processo

**Files:**
- Create: `src/components/sections/Processo.tsx`
- Delete: `src/components/sections/Process.tsx`
- Modify: `src/styles/sections/proc.css`, `src/App.tsx`

**Interfaces:**
- Consumes: `PROCESSO` de `src/data/processo.ts`
- Produces: `export default function Processo()`

- [ ] **Step 1: Ajustar o CSS para cinco etapas**

O site tem 5 etapas e a referência foi desenhada para 4. Em `src/styles/sections/proc.css`, duas linhas mudam — e são as **únicas** alterações de valor permitidas em CSS portado, porque decorrem da contagem de itens:

```css
.proc-steps{grid-template-columns:repeat(5,1fr);gap:0;margin-top:3.5rem;position:relative}
.proc-steps::before{content:'';position:absolute;top:30px;left:calc(10% + 16px);right:calc(10% + 16px);height:1px;background:linear-gradient(90deg,transparent,rgba(245,168,0,.35),rgba(245,168,0,.35),transparent)}
```

`12.5%` é metade de 1/4 de coluna; com 5 colunas o equivalente é `10%`. Isso mantém a linha ancorada no centro do primeiro e do último círculo.

Nos breakpoints, `responsive.css` já leva `.proc-steps` para 2 colunas e esconde a linha — nada a mudar lá.

- [ ] **Step 2: Reescrever a partir das linhas 563–577 da referência**

`.sec.proc` > `.c.proc-in` > cabeçalho (chip, h2 com `<em>`, `.sub`) + `.proc-steps` com cinco `.pstep` (`.pnum`, h3, p).

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs proc .proc
```

Em 1440px, confira que a linha conectora começa e termina no centro dos círculos das pontas.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Secao de processo com 5 etapas conforme referencia"
```

---

### Task 13: Avaliações

**Files:**
- Create: `src/components/sections/Avaliacoes.tsx`
- Delete: `src/components/sections/Testimonials.tsx`
- Modify: `src/hooks/useCarousel.ts` (reescrito), `src/App.tsx`

**Interfaces:**
- Consumes: `DEPOIMENTOS` de `src/data/depoimentos.ts`, `NOTA_GOOGLE` e `TOTAL_AVALIACOES` de `src/data/stats.ts`, `Icone`
- Produces: `export default function Avaliacoes()`; e o hook reutilizado na Task 14:

```typescript
export function useCarousel(total: number, porView: (largura: number) => number): {
  indice: number
  maxIndice: number
  irPara: (n: number) => void
  anterior: () => void
  proximo: () => void
}
```

- [ ] **Step 1: Reescrever o `useCarousel`**

A referência recalcula itens-por-view e reconstrói os dots a cada `resize` (linhas 824–845). O hook faz o mesmo, e **prende o índice** ao novo máximo quando a janela encolhe — senão o track fica deslocado para fora da tela.

```typescript
import { useCallback, useEffect, useState } from 'react'

export function useCarousel(total: number, porView: (largura: number) => number) {
  const [indice, setIndice] = useState(0)
  const [spv, setSpv] = useState(() => porView(typeof window === 'undefined' ? 1440 : window.innerWidth))

  useEffect(() => {
    const onResize = () => setSpv(porView(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [porView])

  const maxIndice = Math.max(0, total - spv)

  useEffect(() => {
    setIndice((atual) => Math.min(atual, maxIndice))
  }, [maxIndice])

  const irPara = useCallback(
    (n: number) => setIndice(Math.max(0, Math.min(n, maxIndice))),
    [maxIndice]
  )

  return {
    indice,
    maxIndice,
    irPara,
    anterior: () => irPara(indice - 1),
    proximo: () => irPara(indice + 1),
  }
}
```

- [ ] **Step 2: Reescrever a seção a partir das linhas 579–622 da referência**

`.sec.avs` com `id="avaliacoes"` > `.c` > `.avs-top` (`.avs-score` com `.gscore` + `.ginfo`/`.gstars`/`.gcnt`, e `.avs-head` com chip, h2, p) + `.car-wrap` > `.car-track` com os `.rev` + `.car-ctrl` com dois `.cbtn` + `.cdots`.

`.gscore` = `NOTA_GOOGLE`; `.gcnt` = `+${TOTAL_AVALIACOES} avaliações no Google`.

Cada `.rev`: `.rev-top` com `.rav` (iniciais, `style={{background: corAvatar}}`) e nome/`papel`; `.rstars` com cinco estrelas; `.rtext` com o texto.

Itens por view, como na referência: `(l) => (l <= 960 ? 1 : 3)`.

O deslocamento do track usa a largura real do card mais o `gap` de `1.1rem` (17px), medida do DOM — a referência faz `cards[0].offsetWidth + 17`:

```typescript
const trackRef = useRef<HTMLDivElement>(null)
const [passo, setPasso] = useState(0)

useEffect(() => {
  const medir = () => {
    const card = trackRef.current?.querySelector<HTMLElement>('.rev')
    if (card) setPasso(card.offsetWidth + 17)
  }
  medir()
  window.addEventListener('resize', medir)
  return () => window.removeEventListener('resize', medir)
}, [])
```

E `style={{ transform: `translateX(-${indice * passo}px)` }}` no `.car-track`.

Os dots são `maxIndice + 1` divs `.cdot`, com `.on` no índice atual, clicáveis via `irPara(i)`.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs avs .avs
```

Verifique também, no browser: clicar nas setas desloca de um card; em 390px aparece um card por vez; redimensionar de 1440 para 390 e voltar não deixa o track deslocado.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Carousel de avaliacoes conforme referencia"
```

---

### Task 14: Galeria e lightbox

**Files:**
- Create: `src/components/sections/Galeria.tsx`
- Modify: `src/components/ui/Lightbox.tsx` (reescrito), `src/App.tsx`
- Delete: `src/components/sections/Gallery.tsx`, `src/components/sections/HighlightsCarousel.tsx`

**Interfaces:**
- Consumes: `GALERIA` de `src/data/galeria.ts`, `useCarousel` da Task 13, `Icone`
- Produces: `export default function Galeria()`; e

```typescript
export default function Lightbox(props: {
  fotos: Foto[]
  indice: number | null
  aoFechar: () => void
  aoTrocar: (n: number) => void
}): JSX.Element | null
```

- [ ] **Step 1: Reescrever o Lightbox a partir das linhas 634–653 e 894–930 da referência**

`.lb` com `.on` quando aberto, `.lb-bg`, `.lb-inner`, `.lb-close`, `.lb-slides` com um `.lb-slide` por foto (`.on` no atual), `.lb-nav.lb-prev`/`.lb-next`, `.lb-info` com `.lb-lbl` (legenda) e `.lb-counter` (`n / total`).

Comportamento: Esc fecha; ← e → navegam com wrap (`(n + total) % total`); clique no `.lb-bg` fecha; `document.body.style.overflow = 'hidden'` enquanto aberto, restaurado ao fechar **e no cleanup do efeito** — sem isso, desmontar com o lightbox aberto deixa a página travada.

```typescript
useEffect(() => {
  if (indice === null) return
  document.body.style.overflow = 'hidden'
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') aoFechar()
    if (e.key === 'ArrowLeft') aoTrocar((indice - 1 + fotos.length) % fotos.length)
    if (e.key === 'ArrowRight') aoTrocar((indice + 1) % fotos.length)
  }
  document.addEventListener('keydown', onKey)
  return () => {
    document.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
  }
}, [indice, fotos.length, aoFechar, aoTrocar])
```

- [ ] **Step 2: Reescrever a galeria a partir das linhas 624–633 da referência**

`.sec.gal` com `id="galeria"` > `.c` > `.gal-hd` (chip + h2 à esquerda, `.gal-ctrl` com dois `.gc-btn` à direita) + `.gs-wrap` > `.gs-track` com os `.gs-item` (`.gs-img` com a `<img>`, `.gs-cap` com `.gs-num`, `.gs-lbl` e `.gs-arrow`) + `.gs-dots`.

Itens por view: `(l) => (l <= 768 ? 1 : l <= 1100 ? 2 : 3)`. Passo = largura do `.gs-item` + `16` (gap de `1rem`).

Clicar num item abre o lightbox naquele índice.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs gal .gal
```

O fundo da seção precisa estar navy — se aparecer branco com texto ilegível, a correção `.gal{background:var(--nv)}` da Task 3 não foi aplicada.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Galeria com lightbox conforme referencia"
```

---

### Task 15: FAQ

**Files:**
- Modify: `src/components/sections/Faq.tsx` (reescrito), `src/App.tsx`

**Interfaces:**
- Consumes: `FAQ` de `src/data/faq.ts`, `Icone`
- Produces: `export default function Faq()`

- [ ] **Step 1: Reescrever a partir das linhas 656–688 da referência**

`.sec.faq` com `id="faq"` > `.c` > `.faq-grid` com a coluna esquerda (chip, h2, p, `.faq-img` com uma foto) e `.faq-r` com os `.fi`, cada um `.fq` (h3 + `.ftog` com o ícone `+`) e `.fans` > `.fans-i`.

Accordion **exclusivo** (referência 811–818): abrir um fecha os demais. `const [aberto, setAberto] = useState<number | null>(null)`; clicar no item já aberto o fecha.

A abertura é por `max-height` no CSS (`.fi.on .fans{max-height:260px}`), não por montar/desmontar — o `.fans-i` fica sempre no DOM, senão a transição não acontece.

A foto do `.faq-img` é a única posição de imagem nova: escolha uma de `/public/images` que não esteja na galeria nem no hero (`/images/img14.jpeg` serve). O cliente ajusta no preview.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs faq .faq
```

Compare com um item aberto nos dois lados.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: FAQ conforme referencia"
```

---

### Task 16: Contato

**Files:**
- Create: `src/components/sections/Contato.tsx`
- Delete: `src/components/sections/ContactForm.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `CONTATO` e `waLink` de `src/data/contato.ts`, `CATEGORIAS` de `src/data/categorias.ts`, `Icone`
- Produces: `export default function Contato()`

- [ ] **Step 1: Reescrever a partir das linhas 690–727 da referência**

`.sec.form-sec` com `id="contato"` > `.c` > `.form-grid` com a coluna esquerda (chip, h2 com `<em>`, p, `.cinfo` com quatro `.ci`) e `.fbox` (h3, p, `.frow` com nome e WhatsApp, select de categoria, textarea, botão).

O select é populado a partir de `CATEGORIAS` mais uma `<option value="">Selecione</option>` inicial — assim o formulário não desencontra da seção de categorias quando ela mudar.

O envio abre o WhatsApp com a mensagem montada (referência 848–855):

```typescript
const enviar = () => {
  const texto = [
    'Olá! Vim pelo site da Caluar.',
    '',
    `Nome: ${nome || 'não informado'}`,
    `Telefone: ${telefone || 'não informado'}`,
    `Categoria: ${categoria || 'não selecionada'}`,
    ...(mensagem ? [`Mensagem: ${mensagem}`] : []),
  ].join('\n')
  window.open(waLink(texto), '_blank')
}
```

Os quatro `.ci` da coluna esquerda: telefone, WhatsApp, e-mail e endereço, com os valores de `CONTATO`.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs form .form-sec
```

Em 520px o `.frow` vira uma coluna.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Secao de contato conforme referencia"
```

---

### Task 17: Mapa, Footer e botão flutuante

**Files:**
- Create: `src/components/sections/Mapa.tsx`, `src/components/ui/WhatsAppFloat.tsx`
- Modify: `src/components/layout/Footer.tsx` (reescrito), `src/App.tsx`
- Delete: `src/components/sections/Map.tsx`, `LocationInfo.tsx`

**Interfaces:**
- Consumes: `CONTATO`, `waLink`, `anosDeTradicao`, `Icone`
- Produces: `export default function Mapa()`, `export default function Footer()`, `export default function WhatsAppFloat()`

- [ ] **Step 1: Mapa, a partir das linhas 729–746 da referência**

`.map-sec` > `.c` > `.map-grid` com a coluna de texto (chip, h2 com `<em>`, p com endereço e horários, dois botões) e `.map-frame` com o `<iframe>`.

Endereço e horários vêm de `CONTATO` (inclui os horários que hoje estão em `LocationInfo.tsx`: semana `7h às 20h`, sábado `9h às 12h` — **não** os "8h às 18h / 8h às 12h" da referência, que são conteúdo desatualizado).

O `src` do iframe é o da referência (linha 742), copiado inteiro. Acrescente `loading="lazy"` — o iframe do Google Maps no meio da página custa caro no carregamento e a referência não tinha esse cuidado.

- [ ] **Step 2: Footer, a partir das linhas 748–786 da referência**

`footer` > `.c` > `.ft-grid` com `.ft-brand` (logo, `.ft-tag`, `.ft-soc` com Instagram/Facebook/WhatsApp) e três `.ft-col` (Categorias, Institucional, Contato) + `.ft-bot` com `.ft-copy` e `.ft-by`.

`.ft-tag` menciona os anos: use `anosDeTradicao()` em vez de literal. Os links de contato vêm de `CONTATO`. O copyright é o do Footer atual ("© 2026 Auto Escola Caluar. Todos os direitos reservados.").

- [ ] **Step 3: Botão flutuante, a partir da linha 788 da referência**

`<a class="waf">` com o ícone do WhatsApp, apontando para `waLink('Vim pelo site da Caluar e quero saber mais.')`. A animação de pulso vem de `waf.css`.

- [ ] **Step 6: Comparar**

```bash
node scripts/compare-visual.mjs map .map-sec
node scripts/compare-visual.mjs footer footer
```

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "feat: Mapa, footer e botao flutuante conforme referencia"
```

---

### Task 18: Remover o Tailwind e fechar

Última task. Só agora nenhum componente depende do Tailwind.

**Files:**
- Modify: `src/App.tsx`, `package.json`
- Delete: `tailwind.config.js`, `postcss.config.js`, `src/components/ui/{Button,Card,Carousel,OptimizedImage,PromoPopup}.tsx`, `src/components/admin/`, `src/context/AdminContext.tsx`

- [ ] **Step 1: `App.tsx` final**

```tsx
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Ticker from './components/sections/Ticker'
import StatsBar from './components/sections/StatsBar'
import Dores from './components/sections/Dores'
import Categorias from './components/sections/Categorias'
import Sobre from './components/sections/Sobre'
import Processo from './components/sections/Processo'
import Avaliacoes from './components/sections/Avaliacoes'
import Galeria from './components/sections/Galeria'
import Faq from './components/sections/Faq'
import Contato from './components/sections/Contato'
import Mapa from './components/sections/Mapa'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <StatsBar />
      <Dores />
      <Categorias />
      <Sobre />
      <Processo />
      <Avaliacoes />
      <Galeria />
      <Faq />
      <Contato />
      <Mapa />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
```

- [ ] **Step 2: Apagar o que sobrou**

```bash
rm -rf src/components/admin src/context
rm src/components/ui/Button.tsx src/components/ui/Card.tsx src/components/ui/Carousel.tsx src/components/ui/OptimizedImage.tsx src/components/ui/PromoPopup.tsx
rm tailwind.config.js postcss.config.js
npm uninstall tailwindcss autoprefixer postcss
```

- [ ] **Step 3: Confirmar que não sobrou vestígio**

```bash
grep -rniE "tailwind|@apply|className=\"[^\"]*\b(flex-col|md:|lg:|text-[0-9]|bg-white/)" src index.html || echo "limpo"
```

Esperado: `limpo`. Qualquer resultado é classe Tailwind esquecida em componente.

- [ ] **Step 4: Build e comparação da página inteira**

```bash
npm run build
node scripts/compare-visual.mjs pagina page
```

Abra os seis PNGs. Este é o critério de aceite: a página inteira, lado a lado com a referência, em 1440, 960 e 390px.

- [ ] **Step 5: Checar os cinco comportamentos, no browser**

1. Rolar 40px muda o fundo da navbar.
2. Abrir um item do FAQ fecha o anterior.
3. Redimensionar a janela reconstrói os dots dos dois carousels e não deixa track deslocado.
4. Lightbox fecha com Esc e com clique no fundo; setas navegam com wrap.
5. Enviar o formulário abre `wa.me/553135633619` com nome, telefone e categoria na mensagem.

- [ ] **Step 6: Confirmar os CTAs**

```bash
grep -roE "wa\.me/[0-9]+" src | sort -u
```

Esperado: só `wa.me/553135633619` — e apenas em `src/data/contato.ts`, já que todo link passa por `waLink`.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "refactor: Remover Tailwind e componentes orfaos"
```

---

## Pendências para o cliente

Não bloqueiam a implementação; ficam para revisão no preview.

1. **Legendas da galeria** (Task 4, Step 10) — as nove fotos não tinham legenda; as atuais vieram adaptadas da referência.
2. **Foto do FAQ** (Task 15) — posição nova, escolhida por aproximação.
3. **`index.html` tem números divergentes** — a descrição e o JSON-LD dizem "1mil+ aprovados" enquanto a página diz 7mil+, e o e-mail no JSON-LD (`contato@caluar-auto-escola.com.br`) não é o do rodapé (`cfccaluar@hotmail.com`). É SEO, que a spec põe fora de escopo, mas é informação errada em produção e merece uma correção própria.
