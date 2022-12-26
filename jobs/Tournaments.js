const LiquipediaService = require("../services/LiquipediaService")
const Scheduler = require("./Scheduler")
//const JobScheduler = require("./JobScheduler")

const addOneWeek = require("../utils/TimeManipulation").addOneWeek
const removeOneHour = require("../utils/TimeManipulation").removeOneHour

const handleUpcomingTourneys = async () => {
    const matchQueryResults = await LiquipediaService.getUpcomingMatches()

    const upcomingTourneysMap = filterMatchQueryResults(matchQueryResults)

    const scheduler = new Scheduler()
    
    upcomingTourneysMap.forEach((key) => {
        const hourBeforeTourneyStart =  removeOneHour(upcomingTourneysMap(key))

        //scheduler.schedule(hourBeforeTourneyStart, () => handleTourneyDetails)
    })
    
    scheduler.schedule(Date.now() + addOneWeek, handleUpcomingTourneys)
    console.log("täällä")
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

const handleTourneyDetails = (tourney) => {

}



module.exports = {
    handleUpcomingTourneys
}