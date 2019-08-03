// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
// opening and closing brackets should always be the same
// try counting brackets ++ for open, -- for closed
// if below 0, return false
// if 0 at end, brakcets are balanced

function isBalanced(str) {
  let bracketCount = 0;

  for (let char of str) {
    if (char == "{") {
      bracketCount++;
    } else if (char == "}") {
      bracketCount--;
      if (bracketCount < 0) {
        return false;
      }
    }
  }
  return bracketCount == 0;
}

import test from "ava";

test("}{ is not balanced", t => t.is(isBalanced("}{"), false));
test("{{}} is not balanced", t => t.is(isBalanced("}{}"), false));
test("{}{} is balanced", t => t.is(isBalanced("{}{}"), true));
test("foo { bar { baz } boo } is balanced", t =>
  t.is(isBalanced("foo { bar { baz } boo }"), true));
test("foo { bar { baz } is not balanced", t =>
  t.is(isBalanced("foo { bar { baz }"), false));
test("foo { bar } } is not balanced", t =>
  t.is(isBalanced("foo { bar } }"), false));
