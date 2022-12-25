const scheduler = require("node-schedule")
const TimeManipulation = require("../utils/TimeManipulation")

const UPCOMING_TOURNAMENTS_JOB_TIME = "0 23 * * 0"

const scheduledTimeslots = []

const timeslotIsBooked = (timestamp) => scheduledTimeslots.includes(timestamp)

// https://en.wikipedia.org/wiki/Cron

const scheduleUpcomingTournamentsJob = (func) => {
    const availableTime = findAvailableTimeSlot(UPCOMING_TOURNAMENTS_JOB_TIME)

    scheduledTimeslots.push(availableTime)

    scheduler.scheduleJob(new Date(availableTime), () => {
        func()
    })
}

const scheduleTournamentDetailsJob = (timestamp, func, tourney) => {
    const hourBeforeTournament = TimeManipulation.removeOneHour(timestamp)

    const availableTime = findAvailableTimeSlot(hourBeforeTournament)

    scheduledTimeslots.push(availableTime)

    scheduler.scheduleJob(new Date(availableTime), () => {
        func(tourney)
    })
}

const findAvailableTimeSlot = (timestamp) => {
    if (!timeslotIsBooked(timestamp)) {
        return timestamp
    }

    const nextTimeSlot = TimeManipulation.addFiveMinutes(timestamp)

    return findAvailableTimeSlot(nextTimeSlot)
}

module.exports = { 
    scheduleUpcomingTournamentsJob,
    scheduleTournamentDetailsJob,
    findAvailableTimeSlot
}