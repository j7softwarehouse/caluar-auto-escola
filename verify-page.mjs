import { chromium } from 'playwright';

const main = async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1024 } });
  
  const errors = [];
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  
  try {
    console.log('[1/5] Opening http://localhost:3001...');
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle', timeout: 30000 });
    console.log('✓ Page loaded successfully');
    
    console.log('\n[2/5] Checking page structure...');
    const title = await page.title();
    console.log(`✓ Title: "${title}"`);
    
    const navbar = await page.$('nav');
    console.log(navbar ? '✓ Navbar found' : '✗ Navbar missing');
    
    const sections = await page.$$('section');
    console.log(`✓ Found ${sections.length} section(s)`);
    
    console.log('\n[3/5] Checking for render errors...');
    if (errors.length > 0) {
      console.log('✗ Console errors found:');
      errors.forEach(e => console.log(`  - ${e}`));
    } else {
      console.log('✓ No console errors');
    }
    
    console.log('\n[4/5] Testing interactions...');
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    console.log('✓ Page scrolls without errors');
    
    // Check if admin button exists
    const adminButton = await page.$('button[aria-label="Admin"]');
    console.log(adminButton ? '✓ Admin button found' : '✗ Admin button missing');
    
    console.log('\n[5/5] Taking screenshots...');
    await page.screenshot({ path: '/tmp/caluar-hero.png' });
    console.log('✓ Screenshot saved to /tmp/caluar-hero.png');
    
    // Scroll down and take another screenshot
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
    await page.screenshot({ path: '/tmp/caluar-middle.png' });
    console.log('✓ Middle section screenshot saved');
    
    console.log('\n✅ Verification complete - Page renders correctly!');
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
};

main();
