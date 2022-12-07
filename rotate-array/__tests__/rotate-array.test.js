const rotateArray = require("../rotate-array")

describe("rotateArray", () => {
    test("returns an array", () => {
        const input = [1, 2, 3]
        expect(Array.isArray(rotateArray(input, 0))).toBe(true)
    })
    test("Returns a matching array if number is 0", () => {
        const input = [1, 2, 3]
        const inputClone = [...input]
        expect(rotateArray(input, 0)).toEqual(inputClone)
    })
    test("Returns a new array", () => {
        const input = [1, 2, 3]
        expect(rotateArray(input, 0)).not.toBe(input)
    })
    test("Does not mutate the original array", () => {
        const input = [1, 2, 3]
        const inputClone = [...input]
        rotateArray(input, 1)
        expect(input).toEqual(inputClone)
    })
    test("Returns a rotated array if number > 0", () => {
        const input = [1, 2, 3]
        const inputClone = [...input]
        expect(rotateArray(input, 1)).toEqual([3, 1, 2])
    })
})