import fs from "node:fs/promises";

export async function createChallengeFile(challenge, challengeNumber) {
    try {
        await fs.writeFile(challengeNumber + ".md", challenge);
    } catch(error) {
        console.log(error);
        console.error("There was an error while writing the file");
        process.exit(1);
    }
}

export function getTodaysChallenge() {
    const releaseHoursInUTC = 15;
    const currentTime = new Date();
    const currentDate = currentTime.getUTCDate();
    const currentChallengeNumber = currentTime.getUTCHours() >= releaseHoursInUTC ? currentDate : currentDate - 1;
    return currentChallengeNumber;
}