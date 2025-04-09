function fakeBin(x) {
  let nums = x.split("");
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 5) {
      newArr.push(0);
    } else {
      newArr.push(1);
    }
  }
  return newArr;
}

fakeBin("45385593107843568");
