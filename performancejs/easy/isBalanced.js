// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

function isBalanced(array) {}

import test from "ava";

test("}{ is not balanced", t => t.is(isBalanced("}{")), false);
test("{{}} is not balanced", t => t.is(isBalanced("}{}")), false);
test("{}{} is balanced", t => t.is(isBalanced("{}{}}")), true);
test(
  "foo { bar { baz } boo } is balanced",
  t => t.is(isBalanced("foo { bar { baz } boo }")),
  true
);
test(
  "foo { bar { baz } is not balanced",
  t => t.is(isBalanced("foo { bar { baz }")),
  false
);
test(
  "foo { bar } }is not balanced",
  t => t.is(isBalanced("foo { bar } }")),
  false
);
