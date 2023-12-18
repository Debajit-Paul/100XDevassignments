/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = str
    .toLowerCase()
    .replace(" ", "")
    .split("")
    .filter((element) => {
      return element >= "a" && element <= "z";
    });

  return newStr.join("") == newStr.reverse().join("") ? true : false;
}

module.exports = isPalindrome;
