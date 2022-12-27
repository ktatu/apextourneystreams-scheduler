const nodeScheduler = require("node-schedule")
const addFiveMinutes = require("../utils/TimeManipulation").addFiveMinutes

class Scheduler {
    
    #scheduledJobTimestamps

    constructor() {
        this.#scheduledJobTimestamps = new Set()
    }

    schedule(timestamp, func) {
        const availableTime = this.#findAvailableTimeSlot(timestamp)

        this.#scheduledJobTimestamps.add(availableTime)

        nodeScheduler.scheduleJob(new Date(availableTime), () => {
            func()
        })
        
    }

    #findAvailableTimeSlot(timestamp) {
        if (!this.#timestampIsReserved(timestamp)) {
            return timestamp
        }
    
        const nextTimeSlot = addFiveMinutes(timestamp)
    
        return this.#findAvailableTimeSlot(nextTimeSlot)
    }

    #timestampIsReserved(timestamp) {
        return this.#scheduledJobTimestamps.has(timestamp)
    }

}

module.exports = Scheduler