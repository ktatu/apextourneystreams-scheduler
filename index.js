//import { scheduleJob } from "node-schedule"
//const liquipediaService = require("./services/liquipedia")
const Tournaments = require("./jobs/Tournaments")

//Tournaments.handleUpcomingTournaments()

const a = () => {

    b(c, ["log this"])
}

const b = (func, funcArguments) => {

    func(...funcArguments)
}

const c = (string) => {

    console.log(string)
}

a()

// https://liquipedia.net/apexlegends/index.php?title=Special:Ask&#search