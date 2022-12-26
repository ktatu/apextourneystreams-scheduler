const nodeScheduler = jest.createMockFromModule("node-schedule")

function schedule() {
    console.log("mocked")
    console.log("mocked")
    console.log("mocked")
    console.log("mocked")
}

nodeScheduler.schedule = schedule

module.exports = nodeScheduler