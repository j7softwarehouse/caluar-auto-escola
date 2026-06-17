import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 1600 } });

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  
  // Scroll to bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  
  await page.screenshot({ path: '/tmp/footer-check.png' });
  console.log('✓ Footer screenshot saved');
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
