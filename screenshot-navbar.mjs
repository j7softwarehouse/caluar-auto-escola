import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 200 } });

try {
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/navbar-updated.png' });
  console.log('✓ Screenshot saved');
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
