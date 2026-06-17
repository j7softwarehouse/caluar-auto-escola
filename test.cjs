const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') console.error('✗', msg.text());
  });
  
  page.on('pageerror', err => {
    console.error('✗ Page error:', err.message);
  });
  
  try {
    console.log('Opening http://localhost:3001...');
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle', timeout: 30000 });
    
    console.log('✓ Page loaded');
    console.log('✓ Title:', await page.title());
    
    // Check main elements
    const navbar = await page.$('nav');
    console.log(navbar ? '✓ Navbar found' : '✗ Navbar missing');
    
    const hero = await page.$('[id=""]');
    console.log('✓ Page structure looks good');
    
    // Scroll to test animations
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(500);
    
    // Screenshot
    await page.screenshot({ path: '/tmp/caluar-page.png', fullPage: true });
    console.log('✓ Screenshot saved');
    
  } catch (error) {
    console.error('✗ Test failed:', error.message);
  } finally {
    await browser.close();
  }
})();
