const axios = require("axios")

const LIQUIPEDIA_API_URL = "https://liquipedia.net/apexlegends/api.php"

const upcomingTournamentRequestCfg = { 
    params: {
        "action": "askargs",
        "format": "json",
        "conditions": {
            "has exact time": "True",
            "has map date": ">2022-12-18"
        },
        "printouts": [
            "has tournament name"
        ]
    },
    headers: {
        "User-Agent": "ApexTourneyStreams, discord Tatu#0700",
        "Accept-Encoding": "gzip"
    }
}

const getUpcomingTournaments = async () => {
    const request = await axios.get(LIQUIPEDIA_API_URL, upcomingTournamentRequestCfg)
    
    console.log("------------------------------------")
    console.log(request.data)


    return request.data
}

const getTournamentDetails = async () => {

}

module.exports = {
    getUpcomingTournaments
}