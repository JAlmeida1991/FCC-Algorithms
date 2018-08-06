// 1. Loop through the array for forEach and invoke the callback for each iteration
// 2. If number satisfies callback, push to myArr
// 3. Return 0th index of array. If nothing is pushed, will return undefined

function findElement(arr, func) {
  let myArr = [];
  arr.forEach(function(num, index){
    if(func(num)) myArr.push(num);  
  });
  return myArr[0]

findElement([1, 2, 3, 4], num => num % 2 === 0);
