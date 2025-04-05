// 1. Reverse Number

// let x = 32243;
// let string = x.toString();
// let reverse = string.split("").reverse().join("");
// console.log(Number(reverse));

// 2. Check Palindrome
function palindrome(str) {
  let reverse = str.split("").reverse().join("");
  if (str === reverse) {
    console.log("palindrome!!");
  }
}
palindrome("madam");
