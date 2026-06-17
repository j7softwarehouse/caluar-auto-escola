import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 1200 } });

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/fonts-check.png' });
  
  // Verificar fonts no CSS
  const fonts = await page.evaluate(() => {
    const h1 = window.getComputedStyle(document.querySelector('h1'));
    const p = document.querySelector('p');
    const p_style = p ? window.getComputedStyle(p) : null;
    
    return {
      h1_font: h1.fontFamily,
      h1_weight: h1.fontWeight,
      p_font: p_style?.fontFamily,
      p_weight: p_style?.fontWeight,
    };
  });
  
  console.log('Fonts check:');
  console.log('H1 -', fonts.h1_font, '| Weight:', fonts.h1_weight);
  console.log('P  -', fonts.p_font, '| Weight:', fonts.p_weight);
  
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
