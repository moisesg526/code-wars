function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  console.log(sortedS === sortedT);
  return sortedS === sortedT;
}

isAnagram("racecar", "carrace");
