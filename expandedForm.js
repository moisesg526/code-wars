// Write a function that returns the expanded form of a number

function expandedForm(num) {
    const strNum = num.toString(); // convert the number to a string
    const length = strNum.length;  // get how many digits it has
  
    const result = strNum
      .split('')                      // split into individual digits
      .map((digit, index) => {
        const zeroCount = length - index - 1;  // how many zeroes to add
        return digit !== '0' ? digit + '0'.repeat(zeroCount) : null; // skip 0s
      })
      .filter(Boolean)               // remove null values (i.e., skipped 0s)
      .join(' + ');                  // join parts with ' + '
  
    return result;
  }