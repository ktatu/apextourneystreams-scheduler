const scheduler = require("node-schedule")
const addFiveMinutes = require("./utils/cron_time")

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

module.exports = { schedule }