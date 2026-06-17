import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1400, height: 1400 } });

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  
  // Scroll down to see Dores section
  await page.evaluate(() => window.scrollBy(0, 900));
  await page.waitForTimeout(500);
  
  await page.screenshot({ path: '/tmp/dores-section.png' });
  console.log('✓ Screenshot saved');
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
