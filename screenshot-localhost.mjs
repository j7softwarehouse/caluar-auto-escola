import playwright from 'playwright';

const browser = await playwright.chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

try {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

  // Full page screenshot
  await page.screenshot({
    path: '/tmp/localhost-full.png',
    fullPage: true
  });

  console.log('✅ Full page screenshot saved to /tmp/localhost-full.png');

  // Viewport screenshots of key sections
  const sections = [
    { name: 'hero', y: 0 },
    { name: 'testimonials', y: 3000 },
    { name: 'gallery', y: 2500 },
    { name: 'footer', y: 7000 }
  ];

  for (const section of sections) {
    await page.evaluate((y) => window.scrollTo(0, y), section.y);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/tmp/section-${section.name}.png` });
    console.log(`✅ Screenshot ${section.name} saved`);
  }
} catch (err) {
  console.error('❌ Screenshot failed:', err.message);
}

await browser.close();
