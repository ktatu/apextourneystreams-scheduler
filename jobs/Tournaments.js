const LiquipediaService = require("../services/LiquipediaService")
const JobScheduler = require("../JobScheduler")

const DAILY_TOURNAMENT_SCAN_TIME = "* 23 * * *"

const handleUpcomingTournaments = () => {
    const tourneyQueryResults = LiquipediaService.getUpcomingTournaments()

    // tulokset pitää filtteröidä: jokaisesta turnauksesta tulee olio per peli, eli tuloksissa on useampi olio jokaista turnausta kohden
    // otetaan ensimmäisen pelin (ajankohdan mukaan: aikaisin) tiedot talteen toimintoja varten

    // käsitellään kunkin query-olion timestamp -> muunnetaan cron-muotoon
    console.log("Upcoming tournaments")

    tourneyQueryResults.forEach((tourney) => {
        JobScheduler.schedule("tunti ennen turnauksen alkua, tee funktio paikkaan utils/cron_time", handleTournamentDetails, tourney)
    })

    JobScheduler.schedule(DAILY_TOURNAMENT_SCAN_TIME, handleUpcomingTournaments)
}

const handleTournamentDetails = (tourney) => {

}

module.exports = {
    handleUpcomingTournaments
}