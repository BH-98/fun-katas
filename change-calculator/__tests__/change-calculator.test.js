const changeCalculator = require("../change-calculator")

describe("changeCalculator", () => {
    test("returns an object", () => {
        expect(typeof changeCalculator(14)).toBe("object")
    })
    test("returns empty object when no change required", () => {
        expect(changeCalculator(0)).toEqual({})
    })
    test("returns correct change when change equal to single coin", () => {
        expect(changeCalculator(5)).toEqual({5: 1})
    })
    test("returns correct change when change equal to a multiple of single coin", () => {
        expect(changeCalculator(4)).toEqual({2: 2})
    })
    test("returns correct change when multiple different coins needed", () => {
        expect(changeCalculator(8)).toEqual({5: 1, 2:1, 1:1})
    })
})