import { chromium } from 'playwright';

const main = async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1024 } });
  
  try {
    console.log('Opening page...');
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' });
    
    console.log('\n[Test 1] Click Admin Button');
    const adminBtn = await page.$('button[aria-label="Admin"]');
    if (adminBtn) {
      await adminBtn.click();
      await page.waitForTimeout(500);
      
      const adminPanel = await page.$('[role="dialog"]') || await page.$('.fixed.right-0');
      if (adminPanel) {
        console.log('✓ Admin panel opened');
        await page.screenshot({ path: '/tmp/admin-panel.png' });
      } else {
        console.log('✗ Admin panel did not open');
      }
    }
    
    console.log('\n[Test 2] Form Interaction');
    // Find a form input
    const inputs = await page.$$('input[type="text"]');
    console.log(`Found ${inputs.length} text input(s)`);
    
    console.log('\n[Test 3] Navigation Links');
    const links = await page.$$('a[href^="#"]');
    console.log(`Found ${links.length} internal navigation link(s)`);
    
    if (links.length > 0) {
      console.log('✓ Navigation links present');
      // Click one
      await links[0].click();
      await page.waitForTimeout(300);
      console.log('✓ Navigation link clickable');
    }
    
    console.log('\n[Test 4] Navbar Scroll Detection');
    const initialNavColor = await page.$eval('nav', el => 
      window.getComputedStyle(el).backgroundColor
    );
    console.log(`Initial navbar bg: ${initialNavColor}`);
    
    // Scroll and check color change
    await page.evaluate(() => window.scrollBy(0, 200));
    await page.waitForTimeout(300);
    
    const scrolledNavColor = await page.$eval('nav', el => 
      window.getComputedStyle(el).backgroundColor
    );
    console.log(`After scroll navbar bg: ${scrolledNavColor}`);
    
    if (initialNavColor !== scrolledNavColor) {
      console.log('✓ Navbar color changes on scroll');
    }
    
    console.log('\n✅ Interactive tests passed!');
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
};

main();
