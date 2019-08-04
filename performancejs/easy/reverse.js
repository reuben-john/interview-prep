// reverse - Reverses the given string (yes, using the built in reverse function is cheating).

function reverse(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

import test from "ava";

test("Empty string returns empty string", t => t.is(reverse(""), ""));
test("Text string returns reveresed string", t =>
  t.is(reverse("abcdef"), "fedcba"));
