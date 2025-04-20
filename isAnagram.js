function isAnagram(s, t) {
  let sortS = s.split();
  let sortT = t.split();
  if (sortS === sortT) {
    console.log(true);
  } else {
    console.log(false)
  }
}

isAnagram("racecar", "carrace");
