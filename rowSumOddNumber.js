// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumber(n) {
  return Math.pow(n, 3);
}
rowSumOddNumber(4);
