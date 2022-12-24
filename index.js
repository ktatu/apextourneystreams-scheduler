const Tournaments = require("./jobs/Tournaments")
const JobScheduler = require("./jobs/JobScheduler")
const LiquipediaService = require("./services/LiquipediaService")

//LiquipediaService.getUpcomingTournaments()

Tournaments.handleUpcomingTournaments()


const testDate = new Date(1675543500*1000)

const testDate2 = new Date(1675543900*1000)

//console.log(testDate < testDate2)

const testMap = new Map()

const savedDate = new Date(1675543900*1000)

const newDate = new Date(1675543500*1000)

testMap.set("key", savedDate)

if (testMap.get("key") > newDate) {
    testMap.set("key", newDate)
}
/*
console.log("saved date ", savedDate)
console.log("new date ", newDate)
console.log("currently in map: ", testMap.get("key"))
*/
// https://liquipedia.net/apexlegends/index.php?title=Special:Ask&#search