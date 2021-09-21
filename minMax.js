// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

const minMax = (arr) => {
  let newMinMax = [];
  let min = Math.min(...arr);

  newMinMax.push(min);
  let max = Math.max(...arr);

  newMinMax.push(max);
  return newMinMax;
};

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));
