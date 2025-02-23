// //         Use the PREP strategy to complete each problem
// // P = Parameters
// // R = Returns
// // E = Example
// // P = Pseudocode

// // Write a function "greet" that returns "hello world!"

// function greet() {
//   return "hello world!";
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////
// // Counting Sheep

// let sheep = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// function countSheep(sheep) {
//   let count = 0;
//   for (let i = 0; i <= sheep.length; i++) {
//     if (sheep[i] === true) {
//       count++;
//     }
//   }
//   return count;
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////
// //Write a function to split a string and convert it into an array of words.

// // "Robin Singh" ==> ["Robin", "Singh"]
// //"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// function stringToArray(string) {
//   return string.split(" ");
// }

// stringToArray("Robin Singh");

// //Complete the square sum function so that it squares each number passed into it and then sums the results together.
// //For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers) {
//   let sum = 0;
//   numbers.forEach(x, (i) => {
//     sum += Math.pow(x, 2);
//   });
//   return sum;
// }

// // Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord(bool) {
//   if (bool == true) {
//     return "Yes";
//   } else if (bool == false) {
//     return "No";
//   }
// }

// //faster and easier from previous problem
// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }

// //Can you find the needle in the haystack?
// //Write a function findNeedle() that takes an array full of junk but containing one "needle"
// //After your function finds the needle it should return a message (as a string) that says:
// //"found the needle at position " plus the index it found the needle, so:
// //["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// function findNeedle(haystack) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] == "needle") {
//       return `found the needle at position ${i}`;
//     }
//   }
// }
// findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

// // easier and fater way for the top one
// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.indexOf("needle")}`;
// }

// // After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// // You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// // Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// // Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//   let rentalCost = d * 40;
//   if (d < 3) {
//     return rentalCost;
//   } else if (d >= 7) {
//     rentalCost -= 50;
//     return rentalCost;
//   } else {
//     rentalCost -= 20;
//     return rentalCost;
//   }
// }

// function checkNumber(arr) {
//   if (arr[0] > arr[arr.length - 1]) {
//     alert("hi");
//   } else if (arr[0] < arr[arr.length - 1]) {
//     alert("bye");
//   } else {
//     alert("we close in an hour");
//   }
// }
// checkNumber([2, 3, 4, 56, -2]);

// //You get an array of numbers, return the sum of all of the positives ones.
// //Example [1, -4, 7, 12] => 1 + 7 + 12 = 20
// // If there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let sum = 0;
//   arr.forEach((num) => {
//     if (num > 0) {
//       sum += num;
//     } else {
//       return 0;
//     }
//   });
// }

// positiveSum([1, 2, -3, -4, 3, 5]);

// // Sum all the numbers of a given array ( cq. list )
// // except the highest and the lowest element ( by value, not by index! ).
// // { 6, 2, 1, 8, 10 } => 16
// // { 1, 1, 11, 2, 3 } => 6

// function sumArray(array) {
//   if (!array) return 0;
//   if (array.length < 3) return 0;
//   const sorted = array.sort((a, b) => a - b);
//   return sorted.slice(1, -1).reduce((t, current) => t + current);
// }

// sumArray([1, 2, 3, 4, 5, 6, 7]);

// //Convert string to Number
// // All inputs are string

// function stringToNumber(str) {
//   let number = Number(str);
//   if (str) {
//     return number;
//   }
//   return null;
// }

// stringToNumber("1233432");

// // Count by X
// // Create a function with two arguments that will return an array of the first n multiples og x
// // Assume both the given number and the number of times to count will be positive numbers greater than 0
// // x = 1, n = 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // x = 2, n = 5 --> [2, 4, 6, 8, 10]

// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i < n.length; i++) {
//     z.push(x * i);
//   }
//   return z;
// }

// countBy(5, 5);

// // Given the triangle of consecutive odd numbers:

// //              1
// //           3     5
// //        7     9    11
// //    13    15    17    19
// // 21    23    25    27    29
// // ...
// // Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
// // 1 -->  1
// // 2 --> 3 + 5 = 8

// function rowSumOddNumber(n) {
//   return Math.pow(n, 3);
// }
// rowSumOddNumber(4);

