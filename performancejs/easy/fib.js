// fib - Returns the nth Fibonacci number.
// Fibonacci numbers are found by adding the 2 preceding numbers
// starts 0 and 1
// 0 1 1 2 3 5 8 13 21
function fib(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  let sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence[sequence.length - 1];
}

import test from "ava";

test("fibonacci of 0 is 0", t => t.is(fib(0), 0));
test("fibonacci of 0 is 1", t => t.is(fib(1), 1));
test("fibonacci of 10 is 55", t => t.is(fib(10), 55));
test("fibonacci of 20 is 6765", t => t.is(fib(20), 6765));
test("fibonacci of 50 is 12586269025", t => t.is(fib(50), 12586269025));
