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
