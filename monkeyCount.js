function monkeyCount(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  console.log(arr);
}

monkeyCount(9);

// P: n = int
// R: arr = 1 => n
// E: 5 => [1, 2, 3, 4, 5, 6, 7, 8, 9]   10 => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  4 => [1, 2, 3, 4]
// P: assign var for count to 1
//    loop upto n
//    add 1 to count everytime it loops
//    return count
