// Please do not change the name of this function
function changeCalculator (num) {
  // Your code here
  let remainingChange = num
  const output = {}
  if (remainingChange === 0) {
    return output
  }
  const coins = [200,100,50,20,10,5,2,1]
  for (coin of coins) {
    console.log(remainingChange)
    if (coin <= remainingChange) {

      const numCoins = Math.floor(remainingChange / coin)
      output[coin] = numCoins
      remainingChange -= numCoins * coin
    }
  }
  console.log(output)
  return output
};

module.exports = changeCalculator;
