// Please do not change the name of this function
function pigLatin(str) {
  // Your code here
  const vowels = ["a","e","i","o","u"]
  const startCon = []
  const wordEnd = vowels.includes(str[0]) ? "way" : "ay"
  let wordMid = ""
  for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
      wordMid = str.slice(i)
      break
    } else {
      startCon.push(str[i])
    }
  }
  return `${wordMid}${startCon.join("")}${wordEnd}`
};

module.exports = pigLatin
