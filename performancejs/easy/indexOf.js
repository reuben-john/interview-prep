// indexOf - Implement the indexOf function for arrays.
// loop over iterable and check for match

function indexOf(arr, match) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == match) {
      return i;
    }
  }
  return -1;
}

import test from "ava";

test("Return index of item for numbers", t => t.is(indexOf([1, 2, 3], 1), 0));
test("Return -1 for items not in array", t => t.is(indexOf([1, 2, 3], 4), -1));
test("Return index of item for strings", t =>
  t.is(indexOf(["John", "Jane", "Joe", "Jill"], "Jane"), 1));
