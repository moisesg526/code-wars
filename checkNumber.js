function checkNumber(arr) {
  if (arr[0] > arr[arr.length - 1]) {
    alert("hi");
  } else if (arr[0] < arr[arr.length - 1]) {
    alert("bye");
  } else {
    alert("we close in an hour");
  }
}
checkNumber([2, 3, 4, 56, -2]);