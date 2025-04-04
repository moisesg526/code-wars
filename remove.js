function remove(str, what) {
  let result = [];
  for (let char of str) {
    if (what[char]) --what[char];
    else result.push(char);
  }

  return result.join("");
}
remove("this is a string", { t: 1, i: 2 });
