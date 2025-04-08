// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values
// so that the first max value is followed by the first minimum, followed by second max value
// then second min value, etc.
// For example:
// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

function solve(arr) {
  let newArr = [];
  let order = arr.sort((a, b) => a - b);
  let counter = 0;
  while (counter < arr.length) {
    newArr.push(order.pop());
    newArr.push(order.shift());
    if (newArr[newArr.length - 1] == undefined) {
      newArr.pop();
    }
  }
  return newArr;
}

solve([2, 4, 5, 1, 75, 21, 34, 44]);
