// Given 2 arrays, create a function that let's a user know (true/false) wether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return false.
// -----------
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// should return true

// 2 parameters - arrays - no size limit
// return true or false

// O(n^2)

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties ==== items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[array[i]]) {
      const item = array[i];
      map[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
