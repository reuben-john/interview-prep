// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

function isBalanced(array) {}

import test from "ava";

test("test", t => t.is(isBalanced()), true);

isBalanced("}{"); // false
isBalanced("{{}"); // false
isBalanced("{}{}"); // true
isBalanced("foo { bar { baz } boo }"); // true
isBalanced("foo { bar { baz }"); // false
isBalanced("foo { bar } }"); // false
