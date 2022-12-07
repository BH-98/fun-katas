const foldString = require("../fold-string")

describe("foldString", () => {
    test("returns a string", () => {
        expect(typeof foldString("hello world")).toBe("string")
    })
    test("returns correct string when even length", () => {
        expect(foldString("abcdef")).toBe("cbafed")
    })
    test("returns corect string when odd length", () => {
        expect(foldString("abcde")).toBe("baced")
    })
})