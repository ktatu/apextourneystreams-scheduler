const Scheduler = require("../jobs/Scheduler")
const nodeSchedule = require("node-schedule")

jest.mock("node-schedule")
nodeSchedule = {
    scheduleJob: jest.fn(() => {
        
    })
}


const testScheduler = new Scheduler()

jest.useFakeTimers()


describe("Scheduler", () => {

    const testFunc = () => {
        console.log("test func")
    }

    test("mocking works", () => {
        testScheduler.schedule(1000, testFunc)
    })
})
