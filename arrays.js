'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  
for (const i in items) {
  console.log(`${items[i]}. ${i}`)
}
}

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = [];

  for (let i in items){
    if (i % 2 == 0){
      result.push(items[i]);
    }
  }
  return result;
}

function compare(a, b) {
  return a - b;
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  result = []

  let sorted = items.sort(compare)
  // 1,2,4,8,9
  
  // 0, 1, 2 (if we pass in 3)

  // sorted at i = 0 = 1, i = 1 = 2, i = 2 = 4
  for(let i = 0; i < n; i++){
    result.push(sorted[i]);
  }
return result;
  
}
