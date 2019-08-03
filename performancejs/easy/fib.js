// fib - Returns the nth Fibonacci number.

function fib(num) {}

import test from "ava";

test("fibonacci of 0 is 0", t => t.is(fib(0), 0));
test("fibonacci of 0 is 1", t => t.is(fib(1), 1));
test("fibonacci of 10 is 55", t => t.is(fib(10), 55));
test("fibonacci of 20 is 675", t => t.is(fib(20), 6785));
