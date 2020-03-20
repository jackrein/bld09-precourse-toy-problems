/*
    Write a function which when given the amount of steps in a staircase
    returns the number of distinct possible ways to climb the steps. 
    You can only climb 1 or 2 steps at a time. 

    ex: countSteps(3) => 3
        2 + 1
        1 + 2
        1 + 1 + 1

    ex: countSteps(4) => 5
        2 + 2
        2 + 1 + 1
        1 + 2 + 1
        1 + 1 + 2
        1 + 1 + 1 + 1
*/

const countSteps = (steps) => {
  if (steps === 1) {
    return 1;
  }
  if (steps === 2) {
    return 2;
  }
  return (countSteps(steps-1) + countSteps(steps-2));
};

//Do not change this line or the function name
module.exports = countSteps;

//Run this line to check your answer
//npm test ./count-steps/countSteps.test.js
