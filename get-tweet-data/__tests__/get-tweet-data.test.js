const getTweetData = require("../get-tweet-data")

describe("getTweetData", () => {
    test("Returns an object", () => {
        const input = "Hello World"
        expect(typeof getTweetData(input)).toBe("object")
    })
    test("returns an object with the correct keys and values when tags and mentions", () => {
        const input = "#Hello @World"
        const expectedOutput = { tags: ["#Hello"], mentions: ["@World"], tagCount: 1, mentionCount: 1, length: 13 }
        expect(getTweetData(input)).toEqual(expectedOutput)
    })
    test("returns an object with the correct keys and values when no tags and mentions", () => {
        const input = "Hello World"
        const expectedOutput = { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 11 }
        expect(getTweetData(input)).toEqual(expectedOutput)
    })
})