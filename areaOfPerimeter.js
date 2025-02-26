// Area of Perimeter
// You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example => 6, 10 --> 32 ,  3, 3 --> 9

function areaOrPerimeter(l, w) {
  let val;
  if (l !== w) {
    val = l + l + w + w;
  } else {
    val = l * w;
  }
  return val;
}

areaOrPerimeter(3, 8);
