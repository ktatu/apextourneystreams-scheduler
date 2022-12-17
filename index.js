import { scheduleJob } from "node-schedule"

const TOURNAMENT_SCAN_TIME = "0 23 * * *"




const job = scheduleJob("10 * * * *", () => {
    console.log("job testi")
})

const tournamentScan = () => {

}

// https://liquipedia.net/apexlegends/index.php?title=Special:Ask&#search