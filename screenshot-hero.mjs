import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/hero-new.png' });
  console.log('✓ Screenshot saved');
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
