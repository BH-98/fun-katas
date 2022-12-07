const calculateDivisors = require("../calculate-divisors")

describe("calculateDivisors", () => {
    test("Returns a number", () => {
        expect(typeof calculateDivisors(5)).toBe("number")
    })
    test("Returns the sum of all divisors", () => {
        expect(calculateDivisors(6)).toBe(8)
    })
})