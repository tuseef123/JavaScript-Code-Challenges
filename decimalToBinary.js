const binary = (decimal) => {
  debugger;
  let newArr = [];
  if (decimal === 1 || decimal === 0) {
    return decimal;
  } else {
    while (decimal <= 1 || decimal >= 0) {
      let remaining = decimal % 2;
      newArr.unshift(remaining);
      decimal = Math.floor(decimal / 2);
    }
  }
  return newArr;
};

console.log(binary(24));
