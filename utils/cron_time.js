const addFiveMinutes = (cronTime) => {
    let cronTimeAsArray = cronTime.split(" ")

    const indexOfMinutes = 0
    const indexOfHours = 1

    const minutes = parseInt(cronTimeAsArray[indexOfMinutes])
    const hours = parseInt(cronTimeAsArray[indexOfHours])

    if (minutes + 5 >= 60) {
        cronTimeAsArray[indexOfMinutes] = (minutes + 5 - 60).toString()
        cronTimeAsArray[indexOfHours] = (hours + 1).toString()
    } else {
        cronTimeAsArray[indexOfMinutes] = (minutes + 5).toString()
    }

    return cronTimeStrFromArray(cronTimeAsArray)
}

const cronTimeStrFromArray = (array) => array.toString().replaceAll(",", " ")

module.exports = addFiveMinutes