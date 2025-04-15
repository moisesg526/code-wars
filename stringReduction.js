function solve(a, b) {
  let counter = 0;
  let aArray = a.split("");
  let bArray = b.split("");
  if (b.length > a.length) {
    console.log(0);
  }
  let newArr = aArray.filter(num => num !== bArray[num])
  console.log(newArr);
}
solve("abcxxyzab", "abc");
