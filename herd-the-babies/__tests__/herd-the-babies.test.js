const herdTheBabies = require("../herd-the-babies")

describe("herdTheBabies", () => {
    test("Returns a string", () => {
        expect(typeof herdTheBabies("aaBSAJb")).toBe("string")
    })
    test("returns in order when all characters are the same case", () => {
        expect( herdTheBabies("bbaajddh")).toBe("aabbddhj")
        expect( herdTheBabies("BBAAD")).toBe("AABBD")
    })
    test("returns in order when characters of both cases", () => {
        expect( herdTheBabies("bbAaajdDh")).toBe("AaabbDdhj")
    })
})