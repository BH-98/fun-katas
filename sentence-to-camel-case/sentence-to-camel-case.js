// Please do not change the name of this function
function sentenceToCamelCase (sentence) {
  // Your code here
  const words = sentence.split(" ")
  const wordsCapitalised = words.map(word =>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  return wordsCapitalised.join("")
};

module.exports = sentenceToCamelCase;
