// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n,
// and returns the missing number in the sequence (there are either no missing numbers,
// or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.

function missing(array) {}

import test from "ava";

test("Empty array should return undefined", t => t.is(missing([])), undefined);
test("[1, 4, 3] should return 2", t => t.is(missing([1, 4, 3])), 2);
test("[2, 3, 4] should return 1", t => t.is(missing([2, 3, 4])), 1);
test("[5, 1, 4, 2] should return 3", t => t.is(missing([5, 1, 4, 2])), 3);
test(
  "No missing numbers should return undefined",
  t => t.is(missing([1, 2, 3, 4])),
  undefined
);
