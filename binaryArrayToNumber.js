const binaryArrayToNumber = (arr) => {
  const binaryString = arr.join("");
  return parseInt(binaryString, 2);
};

binaryArrayToNumber([1, 1, 1, 1]);
