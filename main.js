//         Use the PREP strategy to complete each problem
// P = Parameters
// R = Returns
// E = Example
// P = Pseudocode

// Write a function "greet" that returns "hello world!"

function greet() {
  return "hello world!";
}

////////////////////////////////////////////////////////////////////////////////////////////////
// Counting Sheep

let sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheep(sheep) {
  let count = 0;
  for (let i = 0; i <= sheep.length; i++) {
    if (sheep[i] === true) {
      count++;
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////////////////////
//Write a function to split a string and convert it into an array of words.

// "Robin Singh" ==> ["Robin", "Singh"]
//"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  return string.split(" ");
}

stringToArray("Robin Singh");

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let sum = 0;
  numbers.forEach(x, (i) => {
    sum += Math.pow(x, 2);
  });
  return sum;
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (bool == true) {
    return "Yes";
  } else if (bool == false) {
    return "No";
  }
}

//faster and easier from previous problem
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

//Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:
//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == "needle") {
      return `found the needle at position ${i}`;
    }
  }
}
findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

// easier and fater way for the top one
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let rentalCost = d * 40;
  if (d < 3) {
    return rentalCost;
  } else if (d >= 7) {
    rentalCost -= 50;
    return rentalCost;
  } else {
    rentalCost -= 20;
    return rentalCost;
  }
}

function checkNumber(arr) {
  if (arr[0] > arr[arr.length - 1]) {
    alert("hi");
  } else if (arr[0] < arr[arr.length - 1]) {
    alert("bye");
  } else {
    alert("we close in an hour");
  }
}
checkNumber([2, 3, 4, 56, -2]);

//You get an array of numbers, return the sum of all of the positives ones.
//Example [1, -4, 7, 12] => 1 + 7 + 12 = 20
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((num) => {
    if (num > 0) {
      sum += num;
    } else {
      return 0;
    }
  });
}

positiveSum([1, 2, -3, -4, 3, 5]);

// Sum all the numbers of a given array ( cq. list )
// except the highest and the lowest element ( by value, not by index! ).
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  if (!array) return 0;
  if (array.length < 3) return 0;
  const sorted = array.sort((a, b) => a - b);
  return sorted.slice(1, -1).reduce((t, current) => t + current);
}

sumArray([1, 2, 3, 4, 5, 6, 7]);

//Convert string to Number
// All inputs are string

function stringToNumber(str) {
  let number = Number(str);
  if (str) {
    return number;
  }
  return null;
}

stringToNumber("1233432");

// Count by X
// Create a function with two arguments that will return an array of the first n multiples og x
// Assume both the given number and the number of times to count will be positive numbers greater than 0
// x = 1, n = 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// x = 2, n = 5 --> [2, 4, 6, 8, 10]

function countBy(x, n) {
  let z = [];
  let multiplesOfX = 1;
  for (let i = 1; i <= n; i++) {
    multiplesOfX = x * i;
    z.push(multiplesOfX);
    multiplesOfX = 1;
  }
  console.log(z);
}

countBy(5, 5);
