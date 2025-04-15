// Given a string of digits, you should replace any digit below 5 with '0' and 
// any digit 5 and above with '1'. Return the resulting string.

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
  return newArr.join("");
}

fakeBin("45385593107843568");
