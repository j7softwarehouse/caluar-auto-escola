import playwright from 'playwright';

const browser = await playwright.chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });

// Full page screenshot
await page.screenshot({
  path: '/tmp/etapa3-full.png',
  fullPage: true
});

console.log('Screenshot saved to /tmp/etapa3-full.png');

// Take viewport-height screenshots of key sections
const sections = [
  { name: 'process', selector: '.bg-primary' },
  { name: 'map', selector: '#mapa' }
];

for (const section of sections) {
  const element = await page.$(section.selector);
  if (element) {
    await element.screenshot({ path: `/tmp/section-${section.name}.png` });
    console.log(`Screenshot saved to /tmp/section-${section.name}.png`);
  }
}

await browser.close();
