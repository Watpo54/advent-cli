import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
    headless: false
});
const page = await browser.newPage();
await page.goto(process.env.CHALLENGE_URL + "10");
const loginButton = await page.waitForSelector("#editor footer button");
await loginButton.click();