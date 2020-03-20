/*
  Write a function that given an array checks if there are any duplicates values
  Return false if there are no duplicates, true if there are.

  checkForDuplicates([1, 2, 3, 4]) => returns false
  checkForDuplicates([1, 3, 4, 1]) => returns true
  checkForDuplicates(['yes', 'no']) => returns false
  checkForDuplicates(['yes', 'yes']) => returns true
*/

const checkForDuplicates = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.includes(array[i])) {
      continue;
    }
    else {
      result.push(array[i]);
    }
  }
  return result.length !== array.length;
};

// Do not change this line or the function name
module.exports = checkForDuplicates;

// run this line in the terminal to check your answer
// npm test ./check-for-duplicates/checkForDuplicates.test.js
