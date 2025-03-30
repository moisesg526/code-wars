function addLength(str) {
  //start-here
  let arr = [];
  let split = str.split(" ");
  let wordLength = split.map((word) => `${word} ${word.length}`);

  console.log(wordLength);
}

addLength("Hello how are you");
