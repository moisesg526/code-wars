// Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
// Otherwise, you can be sure he's not...
// Example :
// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

function friend(friends) {
  let names = friends.filter((friendName) => friendName.length === 4);
  return names;
}

friend(["Michael", "Scot", "Jim", "John", "Pete", "Ryan"]);
