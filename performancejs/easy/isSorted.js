// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

function isSorted(arr) {}

import test from "ava";

test("Empty array is sorted", t => t.is(isSorted([]), true));
test("Negative to positive array is sorted", t =>
  t.is(isSorted([-Infinity, -5, 0, 3, 9]), true));
test("Random array is not sorted", t => t.is(isSorted([3, 9, -3, 10]), false));
