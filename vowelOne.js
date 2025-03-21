// Write a function that takes a string and outputs a strings of 1's and 0's 
// where vowels become 1's and non-vowels become 0's.
// All non-vowels including non alpha characters (spaces,commas etc.) should be included.
// Examples:
// vowelOne( "abceios" ) // "1001110"
// vowelOne( "aeiou, abc" ) // "1111100100"


function vowelOne(s) {
    let lowerCase = s.toLowerCase();
  let arr = [];
  for (let i = 0; i < lowerCase.length; i++) {
    if (
      lowerCase[i] === "a" ||
      lowerCase[i] === "i" ||
      lowerCase[i] === "e" ||
      lowerCase[i] === "o" ||
      lowerCase[i] === "u"
    ) {
      arr.push(1);
    } else {
      arr.push(0);
    }
  }
  console.log(arr.join(""));
}

vowelOne("vowelOne");
