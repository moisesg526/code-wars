function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let total = 0;
  for (let i = 0; i < classPoints.length; i++) {
    total += classPoints[i];
  }
  total += yourPoints;
  let average = total / (classPoints.length + 1);
  if (average < yourPoints) {
    console.log(true);
  } else {
    console.log(false);
  }
}

betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
