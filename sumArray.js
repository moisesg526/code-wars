// Sum all the numbers of a given array ( cq. list )
// except the highest and the lowest element ( by value, not by index! ).
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  if (!array) return 0;
  if (array.length < 3) return 0;
  const sorted = array.sort((a, b) => a - b);
  return sorted.slice(1, -1).reduce((t, current) => t + current);
}

sumArray([1, 2, 3, 4, 5, 6, 7]);
