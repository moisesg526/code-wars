// Your task is to write a function which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.

const sequenceSum = (begin, end, step) => {
  if (begin === end && end === step) {
    console.log(begin);
  }
  if (begin > end) {
    console.log(0);
  }
  let arr = [];
  arr.push(begin);
  let start = begin;
  let sum = begin;
  while (start + step <= end) {
    start += step;
    sum += start;
  }
  console.log(sum);
};

sequenceSum(2, 6, 2);

// const sequenceSum = (begin, end, step) => {
//   let sum = 0;
//   for (var i = begin; i <= end; i += step) {
//     sum += i;
//   }
//   return sum;
// };
