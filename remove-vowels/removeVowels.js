/*
  Write a function that removes the vowels from a string

  ex: removeVowels('hello') => 'hll';
  ex: removeVowels('aeiouy') => '';
  ex: removeVowels('HELLo') => 'HLL';
*/

const removeVowels = (string) => {
  let consonants = '';
  let vowels = 'aeiouyAEIOUY';
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      continue;
    }
    consonants += string[i];
  }
  return consonants;
};

//Do not change this line or the function name
module.exports = removeVowels;

//Run this line to check your answer
//npm test ./remove-vowels/removeVowels.test.js