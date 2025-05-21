// Sort an array of numbers

function solution(nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  console.log(sortedNums);
}

solution([1, 2, 10, 50, 3, 5]);
