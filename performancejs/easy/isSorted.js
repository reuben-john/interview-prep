// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// take array and make sorted copy of it, then compare each item

function isSorted(arr) {
  if (arr.length == 0) {
    return true;
  }

  let sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let s = sortedArr[i];
    if (a != s) {
      return false;
    }
  }
  return true;
}

import test from "ava";

test("Empty array is sorted", t => t.is(isSorted([]), true));
test("Negative to positive array is sorted", t =>
  t.is(isSorted([-Infinity, -5, 0, 3, 9]), true));
test("Random array is not sorted", t => t.is(isSorted([3, 9, -3, 10]), false));
