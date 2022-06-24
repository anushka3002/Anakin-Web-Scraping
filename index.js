const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://en.wikipedia.org/wiki/Ratan_Tata');
  await page.screenshot({path: 'wiki.png'});
  await browser.waitForTarget(()=>false)
  await browser.close();
})();