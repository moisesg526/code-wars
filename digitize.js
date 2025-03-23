// Given a random non-negative number, you have to return the digits of this
// number within an array in reverse order.
// Example (Input => Output)
// 35231 => [1,3,2,5,3]

function digitize(n) {
  let arr = String(n).split("").reverse().map(Number);
  console.log(arr);
}

digitize(123456789);
