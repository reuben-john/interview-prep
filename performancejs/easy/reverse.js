// reverse - Reverses the given string (yes, using the built in reverse function is cheating).

function reverse(string) {}

import test from "ava";

test("Empty string returns empty string", t => t.is(reverse("")), "");
test(
  "Text string returns reveresed string",
  t => t.is(reverse("abcdef")),
  "fedcba"
);
