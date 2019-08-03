// indexOf - Implement the indexOf function for arrays.

function indexOf(array) {}

import test from "ava";

test("Return index of item for numbers", t => t.is(indexOf([1, 2, 3], 1)), 0);
test("Return -1 for items not in array", t => t.is(indexOf([1, 2, 3], 4)), -1);
test(
  "Return index of item for strings",
  t => t.is(indexOf(["John", "Jane", "Joe", "Jill"], 4)),
  2
);
