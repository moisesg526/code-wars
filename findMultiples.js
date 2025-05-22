function findMultiples(integer, limit) {
  let arr = [];
  let div = limit / integer;
  let num;
  console.log(div);
  for (let i = 1; i <= div; i++) {
    num = integer * i;
    arr.push(num);
  }
  console.log(arr);
}
findMultiples(5, 25);
