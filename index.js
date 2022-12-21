//import { scheduleJob } from "node-schedule"
//const liquipediaService = require("./services/liquipedia")
const LiquipediaService = require("./services/LiquipediaService")
const JobScheduler = require("./JobScheduler")

//const UPCOMING_TOURNAMENTS_SCAN_TIME = "0 23 * * *"



const dailyTournamentScan = () => {
    LiquipediaService.getUpcomingTournaments()
}

dailyTournamentScan()

// https://liquipedia.net/apexlegends/index.php?title=Special:Ask&#search

process.on("SIGINT", () => {
    console.log("Any saved jobs and schedules (in array) are written to a file on exit")
    console.log("Any existing files are read and written into the schedule/job array on program start")
})