// Please do not change the name of this function
function dnaPairs(dna) {
  // Write your code here
  pairs = {G: "C", C: "G", A: "T", T: "A"}
  const output = dna.map(base => [base, pairs[base]])
  return output
}

module.exports = dnaPairs;
