// Given a string, you have to return a string in which each character
// (case-sensitive) is repeated once.

function doubleChar(str) {
  // Your code here
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  console.log(newStr);
}

doubleChar("abcd");
