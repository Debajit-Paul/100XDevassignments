/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let numOfVowel = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        numOfVowel += 1;
      }
    });
  return numOfVowel;
}

module.exports = countVowels;
