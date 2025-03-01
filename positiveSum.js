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