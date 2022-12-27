const LiquipediaClient = require("../services/Liquipedia")
const Scheduler = require("./Scheduler")

const addOneWeek = require("../utils/TimeManipulation").addOneWeek
const removeOneHour = require("../utils/TimeManipulation").removeOneHour

const handleUpcomingTourneys = async () => {
    const matchQueryResults = await LiquipediaClient.getUpcomingMatches()

    const upcomingTourneysMap = filterMatchQueryResults(matchQueryResults)

    const scheduler = new Scheduler()
    
    upcomingTourneysMap.forEach((key, value) => {
        console.log("key ", key)
        console.log("value ", value)
        //const hourBeforeTourneyStart = removeOneHour(upcomingTourneysMap(tourney))
        //scheduler.schedule(hourBeforeTourneyStart, () => handleTourneyDetails(tourney))
    })
    
    //scheduler.schedule(Date.now() + addOneWeek, handleUpcomingTourneys)
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
        //console.log("tourney name ", tourneyName)
    })

    console.log("tournaments ", tournaments)
    console.log("tournaments map length ", tournaments.size)
    return tournaments
}

const handleTourneyDetails = async (tourney) => {
    //const tourneyName = 

    //const tourneyQueryResult = await LiquipediaClient.getTournamentDetails(tourney)
}



module.exports = {
    handleUpcomingTourneys,
    handleTourneyDetails
}