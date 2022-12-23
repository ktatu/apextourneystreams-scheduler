const LiquipediaService = require("../services/LiquipediaService")
const JobScheduler = require("./JobScheduler")

const DAILY_MATCH_SCAN_TIME = "0 23 * * *"

const handleUpcomingTournaments = async () => {
    const matchesQueryResults = await LiquipediaService.getUpcomingMatches()

    // tulokset pitää filtteröidä: jokaisesta turnauksesta tulee olio per peli, eli tuloksissa on useampi olio jokaista turnausta kohden
    // otetaan ensimmäisen pelin (ajankohdan mukaan: aikaisin) tiedot talteen toimintoja varten



    console.log("results")
    console.log(matchesQueryResults)
    // käsitellään kunkin query-olion timestamp -> muunnetaan cron-muotoon

    

    /*
    tourneyQueryResults.forEach((tourney) => {
        JobScheduler.schedule("tunti ennen turnauksen alkua, tee funktio paikkaan utils/cron_time", handleTournamentDetails, [tourney])
    })
    */
    //JobScheduler.schedule(DAILY_MATCH_SCAN_TIME, handleUpcomingTournaments)
}



const handleTournamentDetails = (tourney) => {

}



module.exports = {
    handleUpcomingTournaments
}