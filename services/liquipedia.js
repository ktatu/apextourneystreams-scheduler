const axios = require("axios")

const LIQUIPEDIA_API_BASEURL = "https://liquipedia.net/apexlegends/api.php"

/*
axios.interceptors.response.use(response => {
    const requestUrl = response.config.url

    //console.log(response.data)
    if (requestUrl.includes("liquipedia")) {
        response.data = response.data.query.results
    }

    return response
})
*/
// TODO: paramsSerializer if spare time
const upcomingTournamentRequestCfg = { 
    params: {
        action: "askargs",
        format: "json",
        conditions: "has exact time::True|has map date::>2022-12-19|has tournament name::+",
        printouts: "has tournament name|has map date",
        parameters: "limit=500|sort=has tournament name|order=asc"
    },
    headers: {
        "User-Agent": "ApexTourneyStreams, discord Tatu#0700",
        "Accept-Encoding": "gzip"
    }
}

// const response = await axios.get(LIQUIPEDIA_API_BASEURL, upcomingTournamentRequestCfg, { paramsSerializer: (params) => serializer.stringify(params) })

const getUpcomingTournaments = async () => {
    const response = await axios.get(LIQUIPEDIA_API_BASEURL, upcomingTournamentRequestCfg)

    const results = response.data

    //console.log(results)

    /*
    Object.entries(results).forEach(
        ([key, value]) => {
        }
    )
    */

    console.log(results)

    //return request.data
}

const getTournamentDetails = async () => {

}

module.exports = {
    getUpcomingTournaments
}

/*

    params: {
        action: "askargs",
        format: "json",
        conditions: "has exact time::True|has map date::>2022-12-19|has tournament name::+",
        printouts: "has tournament name|has map date",
        parameters: "limit=5|sort=has tournament name|order=asc"
    },
*/

/*
    params: {
        action: "askargs",
        format: "json",
        conditions: {
            "has exact time": "True",
            "has map date": ">2022-12-19",
            "has tournament name": "+"
        },
        printouts: [
            "has tournament name",
            "has map date"
        ],
        parameters: {
            "limit": 5,
            "sort": "has tournament name",
            "order": "asc"
        }
    },

    ,
    paramsSerializer: params => {
        serializer.stringify(params)
    }
*/