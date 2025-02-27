function highAndLow(numbers) {
  let splitNums = numbers.split(" ");
  let sorted = splitNums.sort(function (a, b) {
    return Number(b) - Number(a);
  });
  return sorted[0] + " " + sorted[sorted.length - 1];
}

highAndLow("2 3 4 5 6 7");
