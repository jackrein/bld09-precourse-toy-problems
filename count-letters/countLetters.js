/*
  Write a function that given a strings returns the count
  of each letter in the string as a string.

  ex: countLetters('Hello') => 'h:1 e:1 l:2 o:1'
  ex: countLetters('hello') => 'h:1 e:1 l:2 o:1'
  ex: countLetters('Hello world') => 'h:1 e:1 l:3 o:2 w:1 r:1 d:1'
  ex: countLetters('Hello 123') => 'h:1 e:1 l:2 o:1'
*/


const countLetters = (string) => {
  let letter = /[^0-\9 | S]/g;
  let letters = string.toLowerCase().match(letter);
  if (letters === null) {
  	return '';
  }
  let obj = {};
  let counts = '';
  for (let i = 0; i < letters.length; i++) {
    if (obj[letters[i]] === undefined) {
      obj[letters[i]] = 1;
    }
    else {
      obj[letters[i]] += 1;
    } 
  }  
  for (let items in obj) {
    counts += (items + ':' + obj[items] + ' ');
  }
  return counts.slice(0, counts.length -1);
};

//Do not change this line or the function name
module.exports = countLetters;

// Run this line in the terminal to check your answer
// npm test ./count-letters/countLetters.test.js