import playwright from 'playwright';

const browser = await playwright.chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1400, height: 900 }
});

try {
  await page.goto('http://localhost:3002', { waitUntil: 'networkidle', timeout: 30000 });

  // Full page screenshot at high quality
  await page.screenshot({
    path: '/tmp/final-site.png',
    fullPage: true,
    
  });

  console.log('Final site screenshot saved to /tmp/final-site.png');

  // Viewport screenshots of key sections for detailed comparison
  const sections = [
    { name: 'hero', y: 0 },
    { name: 'dores', y: 1500 },
    { name: 'process', y: 3500 },
    { name: 'reviews', y: 5000 },
    { name: 'footer', y: 6500 }
  ];

  for (const section of sections) {
    await page.evaluate((y) => window.scrollTo(0, y), section.y);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/tmp/section-${section.name}.png` });
    console.log(`Screenshot ${section.name} saved`);
  }
} catch (err) {
  console.error('Screenshot failed:', err.message);
}

await browser.close();
