function openOrSenior(data) {
  let arr = [];
  data.forEach((num) => {
    if (num[0] >= 55 && num[1] > 7) {
      arr.push("Senior");
    } else {
      arr.push("Open");
    }
  });
  console.log(arr);
}

openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);
