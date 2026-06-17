import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 200 } });

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/navbar-v3.png' });
  
  const html = await page.content();
  console.log(html.includes('logo.jpeg') ? '✓ logo.jpeg found' : '✗ logo.jpeg not found');
  console.log(html.includes('Fale conosco') ? '✓ Fale conosco found' : '✗ Fale conosco not found');
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
