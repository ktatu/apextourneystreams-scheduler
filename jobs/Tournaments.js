const LiquipediaService = require("../services/LiquipediaService")
const JobScheduler = require("./JobScheduler")
const TimeManipulation = require("../utils/TimeManipulation")

const DAILY_MATCH_SCAN_TIME = "0 23 * * *"

const handleUpcomingTournaments = async () => {
    const matchQueryResults = await LiquipediaService.getUpcomingMatches()

    const upcomingTournamentsMap = filterMatchQueryResults(matchQueryResults)

    //console.log(upcomingTournamentsMap)

    
    upcomingTournamentsMap.forEach((tourney) => {
        //JobScheduler.schedule("tunti ennen turnauksen alkua, tee funktio paikkaan utils/cron_time", handleTournamentDetails, [tourney])
    })
    
    //JobScheduler.schedule(DAILY_MATCH_SCAN_TIME, handleUpcomingTournaments)
}

const filterMatchQueryResults = (matchQueryResults) => {
    const tournaments = new Map()

    matchQueryResults.forEach((result) => {
        const tourneyName = result["has tournament name"]
        // timestamps received from the Liquipedia api need to be multiplied by 1000 so that new Date(timestamp) works
        const startTime = parseInt(result["has map date"]["timestamp"]) * 1000

        if (tournaments.has(tourneyName)) {
            const savedStartTime = tournaments.get(tourneyName)

            if (startTime < savedStartTime) {
                tournaments.set(tourneyName, startTime)
            }
        } else {
            tournaments.set(tourneyName, startTime)
        }
    })

    return tournaments
}

const handleTournamentDetails = (tourney) => {

}



module.exports = {
    handleUpcomingTournaments
}