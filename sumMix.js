// Given an array of integers as strings and numbers, return the sum of the array values
// as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
  let sum = 0;
  x.forEach((num) => {
    sum += Number(num);
  });
  console.log(sum);
}
sumMix([9, 3, "7", "3"]);
