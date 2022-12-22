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

const cronStringFromArray = (array) => array.toString().replaceAll(",", " ")

const rawTimestampToCron = (timestamp) => {
    
}

module.exports = addFiveMinutes