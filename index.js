//import { scheduleJob } from "node-schedule"
const liquipediaService = require("./services/liquipediaService")

const DAILY_TOURNAMENT_SCAN_TIME = "0 23 * * *"

/*
const job = scheduleJob("10 * * * *", () => {
    console.log("job testi")
})
*/

const dailyTournamentScan = () => {
    liquipediaService.getUpcomingTournaments()
}

dailyTournamentScan()

//dailyTournamentScan()

// https://liquipedia.net/apexlegends/index.php?title=Special:Ask&#search