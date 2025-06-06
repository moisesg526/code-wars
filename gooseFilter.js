// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let newArr = [];
  for (let i = 0; i < birds.length; i++) {
    if (!birds.include(geese)) {
      newArr.push(birds);
    }
  }
}
