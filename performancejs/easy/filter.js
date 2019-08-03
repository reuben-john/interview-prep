// filter - Implement the filter function.

function filter(array, call) {}

import test from "ava";

test("Should filter array", t =>
  t.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1, 2]));
