// reverse - Reverses the given string (yes, using the built in reverse function is cheating).

function reverse(string) {}

import test from "ava";

test("test", t => t.is(reverse()), true);

reverse(""); // ''
reverse("abcdef"); // 'fedcba'
