// factorial - Returns a number that is the factorial of the given number.
// factorial(6) returns 6*5*4*3*2*1 = 720

function factorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
import test from "ava";

test("factorial of 0 is 1", t => t.is(factorial(0), 1));
test("factorial of 1 is 1", t => t.is(factorial(1), 1));
test("factorial of 6 is 720", t => t.is(factorial(6), 720));
