// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with the lowest index.
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  const copy = numbers.slice(0);
  let smallestValue = numbers.indexOf(Math.min(...numbers));
  copy.splice(smallestValue, 1);
  return copy;
}

removeSmallest([3, 4, 5, 6, 12, 2, 1, 9]);
