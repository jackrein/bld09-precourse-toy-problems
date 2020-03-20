/*
  Given an array of integers, find the maximum triplet sum in the array without duplications.

  ex: tripletSum([2,1,8,0,6,4,8,6,2,4]) => 18 (8, 6, 4)
  ex: tripletSum([-3,-27,-4,-2,-27,-2]) => -9 (-4, -3, -2)
  ex: tripletSum([4, 4, 4, 4, 3, 2]) => 9 (4, 3, 2)
*/

const tripletSum = (array) => {
  let integers = [];
  for (let i = 0; i < array.length; i++) {
    if (integers.includes(array[i])) {
      continue;
    }
    else {
      integers.push(array[i]);
    }
  }
  integers.sort(function(a, b){return a-b});
  return (integers[integers.length-1] + integers[integers.length-2] + integers[integers.length-3]);
};

//Do not change this line or the function name
module.exports = tripletSum;

// Run this line in the terminal to check your answer
// npm test ./triplet-sum/tripletSum.test.js