/*
  Write a function that breaks up camel casing 
  using a space between capital letters
  
  camelCase('testFunction') => 'test Function'
  camelCase('asyncLectureOnTheFourth') => 'async Lecture On The Fourth'
  camelCase('testTHREE') => 'test T H R E E'
*/

const camelCase = (string) => {
  let spaced = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      spaced += string[i];
    }
    else {
      spaced += (' ' + string[i]);
    }
  }
  if (spaced[0] === ' ') {
    return spaced.slice(1);
  }
  return spaced;
};

//Do not change this line or the function name
module.exports = camelCase;

//Run this line to check your answer
//npm test ./camel-case/camelCase.test.js
