// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

const sevenBoom = (arr) => {
  let statement = "there is no 7 in the array";
  arr.forEach((element) => {
    element = element.toString();
    if (element.length === 1) {
      if (element == 7) {
        statement = "Boom!";
      }
    } else if (element.length > 1) {
      element = element.split("");
      // console.log(element);
      for (let i = 0; i < element.length; i++) {
        // console.log(typeof element[i]);
        if (element[i] == 7) {
          // console.log(typeof element[i]);
          statement = "Boom!";
        }
      }
    }
  });
  return statement;
};

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(sevenBoom([5, 25, 77]));
// console.log(sevenBoom([1, 2, 4]));
// console.log(sevenBoom([42, 76, 55, 44, 32]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));
