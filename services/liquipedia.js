const axios = require("axios")

const LIQUIPEDIA_API_URL = "https://liquipedia.net/apexlegends/api.php"

axios.interceptors.request.use(request => {
    //console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
  })

const upcomingTournamentRequestCfg = { 
    params: {
        action: "askargs",
        format: "json",
        conditions: "has exact time::True|has map date::>2022-12-18|has tournament name::+",
        printouts: "has tournament name|has map date",
        sort: "has map date",
        order: "asc",
        limit: "5"
    },
    headers: {
        "User-Agent": "ApexTourneyStreams, discord Tatu#0700",
        "Accept-Encoding": "gzip"
    }
}

const getUpcomingTournaments = async () => {
    const request = await axios.get(LIQUIPEDIA_API_URL, upcomingTournamentRequestCfg)

    const results = request.data.query.results

    Object.entries(results).forEach(
        ([key, value]) => {
            console.log(value["printouts"]["has tournament name"])
        }
    )

    //console.log(results)

    //return request.data
}

const getTournamentDetails = async () => {

}

module.exports = {
    getUpcomingTournaments
}



    /*
    const req = await axios({
        method: "get",
        url: LIQUIPEDIA_API_URL,
        params: {
            action: "askargs",
            format: "json",
            conditions: "has exact time::True|has map date::>2022-12-18|has tournament name::+",
            printouts: "has tournament name"
        },
        headers: {
            "User-Agent": "ApexTourneyStreams, discord Tatu#0700",
            "Accept-Encoding": "gzip"
        }
    })
    */