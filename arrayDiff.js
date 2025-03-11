function arrayDiff(a, b) {
  let c = a.filter((e) => !b.includes(e));
  console.log(c);
}

arrayDiff([1, 2, 3, 4], [1, 2, 4]);
