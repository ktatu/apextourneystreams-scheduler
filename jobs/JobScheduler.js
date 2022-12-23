const scheduler = require("node-schedule")
const addFiveMinutes = require("../utils/TimeManipulation")

const scheduledTimeSlots = []

const timeslotIsBooked = (cronTime) => scheduledTimeSlots.includes(cronTime)

// https://en.wikipedia.org/wiki/Cron

const schedule = (suggestedTime, func, funcArgsArray) => {
    const availableTime = findAvailableTimeSlot(suggestedTime)

    scheduledTimeSlots.push(availableTime)

    if (funcArgsArray) {
        scheduler.scheduleJob(availableTime, () => {
            func(...funcArgsArray)
        })
    } else {
        scheduler.scheduleJob(availableTime, () => {
            func()
        })
    }
}

const findAvailableTimeSlot = (time) => {
    if (!timeslotIsBooked(time)) {
        return time
    }

    const nextTimeSlot = addFiveMinutes(time)

    return findAvailableTimeSlot(nextTimeSlot)
}

module.exports = { schedule }