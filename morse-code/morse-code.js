// Please do not change the name of this function
const morseTranslation = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.":"F",
  "--.": "G",
  "....":"H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--":"M",
  "-.":"N",
  "---":"O",
  ".--.":"P",
  "--.-":"Q",
  ".-.":"R",
  "...":"S",
  "-":"T",
  "..-": "U",
  "...-":"V",
  ".--":"W",
  "-..-":"X",
  "-.--":"Y",
  "--..":"Z",
  "-----":"0",
  ".----":"1",
  "..---":"2",
  "...--":"3",
  "....-":"4",
  ".....":"5",
  "-....":"6",
  "--...":"7",
  "---..":"8",
  "----.":"9"

}

function morseCode (str) {
  // Your code here
  const words = str.split("  ")
  const splitWords = words.map(word => word.split(" "))
  const wordsTranslated = splitWords.map(word => {
    const lettersTranslated = word.map(letter => morseTranslation[letter] )
    return lettersTranslated.join("")
  })



  return wordsTranslated.join(" ")
};

module.exports = morseCode;
