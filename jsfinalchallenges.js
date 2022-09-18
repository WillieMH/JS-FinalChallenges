// Challenge 1 - Write a function that rtns true for positive number and false if negative
function isNumberPositive(inputNumber) {
  answer = Boolean(inputNumber > 0);
  return(answer);
}

console.log(`Challenge One: ${isNumberPositive(27)}`);
console.log(`Challenge One: ${isNumberPositive(-5)}`);

// Challenge 2 - Write a function that takes a number of days and converts into an age
function daysToYears(days) {
  let years = Math.floor(days/365);
  return(years)
}

console.log(`Challenge Two: ${daysToYears(17500)}`);

// Challenge 3 - Write func that takes three number and rtns largest of the 3 (Use sort)
// getLargestNumber(2, 1, 4) Rtns 4
// getLargestNumber(6, 2, 3) Rtns 6

function getLargestNumber(...numbers) {
  const numbersArray = [...numbers];
  return (Math.max(...numbersArray));
}

console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));

// Challenge 4 - Write a function that takes an array of names and returns the last name from the array of names.
// getLastName([”Charlie”, “Rob”, “Andy”]); // returns “Andy”
// getLastName(["Ash","Stu"]); // returns "Stu"
function getLastName(...names) {
  const namesArray = [...names];
  return(namesArray[namesArray.length-1]);
}

console.log(getLastName("Charlie", "Rob", "Andy"));
console.log(getLastName("Ash", "Stu"));

// Challenge 5 - Write a function that takes an array of numbers and returns true if all of the numbers are positive.
// It should return false if there are one or more negative numbers in the array.
    /*  Notes:
        Get numbers in array from function, get lowest number (Math.min), use Boolean comparator on lowest number >= 0, returns true
    */
// allNumbersPositive([2,4,5]); // returns true
// allNumbersPositive([-5,4,6]); // returns false
function allNumbersPositive(inputNumber) {
  const numberArray = [inputNumber];
  lowestNumber = (Math.min(...numberArray));
  answer = Boolean(lowestNumber > 0);
  return(answer);
}

console.log(allNumbersPositive(2,4,5));
console.log(allNumbersPositive(-5,4,6));