function accum(s) {
  // your code
  let plusOne = 1;
  let split = s.split("");
  let string = "";
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < plusOne; j++) {
      string += split[i];
    }
    arr.push(string);
    string = "";
    plusOne++;
  }
  console.log(arr);
}
accum("abcde");

// Correct answer
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }