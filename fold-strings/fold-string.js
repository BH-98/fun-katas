// Please do not change the name of this function
function foldString (str) {
  // Your code here
  const firstHalf = str.slice(0,str.length/2)
  const middleChar = str.length % 2 !== 0 ? str.charAt(str.length/2) : ""
  const secondHalf = str.length % 2 === 0 ? str.slice(str.length/2) : str.slice(str.length/2 + 1)
  const firstHalfReversed = firstHalf.split("").reverse().join("")
  const secondHalfReversed = secondHalf.split("").reverse().join("")
  return `${firstHalfReversed}${middleChar}${secondHalfReversed}`
};

module.exports = foldString
