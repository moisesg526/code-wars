// Beginner - Reduce but Grow
// Given a non-empty array of integers,
// return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let num = 1;
  x.forEach((val) => (num *= val));
  return num;
}

grow([2, 3, 4, 2]);
