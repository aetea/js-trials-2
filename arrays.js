"use strict";

// const items = ['apple', 'berry', 5 , 'cherry', 3, 'code', 10]
const items = [5,2,6,7,9,28,4]

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log(items[i], i);
  }
  return 'here is a return thing'
}


// 2. everyOtherItem

function everyOtherItem(items) {
  // Replace this with your code
  const result = []
  for(const i in items){
    if (i % 2 === 0){
      result.push(items[i])
    }
  }
  console.log(result)

}



// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const sortedItems = items.sort((a,b) => a - b);
  console.log(sortedItems);
  
  const sortedNItems = sortedItems.slice(0,n);
  sortedNItems.reverse();

  console.log(sortedNItems);
}
