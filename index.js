const Tournaments = require("./jobs/Tournaments")
const JobScheduler = require("./jobs/JobScheduler")
const LiquipediaService = require("./services/LiquipediaService")

const testFunc = (string) => {
    console.log(string)
}

LiquipediaService.getUpcomingTournaments()

//Tournaments.handleUpcomingTournaments()

//Tournaments.handleUpcomingTournaments()

const testDate = new Date(1675543500*1000)

console.log(testDate)

// https://liquipedia.net/apexlegends/index.php?title=Special:Ask&#search