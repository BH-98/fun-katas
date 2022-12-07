const sentenceToCamelCase = require("../sentence-to-camel-case")

describe("sentenceToCamelCase", () => {
    test("returns a string", () => {
        expect(typeof sentenceToCamelCase("hello")).toBe("string")
    })
    test("Returns correct string when no spaces", () => {
        expect(sentenceToCamelCase("hEllO")).toBe("Hello")
    })
    test("Returns correct string when spaces in sentence", () => {
        expect(sentenceToCamelCase("hello world")).toBe("HelloWorld")
    })
})