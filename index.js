//import { scheduleJob } from "node-schedule"
const liquipediaService = require("./services/liquipedia")
const addFiveMinutes = require("./job_scheduler")

const DAILY_TOURNAMENT_SCAN_TIME = "0 23 * * *"

/*
const job = scheduleJob("10 * * * *", () => {
    console.log("job testi")
})
*/

const dailyTournamentScan = () => {
    liquipediaService.getUpcomingTournaments()
}

//dailyTournamentScan()
/*
const testJob = () => {
    console.log("testi")
}

schedule("17 * * * *", testJob)
*/
//dailyTournamentScan()

const newTime = addFiveMinutes("58 20 * * *")

console.log(newTime)

// https://liquipedia.net/apexlegends/index.php?title=Special:Ask&#search