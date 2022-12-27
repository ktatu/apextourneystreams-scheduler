const Scheduler = require("../jobs/Scheduler")
const addFiveMinutes = require("../utils/TimeManipulation").addFiveMinutes

let testScheduler = new Scheduler()
const nodeSchedule = require("node-schedule")

jest.useFakeTimers()

describe("Scheduler", () => {
    const inTenSecondsFromNow = new Date().getTime() + 10000

    afterEach(() => {
        testScheduler = new Scheduler()
    })

    test("executes a function given to it as parameter", () => {
        const testJestFunc = jest.fn()

        testScheduler.schedule(inTenSecondsFromNow, testJestFunc)
        jest.runAllTimers()

        expect(testJestFunc).toHaveBeenCalled()
    })
    
    test("increases job's execution time and date if timeslot is reserved", () => {
        const testDate = new Date(inTenSecondsFromNow)

        testScheduler.schedule(inTenSecondsFromNow, () => {})
        expect(nodeSchedule.scheduleJob).toHaveBeenLastCalledWith(testDate, expect.anything())

        const expectedSecondCallDate = new Date(addFiveMinutes(inTenSecondsFromNow))

        testScheduler.schedule(inTenSecondsFromNow, () => {})
        expect(nodeSchedule.scheduleJob).toHaveBeenLastCalledWith(expectedSecondCallDate, expect.anything())
    })

})
