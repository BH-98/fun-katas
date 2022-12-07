// Please do not change the name of this function
function calculateDivisors(num) {
  // Your code here
  const divisors = []
  for (let i = 0 ; i < num ; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      divisors.push(i)
    }
  }
  const sum = divisors.reduce((a,b) => a + b, 0)
  return sum
}
module.exports = calculateDivisors
