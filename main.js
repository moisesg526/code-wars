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
