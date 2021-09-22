// A Redundant Function
// Write a function redundant that takes in a string str and returns a function that returns str.

// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""
const redundant = (str) => {
  const f = () => {
    return str;
  };
  return f;
};

const f1 = redundant("pear");
console.log(f1());
