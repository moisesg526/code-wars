function planeSeat(a) {
  const row = parseInt(a.slice(0, -1));
  const letter = a.slice(-1);

  if (row < 1 || row > 60 || !"ABCDEFGHK".includes(letter)) {
    return "No Seat!!";
  }

  let section, cluster;

  if (row <= 20) {
    section = "Front";
  } else if (row <= 40) {
    section = "Middle";
  } else {
    section = "Back";
  }

  if ("ABC".includes(letter)) {
    cluster = "Left";
  } else if ("DEF".includes(letter)) {
    cluster = "Middle";
  } else {
    cluster = "Right";
  }

  return `${section}-${cluster}`;
}

planeSeat("30B");

// 1-20 = Front
// 21-40 = Middle
// 41-60 = Back

// A, B, C = Left
// D, E, F = Middle
// G, H, K = Right
