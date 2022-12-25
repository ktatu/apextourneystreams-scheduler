/*
const addFiveMinutes = (cron) => {
    let cronAsArray = cron.split(" ")

    const indexOfMinutes = 0
    const indexOfHours = 1

    const minutes = parseInt(cronAsArray[indexOfMinutes])
    const hours = parseInt(cronAsArray[indexOfHours])

    if (minutes + 5 >= 60) {
        cronAsArray[indexOfMinutes] = (minutes + 5 - 60).toString()
        cronAsArray[indexOfHours] = (hours + 1).toString()
    } else {
        cronAsArray[indexOfMinutes] = (minutes + 5).toString()
    }

    return cronStringFromArray(cronAsArray)
}
*/

const addFiveMinutes = timestamp => timestamp + 300000

const removeOneHour = timestamp => timestamp - 3600000

const cronStringFromArray = (array) => array.toString().replaceAll(",", " ")

// timestamp format: YYYY-MM-DDTHH:mm:ss.sssZ (ISO 8601)
const timestampToCron = (timestamp) => {
    
}

const timestampToUTC = (timestamp) => new Date(timestamp * 1000)

const UTCFormatToCron = (time) => {

}

module.exports = {
    addFiveMinutes,
    removeOneHour,
    timestampToUTC,
    UTCFormatToCron
}