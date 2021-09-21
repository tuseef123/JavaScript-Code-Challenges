// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

const countTrue = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      sum = sum + 1;
    }
  }
  return sum;
};

console.log(countTrue([true, false, false, true, false]));
