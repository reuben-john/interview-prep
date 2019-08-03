// isPalindrome - Return true or false indicating whether the given string is a
// plaindrone (case and space insensitive).

function isPalindrome(array) {}

import test from "ava";

test("Empty string is a palindrome", t => t.is(isPalindrome(""), true));
test("Odd length palindrome returns true", t =>
  t.is(isPalindrome("abcdcba"), true));
test("Return false if not palindrome", t => t.is(isPalindrome("abcd"), false));
test("Long sentence that is palindrome should be true", t =>
  t.is(isPalindrome("A man a plan and a canal Panama"), true));
