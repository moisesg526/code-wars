// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;
  let years = [];
  if (humanYears === 1) {
    catYears += 15;
    dogYears += 15;
  } else if (humanYears === 2) {
    catYears += 24;
    dogYears += 24;
  } else if (humanYears > 2) {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }
  years.push(humanYears, catYears, dogYears);
  return years;
};

humanYearsCatYearsDogYears(10);
