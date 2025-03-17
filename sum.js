function sum(numbers) {
  let sum = 0;
  if (numbers.length === 0) {
    console.log(0);
  }
  numbers.forEach((num) => (sum += num));
  console.log(sum);
}

sum([1, 2, 3, 4, 5]);
