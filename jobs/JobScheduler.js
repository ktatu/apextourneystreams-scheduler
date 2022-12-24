const scheduler = require("node-schedule")
const addFiveMinutes = require("../utils/TimeManipulation")

const UPCOMING_TOURNAMENTS_JOB_TIME = "0 23 * * 0"

const scheduledTimeSlots = []

const timeslotIsBooked = (cronTime) => scheduledTimeSlots.includes(cronTime)

// https://en.wikipedia.org/wiki/Cron

const scheduleUpcomingTournamentsJob = (func) => {
    const availableTime = findAvailableTimeSlot(UPCOMING_TOURNAMENTS_JOB_TIME)

    scheduledTimeSlots.push(availableTime)

    scheduler.scheduleJob(availableTime, () => {
        func()
    })
}

const scheduleTournamentDetailsJob = (startTime, func, tourney) => {
    const time = "cron"

    scheduler.scheduleJob(time, () => {
        func(tourney)
    })
}

const findAvailableTimeSlot = (time) => {
    if (!timeslotIsBooked(time)) {
        return time
    }

    const nextTimeSlot = addFiveMinutes(time)

    return findAvailableTimeSlot(nextTimeSlot)
}

module.exports = { schedule: scheduleUpcomingTournamentsJob }