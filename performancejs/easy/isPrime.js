// isPrime - Returns true or false, indicating whether the given number is prime.
// To check for prime, number must be only divisible by 1 and itself
// This does not include 1

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  // test against even numbers
  if (num % 2 == 0) {
    return false;
  }

  // check odd numbers
  for (let factor = 2; factor < num; factor++) {
    if (num % factor == 0) {
      return false;
    }
  }
  return true;
}

import test from "ava";

test("0 is not prime", t => t.is(isPrime(0), false));
test("1 is not prime", t => t.is(isPrime(1), false));
test("15 is not prime", t => t.is(isPrime(15), false));
test("17 is prime", t => t.is(isPrime(17), true));
test("10000 is not prime", t => t.is(isPrime(10000), false));
test("Negative numbers are not prime", t => t.is(isPrime(-1), false));
test("10000000000 not prime", t => t.is(isPrime(10000000000), false));
