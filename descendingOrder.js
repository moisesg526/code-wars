//Descending Order
//Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order. Essentially, rearrange the digits to
// create the highest possible number.
//Ex. Input: 42145 Output: 54421

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

descendingOrder(247693);
