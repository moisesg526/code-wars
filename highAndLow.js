function highAndLow(numbers) {
    let num = numbers.split(" ");
    let sorted = num.sort(function (a, b) {
      return Number(b) - Number(a);
    });
    return sorted[0] + " " + sorted[sorted.length - 1];
  }
  
  highAndLow("2");