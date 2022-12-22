const axios = require("axios")
const get = require("lodash.get")

const LIQUIPEDIA_API_URL = "https://liquipedia.net/apexlegends/api.php"

const LiquipediaService = axios.create({
    headers: {
        "User-Agent": "ApexTourneyStreams, discord Tatu#0700",
        "Accept-Encoding": "gzip"
    }
})


LiquipediaService.interceptors.response.use(response => {
    const queryResults = response.data.query.results
    const keys = Object.keys(queryResults)

    const printoutArray = keys.reduce((array, key) => {
        const printout = get(queryResults, `${key}.printouts`)

        return array.concat(printout)
    }, [])

    response.data = printoutArray

    return response
})


const getUpcomingTournaments = async () => {
    const upcomingTournamentRequestCfg = { 
        params: {
            action: "askargs",
            format: "json",
            conditions: `has exact time::True|has map date::>${getCurrentDate()}|has tournament name::+`,
            printouts: "has tournament name|has map date",
            parameters: "limit=5|sort=has tournament name|order=asc"
        }
    }

    const response = await LiquipediaService.get(LIQUIPEDIA_API_URL, upcomingTournamentRequestCfg)

    return response.data
}

// year-month-dayOfMonth
const getCurrentDate = () => {
    const currentDate = new Date()

    return currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate()
}

module.exports = {
    getUpcomingTournaments
}