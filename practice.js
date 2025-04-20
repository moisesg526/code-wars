function hasDuplicate(nums) {
  let sortNums = nums.sort((a, b) => a - b);
  for (let i = 1; i < sortNums.length; i++) {
    if (sortNums[i] === sortNums[i - 1]) {
      return true;
    }
  }
  return false;
}

hasDuplicate([7, 1, 5, 3, 3, 4]);
