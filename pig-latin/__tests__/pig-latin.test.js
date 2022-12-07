const pigLatin = require("../pig-latin")

describe("pigLatin", () => {
    test("", () => {
        expect(typeof pigLatin("hello")).toBe("string")
    })
    test("Returns correct string when first letter vowel", () => {
        expect(pigLatin("algorithm")).toBe("algorithmway")
    })
    test("Returns correct value when first letter(s) consonant", () => {
        expect(pigLatin("northcoders")).toBe("orthcodersnay")
        expect(pigLatin("sheffield")).toBe("effieldshay")
    })
})