const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 }
  });

  try {
    console.log('Abrindo http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

    // Capturar screenshot do hero
    console.log('Capturando Hero Section...');
    await page.screenshot({ path: 'screenshots/01-hero.png' });

    // Scroll para Stats
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.screenshot({ path: 'screenshots/02-stats.png' });

    // Scroll para Services
    await page.evaluate(() => window.scrollBy(0, 1000));
    await page.screenshot({ path: 'screenshots/03-services.png' });

    // Scroll para Reviews
    await page.evaluate(() => window.scrollBy(0, 1200));
    await page.screenshot({ path: 'screenshots/04-reviews.png' });

    // Scroll para FAQ
    await page.evaluate(() => window.scrollBy(0, 1200));
    await page.screenshot({ path: 'screenshots/05-faq.png' });

    // Scroll para Footer
    await page.evaluate(() => window.scrollBy(0, 2000));
    await page.screenshot({ path: 'screenshots/06-footer.png' });

    console.log('✅ Screenshots capturadas com sucesso!');

    // Testar interatividade
    console.log('\n✅ Testando Navbar...');
    await page.goto('http://localhost:3000');
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.screenshot({ path: 'screenshots/07-navbar-scroll.png' });

    console.log('✅ Testando mobile view...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');
    await page.screenshot({ path: 'screenshots/08-mobile.png' });

    console.log('\n✅ Todos os testes completados!');
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await browser.close();
    process.exit(0);
  }
})();
