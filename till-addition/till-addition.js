// Please do not change the name of this function
function tillAddition (till) {
  // Your code here
  let cashTotal = 0;
  for (cash in till) {
    if (cash.charAt(0) === "£") {
      const cashValue = parseInt(cash.replace("£", ""))
      cashTotal += (cashValue * till[cash])
    } else {
      const cashValue = parseInt(cash.replace("p", ""))
      cashTotal += (cashValue * till[cash] * 0.01)
    }
  }
  if(cashTotal < 1) {
    return `${cashTotal*100}p`
  } else {
    return `£${cashTotal}`
  }

};

module.exports = tillAddition;
