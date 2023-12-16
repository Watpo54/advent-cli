import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
    headless: false
});
const page = await browser.newPage();

function getChallengeURL(challengeNumber) {
    return process.env.CHALLENGE_URL + challengeNumber;
}

export async function getChallengeHTML(challengeNumber) {
    const url = getChallengeURL(challengeNumber);
    try {
        await page.goto(url);
        const challengeHTML = await page.waitForSelector("#challenge");
        return await challengeHTML.evaluate(element => {
            return element.childNodes[1].textContent;
        });
    } catch(error) {
        console.log(url);
        console.error("There is no element that matches the current selector for the challenge");
        process.exit(1);
    }
}

export async function submitChallenge() {

}