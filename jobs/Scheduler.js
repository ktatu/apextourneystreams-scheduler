const nodeScheduler = require("node-schedule")
const addFiveMinutes = require("../utils/TimeManipulation").addFiveMinutes
const TestImpl = require("./TestImpl")

class Scheduler {
    
    #scheduledJobTimestamps

    constructor() {
        this.#scheduledJobTimestamps = new Set()
    }

    schedule(timestamp, func) {
        const availableTime = this.#findAvailableTimeSlot(timestamp)

        TestImpl.testFunc()

        nodeScheduler.scheduleJob(new Date(availableTime), () => {
            func()
        })
    }


    #findAvailableTimeSlot(timestamp) {
        if (!this.#timestampIsReserved(timestamp)) {
            return timestamp
        }
    
        const nextTimeSlot = addFiveMinutes(timestamp)
    
        return findAvailableTimeSlot(nextTimeSlot)
    }

    #timestampIsReserved(timestamp) {
        return this.#scheduledJobTimestamps.has(timestamp)
    }

}

module.exports = Scheduler