import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1000, height: 1600 },
    deviceScaleFactor: 2
  });
  
  await page.goto('file:///C:/Users/ZAGOOURS/Desktop/github/zagoourai-hub/design/preview.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: 'C:/Users/ZAGOOURS/Desktop/github/zagoourai-hub/design/rendered_result.png', fullPage: true });
  console.log('Screenshot saved to rendered_result.png');
  await browser.close();
})();
