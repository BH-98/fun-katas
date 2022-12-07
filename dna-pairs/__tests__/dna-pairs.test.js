const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('Returns an array ', () => {
    // add your test assertion(s) here
    const input = ["G", "C"]
    expect(Array.isArray(dnaPairs(input))).toBe(true)
  });
  test('Returns an array containing all pairs', () => {
    // add your test assertion(s) here
    const input = ["G", "C"]
    const expectedOutput = [["G", "C"], ["C", "G"]]
    expect(dnaPairs(input)).toEqual(expectedOutput)
  });
  
});
