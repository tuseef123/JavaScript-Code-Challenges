// Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23
// Examples
// arraySum([1, 3, 3, 1, 10]) ➞ 105.46

// arraySum([2, 3, 4, 5]) ➞ 23.97

// arraySum([1, 31, 3, 11, 0]) ➞ 11.62

function arraySum(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(Math.pow(nums[i], 2));
    } else {
      newArr.push(Math.sqrt(nums[i]));
    }
  }
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum = newArr[i] + sum;
  }
  return sum;
}

console.log(arraySum([1, 3, 3, 1, 10]));
