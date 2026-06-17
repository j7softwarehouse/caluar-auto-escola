import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const errors = [];

page.on('console', msg => {
  console.log(`[${msg.type()}] ${msg.text()}`);
  if (msg.type() === 'error') errors.push(msg.text());
});

try {
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  
  const html = await page.content();
  
  if (html.includes('logo.jpeg')) {
    console.log('✓ logo.jpeg está no HTML');
  } else {
    console.log('✗ logo.jpeg NÃO está no HTML');
  }
  
  if (html.includes('Fale conosco')) {
    console.log('✓ "Fale conosco" está no HTML');
  } else {
    console.log('✗ "Fale conosco" NÃO está no HTML');
  }
  
  if (errors.length > 0) {
    console.log('\nErrors found:');
    errors.forEach(e => console.log(`  - ${e}`));
  }
  
} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
