let nodeSchedule = require("node-schedule")

nodeSchedule.scheduleJob = jest.fn((timestamp, func) => {
    setTimeout(() => {
        func()
    }, 5000)
})

module.exports = nodeSchedule