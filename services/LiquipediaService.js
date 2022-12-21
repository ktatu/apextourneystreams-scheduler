const axios = require("axios")

const LIQUIPEDIA_API_URL = "https://liquipedia.net/apexlegends/api.php"

const LiquipediaService = axios.create({
    headers: {
        "User-Agent": "ApexTourneyStreams, discord Tatu#0700",
        "Accept-Encoding": "gzip"
    }
})


LiquipediaService.interceptors.response.use(response => {
    response.data = response.data.query.results

    return response
})


const getUpcomingTournaments = async () => {
    const upcomingTournamentRequestCfg = { 
        params: {
            action: "askargs",
            format: "json",
            conditions: "has exact time::True|has map date::>2022-12-19|has tournament name::+",
            printouts: "has tournament name|has map date",
            parameters: "limit=5|sort=has tournament name|order=asc"
        }
    }

    const response = await LiquipediaService.get(LIQUIPEDIA_API_URL, upcomingTournamentRequestCfg)

    return response.data
}

module.exports = {
    getUpcomingTournaments
}