// Given two positive integers n and p, we want to find a positive integer k, 
// if it exists, such that the sum of the digits of n raised to consecutive powers 
// starting from p is equal to k * n
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
  let digitSum = 0;
  let strNum = String(n);
  for (let i in strNum) {
    digitSum += strNum[i] ** p;
    p++;
  }
  return Number.isInteger(digitSum / n) ? digitSum / n : -1;
}

digPow(46288, 3);
