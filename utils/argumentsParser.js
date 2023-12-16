import { getTodaysChallenge } from "./challenge.js";

export const challengeNumber = process.argv[2] !== "%npm_config_challenge%" ? process.argv[2] : getTodaysChallenge();