import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  // Tirar screenshot do hero (primeira janela)
  await page.screenshot({ path: '/tmp/hero-full.png', fullPage: false });
  console.log('✓ Screenshot full saved');
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
