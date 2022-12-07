const tillAddition = require("../till-addition")

describe("tillAddition", () => {
    test("Returns a string", () => {
        const till = {
            "1p": 1,
            "2p": 1,
            "5p": 1,
            "10p": 1,
            "20p": 1,
            "50p": 1,
            "£1": 1,
            "£2": 1,
            "£5": 1,
            "£10": 1,
            "£20": 1,
            "£50": 1
          };
        expect(typeof tillAddition(till)).toBe("string")
    })
    test("Returns the correct amount for pence", () => {
        const till = {
            "1p": 1,
            "2p": 1,
            "5p": 1,
            "10p": 1,
            "20p": 1,
            "50p": 1
          };
        expect(tillAddition(till)).toBe("88p")
    })
    test("Returns the correct amount for pounds", () => {
        const till = {
            "£1": 1,
            "£2": 1,
            "£5": 1,
            "£10": 1,
            "£20": 1,
            "£50": 1
          };
        expect(tillAddition(till)).toBe("£88")
    })
    test("Returns the correct amount for pence and pounds", () => {
        const till = {
            "1p": 1,
            "2p": 1,
            "5p": 1,
            "10p": 1,
            "20p": 1,
            "50p": 1,
            "£1": 1,
            "£2": 1,
            "£5": 1,
            "£10": 1,
            "£20": 1,
            "£50": 1
          };
        expect(tillAddition(till)).toBe("£88.88")
    })
})