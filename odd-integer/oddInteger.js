/*
    Write a function which when given an array
    finds the integer that appears an odd number of times

    If there are multiple integers return an array of them
    sorted by ascending integers otherwise return the one integer.

    ex: oddInteger([1, 1, 1, 2]) => [1, 2]
    ex: oddInteger([1, 1, 2, 2, 3]) => 3
    ex: oddInteger([5, 7, 5, 7, 3, 2, 3, 3]) => [2, 3]
    ex: oddInteger([5, 4, 3, 2, 1]) => [1, 2, 3, 4, 5]
*/

const oddInteger = (array) => {
  let counts = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (counts[num] === undefined) {
      counts[num] = 1;
    }
    else {
      counts[num]++;
    }
  }
  let odds = [];
  for (let int in counts) {
    if (counts[int] % 2 === 1) {
      odds.push(Number(int));
    }
  }
  if (odds.length === 1) {
    return Number(odds);
  }
  return odds.sort((a,b) => a-b);
};

//Do not change this line or the function name
module.exports = oddInteger;

//Run this line to check your answer
//npm test ./odd-integer/oddInteger.test.js