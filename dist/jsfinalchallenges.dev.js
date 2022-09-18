"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Challenge 1 - Write a function that rtns true for positive number and false if negative
function isNumberPositive(inputNumber) {
  answer = Boolean(inputNumber > 0);
  return answer;
}

console.log("Challenge One: ".concat(isNumberPositive(27)));
console.log("Challenge One: ".concat(isNumberPositive(-5))); // Challenge 2 - Write a function that takes a number of days and converts into an age

function daysToYears(days) {
  var years = Math.floor(days / 365);
  return years;
}

console.log("Challenge Two: ".concat(daysToYears(17500))); // Challenge 3 - Write func that takes three number and rtns largest of the 3 (Use sort)
// getLargestNumber(2, 1, 4) Rtns 4
// getLargestNumber(6, 2, 3) Rtns 6

function getLargestNumber() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  var numbersArray = [].concat(numbers);
  return Math.max.apply(Math, _toConsumableArray(numbersArray));
}

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3)); // Challenge 4 - Write a function that takes an array of names and returns the last name from the array of names.
// getLastName([”Charlie”, “Rob”, “Andy”]); // returns “Andy”
// getLastName(["Ash","Stu"]); // returns "Stu"

function getLastName() {
  for (var _len2 = arguments.length, names = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    names[_key2] = arguments[_key2];
  }

  var namesArray = [].concat(names);
  return namesArray[namesArray.length - 1];
}

console.log(getLastName("Charlie", "Rob", "Andy"));
console.log(getLastName("Ash", "Stu")); // Challenge 5 - Write a function that takes an array of numbers and returns true if all of the numbers are positive.
// It should return false if there are one or more negative numbers in the array.

/*  Notes:
    Get numbers in array from function, get lowest number (Math.min), use Boolean comparator on lowest number >= 0, returns true
*/
// allNumbersPositive([2,4,5]); // returns true
// allNumbersPositive([-5,4,6]); // returns false

function allNumbersPositive() {
  for (var _len3 = arguments.length, inputNumber = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    inputNumber[_key3] = arguments[_key3];
  }

  var numberArray = [].concat(inputNumber);
  lowestNumber = Math.min.apply(Math, _toConsumableArray(numberArray));
  answer = Boolean(lowestNumber > 0);
  return answer;
}

console.log(allNumbersPositive(2, 4, 5));
console.log(allNumbersPositive(-5, 4, 6));