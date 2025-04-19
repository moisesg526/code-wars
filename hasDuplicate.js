function hasDuplicate(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
}

hasDuplicate([1, 2, 3, 4, 5, 5, 6]);
