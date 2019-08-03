// reduce - Implement the reduce function.

function reduce(array) {}

import test from "ava";

test("Reduce array using function", t =>
  t.is(reduce([1, 2, 3, 4], (a, b) => a + b, 0), 10));
