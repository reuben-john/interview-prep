// reduce - Implement the reduce function.

function reduce(array) {}

import test from "ava";

test("test", t => t.is(reduce()), true);

reduce([1, 2, 3, 4], (a, b) => a + b, 0); // 10
