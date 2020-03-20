/*
    Write a function that takes in an array
    and flattens it. You cannot use .flat()

    ex: flattenArray([1, 2, [3, 4]]) => [1, 2, 3, 4];
    ex: flattenArray([[1, 2, [3, 4]]]) => [1, 2, 3, 4];
*/

const flattenArray = (array) => {
  let flat = [];
  array.forEach(elem => {
    if (Array.isArray(elem)) {
      flat.push(...flattenArray(elem));
    }
    else {
      flat.push(elem);
    }
  })
  return flat;
};

//Do not change this line or the function name
module.exports = flattenArray;

//Run this line to check your answer
//npm test ./flatten-array/flattenArray.test.js
