import { createChallengeFile } from "./utils/challenge.js";
import { getChallengeHTML } from "./utils/webScraping.js";
import { challengeNumber } from "./utils/argumentsParser.js";
import { htmlToMarkdown } from "./utils/parseHTML.js";

const currentChallengeHTML = await getChallengeHTML(challengeNumber);
const markdownChallenge = htmlToMarkdown(currentChallengeHTML);
await createChallengeFile(markdownChallenge, challengeNumber);

process.exit(0);