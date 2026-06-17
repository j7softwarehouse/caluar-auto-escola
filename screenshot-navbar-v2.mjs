import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 120 } });

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/navbar-v2.png' });
  console.log('✓ Navbar screenshot saved');
} finally {
  await browser.close();
}
