function enough(cap, on, wait) {
  // your code here
  let people;
  if (on + wait < cap) {
    return 0;
  } else {
    people = cap - on;
    return wait - people;
  }
}

enough(10, 3, 12);
