// Please do not change the name of this function
function herdTheBabies (str) {
  // Your code here
  const chars = str.split("").sort((a,b) => {
   return a.toLowerCase().charCodeAt(0)-b.toLowerCase().charCodeAt(0) || a.charCodeAt(0) - b.charCodeAt(0)
  })
  return chars.join("")
};

module.exports = herdTheBabies;