// //In this kata you will create a function that takes a list of non-negative integers
// //and strings and returns a new list with the strings filtered out.
// //Example
// //filter_list([1,2,'a','b']) == [1,2]
// //filter_list([1,'a','b',0,15]) == [1,0,15]
// //filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l) {
//   // Return a new array with the strings filtered out
//   return l.filter((num) => typeof num === "number");
// }
// console.log(filter_list([1, 2, "a", "b", 4, 6, 7, "r"]));

// // In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// // Your function receives one side of the DNA (string, except for Haskell); you need to return the
// // other complementary side. DNA strand is never empty or there is no DNA at all (again, except for
// // Haskell).
// // "ATTGC" --> "TAACG"
// // "GTAT" --> "CATA"

// function dnaStrand(dna) {
//   const DNAComplement = {
//     G: "C",
//     C: "G",
//     T: "A",
//     A: "T",
//   };

//   return dna
//     .split("")
//     .map((elem) => DNAComplement[elem])
//     .join("");
// }
// dnaStrand("GGCTTGAA");

// // Sum of two lowest positive integers
// // Create a function that returns the sum of the two lowest positive numbers given an
// // array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// // For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// function sumTwoSmallestNumbers(numbers) {
//   let sum;
//   let newArr = numbers.sort((a, b) => a - b);
//   sum = newArr[0] + newArr[1];
//   return sum;
// }

// sumTwoSmallestNumbers([2, 3, 4, 9, 5, 1]);

// // We need a function that can transform a number (integer) into a string.
// // 123  --> "123"
// // 999  --> "999"
// // -100 --> "-100

// function numberToString(num) {
//   // Return a string of the number here!
//   return num.toString();
// }

// numberToString(123);

// // You can't code under preassure #1
// // Code as fast as you can! You need to double the integer and return it

// function doubleInteger(i) {
//   // i will be an integer. Double it and return it.
//   return i * 2;
// }

// doubleInteger(2);

// // Friend or Foe?
// // Make a program that filters a list of strings and returns a list with only your friends name in it.
// // If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
// // Otherwise, you can be sure he's not...
// // Example :
// // Input = ["Ryan", "Kieran", "Jason", "Yous"]
// // Output = ["Ryan", "Yous"]

// function friend(friends) {
//   let names = friends.filter((friendName) => friendName.length === 4);
//   return names;
// }

// friend(["Michael", "Scot", "Jim", "John", "Pete", "Ryan"]);

// // Reverse Word
// // Complete the function that accepts a string parameter, and reverses each word in the string.
// // All spaces in the string should be retained.
// // "This is an example!" ==> "sihT si na !elpmaxe"
// // "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   // Go for it
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// reverseWords("Hello everyone lets code!");

// // Grasshopper Summation
// // Write a program that finds the summation of every number from 1 to num.
// // The number will always be a positive integer greater than 0.
// // Your function only needs to return the result, what is shown between parentheses in the example
// // below is how you reach that result and it's not part of it, see the sample tests.
// // 2 -> 3 (1 + 2)
// // 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// var summation = function (num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }

//   return sum;
// };

// summation(6);

// // Remove exclamation marks
// // Write function that removes all exclamation marks from a given string

// function removeExclamationMarks(s) {
//   return s.replaceAll("!", "");
// }

// removeExclamationMarks("Hello World!");

// // Beginner - Reduce but Grow
// // Given a non-empty array of integers,
// // return the result of multiplying the values together in order. Example:
// // [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x) {
//   let num = 1;
//   x.forEach((val) => (num *= val));
//   return num;
// }

// grow([2, 3, 4, 2]);

// // Area of Perimeter
// // You are given the length and width of a 4-sided polygon.
// // The polygon can either be a rectangle or a square.
// // If it is a square, return its area. If it is a rectangle, return its perimeter.
// // Example => 6, 10 --> 32 ,  3, 3 --> 9

// function areaOrPerimeter(l, w) {
//   let val;
//   if (l !== w) {
//     val = l + l + w + w;
//   } else {
//     val = l * w;
//   }
//   return val;
// }

// areaOrPerimeter(3, 8);

//Descending Order
//Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order. Essentially, rearrange the digits to
// create the highest possible number.
//Ex. Input: 42145 Output: 54421

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

descendingOrder(247693);

// Keep up the hoop
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.
// Write a program where Alex can input (n) how many times the hoop goes round and it will
// return him an encouraging message:
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
  //your code goes here
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

hoopCount(2);
