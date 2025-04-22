// Return the two numbers from the nums array that add up to target

function twoSum(nums, target) {
  let newArr = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + nums[i - 1] === target) {
      newArr.push(nums[i - 1]);
      newArr.push(nums[i]);
    }
  }
  console.log(newArr);
}

twoSum([3, 4, 5, 6], 7);

// P: nums => array of int, target => int
// R: arr => 2 int from nums array that add up to target
// E: nums = [1, 2, 3, 4, 5], target = 9  =>  [4, 5],   nums = [ 10, 30, 40, 60, 100] target = 130  => [30, 100]    nums = [2, 4, 6, 7, 9], target = 10  => [4, 6]
// P: assign a new var = newArr
//    have a  loopthrough nums
//    starts at nums[1]
//    conditional statement to check if both nums[i -1] and nums[i] add to target
//    if they add up to target push to newArr
//    return newArr
