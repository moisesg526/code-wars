function noOdds(values) {
  let nums = values.filter((num) => num % 2 === 0);
  return nums;
}

noOdds([0, 1, 2, 3, 4, 5]);
