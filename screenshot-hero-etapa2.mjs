import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/hero-etapa2.png' });
  console.log('✓ Hero ETAPA 2 saved');
} finally {
  await browser.close();
}
