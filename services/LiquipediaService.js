const axios = require("axios")

const LiquipediaService = axios.create({
    baseUrl: "https://liquipedia.net/apexlegends/api.php",
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
            parameters: "limit=500|sort=has tournament name|order=asc"
        }
    }

    const response = await LiquipediaService.get("", upcomingTournamentRequestCfg)

    console.log(response.data)
}

module.exports = {
    getUpcomingTournaments
}