// reduce - Implement the reduce function.
// take in array and reduce it by applying a reducer function to each item in the array

function reduce(array, reducer, num) {
  if (typeof num != "number") {
    num = 0;
  }
  for (let i of array) {
    num = reducer(num, i);
  }
  return num;
}

import test from "ava";

test("Reduce array using function", t =>
  t.is(reduce([1, 2, 3, 4], (a, b) => a + b, 0), 10));
