const chromium = require('chrome-aws-lambda');

(async () => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless
  });

  const page = await browser.newPage();
  await page.goto("https://garnet-volcano-apparatus.glitch.me/", {
    waitUntil: 'networkidle2'
  });

  console.log("✅ Ziyaret tamamlandı");

  await page.waitForTimeout(15000); // 15 saniye kal

  await browser.close();
})();
