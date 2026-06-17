import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 250 } });

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  
  // Screenshot topo
  await page.screenshot({ path: '/tmp/navbar-white-topo.png' });
  
  // Scroll e screenshot
  await page.evaluate(() => window.scrollBy(0, 400));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/navbar-white-scroll.png' });
  
  console.log('✓ Screenshots saved');
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
