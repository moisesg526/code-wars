function getCount(str) {
  let count = 0;
  let split = str.split("");
  for (let i = 0; i < split.length; i++) {
    if (
      split[i] === "a" ||
      split[i] === "e" ||
      split[i] === "i" ||
      split[i] === "o" ||
      split[i] === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

getCount("abracadabra");
