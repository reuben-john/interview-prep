// isPalindrome - Return true or false indicating whether the given string is a
// plaindrone (case and space insensitive).

function isPalindrome(array) {}

import test from "ava";

test("test", t => t.is(isPalindrome()), true);

isPalindrome(""); // true
isPalindrome("abcdcba"); // true
isPalindrome("abcd"); // false
isPalindrome("A man a plan a canal Panama"); // true
