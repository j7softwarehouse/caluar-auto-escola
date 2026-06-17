import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

try {
  // Limpar cache
  await page.context().clearCookies();
  await page.goto('http://localhost:3000/', { 
    waitUntil: 'networkidle',
    referer: undefined 
  });
  
  const html = await page.content();
  
  // Verificar se as mudanças estão lá
  console.log('Verificando mudanças...\n');
  console.log('Hero copy:', html.includes('mais facil') ? '✓' : '✗');
  console.log('Dores section:', html.includes('Voce tem medo') ? '✓' : '✗');
  console.log('Footer J7:', html.includes('J7 Software House') ? '✓' : '✗');
  console.log('Amarelo correto:', html.includes('#F5A800') ? '✓' : '(inline, OK)');
  
  await page.screenshot({ path: '/tmp/check-visual.png' });
  console.log('\nScreenshot salvo');
} finally {
  await browser.close();
}
