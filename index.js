//import { scheduleJob } from "node-schedule"
//const liquipediaService = require("./services/liquipedia")
const LiquipediaService = require("./services/LiquipediaService")

const DAILY_TOURNAMENT_SCAN_TIME = "0 23 * * *"

const dailyTournamentScan = () => {
    LiquipediaService.getUpcomingTournaments()
}

dailyTournamentScan()

// https://liquipedia.net/apexlegends/index.php?title=Special:Ask&#search