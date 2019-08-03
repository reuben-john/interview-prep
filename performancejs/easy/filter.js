// filter - Implement the filter function.
// filter takes in an array of elements and a query function
// it runs the query function on each item and returns an array of items that match

function filter(arr, query) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (query(num)) {
      filteredArr.push(num);
    }
  }

  return filteredArr;
}

import test from "ava";

test("Should filter array", t =>
  t.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1, 2]));
