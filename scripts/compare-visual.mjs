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
