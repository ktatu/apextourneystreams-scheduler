const axios = require("axios")
const get = require("lodash.get")

const LIQUIPEDIA_API_URL = "https://liquipedia.net/apexlegends/api.php"

const LiquipediaClient = axios.create({
    headers: {
        "User-Agent": "ApexTourneyStreams, discord Tatu#0700",
        "Accept-Encoding": "gzip"
    }
})


LiquipediaClient.interceptors.response.use(response => {
    const queryResults = response.data.query.results
    const keys = Object.keys(queryResults)

    const printoutArray = keys.reduce((array, key) => {
        const printout = get(queryResults, `${key}.printouts`)

        return array.concat(printout)
    }, [])

    response.data = printoutArray

    return response
})

const getUpcomingMatches = async () => {
    const upcomingTournamentRequestCfg = { 
        params: {
            action: "askargs",
            format: "json",
            conditions: `has exact time::True|has map date::>${getCurrentDate()}|has tournament name::+`,
            printouts: "has tournament name|has map date",
            parameters: "limit=1|sort=has map date|order=asc"
        }
    }

    const response = await LiquipediaClient.get(LIQUIPEDIA_API_URL, upcomingTournamentRequestCfg)
    
    response.data.forEach((result) => {
        result["has tournament name"] = result["has tournament name"][0]
        result["has map date"] = result["has map date"][0]
    })

    return response.data
}

// year-month-dayOfMonth
const getCurrentDate = () => {
    const currentDate = new Date()

    return currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate()
}

const getTournamentDetails = async (tourney) => {
    const tourneyName = tourney["has tournament name"][0]
    const tourneyFirstMatchDate = tourney["has map date"][0]

    const tournamentDetailsRequestCfg = {
        params: {
            action: "askargs",
            format: "json",
            conditions: ""
        }
    }

    const response = await LiquipediaClient.get(LIQUIPEDIA_API_URL, tournamentDetailsRequestCfg)

    return response.data
}

module.exports = {
    getUpcomingMatches,
    getTournamentDetails
}