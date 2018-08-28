// 1. Declare final return value, sub array, and count
// 2. Iterate through array argument and push value in sub array... Increase value for each iteration.
// 3. Once count is equal to size argument, push sub array into final array and init count and sub array to inital values

function chunkArrayInGroups(arr, size) {
  const myArr = [];
  const subArr = [];
  let count = null;
  arr.forEach(function(num, index, array){
    subArr.push(num);
    console.log(subArr)
    count++;
    if(count === size) {
    // Without concat, splice will return empty arrays for final return value because of mutation
      myArr.push([].concat(subArr));
      subArr.splice(0);
      count = null;
    }
  });
  // Edge case for when subArr length is less than size after forEach iteration
  if(subArr.length > 0) {
    myArr.push(subArr)
  }

  return myArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
