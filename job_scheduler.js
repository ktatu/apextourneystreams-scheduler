const scheduler = require("node-schedule")

const scheduledTimeSlots = []
const timeslotIsBooked = (cronTime) => scheduledTimeSlots.includes(cronTime)

// https://en.wikipedia.org/wiki/Cron

const schedule = (suggestedTime, func) => {
    const availableTime = findAvailableTimeSlot(suggestedTime)

    scheduler.scheduleJob(availableTime, () => {
        func()
    })
}

const findAvailableTimeSlot = (cronTime) => {
    if (!timeslotIsBooked(cronTime)) {
        return cronTime
    }

    const nextTimeSlot = addFiveMinutes(cronTime)

    return findAvailableTimeSlot(nextTimeSlot)
}

// move cron time manipulation to utils/time_converter? probably cleaner

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

module.exports = schedule