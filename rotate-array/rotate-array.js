// Please do not change the name of this function
function rotateArray (arr, num) {
  // Your code here
  const firstHalf = arr.slice(0,-num)
  const secondHalf = arr.slice(-num)
  return [...secondHalf, ...firstHalf]
};

module.exports =  rotateArray;
