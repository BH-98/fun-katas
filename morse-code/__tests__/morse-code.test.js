const morseCode = require("../morse-code")

describe("morseCode", () => {
    test("returns a string", () => {
        expect(typeof morseCode("")).toBe("string")
    })
    test("Returns the correct string with one word", () => {
        expect(morseCode(".... ..")).toBe("HI")
    })
    test("Returns the correct string with multiple words", () => {
        expect(morseCode("--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...")).toBe("GOOD MORNING NORTHCODERS")
    })
})