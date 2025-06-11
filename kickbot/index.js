const puppeteer = require("puppeteer");

const VISIT_URL = "https://garnet-volcano-apparatus.glitch.me/";

async function runBot() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto(VISIT_URL, { waitUntil: "networkidle2" });

  console.log("✅ Sayfa yüklendi!");

  await page.waitForTimeout(15000); // 15 saniye izlenme gibi dursun

  await browser.close();
}

setInterval(runBot, 2 * 60 * 1000); // her 2 dakikada bir çalıştır
runBot();
