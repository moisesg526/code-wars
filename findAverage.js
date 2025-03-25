// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let average = sum / array.length;
  return average;
}

findAverage([2, 3, 4, 5, 6, 8]);
